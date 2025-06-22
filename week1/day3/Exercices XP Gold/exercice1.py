import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius
    
    def get_perimeter(self):
        perimeter = 2 * math.pi * self.radius
        return round(perimeter, 2)
    
    def get_area(self):
        area = math.pi * (self.radius ** 2)
        return round(area,2) #round : pour afficher deux nombres après la virgule décimale 
    
    def describe_circle(self):
        print(f"This circle has a radius of {self.radius}, a perimeter of {self.get_perimeter()}, and an area of {self.get_area()}.")
    

circle1 = Circle(5)


circle1.describe_circle()