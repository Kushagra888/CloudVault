// Import Firebase libraries
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js';
import { getStorage, ref, uploadBytes } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js';


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcMwx5Tk3OWEN2PB2Gv9v_w-39T8xqk9Q",
    authDomain: "cloudvault-7c417.firebaseapp.com",
    projectId: "cloudvault-7c417",
    storageBucket: "cloudvault-7c417.appspot.com",
    messagingSenderId: "147847089164",
    appId: "1:147847089164:web:844e4e699ce7f5ab62f229"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);


async function encryptFile(file) {
    const key = await crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );

    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv: iv },
        key,
        await file.arrayBuffer()
    );

    return { encrypted, iv };
}


function generateUniqueFileName() {
    const timestamp = Date.now(); // get a unique time
    return `file_${timestamp}`; 
}

// Upload to firebase 
async function uploadToFirebase(fileName, encrypted) {
    const encryptedBlob = new Blob([encrypted]);

    const storageRef = ref(storage, fileName);

    try {
        await uploadBytes(storageRef, encryptedBlob);
        alert('File uploaded successfully');
    } catch (error) {
        alert('Failed to upload file: ' + error.message);
    }
}

// Handle the file upload process
window.uploadFile = async function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        const { encrypted } = await encryptFile(file);
        const uniqueFileName = generateUniqueFileName(); // Use the unique filename
        await uploadToFirebase(uniqueFileName, encrypted);
    }
}

// Handle user login with email and password
document.getElementById('login-button').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        await signInWithEmailAndPassword(auth, email, password);
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('upload-section').style.display = 'block';
        document.getElementById('logout-button').style.display = 'block';
    } catch (error) {
        document.getElementById('error-message').innerText = error.message;
    }
});

// Handle user signup with email and password
document.getElementById('signup-button').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Account created successfully! Please log in.');
    } catch (error) {
        document.getElementById('error-message').innerText = error.message;
    }
});
