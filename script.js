document.getElementById('generate-btn').addEventListener('click', function() {
    const link = document.getElementById('link').value;
    const qrCodeContainer = document.getElementById('qr-code-container');
    const qrCodeImage = document.getElementById('qr-code');
    const downloadButton = document.getElementById('download-btn');

    if (link) {
        console.log('Generating QR code for:', link);

        // Generate QR code with a specific size
        QRCode.toDataURL(link, { width: 300, errorCorrectionLevel: 'H' }, function (err, url) {
            if (err) {
                console.error('Error generating QR code:', err);
                return;
            }

            // Set the QR code image source
            qrCodeImage.src = url;

            // Set up download button click event
            downloadButton.onclick = function() {
                const filename = prompt('Enter filename for QR code (without extension):', 'qr_code');
                if (filename) {
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `${filename}.png`;
                    link.click();
                }
            };

            // Show the QR code container
            qrCodeContainer.style.display = 'flex';  // Changed to 'flex' to align center
        });
    } else {
        alert('Please enter a link.');
    }
});
