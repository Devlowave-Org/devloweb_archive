import sqlite3
import datetime
import utils

con = sqlite3.connect("devloweb.db", check_same_thread=False)
cursor = con.cursor()

cursor.execute("""CREATE TABLE IF NOT EXISTS ja(name VARCHAR(255) NOT NULL, email  VARCHAR(255) NOT NULL, ja_id VARCHAR(10) NOT NULL, password TEXT NOT NULL, date TEXT NOT NULL)""")
con.commit()


def inscrire_ja(nom, mail, ja_id, password):
    req = cursor.execute("""SELECT * FROM ja WHERE ja_id=?""", (ja_id, ))
    if not req.fetchall():
        encrypted = utils.hash_password(password)
        cursor.execute("""INSERT INTO ja(name, email, ja_id, password, date) VALUES (?, ?, ?, ?, ?) """, (nom, mail, ja_id, encrypted, datetime.datetime.now()))
        con.commit()

    return True