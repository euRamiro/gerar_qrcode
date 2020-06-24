let divQrCode = document.getElementById('qrcode');


async function gerarQRCode(){
  divQrCode.innerHTML = '';
  let url = document.getElementById('inputUrl').value;
  let corDeFundo = document.getElementById('corDeFundo').value;
  let corQRCode = document.getElementById('corQRCode').value;
  let altura = document.getElementById('altura').value;
  let largura = document.getElementById('largura').value;

  await new QRCode (divQrCode, {
    text: url, 
    width: largura, 
    height: altura, 
    colorDark: corQRCode,
    colorLight: corDeFundo
  });
  setTimeout(() => {
    downloadQrCode();  
  }, 1000); 
}

function downloadQrCode() {
  let botaoDownload = document.getElementById('download');
  let imagemQRCode = divQrCode.querySelector('img').src;
  botaoDownload.href = imagemQRCode;
}
