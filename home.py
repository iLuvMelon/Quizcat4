from email.iterators import body_line_iterator


'title' :'QuizCat'
<body>
</body_line_iterator>


from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

if __name__ == '__main__':
    app.run(debug=True)
    
