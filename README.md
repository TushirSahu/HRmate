# HRmate
AI-based candidate filtering uses machine learning to analyze resumes and identify the best fit for a job. This process can include analyzing text data, natural language processing and conducting initial interviews, providing efficient and unbiased results.

<img src="https://user-images.githubusercontent.com/103214265/215324286-8d3bc478-2dc0-4079-9223-bc81b5dbbe87.jpg" width="1000">

### Features
* 
*
*
*

# Tech Architecture
![213908685-b77be43e-fe10-49c4-8438-aa963711e4c7](https://user-images.githubusercontent.com/103214265/215324213-21368986-3440-4d15-bf6d-d17d1ee5ed06.png) 
# Applicant's Recommendation Model
* In our Model, We are using CountVectorizer to create a matrix of token counts from a collection of text documents for a applicant's recommendation. The similarity between the skills,location and job description and then determined using this matrix as input to a similarity measure like cosine similarity. The higher the similarity value, the more similar the movies are considered to be. CountVectorizer is used to create the matrix of token counts by tokenizing the text and counting the number of occurrencesof each token in each document. This allows for a more accurate representation of the text data and more accurate similarity calculations.
* The cosine of the angle between any two non-zero vectors in an inner product space is used to quantify how similar the vectors are. The calculation of text or document similarity is frequently employed in information retrieval and natural language processing. Cosine similarity may be used to compare resume based on its location,skills and the description to determine how similar various applicant's resumes are to one another.



<img src="https://user-images.githubusercontent.com/68912239/213908900-26e28465-34ce-4c94-81b5-e2c7bb88e37d.png" width="400" height="300">
