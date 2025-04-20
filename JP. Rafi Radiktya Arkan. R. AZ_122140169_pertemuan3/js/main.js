import { Pengeluaran, Storage } from './app.js';

const form = document.getElementById('formPengeluaran');
const list = document.getElementById('listPengeluaran');
const totalDisplay = document.getElementById('totalPengeluaran');

let dataPengeluaran = Storage.ambilSemua();
let editMode = false;
let editId = null;

const updateTotal = () => {
  const total = dataPengeluaran.reduce((sum, item) => sum + item.jumlah, 0);
  totalDisplay.textContent = `Total: Rp ${total.toLocaleString()}`;
};

const render = () => {
  list.innerHTML = '';
  dataPengeluaran.forEach(item => {
    const li = document.createElement('li');
    li.className = 'border p-3 rounded bg-gray-50 flex justify-between items-center';
    li.innerHTML = `
      <div>
        <p class="font-semibold">${item.nama}</p>
        <p>Rp ${item.jumlah} - ${item.kategori} - ${item.tanggal}</p>
      </div>
      <div class="flex gap-2">
        <button data-id="${item.id}" class="edit bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded">Edit</button>
        <button data-id="${item.id}" class="hapus bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">Hapus</button>
      </div>
    `;
    list.appendChild(li);
  });

  updateTotal();
};

form.addEventListener('submit', async e => {
  e.preventDefault();
  const nama = document.getElementById('nama').value.trim();
  const jumlah = parseInt(document.getElementById('jumlah').value);
  const tanggal = document.getElementById('tanggal').value;
  const kategori = document.getElementById('kategori').value.trim() || 'Lainnya';

  if (!nama || isNaN(jumlah) || !tanggal) {
    alert(`Mohon isi semua data dengan benar.`);
    return;
  }

  if (editMode) {
    const index = dataPengeluaran.findIndex(p => p.id === editId);
    dataPengeluaran[index] = new Pengeluaran(editId, nama, jumlah, tanggal, kategori);

    await new Promise(resolve => setTimeout(resolve, 500));

    editMode = false;
    editId = null;
  } else {
    const id = Date.now().toString();
    const pengeluaranBaru = new Pengeluaran(id, nama, jumlah, tanggal, kategori);
    dataPengeluaran.push(pengeluaranBaru);
  }

  Storage.simpanSemua(dataPengeluaran);
  render();
  form.reset();
});

list.addEventListener('click', e => {
  if (e.target.classList.contains('hapus')) {
    const id = e.target.dataset.id;
    dataPengeluaran = dataPengeluaran.filter(p => p.id !== id);
    Storage.simpanSemua(dataPengeluaran);
    render();
  }

  if (e.target.classList.contains('edit')) {
    const id = e.target.dataset.id;
    const data = dataPengeluaran.find(p => p.id === id);

    document.getElementById('nama').value = data.nama;
    document.getElementById('jumlah').value = data.jumlah;
    document.getElementById('tanggal').value = data.tanggal;
    document.getElementById('kategori').value = data.kategori;

    editMode = true;
    editId = id;
  }
});

document.addEventListener('DOMContentLoaded', render);