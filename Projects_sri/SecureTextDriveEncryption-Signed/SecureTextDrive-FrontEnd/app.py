from flask import Flask , session
# FrontENd

from views import views

from flask import *

app = Flask(__name__)
app.register_blueprint(views, url_prefix="/")
app.secret_key = 'abcdlala'



if __name__ == '__main__':
    app.run(debug=True, port=5000)

