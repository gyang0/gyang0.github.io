#!/bin/bash

# Update stuff
cd ../'Website Updater'
node update.mjs

# Come back to project folder
# Commit changes for that file only
cd ../'My Website'
git add data/randomData.json
git commit -m "Routine update $(date '+%Y-%m-%d')" data/randomData.json
git push origin main