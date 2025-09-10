#!/usr/bin/env node

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertToWebP() {
  const inputPath = 'public/images/ryanchapel-web-resume-09102025.png';
  const outputPath = 'public/images/ryanchapel-web-resume-09102025.webp';
  
  try {
    console.log(`Converting ${inputPath} to WebP...`);
    
    await sharp(inputPath)
      .webp({ 
        quality: 80,
        effort: 6
      })
      .toFile(outputPath);
    
    console.log(`✅ Successfully converted to ${outputPath}`);
    
    // Get file sizes for comparison
    const inputStats = await sharp(inputPath).metadata();
    const outputStats = await sharp(outputPath).metadata();
    
    console.log(`\nFile size comparison:`);
    console.log(`PNG: ${(inputStats.size / 1024).toFixed(1)} KB`);
    console.log(`WebP: ${(outputStats.size / 1024).toFixed(1)} KB`);
    
  } catch (error) {
    console.error('❌ Error converting image:', error.message);
  }
}

convertToWebP();
