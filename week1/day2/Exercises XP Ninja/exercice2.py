def get_full_name(first_name, last_name, middle_name = ""):
    first_name = first_name.capitalize()
    middle_name = middle_name.capitalize()
    last_name = last_name.capitalize()
    if middle_name:
        return f"{first_name} {middle_name} {last_name}"
    else:
        return f"{first_name} {last_name}"


person1 = get_full_name('Fatima', '', 'BABIOUI')
person2 = get_full_name('Fatima', 'Ezzahrae', 'BABIOUI')
print(person1)
print(person2)