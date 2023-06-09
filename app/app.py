from flask import Flask, request, render_template,jsonify
import requests, json


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/logs', methods=["GET"])
def logs():
    if(request.method == "GET"):
        data = [
            {
            "id": 1,
            "name" : "BMW",
            "hp" : 710
            },
            {
            "id": 2,
            "name" : "Hyundai",
            "hp" : 720 
            }
        ]
    return data