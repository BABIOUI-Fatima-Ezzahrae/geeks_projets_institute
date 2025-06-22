class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("Soso", 2)
cat2 = Cat("Mimi", 5)
cat3 = Cat("Lion", 11)


def find_oldest_cat(cat1, cat2, cat3):
    cats = [cat1, cat2, cat3]
    oldest = max(cats, key=lambda cat : cat.age)
    return oldest
oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldset cat is {oldest_cat.name}, and it's {oldest_cat.age} years old")