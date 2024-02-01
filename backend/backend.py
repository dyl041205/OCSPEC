from datetime import date
from sqlite3 import Error
import sqlite3
from flask_cors import CORS
from flask import Flask, request
from bcrypt import checkpw, gensalt, hashpw


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

conn = None
try:
    conn = sqlite3.connect(r"g:\OCSPEC\coffee shop.db")
    print(sqlite3.version)
except Error as e:
    print(e)

cu = conn.cursor()

cu.execute("""SELECT Username, Password FROM UserLogins""")
data = cu.fetchall()
logins = {}
for i in data:
    logins[i[0]] = i[1]
print(logins)


@app.route("/Date", methods=["POST"])
def Login():
    date = request.json["date"] 
    print(date)
    

    if date in logins:
        savedPassword = logins[date]
        if checkpw(GivenPassword, savedPassword):
            return "Login Valid.", 200

        else:
            return "Login Invalid.", 200

    else:
        conn = None
        try:
            conn = sqlite3.connect(r"g:\ocspec\coffee shop.db")
            print(sqlite3.version)
        except Error as e:
            print(e)
        cu = conn.cursor()
        salt = gensalt()
        hashedPassword = hashpw(GivenPassword, salt)
        logins[username] = hashedPassword
        cu.execute("""INSERT INTO UserLogins(Username, Password) VALUES (?,?)""",
                   (username, hashedPassword))
        conn.commit()
        print(f"Logins: {logins}")
        return "Login created.", 200


if __name__ == "__main__":
    app.run()
