berat = float(input("Masukkan berat badan Anda (kg): "))

tinggi = float(input("Masukkan tinggi badan Anda (m): "))

bmi = berat / (tinggi * tinggi)

if bmi < 18.5:
    kategori = "Berat badan kurang"
elif bmi < 25:
    kategori = "Berat badan normal"
elif bmi < 30:
    kategori = "Berat badan berlebih"
else:
    kategori = "Obesitas"

print(f"\nBMI Anda: {bmi:.2f}")
print(f"Kategori: {kategori}")
berat = float(input("Masukkan berat badan Anda (kg): "))

tinggi = float(input("Masukkan tinggi badan Anda (m): "))

bmi = berat / (tinggi * tinggi)

if bmi < 18.5:
    kategori = "Berat badan kurang"
elif bmi < 25:
    kategori = "Berat badan normal"
elif bmi < 30:
    kategori = "Berat badan berlebih"
else:
    kategori = "Obesitas"

print(f"\nBMI Anda: {bmi:.2f}")
print(f"Kategori: {kategori}")