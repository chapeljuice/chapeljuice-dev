#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script helps generate multiple image sizes for responsive images.
 * You can run this manually or add it to your build process.
 * 
 * Usage: node scripts/optimize-images.js
 * 
 * Note: This is a template script. You'll need to install and configure
 * image processing tools like Sharp or ImageMagick for actual image processing.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define responsive breakpoints
const RESPONSIVE_SIZES = {
  mobile: [320, 480, 640],
  tablet: [768, 1024],
  desktop: [1280, 1536, 1920]
};

// Image directories to process
const IMAGE_DIRS = [
  'public/images',
  'public/images/project-screens'
];

// Supported image formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];

function log(message) {
  console.log(`[Image Optimizer] ${message}`);
}

function getImageFiles(dir) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getImageFiles(fullPath));
    } else if (SUPPORTED_FORMATS.includes(path.extname(item).toLowerCase())) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function generateResponsiveImagePaths(imagePath) {
  const ext = path.extname(imagePath);
  const basePath = imagePath.replace(ext, '');
  const paths = [];
  
  // Generate paths for all responsive sizes
  Object.values(RESPONSIVE_SIZES).flat().forEach(width => {
    paths.push(`${basePath}-${width}w${ext}`);
  });
  
  // Add WebP versions
  Object.values(RESPONSIVE_SIZES).flat().forEach(width => {
    paths.push(`${basePath}-${width}w.webp`);
  });
  
  return paths;
}

function analyzeImages() {
  log('Analyzing images for optimization...');
  
  const allImages = [];
  
  for (const dir of IMAGE_DIRS) {
    const images = getImageFiles(dir);
    allImages.push(...images);
  }
  
  log(`Found ${allImages.length} images to process`);
  
  for (const imagePath of allImages) {
    const relativePath = path.relative('public', imagePath);
    log(`Processing: ${relativePath}`);
    
    const responsivePaths = generateResponsiveImagePaths(imagePath);
    log(`  Would generate ${responsivePaths.length} responsive versions`);
    
    // Check which responsive versions already exist
    const existingPaths = responsivePaths.filter(p => fs.existsSync(p));
    if (existingPaths.length > 0) {
      log(`  ${existingPaths.length} responsive versions already exist`);
    }
  }
  
  return allImages;
}

async function optimizeImage(inputPath, outputPath, width = null) {
  try {
    let sharpInstance = sharp(inputPath);
    
    if (width) {
      sharpInstance = sharpInstance.resize(width);
    }
    
    await sharpInstance
      .webp({ 
        quality: 80,
        effort: 6
      })
      .toFile(outputPath);
    
    return true;
  } catch (error) {
    log(`Error optimizing ${inputPath}: ${error.message}`);
    return false;
  }
}

async function convertToWebP(inputPath) {
  const ext = path.extname(inputPath);
  const basePath = inputPath.replace(ext, '');
  const outputPath = `${basePath}.webp`;
  
  log(`Converting ${path.relative('public', inputPath)} to WebP...`);
  
  const success = await optimizeImage(inputPath, outputPath);
  
  if (success) {
    // Get file sizes for comparison
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    
    log(`✅ Converted to ${path.relative('public', outputPath)}`);
    log(`   PNG: ${(inputStats.size / 1024).toFixed(1)} KB → WebP: ${(outputStats.size / 1024).toFixed(1)} KB`);
  }
  
  return success;
}

async function main() {
  log('Starting image optimization...');
  
  const images = analyzeImages();
  
  if (images.length === 0) {
    log('No images found to process');
    return;
  }
  
  // Convert specific PNG to WebP if it exists
  const resumeImage = 'public/images/resume-screen-08152025.png';
  if (fs.existsSync(resumeImage)) {
    log('\nConverting resume image to WebP...');
    await convertToWebP(resumeImage);
  }
  
  log('\nOptimization complete!');
}

main();
