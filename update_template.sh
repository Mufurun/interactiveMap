#!/bin/bash

echo "###   Program Log   ###"
#git restore ./src/data.js

counter=1

while IFS= read -r line; do
     # Process the line here
    if [[ "$line" =~ .+:\ \'[^\\\']+\'[^\\\']+\',.* ]]; then 
        printf "There is at least an error in the line $counter of template.txt file. \n\nThe error is because of the single quote (') in a string, which supposed to have backslash (\) before the single qupte('). \n For example: Munn's Sawmill ==> Munn\'s Sawmill \n\nPlease fix the row #$counter in the template file and try again\n\n\nThis message will disappear in 30 seconds \n (You can close the window anyway even if the program counts 30 seconds)"
        time sleep 30
        exit


    fi
    ((counter++))
done < template.txt

echo "Valid template.txt"

# Files
target_file="src/data.js"
snippet_file="template.txt"
placeholder="//Replace This Line (and Delete)"
start_marker="*************************************/ "
end_marker="/************************************ "

# Create a temporary file
tmp_file=$(mktemp)

# Use awk to insert contents from snippet_file
# AND Check if the string have potential problem, especially single quotation without backslash behine

awk -v start_marker="$start_marker" -v end_marker="$end_marker" '
BEGIN { bool_replace = 0 }
{
    if (bool_replace == 0) {
        if ($0 == start_marker  ) {
            bool_replace = 1
            print
            while ((getline line < "'"$snippet_file"'") > 0) {
                print line
            }
            close("'"$snippet_file"'")    
        } else {
            print
        }
    } else if (bool_replace == 1) {
        if ($0 == end_marker) {
            print
            bool_replace = 2
        }
    } else {
        print
    }

}' "$target_file" > "$tmp_file" && mv "$tmp_file" "$target_file"

echo "Changed data.js"

read -p "A Question: would you like map with all markers (y) or just some to be published (n)__" bool


if [[ "${bool,,}" == "y" ]]; then 
    cp ./var/all_markers.txt index.html
elif [ "${bool,,}" == "n" ]; then
    cp ./var/publish.txt index.html
fi
