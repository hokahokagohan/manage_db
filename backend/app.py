from flask import Flask
from flask import request, make_response, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder="./build/static", template_folder="./build")
CORS(app)

@app.route('/', methods=['GET'])
def index():
  return 'flask'

if __name__ == '__main__':
  app.debug = True
  app.run(host='0.0.0.0', port=5000)

