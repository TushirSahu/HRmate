# HRmate-Using AI to revolutionize recruitment
Our AI-based applicant filtering system analyses resumes, conducts preliminary interviews, and forecasts success using machine learning and natural language processing. It streamlines the hiring process for large MNCs that get a significant volume of applicants by offering effective, unbiased screening and useful insights for hiring managers.

<img src="https://user-images.githubusercontent.com/103214265/215324286-8d3bc478-2dc0-4079-9223-bc81b5dbbe87.jpg" width="1000">

### Features
* AI-driven hiring platforms successfully screen candidates
* To manage the applications, hiring managers can create their own
accounts and access their own dashboard.
* Can design a position to attract individuals who are qualified for it.
* Recruiters can control the status of an applicant's interviews.

# Tech Architecture
![213908685-b77be43e-fe10-49c4-8438-aa963711e4c7](https://user-images.githubusercontent.com/103214265/215324213-21368986-3440-4d15-bf6d-d17d1ee5ed06.png) 
# Applicant's Recommendation Model
* In our Model, We are using CountVectorizer to create a matrix of token counts from a collection of text documents for a applicant's recommendation. The similarity between the skills,location and job description and then determined using this matrix as input to a similarity measure like cosine similarity. The higher the similarity value, the more similar the movies are considered to be. CountVectorizer is used to create the matrix of token counts by tokenizing the text and counting the number of occurrencesof each token in each document. This allows for a more accurate representation of the text data and more accurate similarity calculations.
* The cosine of the angle between any two non-zero vectors in an inner product space is used to quantify how similar the vectors are. The calculation of text or document similarity is frequently employed in information retrieval and natural language processing. Cosine similarity may be used to compare resume based on its location,skills and the description to determine how similar various applicant's resumes are to one another.



<img src="https://user-images.githubusercontent.com/68912239/213908900-26e28465-34ce-4c94-81b5-e2c7bb88e37d.png" width="400" height="300">
