class Person:
    def __init__(self, first_name, last_name, age):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def is_18(self):
        if self.age >= 18:
            return True
        else:
            return False
class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age) :
        new_person = Person(first_name, self.last_name, age)
        self.members.append(new_person)
    
    def check_majority(self, first_name):
        for person in self.members:
            if person.first_name == first_name:
                if person.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends.")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                    return
        print("This person is not in the family.")

    def family_presentation(self):
        print(f"Family name: {self.last_name}")
        print("Members:")
        for person in self.members:
            print(f"{person.first_name} - {person.age} years old")

my_family = Family("Awad")       
my_family.born("Layla", 35)
my_family.born("Ahmed", 15)
my_family.born("Jomana", 18)
my_family.born("Yasir", 45)

my_family.check_majority("Ahmed")   
my_family.check_majority("Layla")   

my_family.family_presentation()