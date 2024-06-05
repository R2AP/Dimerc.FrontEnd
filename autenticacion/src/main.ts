import { createApp } from 'vue'
import { initializeApp } from "firebase/app";
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const firebaseConfig = {
    apiKey: "AIzaSyCoFDwkIHO0PppiiA1bNaJn7efswJz_zXs",
    authDomain: "dimarc-1750b.firebaseapp.com",
    projectId: "dimarc-1750b",
    storageBucket: "dimarc-1750b.appspot.com",
    messagingSenderId: "530026306446",
    appId: "1:530026306446:web:11ba7f54adb021dcf262df",
    measurementId: "G-V04GR6QQ96"
};

initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
