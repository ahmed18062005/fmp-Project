// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  import {
      getDatabase ,
      ref ,
      onValue
  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDoqh2W8IYY3vcPXuip8NVg5a7vATFSGMc",
    authDomain: "fmp-project-1359b.firebaseapp.com",
    databaseURL: "https://fmp-project-1359b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fmp-project-1359b",
    storageBucket: "fmp-project-1359b.appspot.com",
    messagingSenderId: "899008747054",
    appId: "1:899008747054:web:3fd2def2642baeb481f1bf",
    measurementId: "G-3Z17Q80M1Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const database = getDatabase();

var userRef = ref(database,"setPassword/");

var checkpassword = document.getElementById('checkpassword');


window.checkPassword = function (){
    
    onValue(userRef , function(passwords){

        if(checkpassword.value === passwords.val().password){
        window.location.replace("../admin/admin.html")
      }else{
          checkpassword.value = ''
            alert("no")
        }
    })
}


window.home = function (){
    window.location.replace("../../index.html")

}