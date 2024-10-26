# AUPP Chatbot Front-End

This project is the front-end implementation of the AUPP Library Chatbot, which includes a login/signup page and a chat interface. The project is built using React and is styled using custom CSS.

## Table of Contents

- [Usage](#usage)
- [Components](#components)
  - [LoginSignup Component](#loginsignup-component)
  - [ChatPage Component](#chatpage-component)
- [Styling](#styling)
  - [Responsive Design](#responsive-design)
- [Customizing](#customizing)
- [Contributing](#contributing)
- [License](#license)


## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Sovatharothh/library_chatbot.git
    ```

2. **Install dependencies:**

    Make sure you have Node.js and npm installed. Then, install the dependencies:

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

The app will be available at `http://localhost:3000`.

## Usage

### LoginSignup Component

The `LoginSignup` component is the entry point for users to create an account or log in using their Microsoft account. This page is designed to be responsive and adjusts its layout based on the screen size:

- **Desktop**: The screen is split, with the left half displaying an image (with optional text) and the right half containing the form.
- **Mobile/Tablet**: The image and form stack vertically, each taking up half of the screen height.

### ChatPage Component

The `ChatPage` component is the main interface where users can interact with the chatbot. It features:

- A sidebar with tabs for navigation (`Main` and `History`).
- A dynamic navbar that displays the user's progress through different attempts.
- A chat area where users can type messages and interact with the chatbot.

## Styling

The project uses custom CSS for styling, with responsiveness built in using media queries. Key points include:

- **Flexbox Layouts**: Flexbox is used extensively to create flexible and responsive layouts.
- **Responsive Design**: Media queries ensure the application works well on various screen sizes, stacking content vertically on smaller screens.

### Responsive Design

Both the `LoginSignup` and `ChatPage` components are designed to be fully responsive:

- **LoginSignup Page**:
  - On larger screens, the form and image split the screen equally.
  - On smaller screens, the components stack vertically, each taking up half of the screen height.

- **ChatPage**:
  - The chat interface is designed to be fully responsive, with a sidebar, navbar, and chat area adjusting dynamically based on screen size.

## Customizing

You can customize the project by modifying the CSS files in the `styles/` directory:

- **Changing Images**: Replace the images in the `assets/` directory with your own.
- **Modifying Layouts**: Adjust the Flexbox settings in the CSS files to change the layout.
- **Styling Components**: Modify the CSS variables in `:root` to change the color scheme and other global styles.



