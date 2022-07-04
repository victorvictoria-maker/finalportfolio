// $(document).ready(function() {
//     $(".num").counterUp({
//         delay: 10,
//         time: 1200
//     });

// });
let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);

    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;

        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});


const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});


// Form submission 
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

const submitForm = (e) => {
    if (e && e.preventDefault);
     

     let formData = {
        name: userName.value,
        email: userEmail.value,
        subject: subject.value,
        message: message.value
     };
     console.log(formData); 
     
    //  axios.post("../server.js", formData)
    //  .then((res) => console.log(res))
    //  .catch((err) => console.log(err))
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success') {
            alert('Email sent');
            userName.value = "";
            userEmail.value = "";
            subject.value = "";
            message.value = "";
        } else {
            alert("Something went wrong");
        }
    };

    xhr.send(JSON.stringify(formData));

}
console.log("hi");