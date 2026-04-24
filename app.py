from flask import Flask , jsonify , request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

clicks = 0

@app.route("/init")
def Init():
    global clicks
    return jsonify(output = clicks)

@app.route("/click")
def click():
    global clicks
    clicks += 1
    return jsonify(output = clicks)

@app.route("/reset")
def reset():
    global clicks
    clicks = 0
    return jsonify(output = clicks)

if __name__ == "__main__":
    app.run(debug=True)