let imgBox = document.querySelector(".img-box");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateCode() {
    console.log("clicked");
    qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(qrText.value);
}

document.getElementById("button").addEventListener("click", generateCode);

