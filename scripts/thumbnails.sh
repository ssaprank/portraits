#!/bin/bash

# Check that two arguments were provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <target_width> <images_folder>"
    exit 1
fi

# Store arguments in variables
target_width=$1
images_folder=$2

# Create the output folder
mkdir -p "${images_folder}_thumbnails"

# Loop through the images in the input folder
for image_path in "${images_folder}"/*.jpg "${images_folder}"/*.jpeg "${images_folder}"/*.png; do
    # Get the filename without the extension
    filename=$(basename -- "$image_path")
    extension="${filename##*.}"
    filename="${filename%.*}"

    # Generate the output filename
    output_filename="${filename}_thumb.${extension}"

    # Get the original image dimensions
    dimensions=$(identify -format '%w %h' "$image_path")
    width=$(echo $dimensions | awk '{print $1}')
    height=$(echo $dimensions | awk '{print $2}')

    # Calculate the new height while maintaining the aspect ratio
    scale=$(bc -l <<< "$target_width / $width")
    new_height=$(bc -l <<< "$height * $scale")

    # Create the thumbnail
    convert "${image_path}" -resize ${target_width}x${new_height} "${images_folder}_thumbnails/${output_filename}"
done
