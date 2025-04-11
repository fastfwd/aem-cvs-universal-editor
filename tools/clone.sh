#!/bin/bash

# SSH GitHub clone script

# Hardcoded GitHub repo SSH URL
REPO_SSH_URL="git@github.com:fastfwd/cvs-frontend-templates.git"
BRANCH_NAME="staging"
DEST_DIR="cvs-templates"

# Clone the private repo using SSH
git clone --branch "$BRANCH_NAME" "$REPO_SSH_URL" "$DEST_DIR"

# Notify user
if [ $? -eq 0 ]; then
  echo "Private repository cloned successfully to $DEST_DIR"
else
  echo "Failed to clone private repository."
fi