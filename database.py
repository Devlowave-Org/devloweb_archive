import sqlite3

con = sqlite3.connect("devloweb.db", check_same_thread=False)
cursor = con.cursor()

def inscrire_ja(nom, mail, ja_id, password):
    req = cursor.execute("""SELECT * FROM ja WHERE ja_id=?""", (ja_id, ))
    print(req.fetchall())