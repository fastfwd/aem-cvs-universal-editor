#!/bin/bash

# Run the babel command to compile JS files
npx babel cvs-templates/components --out-dir ../scripts/components --extensions ".js" --presets @babel/preset-react