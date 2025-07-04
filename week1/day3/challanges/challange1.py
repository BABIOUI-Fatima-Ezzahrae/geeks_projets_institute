class Farm:
    def __init__(self, frame_name):
        self.name = frame_name
        self.animals = {}
    def add_animal(self, animal_type, count=1):
        
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count

    def get_info(self):
        output  = f"{self.name} Fram \n"
        for animal, count in self.animals.items():
            output += f"{animal} : {count}\n"
        output += f"E-I-E-I-0!"
        return output 




macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.get_info())