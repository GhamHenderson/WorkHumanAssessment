from flask import Flask, render_template, request, jsonify
from flask_restful import Resource, Api
import json
import requests
import mysql.connector
import sys, os

app = Flask(__name__)
api = Api(app)


class getCountryNames(Resource):
    def get(self):
        mydb = mysql.connector.connect(
            host="localhost",
            user="root",
            password="example",
            port=2222,
            database='workhumandb1'
        )

        buffer = []
        mycursor = mydb.cursor()
        mycursor.execute('SELECT * FROM countries;')
        data = mycursor.fetchall()

        for row in data:
            id = row[0]
            country_name = row[1]
            # Create a dictionary for each row and append it to the buffer list
            row_dict = {'id': id, 'country': country_name}
            buffer.append(row_dict)

        mycursor.close()
        mydb.close()

        # Convert the buffer list to JSON
        json_data = json.dumps(buffer)
        parsed_json_data = json.loads(json_data)
        return parsed_json_data


api.add_resource(getCountryNames, '/countrylist')

if __name__ == '__main__':
    app.run(debug=True)
