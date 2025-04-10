#!/bin/bash

# Set variables
REPO_SSH_URL="git@github.com:fastfwd/cvs-frontend-templates.git"
BRANCH_NAME="staging"
DEST_DIR="cvs-templates-sparse"
FOLDER_TO_CLONE="components"  # <-- change this to the folder you want

# Clone without checking out files
git clone --no-checkout --branch "$BRANCH_NAME" "$REPO_SSH_URL" "$DEST_DIR"

# Navigate into the cloned directory
cd "$DEST_DIR" || exit

# Enable sparse checkout
git sparse-checkout init --cone

# Set the specific folder you want to check out
git sparse-checkout set "$FOLDER_TO_CLONE"

# Checkout the desired branch (already specified in clone, but for safety)
git checkout "$BRANCH_NAME"

echo "✅ Checked out '$FOLDER_TO_CLONE' from branch '$BRANCH_NAME' in repo '$REPO_SSH_URL'"
