// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from"https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase,
    ref
    , set
    , push
    ,onValue
    ,remove
    
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

var ProductName = document.getElementById('ProductName');
var ProductPrice = document.getElementById('ProductPrice');
var ImageUrl = document.getElementById('ImageUrl');
var ProductDescription = document.getElementById("ProductDescription")


function emt(){
    ProductName.value = ""
    ProductPrice.value = ""
    ImageUrl.value = ""
    ProductDescription.value = ""
}
var admindata = document.getElementById("admindata")


var pathRef = ref(database, "product/");
var idRef = push(pathRef).key
var proRef = ref(database,`product/${idRef}/`);


window.addpro = function () {
    var proObj = {
        id: idRef,
        ProductName: ProductName.value,
        ProductPrice: ProductPrice.value,
        ImageUrl: ImageUrl.value,
        ProductDescription: ProductDescription.value
    }
    set(proRef, proObj)        
}

function getprodata(){
    var getRef = ref(database, "product/");
    onValue(getRef,function(data){
        var getArry = Object.values(data.val()) ;
        showdata(getArry)
    })
}

function showdata(dataArry){
    // admindata.innerHTML = ""
    for(var i = 0 ;i <dataArry.length; i++){
        
        
        admindata.innerHTML += ` <div class="card my-3" style="width: 18rem;">
        <img src="${dataArry[i].ImageUrl}" class="card-img-top " alt="..." width="18rem"
        height = "200px">
        <div class="card-body">
        <h5 class="card-title">${dataArry[i].ProductName}</h5>
        <p class="card-text">${dataArry[i].ProductDescription}</p>
        </div>
            <ul class="list-group list-group-flush">
            
            <li class="list-group-item">Rs ${dataArry[i].ProductPrice}</li>
            <button type="button" class="btn btn-outline-danger" onclick = "del('${dataArry[i].id}')">Delete</button>
            </ul>
            </div>
            `
        }
        emt()
    }
    
    getprodata()
    
    window.del = function(id){
    remove(ref(database,`product/${id}`))
}
window.back = function () {
    window.location.href="../../index.html"
    
    // alert("ok")
}

window.resetp = function () {
    window.location.href ="../setPassword/setPasswordindex.html"
// alert("ok")

}

