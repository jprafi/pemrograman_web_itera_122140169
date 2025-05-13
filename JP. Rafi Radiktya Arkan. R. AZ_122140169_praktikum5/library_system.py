from abc import ABC, abstractmethod

class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._item_id = item_id
        self._title = title

    @abstractmethod
    def display_info(self):
        pass

    @property
    def title(self):
        return self._title

    @property
    def item_id(self):
        return self._item_id

class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self.__author = author

    def display_info(self):
        print(f"[BUKU] ID: {self.item_id} | Judul: {self.title} | Penulis: {self.__author}")

class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue_number):
        super().__init__(item_id, title)
        self.__issue_number = issue_number

    def display_info(self):
        print(f"[MAJALAH] ID: {self.item_id} | Judul: {self.title} | Edisi: {self.__issue_number}")

class Library:
    def __init__(self):
        self.__items = []

    def add_item(self, item):
        self.__items.append(item)
        print("✅ Item berhasil ditambahkan!")

    def display_all_items(self):
        if not self.__items:
            print("⚠️  Belum ada koleksi.")
        else:
            print("\n--- Koleksi Perpustakaan ---")
            for item in self.__items:
                item.display_info()

    def search_by_title(self, keyword):
        print(f"\n🔍 Mencari judul mengandung '{keyword}'")
        found = False
        for item in self.__items:
            if keyword.lower() in item.title.lower():
                item.display_info()
                found = True
        if not found:
            print("❌ Tidak ditemukan.")

    def search_by_id(self, item_id):
        print(f"\n🔍 Mencari item dengan ID '{item_id}'")
        for item in self.__items:
            if item.item_id == item_id:
                item.display_info()
                return
        print("❌ Tidak ditemukan.")

def main():
    perpustakaan = Library()

    while True:
        print("\n=== SISTEM MANAJEMEN PERPUSTAKAAN ===")
        print("1. Tambah Buku")
        print("2. Tambah Majalah")
        print("3. Tampilkan Semua Item")
        print("4. Cari Berdasarkan Judul")
        print("5. Cari Berdasarkan ID")
        print("6. Keluar")

        pilihan = input("Pilih menu (1-6): ")

        if pilihan == "1":
            item_id = input("Masukkan ID Buku: ")
            title = input("Masukkan Judul Buku: ")
            author = input("Masukkan Nama Penulis: ")
            perpustakaan.add_item(Book(item_id, title, author))

        elif pilihan == "2":
            item_id = input("Masukkan ID Majalah: ")
            title = input("Masukkan Judul Majalah: ")
            issue = input("Masukkan Edisi Majalah: ")
            perpustakaan.add_item(Magazine(item_id, title, issue))

        elif pilihan == "3":
            perpustakaan.display_all_items()

        elif pilihan == "4":
            keyword = input("Masukkan kata kunci judul: ")
            perpustakaan.search_by_title(keyword)

        elif pilihan == "5":
            item_id = input("Masukkan ID item: ")
            perpustakaan.search_by_id(item_id)

        elif pilihan == "6":
            print("👋 Terima kasih, program selesai.")
            break

        else:
            print("❗ Pilihan tidak valid. Coba lagi.")

if __name__ == "__main__":
    main()
