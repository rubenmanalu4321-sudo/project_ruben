// Harga makanan
let nasiGoreng = 25000;
let mieGoreng = 22000;
let capCay = 32000;

// Hitung total
let total = nasiGoreng + mieGoreng + capCay;

// Diskon
let diskon = 10; // persen
let jumlahDiskon = total * diskon / 100;

// Total setelah diskon
let totalBayar = total - jumlahDiskon;

// Pembayaran
let pembayaran = 100000;

// Kembalian
let kembalian = pembayaran - totalBayar;

// Output
console.log("Harga Nasi Goreng = Rp.", nasiGoreng);
console.log("Harga Mie Goreng = Rp.", mieGoreng);
console.log("Harga CapCay = Rp.", capCay);
console.log("Harga Total = Rp.", total);
console.log("Diskon = " + diskon + "%");
console.log("Harga Setelah Diskon = Rp.", totalBayar);
console.log("Pembayaran = Rp.", pembayaran);
console.log("Kembalian = Rp.", kembalian);