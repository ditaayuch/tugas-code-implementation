const pijarFood = (harga, voucher, jarak, pajak) => {
  if (typeof harga !== "number") {
    console.log("Harga harus bertipe number");
  } else if (typeof voucher !== "string") {
    console.log("Voucher harus bertipe string");
  } else if (typeof jarak !== "number") {
    console.log("Jarak harus bertipe number");
  } else if (typeof pajak !== "boolean") {
    console.log("Pajak harus bertipe boolean");
  } else {
    let potonganVoucher = 0;
    let biayaPengiriman = 0;
    let biayaPajak = pajak ? (harga * 5) / 100 : 0;

    if (voucher === "PIJARFOOD5" && harga >= 50000) {
      potonganVoucher = Math.min((harga * 50) / 100, 50000);
    } else if (voucher === "DITRAKTIRPIJAR" && harga >= 25000) {
      potonganVoucher = Math.min((harga * 60) / 100, 30000);
    }

    if (jarak > 2) {
      biayaPengiriman = (jarak - 2) * 3000 + 5000;
    } else {
      biayaPengiriman = 5000;
    }

    const subtotal = harga - potonganVoucher + biayaPengiriman + biayaPajak;

    console.log(`Harga: ${harga}`);
    console.log(`Potongan: ${potonganVoucher}`);
    console.log(`Biaya Antar: ${biayaPengiriman}`);
    console.log(`Pajak: ${biayaPajak}`);
    console.log(`Subtotal: ${subtotal}`);
  }
};

pijarFood(75000, "PIJARFOOD5", 5, false);
pijarFood(100000, "DITRAKTIRPIJAR", 1, true);
