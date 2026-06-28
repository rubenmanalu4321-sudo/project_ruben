// Harga barang
let headset = 225000;
let mouse = 150000;
let keyboard = 350000;

// Hitung total belanja
let totalBelanja = headset + mouse + keyboard;

// Menentukan diskon
let diskon = 0;

if (totalBelanja < 250000) {
    diskon = 0;
} else if (totalBelanja >= 250000 && totalBelanja <= 499999) {
    diskon = 5;
} else if (totalBelanja >= 500000 && totalBelanja <= 799999) {
    diskon = 10;
} else {
    diskon = 15;
}

// Hitung diskon
let nilaiDiskon = totalBelanja * diskon / 100;

// Total setelah diskon
let totalBayar = totalBelanja - nilaiDiskon;

// Pembayaran
let pembayaran = 800000;

// Kembalian
let kembalian = pembayaran - totalBayar;

// Output
console.log("===== Rincian Pembelian =====");
console.log("Headset = Rp.", headset);
console.log("Mouse = Rp.", mouse);
console.log("Keyboard = Rp.", keyboard);
console.log("");
console.log("Total Belanja = Rp.", totalBelanja);
console.log("Diskon = " + diskon + "%");
console.log("Total Setelah Diskon = Rp.", totalBayar);
console.log("Pembayaran = Rp.", pembayaran);
console.log("Kembalian = Rp.", kembalian);no