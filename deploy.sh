#!/bin/bash

echo "🚀 Deploying Indo Air Aviation Academy to GitHub..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in project directory"
    exit 1
fi

echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "📤 Adding changes to git..."
git add .

echo "💾 Committing changes..."
git commit -m "Deploy: Update build with MIME type fixes and domain configuration

🤖 Auto-deployed with deploy script"

echo "🌐 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully deployed to GitHub!"
    echo "🌍 Your site will be available at: https://indoaviationacademy.com/"
    echo "⏳ GitHub Actions is building and deploying..."
    echo ""
    echo "Check deployment status at:"
    echo "https://github.com/upendra8530/indo-air-aviation/actions"
else
    echo "❌ Push failed. Please check your GitHub authentication."
    echo ""
    echo "You may need to:"
    echo "1. Set up a personal access token"
    echo "2. Or use 'git push origin main' manually"
fi