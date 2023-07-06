// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { 
      getDatabase,
      ref,
      set
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

var password = document.getElementById("password")
function call() {   
    
    window.location.replace("/index.html")
}
window.setPassword = function () {
    
    var userRef = ref(database, "setPassword/");
    
    var obj = {
        password: password.value
    }
    set(userRef,obj)
    setTimeout(function(){
        call()
        },3000)
        password.value = ""
}


window.back = function(){
    window.location.replace('../admin/admin.html')
}