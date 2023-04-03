# MDM_Proj1_Tweets

This repository contains a Flask web application that performs sentiment analysis on tweet texts using the `cardiffnlp/twitter-roberta-base-sentiment` model. The app allows users to input tweet text or a tweet URL, and it will return the sentiment (Positive, Neutral, or Negative) along with a score.

## Installation

1. Clone the repository to your local machine:
```
git clone https://github.com/Jayzing00/MDM_Proj1_Tweets.git
```

2. Create a virtual environment and activate it:
```
python -m venv venv
source venv/bin/activate # For Windows: venv\Scripts\activate
```

3. Install the required dependencies:
```
pip install -r requirements.txt
```

2. Open your browser and go to `http://127.0.0.1:8000/`.

3. Enter the tweet text or a tweet URL in the input field and click the "Analyze" button. The application will display the sentiment and score.

## Features

- Sentiment analysis on tweet texts or tweet URLs.
- Displays sentiment as Positive, Neutral, or Negative.
- Provides a score representing the strength of the sentiment.
- Shows the tweet in a realistic Twitter-like card.
- Dark mode support for better user experience.

## Dependencies

- Flask
- transformers
- torch
- beautifulsoup4
- requests

## Contributing

Shoutout to my man ChatGPT <3

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
