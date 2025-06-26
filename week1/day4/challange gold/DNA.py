import random

class Gene:
    def __init__(self, value):
        self.value = value  

    def mutate(self):
        self.value = 1 if self.value == 0 else 0

class Chromosome:
    def __init__(self):
        self.genes = [Gene(random.choice([0, 1])) for _ in range(10)]

    def mutate(self, mutation_probability):
        for gene in self.genes:
            if random.random() < mutation_probability:  
                gene.mutate()

class DNA:
    def __init__(self):
        self.chromosomes = [Chromosome() for _ in range(10)]  

    def mutate(self, mutation_probability):
        for chromosome in self.chromosomes:
            chromosome.mutate(mutation_probability)

class Organism:
    def __init__(self, environment_probability):
        self.dna = DNA() 
        self.environment_probability = environment_probability  
        self.generations = 0  

    def mutate(self):
        self.dna.mutate(self.environment_probability)
        self.generations += 1

    def check_if_dna_is_all_ones(self):
        for chromosome in self.dna.chromosomes:
            for gene in chromosome.genes:
                if gene.value != 1:  # هنا بدلنا != 1 بدل == 0
                    return False  
        return True  

def simulate():
    organisms = [Organism(environment_probability=0.5) for _ in range(10)]
    generations_to_1 = []  
    max_generations = 1000  # حد أقصى للسلامة

    for i, organism in enumerate(organisms):
        while not organism.check_if_dna_is_all_ones() and organism.generations < max_generations:
            organism.mutate()
        
        if organism.check_if_dna_is_all_ones():
            print(f"Organism {i+1} succeeded in {organism.generations} generations.")
            generations_to_1.append(organism.generations)
        else:
            print(f"Organism {i+1} failed to reach all 1s in {max_generations} generations.")
            generations_to_1.append("Failed")

    print("\nFinal Results:")
    print(f"Generations to get all 1s: {generations_to_1}")

simulate()
