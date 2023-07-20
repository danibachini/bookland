
# Bookland 
## Book Recommendations Application

This is a web application developed using the OpenAI API that provides book recommendations based on user input. The application allows users to select a genre (optional) and type in the kind of story they are looking to read (mandatory). It then uses the power of the OpenAI API to generate personalized book recommendations.

#### Video Demo: 
https://youtu.be/xN-m4J3gsrM


### Features
- Dropdown button to select a genre (optional).
- Input field to type in the kind of story the user wants to read (mandatory).
- Responsive design (mobile-first) for seamless usage on various devices.
- Utilizes the OpenAI API to generate personalized book recommendations.


### Technologies
This application was developed using the following technologies:

- Next.js 13 (Node.js and React framework)
- Tailwind CSS (for responsive styling)


### Usage
This application is designed to help users discover new books that match their interests. By entering specific keywords related to the type of story they want to read and optionally selecting a genre, the application will present them with book recommendations.


### How to Use
To use the Book Recommendations Application locally, follow these steps:


#### - Prerequisites
Before getting started, you'll need to create an account at OpenAI and generate an API Key. Here's how:

1. Go to [OpenAI Platform](https://platform.openai.com/account/api-keys) and log in or sign up for an account.
2. Once you're logged in, you can create a new API Key, which will be used to access the OpenAI API.

#### - Setting Up API Key and Organization ID

After obtaining your API Key from OpenAI, create a new file in the root directory of the local project and name it `.env`.
In the `.env` file, add the following lines, replacing `<API key>` with the API Key you obtained, and `<Organization ID>` with your specific Organization ID:

```
OPENAI_API_KEY=<API key>
ORG=<Organization ID>
```


