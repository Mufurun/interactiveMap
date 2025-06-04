#!/bin/bash

# Files
target_file="src/data.js"
snippet_file="template.txt"
placeholder="//Replace This Line (and Delete)"

# Create a temporary file
tmp_file=$(mktemp)

# Use awk to insert contents from snippet_file
awk -v placeholder="$placeholder" '
{
    if ($0 == placeholder) {
        while ((getline line < "'"$snippet_file"'") > 0) {
            print line
        }
        close("'"$snippet_file"'")
    } else {
        print
    }
}' "$target_file" > "$tmp_file" && mv "$tmp_file" "$target_file"