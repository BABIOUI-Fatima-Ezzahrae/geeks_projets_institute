brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2
print(brand)

print(f"Our family ❤❤❤  {', '.join(brand['type_of_clothes'])}")

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

brand.pop("creation_date")

print(f"international_competitors : {brand['international_competitors']}")

print(f"the major colors in the US : {brand['major_color']['US']}.")

print(f"the number of keys in the brand : {len(brand)}")

for key in brand.keys() :
    print(key)