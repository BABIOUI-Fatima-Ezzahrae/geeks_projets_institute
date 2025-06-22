import random
class Mylist:
    def __init__(self, letters):
        self.letters = letters
    
    def add_letters(self):
        reversed_list = []
        for i in self.letters:
            reversed_list.insert(0, i)
        return reversed_list
    
    def get_sorted_list(self):
        self.letters.sort()
        return self.letters
    
    def generate_random_list(self):
        x = len(self.letters)
        random_list = []
        for i in range(0, x):
            y = random.randint(0, 100)
            random_list.append(y)
        return random_list


Mylist1 = Mylist(['a', 'b', 'e', 'd', 'c'])

print(Mylist1.add_letters())
print(Mylist1.get_sorted_list())
print(Mylist1.generate_random_list())
