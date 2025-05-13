import math_operations
from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin

sisi = 5
print(f"Luas persegi: {math_operations.luas_persegi(sisi)}")
print(f"Keliling persegi: {math_operations.keliling_persegi(sisi)}")

panjang = 8
lebar = 4
print(f"Luas persegi panjang: {math_operations.luas_persegi_panjang(panjang, lebar)}")
print(f"Keliling persegi panjang: {math_operations.keliling_persegi_panjang(panjang, lebar)}")

radius = 7
print(f"Luas lingkaran: {math_operations.luas_lingkaran(radius):.2f}")
print(f"Keliling lingkaran: {math_operations.keliling_lingkaran(radius):.2f}")

celsius = 25
print(f"{celsius}°C dalam Fahrenheit: {celsius_ke_fahrenheit(celsius):.2f}°F")
print(f"{celsius}°C dalam Kelvin: {celsius_ke_kelvin(celsius):.2f}K")
