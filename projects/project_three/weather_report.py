import requests

user_input = input("Enter city: ")

api_key = '0d6a66104b5cf3e1b2f73f096352e53e'

weather_data = requests.get(f"https://api.openweathermap.org/data/2.5/weather?q={user_input}&units=imperial&APPID={api_key}")

weather = weather_data.json()['weather'][0]['main']
temp =  round(weather_data.json()['main']['temp'])

print(f"The weather in {user_input} is: {weather}")
print(f"The temperature in {user_input} is: {temp}ºF")