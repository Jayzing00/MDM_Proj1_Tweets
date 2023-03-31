import os
from flask import Flask, render_template, request, jsonify
from transformers import pipeline



app = Flask(__name__)

sentiment_pipeline = pipeline(
    "sentiment-analysis",
    model="cardiffnlp/twitter-roberta-base-sentiment",
    tokenizer="cardiffnlp/twitter-roberta-base-sentiment",
)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/analyze", methods=["POST"])
def analyze_sentiment():
    text = request.form["text"]
    result = sentiment_pipeline(text)
    sentiment = result[0]["label"]
    score = result[0]["score"]
    return jsonify({"sentiment": sentiment, "score": score})

if __name__ == "__main__":
    app.run(debug=True)
