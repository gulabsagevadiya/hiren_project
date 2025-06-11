# #!/bin/bash
chmod +x deploy.sh
# # Prompt the user for a commit message
# read -p "Enter commit message: " commitMessage

# # Build the project
# yarn run build

# # Stage all the files
# git add .

# # Commit the changes with the provided message
# git commit -m "$commitMessage"

# # Push the commit to the origin remote repository and HEAD branch
# git push origin HEAD


# Deployment Configuration
SERVER_USER="root"
SERVER_IP="68.183.91.119"            # Replace with your server IP
TARGET_DIR="/var/www/inspectra"        # Remote deployment directory
LOCAL_DIR="."                          # Local project directory

# Prompt the user for a commit message
read -p "Enter commit message: " commitMessage

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out

# Install dependencies and build project
echo "🔧 Building Next.js project..."
yarn install --frozen-lockfile
yarn build

if [ $? -ne 0 ]; then
  echo "❌ Build failed! Exiting..."
  exit 1
fi

# Stage all the files
git add .

# Commit the changes with the provided message
git commit -m "$commitMessage"

# Push the commit to the origin remote repository and HEAD branch
git push origin HEAD

# Create deployment package
echo "📦 Packaging deployment files..."
tar -czf deployment.tar.gz out

# Upload to server
echo "🚀 Uploading to server..."
scp deployment.tar.gz $SERVER_USER@$SERVER_IP:$TARGET_DIR

if [ $? -ne 0 ]; then
  echo "❌ Upload failed! Exiting..."
  rm deployment.tar.gz
  exit 1
fi

# Remote deployment commands
echo "🎛 Executing remote deployment steps..."
ssh $SERVER_USER@$SERVER_IP << SSHCOMMANDS
  cd $TARGET_DIR
  echo "📦 Extracting deployment files..."
  rm -rf out
  tar -xzf deployment.tar.gz
  rm deployment.tar.gz
SSHCOMMANDS

# Cleanup
echo "🧹 Cleaning up..."
rm deployment.tar.gz

echo "✅ Deployment completed successfully!"