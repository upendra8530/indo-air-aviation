#!/bin/bash

echo "🚀 Indo Air Aviation Academy - GitHub Deployment Setup"
echo "======================================================"
echo ""

echo "📋 Before running this script, make sure you have:"
echo "   1. Created the repository 'indo-air-aviation' on GitHub"
echo "   2. Made it public (required for GitHub Pages)"
echo "   3. Are logged into GitHub in your terminal"
echo ""

echo "🔧 Setting up deployment..."
echo ""

# Check if remote exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ Git remote 'origin' already configured"
else
    echo "❌ Git remote 'origin' not found"
    echo "Please create the repository on GitHub first, then run:"
    echo "git remote add origin https://github.com/upendra8530/indo-air-aviation.git"
    exit 1
fi

echo ""
echo "📤 Pushing code to GitHub..."
git push -u origin main

echo ""
echo "🎉 Deployment setup complete!"
echo ""
echo "🌐 Your website will be available at:"
echo "   https://upendra8530.github.io/indo-air-aviation/"
echo ""
echo "📝 Next steps:"
echo "   1. Go to your GitHub repository"
echo "   2. Go to Settings > Pages"
echo "   3. Set Source to 'Deploy from a branch'"
echo "   4. Select 'gh-pages' branch and '/ (root)' folder"
echo "   5. Click Save"
echo ""
echo "🔄 The website will automatically deploy when you push to main branch" 