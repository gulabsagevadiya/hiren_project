# #!/bin/bash
chmod +x deploy.sh


# Deployment Configuration
SERVER_USER="root"
SERVER_IP="68.183.91.119"            # Replace with your server IP
TARGET_DIR="/var/www/inspectra"        # Remote deployment directory
LOCAL_DIR="."                          # Local project directory

# Prompt the user for a commit message
read -p "Enter commit message: " commitMessage

# Stage all the files
git add .

# Commit the changes with the provided message
git commit -m "$commitMessage"

# Push the commit to the origin remote repository and HEAD branch
git push origin HEAD

# Create deployment package
echo "📦 Packaging deployment files..."
tar -czf deployment.tar.gz \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='out' \
    --exclude='.git' \
    --exclude='deployment.tar.gz' \
    .

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
  tar -xzf deployment.tar.gz
  rm deployment.tar.gz
  
  echo "🔧 Installing dependencies..."
  yarn install --frozen-lockfile
  
  echo "🏗️ Building project..."
  yarn build
  
  echo "♻ Restarting application..."
  pm2 delete inspectra || true
  pm2 start yarn --name inspectra -- start
  
  echo "📝 PM2 Logs:"
  pm2 logs inspectra --lines 5
SSHCOMMANDS

# Cleanup
echo "🧹 Cleaning up..."
rm deployment.tar.gz

echo "✅ Deployment completed successfully!"