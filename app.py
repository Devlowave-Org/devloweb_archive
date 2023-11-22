from flask import Flask, request, render_template
import json
import database

app = Flask(__name__)
app.debug = True
key = json.load(open("key.json"))
app.secret_key = key["key"]


@app.route("/")
def index():
    return render_template("home.html")


@app.route("/inscription", methods=("POST", "GET"))
def inscription():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        ja_id = request.form["ja_id"]
        password = request.form["password"]
        database.inscrire_ja(name, email, ja_id, password)
    return render_template("inscription.html")



if __name__ == "__main__":
    app.run(port=5555)