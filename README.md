# Email-Guesser-Frontend

Babbel Email Guesser is a service that offers email guessing capabilities for employees of a company. It utilizes provided sample data to detect the email format used by the company. By considering the employee's full_name and domain, the service generates a guessed email address.

## Assumption

Based on the given sample data, assuming that there is one field for the `fullName`, which must contain the first name and last name and second field will contain the company `domain`. So this will make `GET` request to API endpoint with two query params `fullName` and `domain` which will return the email if fullName contain exact two words (first and last name) and domain name matches the sample data provided.

## Feature

- Guess email from the given input

## Technologies Used

- Frontend:

  - React.js
  - MUI (Frontend Design)
  - Jest (Testing)
  - RTL (Testing)

- Version Control:
  - Git (Hosted on GitHub)

## System dependencies

Make sure that you must have following things in your system.

- [node](https://github.com/creationix/nvm) and [npm](https://docs.npmjs.com/cli/v8) for web development

## Local Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/mhr202/babbel-email-guesser-frontend.git
   ```
2. Backend Setup:

- cd to project root directory
- Run `npm install` **To install dependencies**
- Run `cp .env.example .env` **Set the env's value in .env file copied from .env.example**
- Run `npm start` **To run app Local**
- App will start at http://localhost:3000 (Default)
- The port can also be specified in `.env` file

## Test cases

- To Run test cases
  - `npm run test`

## Run Lint

- To Run linter
  - `npm run lint`

## Folder Structure

The folder structure for the application follows a simple and organized approach. Here's an overview of the structure:

```

babbel-email-guesser-frontend/
    ├── src/
    │   └── __mocks__/
    │       └── axios.js
    │   └── api/
    │       └── services/
    │           └── EmailGuesser.js
    │       └── index.js
    │   └── assets/
    │       └── background.png
    │   └── components/
    │       └── EmailGuesser/
    │           └── EmailGuesser.styles.js
    │           └── EmailGuesserForm.js
    │   └── config/
    │       └── axios.js
    │       └── configs.js
    │   └── pages/
    │       └── __tests__/
    │           └── EmailGuesser.test.jsx
    │       └── EmailGuesser.jsx
    │   └── App.jsx
    │   └── App.styles.js
    │   └── index.css
    │   └── index.js
    │   └── logo.svg
    │   └── reportWebVitals.js
    │   └── setupTests.js
    ├── .env.example
    ├── package.json
    ├── jest.config.js
    ├── jest.setup.js
    ├── package-lock.json
    ├── .eslintrc.json
    ├── README.md


```
