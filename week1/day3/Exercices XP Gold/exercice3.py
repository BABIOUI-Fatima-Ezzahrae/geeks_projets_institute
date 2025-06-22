class MenuManager:
    def __init__(self):
        self.menu = [
                {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
                {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
                {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
                {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
                {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True},    
                {"name": "Chicken Curry", "price": 20, "spice": "C", "gluten": False},
                {"name": "Pasta Alfredo", "price": 17, "spice": "A", "gluten": True},
                {"name": "Veggie Pizza", "price": 22, "spice": "B", "gluten": True},
                {"name": "Grilled Salmon", "price": 30, "spice": "A", "gluten": False},
                {"name": "Tacos", "price": 12, "spice": "B", "gluten": False}
                ]
    def add_item(self, name, price, spice, gluten):
        for dish in self.menu:
            if dish['name'] == name:
                print(f"{name} is already in the menu !")
                return
        new_dish = {
        'name': name,
        'price': price,
        'spice': spice,
        'gluten': gluten}
        self.menu.append(new_dish)
        print(f"{name} has been added to the menu.")
    def update_item(self, name, price, spice, gluten):
        for dish in self.menu:
            if dish['name'] == name:
                dish[ 'name'] = name
                dish['price'] = price
                dish['spice'] = spice
                dish['gluten'] = gluten
                print(f"{name} has been updated.")
                return
        print(f"{name} is not in the menu !!")
    def remove_item(self, name):
        for dish in self.menu:
            if dish['name'] == name:
                self.menu.remove(dish)
                print(f"{name} has been removed.")
                return
        print(f"{name} is not in the menu !!")


menu = MenuManager()

menu.remove_item("Sushi")

menu.add_item("Pizza", 20, "B", True)

menu.update_item("Sushi", 25, "A", False)

menu.remove_item("Pizza")


