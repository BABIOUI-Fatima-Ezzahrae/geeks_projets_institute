from game import Game
def get_user_menu_choice():

    print("\nPlease choose an option:")
    print("(P) Play a new game")
    print("(S) Show scores")
    print("(Q) Quit")

    choise = input("Enter your choice : ").lower()
    if choise in ['p', 's', 'q']:
        return choise
    else:
        print("Invalid choice. Please try again.")
        return get_user_menu_choice()
    
def print_results(results):
    print("\nGame Results Summary:")
    print(f"Wins: {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws: {results['draw']}")

def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}

    while True:
        choice = get_user_menu_choice()

        if choice == 'p':
            game = Game()
            result = game.play()
            results[result] += 1
        elif choice == 's':
            print_results(results)
        elif choice == 'q':
            print_results(results)
            print("Thank you for playing! 🎮🤞")
            break

if __name__ == "__main__":
    main()