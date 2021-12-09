alert("Assalamualaikum");
alert("Selamat Datang di Toko Kami");
var pertanyaan = confirm("Boleh Kita Berkenalan ?");
if (pertanyaan === true) {
  alert("Makasih");
  var nama = prompt("Silahkan Masukan Nama :");
  if (nama !== null) {
    alert("Hallo ka" + " " + nama);
  } else {
    alert("Sorry");
  }
  alert("Semoga Harimu Menyenangkan");
} else {
  alert("Maaf menganggu waktunya");
}
