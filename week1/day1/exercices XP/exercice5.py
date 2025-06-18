my_fav_numbers = {11, 7, 9, 25}


# Add two new numbers to the set.
my_fav_numbers.update([15, 1])

print (my_fav_numbers)

# Remove the last number you added to the set.
dernier = list(my_fav_numbers)
dernier.pop(-1)
print(dernier)


######
friend_fav_numbers = {10, 7, 30, 9,17}

# Concatenate my_fav_numbers and friend_fav_numbers to create a new set called our_fav_numbers.
our_fav_numbers = friend_fav_numbers.union(my_fav_numbers)
print(our_fav_numbers)