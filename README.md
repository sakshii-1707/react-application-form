#  React Application Form
A simple and responsive React project that includes:
1. Login Form with Validation
2. User Registration Form with Age Calculation

Built using React functional components and Hooks.

---

##  Features

###  Login Form
- Email validation using Regular Expressions
- Strong password validation
- Error messages displayed below inputs
- Controlled components using useState
<img width="817" height="575" alt="image" src="https://github.com/user-attachments/assets/fc5cb6c9-c22d-4231-97c1-a4440e437673" />

<img width="682" height="631" alt="image" src="https://github.com/user-attachments/assets/e616bfbd-be99-4677-9003-37857fd7a833" />

<img width="715" height="784" alt="image" src="https://github.com/user-attachments/assets/94c10ca5-b115-4621-8ba1-674d6f2519b3" />


###  User Registration Form
- First Name & Last Name inputs
- Date of Birth selection
- Automatic Age Calculation
- Future date restriction for DOB
- Gender selection (Radio buttons)
- Address input (Textarea)
- State selection (Dropdown)
- Skills selection (Checkboxes)
- Reset (Cancel) button
- Displays submitted data in alert

  <img width="625" height="903" alt="image" src="https://github.com/user-attachments/assets/63b94c95-7b5a-4495-9219-1aaa2de35b06" />


<img width="652" height="929" alt="image" src="https://github.com/user-attachments/assets/b1737df7-aadb-41fe-853b-dceeeb864779" />

<img width="634" height="937" alt="image" src="https://github.com/user-attachments/assets/d857f422-241f-44d9-867a-148dc0d2194e" />


## 🎂 Age Calculation Logic

Age is calculated using JavaScript Date object:

- Current year - Birth year
- Adjusted if birthday hasn’t occurred yet this year

Future dates are restricted using:
```js
max={today}
```
## Email Validation Rules (Login Form)

- Must follow proper email format

- Allows letters and numbers

- Strict Gmail validation (if applied)

- Prevents invalid formats like:

- sakshi.@gmail.com

- .sakshi@gmail.com
  
## Password Rules (Login Form)

Password must:

- Start with a capital letter

- Contain at least one number

- Contain at least one special character

- Minimum 5 characters

Example:

A123@
S1#abc

## Technologies Used

- React

-JavaScript (ES6)

-useState Hook

-Regular Expressions (Regex)

-CSS Styling

## Project Structure
react-application-form
│
├── public
├── src
│   ├── App.js
│   ├── App.css
│
├── package.json
├── README.md

## How to Run the Project

-Clone the repository:

git clone https://github.com/sakshii-1707/react-application-form.git

-Navigate to the project folder:

cd react-application-form

-Install dependencies:

npm install

-Start the development server:

npm start

Open in browser:

http://localhost:3000
# Author

Sakshi Kumari
Computer Science Engineering Student

# Future Improvements

Show age dynamically below DOB

Add password strength meter

Add form submission card instead of alert

Add routing between Login and Registration

Deploy on Netlify / Vercel
