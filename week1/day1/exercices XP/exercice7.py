basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# Remove "Banana" from the list.
basket.remove("Banana")

# Remove "Blueberries" from the list.
basket.remove("Blueberries")

# Add "Kiwi" to the end of the list.
basket.append("Kiwi")

# Add "Apples" to the beginning of the list.
basket.insert(0,"Apples")
# Count how many times "Apples" appear in the list.
x = basket.count("Apples")
print(x)

# Empty the list.
basket.clear()

# Print the final state of the list.
print(basket)
