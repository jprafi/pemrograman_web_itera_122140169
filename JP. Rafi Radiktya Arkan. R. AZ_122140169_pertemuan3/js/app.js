export class Pengeluaran {
    constructor(id, nama, jumlah, tanggal, kategori) {
      this.id = id;
      this.nama = nama;
      this.jumlah = jumlah;
      this.tanggal = tanggal;
      this.kategori = kategori;
    }
  }
  
  export const Storage = {
    ambilSemua() {
      const data = localStorage.getItem('pengeluaran');
      return data ? JSON.parse(data) : [];
    },
  
    simpanSemua(pengeluaranList) {
      localStorage.setItem('pengeluaran', JSON.stringify(pengeluaranList));
    }
  };  