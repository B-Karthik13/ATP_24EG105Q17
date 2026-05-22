# Users List App using React

A simple Users List Application built using React.  
This project displays multiple users dynamically using reusable React components and array rendering methods.

---

## Features

- Display Multiple Users
- Dynamic Rendering using `map()`
- Reusable React Components
- Responsive User List Layout
- Beginner-friendly React Project

---

## Technologies Used

- React JS
- JavaScript (ES6)
- CSS
- Vite

---

## Concepts Used

### Array Mapping

The `map()` function is used to render multiple user components dynamically.

Example:

```javascript
users.map((user) => (
  <User 
    key={user.id}
    name={user.name}
    role={user.role}
  />
))
```

### Props

Props are used to pass user data from parent component to child component.

---

## Project Structure

```bash
src/
│
├── components/
│   ├── User.jsx
│   └── UserList.jsx
│
├── App.jsx
├── App.css
├── main.jsx
```

---

## Installation

### Clone the Repository

```bash
git clone <repository-link>
```

### Navigate to Project Folder

```bash
cd project-folder
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

## Output

The application displays:

- List of Users
- User Names
- User Roles
- Dynamic User Components

Users are rendered dynamically from an array of objects.

---

## Learning Outcome

Through this project, you can learn:

- React Functional Components
- Props in React
- Array Mapping using `map()`
- Dynamic Rendering
- Component Reusability
- JSX Rendering

---

## Future Enhancements

- Add Search Functionality
- Add User Profile Images
- Fetch Users from API
- Add Pagination
- Add User Details Page

---

## Author

Karthik
