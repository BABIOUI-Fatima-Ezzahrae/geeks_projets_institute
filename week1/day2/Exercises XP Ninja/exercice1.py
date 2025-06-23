cars_model = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

c = 0
d = 0

Cars_Models = cars_model.split(',')
x = len(Cars_Models)
print(f"We have {x} model cars in the liste")

Cars_Models.sort(reverse= True)

print(Cars_Models)

for name in Cars_Models:
    if 'o' in name:
        c += 1
print(f"Number of names with 'o': {c}")
for lettere in Cars_Models:
    if 'i' in name:
        d += 1
print(f"Number of names with 'i': {d}")

cars1 = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

print(cars1)

unique_cars = set(cars1)

print(unique_cars)

Cars_Models.sort(reverse=False)
print(Cars_Models)