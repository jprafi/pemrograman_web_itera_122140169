mahasiswa = [
    {"nama": "Budi", "nim": "2023001", "nilai_uts": 80, "nilai_uas": 85, "nilai_tugas": 90},
    {"nama": "Ani", "nim": "2023002", "nilai_uts": 70, "nilai_uas": 75, "nilai_tugas": 80},
    {"nama": "Citra", "nim": "2023003", "nilai_uts": 60, "nilai_uas": 65, "nilai_tugas": 70},
    {"nama": "Dodi", "nim": "2023004", "nilai_uts": 50, "nilai_uas": 55, "nilai_tugas": 60},
    {"nama": "Eka", "nim": "2023005", "nilai_uts": 40, "nilai_uas": 45, "nilai_tugas": 50},
]

for mhs in mahasiswa:
    nilai_akhir = (0.3 * mhs["nilai_uts"]) + (0.4 * mhs["nilai_uas"]) + (0.3 * mhs["nilai_tugas"])
    mhs["nilai_akhir"] = nilai_akhir

    if nilai_akhir >= 80:
        mhs["grade"] = "A"
    elif nilai_akhir >= 70:
        mhs["grade"] = "B"
    elif nilai_akhir >= 60:
        mhs["grade"] = "C"
    elif nilai_akhir >= 50:
        mhs["grade"] = "D"
    else:
        mhs["grade"] = "E"

print(f"{'Nama':<10} {'NIM':<10} {'UTS':<5} {'UAS':<5} {'Tugas':<7} {'Akhir':<7} {'Grade':<5}")
print("-" * 60)
for mhs in mahasiswa:
    print(f"{mhs['nama']:<10} {mhs['nim']:<10} {mhs['nilai_uts']:<5} {mhs['nilai_uas']:<5} {mhs['nilai_tugas']:<7} {mhs['nilai_akhir']:<7.2f} {mhs['grade']:<5}")

mahasiswa_tertinggi = max(mahasiswa, key=lambda m: m["nilai_akhir"])
mahasiswa_terendah = min(mahasiswa, key=lambda m: m["nilai_akhir"])

print("\nMahasiswa dengan nilai tertinggi:")
print(f"{mahasiswa_tertinggi['nama']} ({mahasiswa_tertinggi['nim']}) - {mahasiswa_tertinggi['nilai_akhir']:.2f} ({mahasiswa_tertinggi['grade']})")

print("\nMahasiswa dengan nilai terendah:")
print(f"{mahasiswa_terendah['nama']} ({mahasiswa_terendah['nim']}) - {mahasiswa_terendah['nilai_akhir']:.2f} ({mahasiswa_terendah['grade']})")