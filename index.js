const firebaseConfig = {
    apiKey: "AIzaSyB9qF3K-WowJd4qQJo0qZ5wu2r-Mv7GVeY",
    authDomain: "food-shop-ak47.firebaseapp.com",
    databaseURL: "https://food-shop-ak47-default-rtdb.firebaseio.com",
    projectId: "food-shop-ak47",
    storageBucket: "food-shop-ak47.appspot.com",
    messagingSenderId: "478148451818",
    appId: "1:478148451818:web:f28bc1c21891420cf2e693",
    measurementId: "G-F1CN7KLL9Z"
};

firebase.initializeApp(firebaseConfig);

var signupDB = firebase.database().ref("signup");

document.getElementById("signup").addEventListener("submit", submitform);

function submitform(e) {
    e.preventDefault();

    var name = getElementVal("firstname");
    var password = getElementVal("email");
    var email = getElementVal("password");
    var dateofBirth = getElementVal("date");
    var phonenumber = getElementVal("number");

    saveMessage(name, email, password, dateofBirth, phonenumber);

    console.log(firstname, password, email, dateofBirth, phonenumber);
    alert(
        "Your all data is valid and information is getting stored in firebase database"
    );
}

const saveMessage = (firstname, password, email, date, number) => {
    var newSignup = signupDB.push();
    newSignup.set({
        Name: firstname,
        Password: password,
        Email: email,
        DateOfBirth: date,
        PhoneNumber: number
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};