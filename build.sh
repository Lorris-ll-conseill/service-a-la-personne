#!/bin/bash

# Script for building the production version of the Harmonie Services website

echo "Building production version of Harmonie Services..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Build the Vue.js application
echo "Building Vue.js application..."
npm run build

echo "Production build complete. The files are in the dist/ directory."
echo "To preview the production build locally, run: npm run preview"
