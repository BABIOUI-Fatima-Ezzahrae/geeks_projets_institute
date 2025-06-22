class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height
    def bark(self):
        print("goes woof!")
    def jump(self):
        x = self.height *2
        print(f"jumps {x} cm high!")

davids_dog = Dog("david", 40.75)
sarahs_dog = Dog("sarah", 20.27)

def detail_dogs(davids_dog, sarahs_dog):
    dogs = [davids_dog, sarahs_dog]
    for dog in dogs:
        print(f"The dog is called {dog.name.capitalize()} and is {dog.height}")
        dog.bark()
        dog.jump()
        print("******************")

def tall_dogs(davids_dog, sarahs_dog):
    dogs = [davids_dog, sarahs_dog]
    x = max(dogs, key=lambda dog : dog.height)
    print(f"the tall dogs is {x.name.capitalize()} , it is {x.height}")
    
detail_dogs(davids_dog, sarahs_dog)
tall_dogs(davids_dog, sarahs_dog)