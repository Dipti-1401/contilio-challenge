# Contilio Code Challenge

This is a React-based dashboard application built for the Contilio Code Challenge. The project demonstrates proficiency in TypeScript, SCSS, React class components, and modern ES6+ JavaScript features.

## Project Structure

```
src/
│
├── components/
│   ├── BarChart/         # Bar chart component
│   ├── Dashboard/        # Dashboard component
│   ├── LoginForm/        # Login form component
│
├── pages/
│   ├── DashboardPage/    # Dashboard page containing table, chart, and slider
│   ├── LoginPage/        # Login page with a login form
│
├── styles/               # Global styles and SCSS variables
│
├── App.tsx               # Main application file with routes
├── App.scss              # Global app-level styles
└── index.tsx             # Entry point for React
```

## Features

- **TypeScript**: Strict type-checking with TypeScript for robust and maintainable code.
- **SCSS**: Modular SCSS for component-specific styles and global variables.
- **Class-Based Components**: Use of React class components to demonstrate lifecycle methods.
- **React Router**: Implements routing between the Login and Dashboard pages.
- **ES6+ Features**: Utilizes modern JavaScript features such as destructuring, optional chaining, and arrow functions.
- **Responsive Design**: The application is responsive and works well on different screen sizes.

## How to Run

1. Clone the repository:
   ```
   git clone https://github.com/Dipti-1401/contilio-challenge.git
   ```
2. Navigate to the project directory:
   ```
   cd contilio-challenge
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

- **Login Page**: Visit `/` to see the login form.
- **Dashboard Page**: Visit `/dashboard` to interact with the dashboard, which includes a table, a bar chart, and a responsive slider.

## Additional Information

- **Styling**: All component-specific styles are written in SCSS and imported into respective components.
- **Global Styles**: Common styles and variables are stored in the `styles/` directory and imported where needed.
- **Responsive Design**: The layout adapts to various screen sizes, ensuring a consistent user experience across devices.
