from flask import Flask, request, jsonify 
from business import getData

app = Flask(__name__)

@app.route('/')
def HelloWorld():
    return "backend is running!"

@app.route('/api', methods=['GET'])
def api():
    data = getData()

    data = {
        "data": data
    }

    return jsonify(data)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000, debug=True)