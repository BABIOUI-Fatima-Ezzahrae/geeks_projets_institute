class Phone:
    def __init__(self, phone_number):
        self.number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        call_string = f"{self.number} called {other_phone.number}"
        print(call_string)
        self.call_history.append(call_string)

    def show_call_history(self):
        if not self.call_history:
            print("No calls made yet.")
        else:
            print("Call History:")
            for call in self.call_history:
                print(call)

    def send_message(self, content, other_phone):
        message = {
            'to': other_phone.number,
            'from': self.number,
            'content': content
        }
        self.messages.append(message)
        other_phone.messages.append(message)
        print(f"Message sent from {self.number} to {other_phone.number}")

    def show_outgoing_messages(self):
        print("Outgoing Messages:")
        for message in self.messages:
            if message['from'] == self.number:
                print(f"To: {message['to']}, Message: {message['content']}")

    def show_incoming_messages(self):
        print("Incoming Messages:")
        for message in self.messages:
            if message['to'] == self.number:
                print(f"From: {message['from']}, Message: {message['content']}")

    def show_messages_from(self, number):
        print(f"Messages from {number}:")
        for message in self.messages:
            if message['from'] == number:
                print(f"To: {message['to']} - {message['content']}")


phone1 = Phone("0612345678")
phone2 = Phone("0698765432")

phone1.call(phone2)
phone1.send_message("Hello!", phone2)
phone2.send_message("Hi!", phone1)

phone1.show_call_history()
phone1.show_outgoing_messages()
phone2.show_incoming_messages()
phone1.show_messages_from("0698765432")
