from flask import Flask, request,jsonify
import pickle
import pandas as pd

app = Flask(__name__)


@app.route('/recommend_resume', methods=['POST'])
def recommend_resume():
    df=pd.read_csv('resume1.csv')
    description = request.json['description']
    skills = request.json['skills']
    location = request.json['location']
    similarity_desc = pickle.load(open('description.pkl', 'rb'))
    similarity_skills = pickle.load(open('skills.pkl', 'rb'))
    similarity_loc = pickle.load(open('location.pkl', 'rb'))

    # Create a new dataframe with only the rows that match the input location
    df_location = df[df['location'] == location]

    # Create a matching index list for matching skills
    matching_indexes = []
    for i, skills_set in enumerate(df_location['skills']):
        if any(skill in skills for skill in skills_set.split(' ')):
            matching_indexes.append(i)

    # Create a matching index list for matching description
    matching_desc_indexes = []
    for i, desc in enumerate(df_location['resume']):
        if any(word in description for word in desc.split(' ')):
            matching_desc_indexes.append(i)

    # Intersection of both matching index list
    final_matching_indexes = list(set(matching_indexes) & set(matching_desc_indexes))
    # print(len(final_matching_indexes))

    # overall_similarity = 0
    highest_similarity=0
    df_location['overall_similarity'] = None
    # print(final_matching_indexes)
    for index in final_matching_indexes:
        try:
            overall_similarity = (similarity_desc[index].mean() + similarity_loc[index].mean() + similarity_skills[index].mean())/3
            df_location.loc[index, 'overall_similarity'] = overall_similarity
            if overall_similarity > highest_similarity:
                highest_similarity = overall_similarity
        except:
            # print(index)
            pass


    new_df = df_location.iloc[final_matching_indexes].sort_values(by='overall_similarity', ascending=False).head(5)
    # we need to construct full object containing all the details of the resume
    print(new_df)
    finalData = []
    # iterate the new_df and construct a dict to send as json all the values
    for index, row in new_df.iterrows():
        finalData.append({
            "id":row['user_id'],
            "name":row['name'],
            "email":row['URL'],
            "location":row['location'],
            "degree":row['degree'],
            "skills":row['skills']
        })
    return jsonify(finalData)
        


if __name__ == '__main__':
    app.run()