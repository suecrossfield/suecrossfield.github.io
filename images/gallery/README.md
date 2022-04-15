Mum’s Gallery

1. Adjust images
1. Index images using photo info
1. Add photo info to catalogue (remember you can fill/populate down by dragging the green circle)
1. Export photos to iCloud Drive shared folder
1. Run `./process.sh` in `~/Library/Mobile Documents/com~apple~CloudDocs/Photos for Mark`
    ```shell
    #!/bin/sh
    
    rm -r webp thumbnails
    mkdir webp thumbnails
    rm gallery.yml
    for file in *.jpeg; do cwebp -q 80 "$file" -o "webp/${file%.jpeg}.webp"; done
    for file in webp/*.webp; do just_file="${file#webp/}";file_without_suffix="${just_file%.webp}"; printf "\055 filename: ${just_file}\n  name: ${file_without_suffix}, \n" >> gallery.yml; if [[ $file_without_suffix =~ ^SCC[[:digit:]]{3}$ ]]; then echo "  id: ${file_without_suffix}" >> gallery.yml; fi; printf "\n" >> gallery.yml; done
    for file in webp/*.webp; do convert -resize 200x200 "${file}" "thumbnails/${file#webp/}"; done
    mv webp/*.webp ~/Documents/workspace/suecrossfield.co.uk/images/gallery/
    mv thumbnails/*.webp ~/Documents/workspace/suecrossfield.co.uk/images/gallery/thumbnails/
    cat gallery.yml
    ```