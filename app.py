from flask import Flask, request, render_template
import json


app = Flask(__name__)
key = json.load(open("key.json"))
app.secret_key = key["key"]


@app.route("/")
def index():
    return render_template("home.html")


@app.route("/inscription", methods=("POST", "GET"))
def inscription():
    return render_template("inscription.html")



if __name__ == "__main__":
    app.run(port=5555)