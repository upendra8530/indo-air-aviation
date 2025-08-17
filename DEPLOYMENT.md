# 🚀 Deployment Guide - Indo Air Aviation Academy

This guide will help you deploy your aviation academy website to GitHub Pages so others can view it online.

## 📋 Prerequisites

- GitHub account (you have: `upendra8530`)
- Git installed on your local machine ✅
- Node.js and npm installed ✅

## 🎯 Step-by-Step Deployment

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `indo-air-aviation`
   - **Description**: `Indo Air Aviation Academy - Premier Aviation Training Institute Website`
   - **Visibility**: **Public** (required for GitHub Pages)
   - **Don't** initialize with README, .gitignore, or license
5. Click **"Create repository"**

### 2. Push Your Code

After creating the repository, run these commands in your terminal:

```bash
# Make sure you're in the project directory
cd /home/upendra/Indo-air

# Add the remote origin (if not already added)
git remote add origin https://github.com/upendra8530/indo-air-aviation.git

# Push your code
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository: `https://github.com/upendra8530/indo-air-aviation`
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Choose **"gh-pages"** branch and **"/ (root)"** folder
6. Click **"Save"**

### 4. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your React app when you push to main branch
- Deploy it to the `gh-pages` branch
- Make it available at: `https://upendra8530.github.io/indo-air-aviation/`

## 🌐 Your Live Website

Once deployed, your website will be available at:
**https://upendra8530.github.io/indo-air-aviation/**

## 🔄 Updating the Website

To update your live website:

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```
3. GitHub Actions will automatically rebuild and deploy
4. Wait 2-5 minutes for changes to appear online

## 🛠️ Troubleshooting

### If GitHub Pages shows 404:
- Check that the repository is **public**
- Ensure the `gh-pages` branch exists
- Wait a few minutes after pushing changes

### If build fails:
- Check the Actions tab in your GitHub repository
- Verify all dependencies are in `package.json`
- Ensure the build script works locally: `npm run build`

### If styles don't load:
- Check that the base URL in `vite.config.ts` is correct
- Verify the `gh-pages` branch contains the built files

## 📱 Sharing Your Website

Once deployed, you can share your website with:
- **Direct link**: `https://upendra8530.github.io/indo-air-aviation/`
- **QR code** (generate from the URL)
- **Social media** posts
- **Portfolio** or resume

## 🎉 Success!

Your aviation academy website is now live and accessible to anyone with an internet connection!

---

**Need help?** Check the GitHub Actions tab in your repository for build logs and error messages. 