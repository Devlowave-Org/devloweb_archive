from flask import Flask, request, render_template
import json
import database

app = Flask(__name__)
app.debug = True
key = "prout"
app.secret_key = key


@app.route("/")
def index():
    return render_template("/template/index.html")


@app.route("/inscription", methods=("POST", "GET"))
def inscription():
    message = "Veuillez vous inscrire"
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        ja_id = request.form["ja_id"]
        password = request.form["password"]
        if database.inscrire_ja(name, email, ja_id, password):
            message = "Inscris !"
    return render_template("inscription.html", message=message)



if __name__ == "__main__":
    app.run(port=5555)