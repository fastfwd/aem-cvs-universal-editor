#!/bin/bash

COMPONENTS_DIR="cvs-templates-sparse/components"

# Make sure the components directory exists
if [ ! -d "$COMPONENTS_DIR" ]; then
  echo "❌ Directory $COMPONENTS_DIR does not exist."
  exit 1
fi

# Function to process folders (rename + rename index.js)
process_folder() {
  local parent_dir="$1"

  # Loop through subdirectories
  for folder_path in "$parent_dir"/*/; do
    [ -d "$folder_path" ] || continue
    folder_path="${folder_path%/}"               # Strip trailing slash
    folder_name=$(basename "$folder_path")

    # Skip 'partials' if processing root
    if [ "$parent_dir" == "$COMPONENTS_DIR" ] && [ "$folder_name" == "partials" ]; then
      echo "➡️ Skipping top-level 'partials'"
      continue
    fi

    # Lowercase the folder name
    lower_name=$(echo "$folder_name" | tr '[:upper:]' '[:lower:]')
    new_folder_path="$parent_dir/$lower_name"

    # Rename folder if needed
    if [ "$folder_name" != "$lower_name" ]; then
      mv "$folder_path" "$new_folder_path"
      echo "📁 Renamed folder: $folder_name → $lower_name"
    fi

    # Rename index.js → foldername.js
    if [ -f "$new_folder_path/index.js" ]; then
      mv "$new_folder_path/index.js" "$new_folder_path/$lower_name.js"
      echo "📄 Renamed index.js → $lower_name.js in $new_folder_path"
    else
      echo "⚠️ No index.js in $new_folder_path"
    fi
  done
}

# Step 1: Process top-level components folders (except 'partials')
process_folder "$COMPONENTS_DIR"

# Step 2: Process folders inside 'partials'
PARTIALS_DIR="$COMPONENTS_DIR/partials"
if [ -d "$PARTIALS_DIR" ]; then
  process_folder "$PARTIALS_DIR"
fi

echo "✅ Done!"