# Interactive Quiz App

A mobile-responsive quiz application with score tracking.

## Features
- Multiple question types
- Score calculation
- Progress tracking
- Responsive design
- Visual feedback for answers

## Installation
1. Clone repository
2. `npm install` (installs react-bootstrap, bootstrap, etc.)
3. `npm start`

## Technologies
- React.js
- React-Bootstrap
- Context API (state management)
- Bootstrap 5
- CSS3 animations

## How to Add Questions
Edit `Questions.js` in Helpers folder:
```js
{
  question: "Your question?",
  options: ["a", "b", "c", "d"],
  answer: "correctOption"
}