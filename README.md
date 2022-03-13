Catalogue is shared in iCloud Numbers folder.

* Create thumbnails: `for file in *.webp; do mogrify -resize 200x200 -quality 80 "${file}"; done`
* Convert jpeg to webp: `for file in *.jpeg; do cwebp -q 80 "$file" -o "${file%.jpeg}.webp"; done`