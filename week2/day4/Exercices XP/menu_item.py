import psycopg2
from dotenv import load_dotenv
import os

load_dotenv()

def get_connection():
    return psycopg2.connect(
        dbname=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        host=os.getenv("DB_HOST"),
        port=os.getenv("DB_PORT")
    )

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        try:
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute(
                "INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s)",
                (self.name, self.price)
            )
            conn.commit()
            print("✅ Item added successfully.")
        except Exception as e:
            print("❌ Error adding item:", e)
        finally:
            if 'cursor' in locals(): cursor.close()
            if 'conn' in locals(): conn.close()

    def delete(self):
        try:
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute("DELETE FROM menu_items WHERE item_name = %s", (self.name,))
            conn.commit()
            print("✅ Item deleted successfully.")
        except Exception as e:
            print("❌ Error deleting item:", e)
        finally:
            if 'cursor' in locals(): cursor.close()
            if 'conn' in locals(): conn.close()

    def update(self, new_name, new_price):
        try:
            conn = get_connection()
            cursor = conn.cursor()
            cursor.execute("""
                UPDATE menu_items SET item_name = %s, item_price = %s
                WHERE item_name = %s
            """, (new_name, new_price, self.name))
            conn.commit()
            print("✅ Item updated successfully.")
            # Update instance properties
            self.name = new_name
            self.price = new_price
        except Exception as e:
            print("❌ Error updating item:", e)
        finally:
            if 'cursor' in locals(): cursor.close()
            if 'conn' in locals(): conn.close()
