class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    def bark(self):
        return f"is barking"
    def run_speed(self):
        x = self.weight / self.age * 10
        return x
    def fight(self, other_dog):
        self.other_dog = other_dog
        fight_dog1 = self.run_speed() * self.weight
        fight_dog2 = other_dog.run_speed() * other_dog.weight

        if fight_dog1 > fight_dog2 :
            return f"{self.name} won the fight"
        elif fight_dog1 < fight_dog2 :
            return f"{other_dog.name} won the fight"
        else :
            return "It's a tie!"

dog1 = Dog("Lili", 3, 10.5)
dog2 = Dog("liona", 5, 17.22)

dog1.run_speed()
dog2.run_speed()

print(dog1.fight(dog2))