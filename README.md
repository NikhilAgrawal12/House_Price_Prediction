# House Pricing Predictor
## Content
- [**Project Overview**](#project-overview)

- [**Data Source**](#data-source)
  - [Questions to answer with the data](#questions-to-answer-with-the-data)
  - [Communication Protocol](#communication-protocol)

- [**Database**](#database)
  - [Description of the Data](#description-of-the-data)
  - [Data Exploration](#data-exploration)
  - [Database Selection](#database-selection)
  - [Database Integration](#database-integration)

- [**Machine Learning Model**](#machine-learning-model)
  - [Data Preprocessing](#data-preprocessing)
  - [Feature engineering and selection](#feature-engineering-and-selection)
  - [Training and testing sets](#training-and-testing-sets)
  - [Model choice](#model-choice)
  - [Changes in model choice](#changes-in-model-choice)
  - [Model Training](#model-training)
  - [Accuracy Score](#accuracy-score)
 
- [**Presentation**](#presentation)
  
- [**Dashboard**](#dashboard)
  - [Tool(s) used](#tools-used)
  - [Interactive Elements](#interactive-elements)
  - [Storyboard](#storyboard)

# Project Overview
In this project we are developing a machine learning algorithm. The target variable will be the price of an asset, and the features to train it will be the characteristics of the asset. This algorithm can be used for price prediction of any asset, but for our purpose, will use it for predicting the price of real state based on its characteristics. 

We selected to apply it to real Estate because of the availability of reliable information, and the importance of the housing market for the economy. When looking for a house, it is not easy to know if the house that you are interested in investing in is worth it. Also, there is a debate about whether or not there are bubbles in these assets, so our algorithm can help us have an informed opinion in the topic. 

The project can be divided in the following stages:
- Data Preprocessing
- Data Storage
- Data Retrieving
- Machine Learning 
- Dashboard

![Outline of the project](https://user-images.githubusercontent.com/96758511/172086634-d59b14e3-1128-4275-8fe7-9032493721b1.png)

# Data Source
In a search for information that we can use to train our machine learning algorithm we found some government sources as well Kaggle, Web scraping is also being considered, but the data reported is not very consistent and the policy of web scraping friendly or not represent a barrier to get the data. Kaggle lets its datasets being used for educational purpose, so we are covered in that aspect.  

The data set we are considering to use to train the machine learning model has 1460 data points, and is according to the requirement of 1000 data points. It has 81 columns from which 1 would be the target, the sale price, and the remaining 80 are potential features. 
Some of the features are categorical variables and other continuous. From a data set exploration, we can see that there are missing values in some rows as well as NA, this will be handled in the preprocessing stage. 

It is a challenging and sufficient dataset for our purpose. To consult the data source click [here](https://www.kaggle.com/c/house-prices-advanced-regression-techniques/data).


### Questions to answer with the data
The target variable of our Machine Learning Algorithm would be the sale price of a Real Estate asset. The features that would be input for the model would be the characteristics of the property, like the living area above ground, the number of rooms, bathrooms, quality of materials, as well as other characteristics of the surroundings. Other questions that can be answered from this model is which variables account for a higher prediction weight, and which ones are neglectable for this analysis. 

### Communication protocol

We have a team WhatsApp group in which we can share links, documents or have conversations in real time. 

Meetings in zoom are being held during the class sessions, those have been very important for our organization. 

Slack messages are also another communication mean that has been used to reach team members. 

# Database
### Description of the data 
The data set we are considering to use to train the machine learning model has 1460 data points, and is according to the requirement of 1000 data points. It has 81 columns from which 1 would be the target, the sale price, and the remaining 80 are potential features. Some of the features are categorical variables and other continuous. From a data set exploration, we can see that there are missing values in some rows as well as NA, this will be handled in the preprocessing stage.

### Data exploration 
The data was analyzed to look for missing points. The rows with missing information were taken out of the analysis. The sell price of the Real Estate property was the target variable for the analysis. Either it is of high price or a medium price.
The data types were verified and changed when needed, depending on the type of analysis made. For statistics we used numeric values and for labels, we changed it to texts. 

### Database selection 
The amount of data we are using for this project is not very large. That’s why the database we are using for this project is SQLite. This database system covers all our needs and the large number of libraries for Python makes its use very efficient. 

### Database Integration
The Database stores the data after it has been cleaned and transformed. The data is stored in two tables, for convenience in the fusion they were called table_1 and table_2. The database was created using the library SQLite3 and after the data is saved, it is retrieved using SQLAlquemy and the fusion is done with this library.



# Machine Learning Model

### Data preprocessing
The data was analyzed to look for missing points. The rows with missing information were taken out of the analysis. The sell price of the Real Estate property was the target variable for the analysis. Either it is of high price or a medium price.

The data types were verified and changed when needed, depending on the type of analysis made. For statistics we used numeric values and for labels, we changed it to texts. 

### Feature engineering and selection
The features selected were the ones that are considered the most valuable to determine the values of a Real Estate property. Like the quality of the kitchen, quality of bathrooms, size of the lot and size of the property, to mention some. 

Other important thing to consider was that the features were of categorical data, because of how the Balanced Random Forest Classifier works, it is better to have that type of feature. If it is not categorical data, and it is continuous data, it can also be used because the get_dummies method changes it, but it makes it heavier to process. If the data is continuous, it better be very important. 

### Training and testing sets
The split of the data in training and testing sets was done using sklearn library. The code used for this was:

 Import libraries for the analysis
```
from sklearn.model_selection import train_test_split
```
 Split data in training and testing data
```
X_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y)
```
We used the default values, so the splitting was 75% of the data for training the model, and 25% of the data to test the model

### Model choice
We used a Balanced Random Forest Classifier. This model helps us to make a classification of the Real Estate property depending on its value. We made a statistical analysis of the sell prices we have in our database, get the mean of the values, and the properties whose sell price is above the mean are considered “High price” and the values below the mean are classified as “Medium price”.

On the limitations side, we have that it doesn’t give us a specific value, but rather it outputs to which class a property would belong.
Some of the benefits of a Balanced Random Forest Classifier This is a very robust machine learning algorithm, can handle big amounts of data and has a high precision. 

### Changes in Model Choice
From module 2 to module 3 we added another model.  We used the Balanced Random Forest Classifier to determine which categories of features where the most important in that analysis. Then we added those categories to the Multiple Linear Regression analysis, which was the one we added. 

For the Multiple Linear Regression analysis, we used the most relevant features from the machine learning and the house features that are more common when selecting a house. Like size, number of bedrooms number of bathrooms, number of cars that can be in the garage. 


### Model Training

The Machine Learning model was trained with the default parameters of the Balanced Random Forest Classifier from imblearn library, which are 75% of the data for training and 25% of the data for testing. The Multiple Linear Regression Model in R, was also done with the default parameters. And the model  Linear Regression from sklearn library was trained with 80 % of the data and tested with 20%.

### Accuracy Score

The first analysis was the Balanced Random Forest Classifier from imblearn library, gave a balanced accuracy score of 0.836, which is a pretty high score, considering the maximum is 1.

 Multiple Linear Regression Model in R gave an r squared of 0.72, which is interpreted as the model can explain 72% of the price forecast. 

And the model Linear Regression from sklearn library had an r squared of 0.74 which is interpreted as the model can explain 74% of the price forecast. 

## Presentation
A presentation of this project was made in Google Slides explaining the following points:
- Selected Topic
- Reasons for choosing this topic
- Description of Data Source
- Questions to answer with the data
- Description of data exploration phase
- Description of analysis phase
- Technologies, languages, tools, and algorithms used throughout the project
- Analysis Results
- Dashboard
- Recommendations for future analysis
- Improvements to be made

You can access the slides by clicking [here](https://docs.google.com/presentation/d/10Qn2gBFz0FcY4KZFFshbPOlhxJnvqyFBW7iNMLnvhw0/edit?usp=sharing).

# Dashboard 

The dashboard was elaborated in Tableau, applying the filters mentioned before. Contains bubble plot, appearing each bubble by size according to the sqm of the house and different color depending the condition of the house. A sale price vs sqm, all of this changing with the plot at the same time. 

To access the dashboard link click [here](https://yempi.github.io/house-pricing/index.html).

### Tool(s) used
- HTML
- JavaScript 
  - Bootstrap
- Css
- Tableau

### Interactive elements
- Filters 

The user will be selecting number of bedrooms, bathrooms, number of cars that fit in the garage, kitchen quality, heat quality, condition of the house and a range slider of square meters surface of the house.

- Text menu

After selecting the characteristics wanted for a house are selected, click a button to check the price of the house and the characteristics selected.

- Price vs square meters graph

Display a visualization of the increase/decrease of prices according to the square meters.

### Storyboard
<img width="990" alt="171526329-84ea9f74-b3b8-4bf9-9d93-51a41757508f" src="https://user-images.githubusercontent.com/83614893/171978537-7fe11c7e-1131-476f-bf2c-804a1daa733e.png">
