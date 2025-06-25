class BankAccount:
    def __init__(self, balance, username, password):
        self.__balance = balance
        self.__username = username
        self.__password = password
        self.__authenticated = False

    def authenticate(self, username, password):
        """Authenticate the user."""
        if self.__username == username and self.__password == password:
            self.__authenticated = True
        else:
            raise Exception("Invalid username or password")

    def deposit(self, deposit_amount):
        if not self.__authenticated:
            raise Exception("You must authenticate first.")
        if deposit_amount <= 0:
            raise Exception("Deposit amount must be greater than zero.")
        self.__balance += deposit_amount

    def withdraw(self, withdraw_amount):
        if not self.__authenticated:
            raise Exception("You must authenticate first.")
        if withdraw_amount <= 0:
            raise Exception("Amount to withdraw must be positive.")
        if withdraw_amount > self.__balance:
            raise Exception("Insufficient balance.")
        self.__balance -= withdraw_amount

    def get_balance(self):
        if not self.__authenticated:
            raise Exception("You must authenticate first.")
        return self.__balance


class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance, username, password, minimum_balance=0):
        super().__init__(balance, username, password)  
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if self.get_balance() - amount < self.minimum_balance:
            raise Exception(f"Cannot withdraw. Minimum balance of {self.minimum_balance} must be maintained.")
        super().withdraw(amount)


class ATM:
    def __init__(self, account_list, try_limit):
        if not all(isinstance(account, (BankAccount, MinimumBalanceAccount)) for account in account_list):
            raise Exception("All accounts must be BankAccount or MinimumBalanceAccount instances.")
        if try_limit <= 0:
            raise Exception("Try limit must be a positive number.")
        
        self.account_list = account_list
        self.try_limit = try_limit
        self.current_tries = 0

    def show_main_menu(self):
        while True:
            print("1. Log In")
            print("2. Exit")
            choice = input("Choose an option: ")
            if choice == "1":
                self.log_in()
            elif choice == "2":
                print("Exiting ATM.")
                exit()

    def log_in(self):
        username = input("Enter username: ")
        password = input("Enter password: ")

        for account in self.account_list:
            try:
                account.authenticate(username, password)
                print("Logged in successfully!")
                self.show_account_menu(account)
                return
            except Exception as e:
                print(e)

        self.current_tries += 1
        if self.current_tries >= self.try_limit:
            print("Max login attempts reached. Shutting down.")
            exit()

    def show_account_menu(self, account):
        while True:
            print("\n1. Deposit")
            print("2. Withdraw")
            print("3. Exit")
            choice = input("Choose an option: ")

            if choice == "1":
                deposit_amount = float(input("Enter deposit amount: "))
                try:
                    account.deposit(deposit_amount)
                    print(f"New balance: {account.get_balance()}")
                except Exception as e:
                    print(e)
            elif choice == "2":
                withdraw_amount = float(input("Enter withdrawal amount: "))
                try:
                    account.withdraw(withdraw_amount)
                    print(f"New balance: {account.get_balance()}")
                except Exception as e:
                    print(e)
            elif choice == "3":
                print("Exiting account menu.")
                break
            else:
                print("Invalid choice. Please try again.")


account1 = BankAccount(1000, "user1", "password123")
min_account = MinimumBalanceAccount(1500, "user2", "password456", minimum_balance=500)

atm = ATM([account1, min_account], 3)
atm.show_main_menu()
