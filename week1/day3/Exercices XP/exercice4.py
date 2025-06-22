class Zoo:
    def __init__(self, zoo_name ):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal in self.animals:
           print(f"{new_animal} already exists in the zoo !!")
        else:
           self.animals.append(new_animal)

    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
            if animal_sold in self.animals:
                self.animals.remove(animal_sold)
            else:
                print(f"The {animal_sold} not exist !!")

    def sort_animals(self):
        self.animals.sort()
        grouped_animals = {}
        for animal in self.animals:
            first_lettre = animal[0].upper()
            if first_lettre not in grouped_animals:
                grouped_animals[first_lettre] = []
            grouped_animals[first_lettre].append(animal)
        return grouped_animals
    
    def get_groups(self):
        print(self.sort_animals())


ramat_gan_safari = Zoo("Ramat Gan Safari")

print("*********Ajouter*********")
print("******************")

ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Baboon")

ramat_gan_safari.get_animals()
print("******************")
print("*********Aupprimer*********")
print("******************")


ramat_gan_safari.sell_animal("Bear")

ramat_gan_safari.get_animals()
print("******************")
print("*********afficher par ordre alphabitique*********")
print("******************")

ramat_gan_safari.sort_animals()


ramat_gan_safari.get_groups()
