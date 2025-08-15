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

function generateOptimizationCommands() {
  log('Generating optimization commands...');
  
  const commands = [];
  
  // Example commands using Sharp (you'll need to install: npm install sharp)
  commands.push(`
// Example Sharp.js commands for image optimization:
import sharp from 'sharp';

async function optimizeImage(inputPath, outputPath, width) {
  await sharp(inputPath)
    .resize(width)
    .webp({ quality: 80 })
    .toFile(outputPath);
}

// Example usage:
// optimizeImage('public/images/hero.jpg', 'public/images/hero-320w.webp', 320);
// optimizeImage('public/images/hero.jpg', 'public/images/hero-480w.webp', 480);
// optimizeImage('public/images/hero.jpg', 'public/images/hero-640w.webp', 640);
  `);
  
  return commands;
}

function main() {
  log('Starting image optimization analysis...');
  
  const images = analyzeImages();
  
  if (images.length === 0) {
    log('No images found to process');
    return;
  }
  
  log('\nNext steps:');
  log('1. Install Sharp: npm install sharp');
  log('2. Create actual optimization script using the examples below');
  log('3. Run optimization script to generate responsive images');
  log('4. Update ResponsiveImage components to use the new image paths');
  
  console.log('\n' + generateOptimizationCommands().join('\n'));
  
  log('Analysis complete!');
}

main();
