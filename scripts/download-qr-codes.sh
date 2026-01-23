#!/bin/bash

# Check if a path argument is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <directory_path> [output_file.csv] [qr_output_dir]"
    exit 1
fi

TARGET_DIR="$1"
OUTPUT_FILE="${2:-output.csv}"
QR_OUTPUT_DIR="${3:-qr_codes}"
BASE_URL="https://stephend017.github.io/apartment-gallery/gallery/"

# Check if qrencode is installed
if ! command -v qrencode &> /dev/null; then
    echo "Error: qrencode is not installed"
    echo "Install it with: sudo apt-get install qrencode (Ubuntu/Debian)"
    echo "or: brew install qrencode (macOS)"
    exit 1
fi

# Check if the provided path exists and is a directory
if [ ! -d "$TARGET_DIR" ]; then
    echo "Error: '$TARGET_DIR' is not a valid directory"
    exit 1
fi

# Create QR codes output directory
mkdir -p "$QR_OUTPUT_DIR"

# Create CSV with header
echo "URL;QR Code Title (for reference)" > "$OUTPUT_FILE"

# Initialize counter
count=0

mapfile -t directories < <(find "$TARGET_DIR" -mindepth 1 -maxdepth 1 -type d -printf "%f\n")

# List directory names, generate QR codes, and append to CSV
for dirname in "${directories[@]}"; do
    url="${BASE_URL}${dirname}"
    qr_file="${QR_OUTPUT_DIR}/${dirname}.png"
    
    # Generate QR code
    qrencode -o "$qr_file" -s 10 "$url"
    
    # Add to CSV
    echo "${url};${dirname}" >> "$OUTPUT_FILE"

    # Increment counter
    count=$((count + 1))
    
    echo "Generated QR code: $qr_file"
done

echo ""
echo "CSV file created: $OUTPUT_FILE"
echo "QR codes saved in: $QR_OUTPUT_DIR/"

echo ""
echo "================================================"
echo "CSV file created: $OUTPUT_FILE"
echo "QR codes saved in: $QR_OUTPUT_DIR/"
echo "Total QR codes generated: $count"
echo "================================================"