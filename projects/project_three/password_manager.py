stored_passwords = []
stored_password_names = []

for i in range(3):
    choice = input("Store or Retrieve? (S/R): ").upper()

    if choice == "S":
        password = input("Enter your password: ")
        password_name = input("Enter a name for your password: ")

        stored_passwords.append(password)
        stored_password_names.append(password_name)

        print("Password entered.")

    elif choice == "R":

        print("Stored password names:")
        for name in stored_password_names:
            print(f" - {name}")

        password_name = input("Enter the name of the password you want to retrieve: ")

        if password_name in stored_password_names:
            index = stored_password_names.index(password_name)
            print(f"The password for {password_name} is: {stored_passwords[index]}")
        else:
            print("Password not found.")

    else:
        print("Invalid choice.")