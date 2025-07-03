import os
import random
import requests
import psycopg2
from dotenv import load_dotenv

load_dotenv()

def get_connection():
    return psycopg2.connect(
        dbname=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        host=os.getenv("DB_HOST"),
        port=os.getenv("DB_PORT")
    )

def insert_country(country):
    conn = get_connection()
    cur = conn.cursor()

    name = country.get('name', {}).get('common', 'N/A')
    capital = country.get('capital', ['N/A'])[0] if country.get('capital') else 'N/A'
    flag = country.get('flags', {}).get('png', 'N/A')
    subregion = country.get('subregion', 'N/A')
    population = country.get('population', 0)

    cur.execute("""
        INSERT INTO Countries (name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s)
    """, (name, capital, flag, subregion, population))

    conn.commit()
    cur.close()
    conn.close()

def main():
    response = requests.get("https://restcountries.com/v3.1/all?fields=name,capital,flags,subregion,population")
    if response.status_code != 200:
        print("Error fetching data from API")
        return

    countries = response.json()

    random_countries = random.sample(countries, 10)

    for country in random_countries:
        insert_country(country)
        print("✅ Successfully inserted a random country into the database.")

# هنا خارج دالة main()!!
if __name__ == "__main__":
    main()

