import random
class Game:
    def __init__(self):
        pass

    def get_user_item(self):
        user_item = ['rock', 'paper', 'scissors']

        while True :
            user_input = input("Choose one [rock, paper, scissors] : ").lower()

            if user_input in user_item:
                return user_input
            else:
                print("Invalid choice. Please try again.")

    def get_computer_item(self):
        computer_item = random.choice(['rock', 'paper', 'scissors'])
        return computer_item

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return 'draw'
        elif (
            (user_item == 'rock' and computer_item == 'scissors') or
            (user_item == 'paper' and computer_item == 'rock') or
            (user_item == 'scissors' and computer_item == 'paper')
        ):
            return 'win'
        else:
            return 'loss'

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f"\nYou chose {user_item}. The computer chose {computer_item}.")

        if result == 'win':
             print("You win! 🙌🤞")
        elif result == 'draw':
             print("It's a draw! 😎👀")
        else:
            print("You lose! 🤦‍♀️")

        return result

