import math
import turtle
from time import sleep

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("You must provide either radius or diameter.")

    @property
    def diameter(self):
        return self.radius * 2
    
    @property
    def area(self):
        return math.pi * (self.radius**2)
    def __str__(self):
        return f"Circle with radius = {self.radius}"
    
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented
    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented
    
c1 = Circle(radius=30)
c2 = Circle(diameter=100)

print(c1)
print(c1 + c2)
print(c1 == c2)
print(c1 < c2)

circles = [c2, c1]
circles.sort()
for c in circles:
    print(c)


for c in sorted(circles):
    turtle.circle(c.radius)
    turtle.penup()
    turtle.forward(2 * c.radius + 10)  # move to the side
    turtle.pendown()

turtle.done()