
# Aplikasi Manajemen Matakuliah

## Deskripsi
Aplikasi ini adalah API untuk manajemen **matakuliah** menggunakan **Pyramid Framework** dan **PostgreSQL**. Aplikasi ini mendukung operasi CRUD (Create, Read, Update, Delete) untuk **matakuliah**.

## Teknologi yang Digunakan
- **Pyramid Framework**: Framework web Python untuk membangun aplikasi web.
- **SQLAlchemy**: ORM (Object Relational Mapping) untuk PostgreSQL.
- **PostgreSQL**: Database untuk menyimpan data matakuliah.
- **Alembic**: Untuk melakukan migrasi skema database.
- **Jinja2**: Template engine untuk rendering HTML.
- **Pip**: Untuk mengelola dependensi proyek.

## Fitur Aplikasi
- **CRUD Matakuliah**: Menambah, melihat, memperbarui, dan menghapus data matakuliah.
- **API Endpoint**: Menggunakan API RESTful dengan endpoint untuk operasi CRUD pada data matakuliah.
- **JSON Response**: Semua data dikembalikan dalam format JSON.

## Instruksi Instalasi

### 1. Persiapkan Lingkungan Pengembangan
Pastikan kamu memiliki **Python 3.7+** dan **PostgreSQL** yang sudah terinstal di sistemmu.

### 2. Membuat Virtual Environment
Buat dan aktifkan virtual environment di dalam folder proyek:
```bash
python -m venv venv
# Untuk Windows
venv\Scriptsctivate
# Untuk macOS/Linux
source venv/bin/activate
```

### 3. Install Dependensi
Install semua dependensi yang dibutuhkan dengan perintah:
```bash
pip install -r requirements.txt
```

**Catatan**: Pastikan file `requirements.txt` ada dan berisi dependensi yang diperlukan, seperti `pyramid`, `sqlalchemy`, `psycopg2`, dan `pyramid_jinja2`.

### 4. Konfigurasi Database PostgreSQL
1. **Buat Database PostgreSQL**:
   - Login ke PostgreSQL:
     ```bash
     psql -U postgres
     ```
   - Buat database dan user untuk aplikasi:
     ```sql
     CREATE DATABASE pyramid_mahasiswa;
     CREATE USER pyramid_user WITH ENCRYPTED PASSWORD 'pyramid_pass';
     GRANT ALL PRIVILEGES ON DATABASE pyramid_mahasiswa TO pyramid_user;
     \q
     ```

2. **Update File Konfigurasi `development.ini`**:
   Edit file `development.ini` untuk mengonfigurasi koneksi ke PostgreSQL:
   ```ini
   sqlalchemy.url = postgresql://pyramid_user:pyramid_pass@localhost:5432/pyramid_mahasiswa
   ```

### 5. Menjalankan Migrasi Database
Setelah mengonfigurasi PostgreSQL, jalankan migrasi database dengan **Alembic** untuk membuat tabel yang diperlukan:
```bash
alembic -c development.ini upgrade head
```

### 6. Menambahkan Data Awal
Untuk menambahkan data awal ke database, jalankan script `initialize_db.py`:
```bash
python -m pyramid_mahasiswa.scripts.initialize_db development.ini
```

### 7. Menjalankan Aplikasi
Setelah semua konfigurasi selesai, jalankan aplikasi Pyramid dengan perintah:
```bash
pserve development.ini --reload
```

Aplikasi akan berjalan di `http://localhost:6543/`.

## API Endpoints

### 1. **Menambahkan Matakuliah Baru**
**POST** `/api/matakuliah`

- **Body (JSON)**:
  ```json
  {
    "kode_mk": "MK001",
    "nama_mk": "Pemrograman Web",
    "sks": 3,
    "semester": 1
  }
  ```

- **Response**:
  ```json
  {
    "success": true,
    "matakuliah": {
      "id": 1,
      "kode_mk": "MK001",
      "nama_mk": "Pemrograman Web",
      "sks": 3,
      "semester": 1
    }
  }
  ```

### 2. **Menampilkan Daftar Matakuliah**
**GET** `/api/matakuliah`

- **Response**:
  ```json
  {
    "matakuliahs": [
      {
        "id": 1,
        "kode_mk": "MK001",
        "nama_mk": "Pemrograman Web",
        "sks": 3,
        "semester": 1
      }
    ]
  }
  ```

### 3. **Menampilkan Detail Matakuliah**
**GET** `/api/matakuliah/{id}`

- **Response**:
  ```json
  {
    "matakuliah": {
      "id": 1,
      "kode_mk": "MK001",
      "nama_mk": "Pemrograman Web",
      "sks": 3,
      "semester": 1
    }
  }
  ```

### 4. **Mengupdate Matakuliah**
**PUT** `/api/matakuliah/{id}`

- **Body (JSON)**:
  ```json
  {
    "kode_mk": "MK002",
    "nama_mk": "Algoritma dan Pemrograman",
    "sks": 4,
    "semester": 2
  }
  ```

- **Response**:
  ```json
  {
    "success": true,
    "matakuliah": {
      "id": 1,
      "kode_mk": "MK002",
      "nama_mk": "Algoritma dan Pemrograman",
      "sks": 4,
      "semester": 2
    }
  }
  ```

### 5. **Menghapus Matakuliah**
**DELETE** `/api/matakuliah/{id}`

- **Response**:
  ```json
  {
    "success": true,
    "message": "Matakuliah dengan id 1 telah dihapus"
  }
  ```

## Troubleshooting
- **Masalah Koneksi ke Database**: Pastikan PostgreSQL sudah berjalan dan dapat diakses. Periksa juga koneksi di `development.ini`.
- **Masalah Migrasi**: Jika migrasi gagal, pastikan model sudah benar dan terdaftar dengan baik.