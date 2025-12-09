# House-Price-Prediction-Project
🏠 House Price Prediction (Machine Learning + Python)

This project is a simple and practical attempt to predict house prices using machine learning. The idea is to take a dataset of houses, understand what features affect the price, train a model, and then use it to estimate the price of a new house based on user inputs.

To make the project easier to use, I also added a Gradio interface, so anyone can play with the model without touching the code.

-------------------------------------------------------------------------------------------------------------------------------------

⭐ What this project does

1.Reads a dataset (train.csv) and identifies which columns are numerical and which are categorical

2.Builds an ML model (or simulated model) to estimate house prices

3.Creates sliders and dropdowns automatically from the dataset

4.Lets the user enter house details through a clean Gradio UI

5.Returns a predicted price instantly

It’s a simple project, but great for understanding how machine learning models work in real-world scenarios.

--------------------------------------------------------------------------------------------------------------------------------

📁 Project Files
app.py          → main Python script with Gradio app
train.csv       → dataset used for training
README.md       → project documentation
requirements.txt (optional)
model.joblib    (optional if you train a real ML model)

-----------------------------------------------------------------------------------------------------------------------------

🔍 How the project works
1. Loading the data

The script reads train.csv and checks which columns are:

numeric (e.g., area, number of rooms)

categorical (e.g., neighborhood, quality ratings)

2. Building the interface

For numeric values, the app creates sliders.
For categorical values, it creates dropdown menus.
This makes the UI flexible — if your dataset changes, the interface adjusts automatically.

3. Price prediction

Right now, the prediction is simulated (random but based on input values), but you can easily plug in a real model later.
The goal is to show how inputs → model → predicted price works.

4. Gradio app

Once the app launches, you get a link where you can interact with the model.
Just enter details like number of rooms, area, quality, etc., and the app gives you a predicted price.

-------------------------------------------------------------------------------------------------------------------------------

▶️ How to run the project

Install the needed libraries:

                   pip install gradio pandas numpy scikit-learn

Then run:

                    python app.py

Gradio will give you a local URL.
Open it in your browser and try out predictions.

------------------------------------------------------------------------------------------------------------------------------------
📊 Dataset

The dataset includes typical housing features like:

Lot area
Living area
Overall quality
Year built
Neighborhood
And many more
The target value is SalePrice, which we try to predict.

-----------------------------------------------------------------------------------------------------------------------------------------------

💡 Why I built this

I wanted to understand:

1.how machine learning models learn from data
2.how preprocessing works
3.how to turn a Python script into a usable application
4.Building the Gradio UI was especially fun because it makes the project feel real and interactive.

------------------------------------------------------------------------------------------------------------------------------------------------

🙌 Thanks for checking out the project!

If you have ideas or improvements, feel free to suggest them. This project is mainly for learning, and I'm always open to making it better.

-------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------
