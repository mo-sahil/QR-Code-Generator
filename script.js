function generateQRCode() {
    var text = document.getElementById('text').value;
    var qrcodeContainer = document.getElementById('qrcode');

    // Clear previous QR code
    qrcodeContainer.innerHTML = '';

    if (text.trim() !== '') {
        new QRCode(qrcodeContainer, text);
    } else {
        alert('Please enter a valid text or URL');
    }
}
