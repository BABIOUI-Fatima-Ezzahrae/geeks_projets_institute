from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n------ Menu Manager ------")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show Menu")
        print("Q - Exit")
        choice = input("Your choice: ").strip().upper()

        if choice == "V":
            name = input("Enter item name to view: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"🍽️ {item.name} - {item.price}€")
            else:
                print(" Item not found.")
        elif choice == "A":
            add_item_to_menu()
        elif choice == "D":
            remove_item_from_menu()
        elif choice == "U":
            update_item_from_menu()
        elif choice == "S":
            show_restaurant_menu()
        elif choice == "Q":
            print("👋 Exiting. Final Menu:")
            show_restaurant_menu()
            break
        else:
            print(" Invalid choice. Try again.")

def add_item_to_menu():
    name = input("Enter new item name: ")
    try:
        price = int(input("Enter item price: "))
        item = MenuItem(name, price)
        item.save()
    except ValueError:
        print(" Price must be a valid number.")

def remove_item_from_menu():
    name = input("Enter the name of the item to remove: ")
    item = MenuItem(name, 0)
    item.delete()

def update_item_from_menu():
    old_name = input("Enter current item name to update: ")
    item = MenuManager.get_by_name(old_name)
    if not item:
        print(" Item not found.")
        return
    new_name = input("Enter new name: ")
    try:
        new_price = int(input("Enter new price: "))
        item.update(new_name, new_price)
    except ValueError:
        print(" Price must be a valid number.")

def show_restaurant_menu():
    print("\n------ Restaurant Menu ------")
    items = MenuManager.all_items()
    if not items:
        print("No items available.")
    else:
        for item in items:
            print(f"{item.name} - {item.price}€")

if __name__ == "__main__":
    show_user_menu()