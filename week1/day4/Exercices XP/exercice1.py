class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{self.name} says: {sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{self.name} says: {sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{self.name} says: {sounds}'

bengal_obj = Bengal("Simba", 2)
chartreux_obj = Chartreux("Luna", 3)
siamese_obj = Siamese("Milo", 1)

all_cats = [bengal_obj, chartreux_obj, siamese_obj]

sara_pets = Pets(all_cats)

sara_pets.walk()
