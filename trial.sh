
#!/bin/bash

# Files
target_file="interactiveMap/src/data.js"
snippet_file="ex.txt"
placeholder="//Replace This Line"

# Create a temporary file
tmp_file=$(mktemp)

# Replace the placeholder line with the contents of the snippet file
awk -v placeholder="$placeholder" -v snippet="$(<"$snippet_file")" '
{
    if ($0 ~ placeholder) {
        print snippet
    } else {
        print
    }
}' "$target_file" > "$tmp_file" && mv "$tmp_file" "$target_file"
