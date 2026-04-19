let antrian = [];
let current = 0;
let nomor = 1;

function ambilAntrian() {
  antrian.push(nomor);
  document.getElementById("nomor").innerText = nomor;

  let posisi = antrian.length - 1;
  let estimasi = posisi * 5;

  document.getElementById("estimasi").innerText = estimasi;

  nomor++;
}

function nextAntrian() {
  if (antrian.length > 0) {
    current = antrian.shift();

    document.getElementById("current").innerText = current;
    document.getElementById("adminCurrent").innerText = current;
  } else {
    alert("Tidak ada antrian!");
  }
}