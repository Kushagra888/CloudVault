# CloudVault

CloudVault is a secure file storage application designed to manage user authentication, file encryption, and file uploads using Firebase. It provides a simple interface for users to sign up, log in, and securely upload encrypted files.

## Features

- **User Authentication:** Secure user sign-up and login using email and password with Firebase Authentication.
- **File Encryption:** Files are encrypted using AES-GCM encryption for enhanced security before uploading.
- **Firebase Integration:** Utilizes Firebase for user management and file storage.
- **Simple Interface:** Easy-to-use interface for file upload and management.

## Technologies Used

- **Firebase:** Used for user authentication and file storage.
- **AES-GCM Encryption:** Provides encryption for secure file storage.
- **Web Crypto API:** Utilized for file encryption.
- **HTML/CSS/JavaScript:** Core technologies for the web interface.

## Getting Started

### Prerequisites

- A Firebase account and project set up with Firebase Authentication and Firebase Storage enabled.

### Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Kushagra888/CloudVault.git

2. **Configure Firebase:**

  Update the `script.js` file with your Firebase project's configuration. Replace the placeholder values in the `firebaseConfig` object with your actual Firebase credentials.

3. **Open the Project:**

  Open the `index.html` file in your web browser to view and interact with the application.

## Usage

- **Sign Up:** Create a new user account using the email and password fields.
- **Log In:** Access the application by logging in with your credentials.
- **Upload Files:** Select a file and click "Upload" to securely upload the encrypted file to Firebase Storage.
- **Logout:** Log out to end the session and return to the login screen.

## File Structure

- `index.html`: Main HTML file with the structure and layout of the application.
- `style.css`: CSS file for styling the application.
- `script.js`: JavaScript file handling user authentication, file encryption, and file upload.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

- [**Firebase**](https://firebase.google.com/) - For providing authentication and storage services.
- [**Web Crypto API**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) - For providing encryption functionality.
