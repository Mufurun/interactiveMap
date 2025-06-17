#!/bin/bash

counter=0

while IFS= read -r line; do
     # Process the line here
    if [[ "$line" =~ .+:\ \'[^\\\']+\'[^\\\']+\',.* ]]; then 
        printf "There is at least an error in the line $counter of template.txt file. \n\nThe error is because of the single quote (') in a string, which supposed to have backslash (\) before the single qupte('). \nPlease fix the row #$counter in the template file and try again/\n\n\nThis message will disappear in 1 minute"
        time sleep 1m
        exit


    fi
    ((counter++))
done < template.txt



# Files
target_file="src/data.js"
snippet_file="template.txt"
placeholder="//Replace This Line (and Delete)"

# Create a temporary file
tmp_file=$(mktemp)

# Use awk to insert contents from snippet_file
# AND Check if the string have potential problem, especially single quotation without backslash behine

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