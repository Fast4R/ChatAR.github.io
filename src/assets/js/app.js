import { Login } from './login';
import {Registration} from './registration';
import {isRegValid} from './utils';
import {isLogValid} from './utils';
import {checkUserExistence} from './utils';
import {DispatchMessage} from './dispatchMessageData';
import {HandlingMessage} from './getMessageData';

// import firebase from "firebase/app";
// import "firebase/database";

// var firebaseConfig = {
//     apiKey: "AIzaSyDYmHm9860u7uQKYdNr37hEL-Q4DfL5hWc",
//     authDomain: "chatar-fastar.firebaseapp.com",
//     projectId: "chatar-fastar",
//     databaseURL: "https://chatar-fastar-default-rtdb.firebaseio.com",
//     storageBucket: "chatar-fastar.appspot.com",
//     messagingSenderId: "19186124569",
//     appId: "1:19186124569:web:acd459330c550822786788",
//     measurementId: "G-HF5CM0GM9F"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

//Buttons
const upBtn = document.getElementById('upBtn');
const inBtn = document.getElementById('inBtn');
const logoutBtn = document.getElementById('outBtn');

//Forms data
const upName = document.getElementById('upName');
const upPass = document.getElementById('upPass');
const passConf = document.getElementById('upPassConf');
const inName = document.getElementById('inName');
const inPass = document.getElementById('inPass');

//Chat windows
const sign = document.getElementById('sign');
const chat = document.getElementById('chat');

//registration and signIn
let userChatName = document.getElementById('chatName');

upBtn.addEventListener('click', regNewUser);
inBtn.addEventListener('click', signIn);

function regNewUser(event){
    event.preventDefault();

    if(isRegValid(upName.value, upPass.value, passConf.value)){
        const newUser = {
            name: upName.value,
            password: upPass.value,
        }

        checkUserExistence(upName,passConf, newUser);
        
    }else {
        alert(`Name size (3-10 symbols)\nPassword size (6-15 symbols)\nPasswords may not match\nTry again!`);
        upName.value = '';
        upPass.value = '';
        passConf.value = '';
    }
}

let bufName;
function signIn(event){
    event.preventDefault();
    bufName = inName.value;
    if(isLogValid(inName.value, inPass.value)){
        Login.getUserData(inName, inPass, sign, chat)
        .then(()=>{
            userChatName.innerHTML = `${bufName}`;
        })
        .then(() => {
            checkLogout = setInterval(()=>{
                HandlingMessage.getMessage();
            }, 2000);
        })
    }
}

//message handling
const chatBtn = document.getElementById('chatBtn');
const sentMessage = document.getElementById('textarea');

chatBtn.addEventListener('click', sendMessageData);

function sendMessageData(event){
    event.preventDefault();

    const newMessage = {
        name: bufName,
        message: sentMessage.value,
    }

    DispatchMessage.dispatch(newMessage).then(() => {
        sentMessage.value = '';
    });
}

//logout Btn
let checkLogout;
logoutBtn.addEventListener('click', event =>{
    event.preventDefault();
    setTimeout(() => {
        clearInterval(checkLogout);
    }, 100);

    sign.classList.remove('hidden__sign');
    chat.classList.remove('show__chat');
});