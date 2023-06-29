// fade bg 

var bgImageArray = ["../assets/images/auto-01.jpg","../assets/images/auto-02.jpg","../assets/images/auto-03.jpg"],
base = "",
secs = 6;

bgImageArray.forEach(function(img){
    new Image().src = base + img; 
});

function backgroundSequence() {
    window.clearTimeout();
        var k = 0;
        for (var i = 0; i < bgImageArray.length; i++) {
            setTimeout(function(){
    document.documentElement.style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
    document.documentElement.style.backgroundSize ="cover";
                if ((k + 1) === bgImageArray.length) {
                    setTimeout(function() {
                        backgroundSequence() }, (secs * 1000))
                } else { k++; }
            }, (secs * 1000) * i) 
        }
    }
    backgroundSequence();

// upload - source: https://codepen.io/fghty/pen/QWvPWoR

function showPreview(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
        preview.style.display = "block";

        var uploadButton = document.querySelector("label[for='file-ip-1']");
        uploadButton.style.display = "none";
    }
}

// login

function checkCode() {
    var enteredCode = document.getElementById("codeInput").value;
    var errorMessageElement = document.getElementById("errorMessage");

    // Check if the entered code exists in the array of codes
    if (codes.includes(enteredCode)) {
        const inputCont = document.querySelector('.setup-specs-cont')
        const loginCont = document.querySelector('.login-cont')
        inputCont.style.display = 'block';
        loginCont.style.display = 'none';
        // Perform the login action here

        // Clear the error message
        errorMessageElement.textContent = "";
        errorMessageElement.style.display = "none";
    } else {
        errorMessageElement.textContent = "Invalid code";
        errorMessageElement.style.display = "block";
    }
}





/*input/output*/


//title
var input = document.querySelector('.titel-auto-input');
var output = document.querySelector('.titel-auto-output');

input.addEventListener('input', function () {
    output.textContent = input.value;
});

//topsnelheid
var input2 = document.querySelector('.topsnelheid-input');
var output2 = document.querySelector('.topsnelheid-output');

input2.addEventListener('input', function () {
    output2.textContent = input2.value;
});

//accel
var input3 = document.querySelector('.accel-input');
var output3 = document.querySelector('.accel-output');

input3.addEventListener('input', function () {
    output3.textContent = input3.value;
});

//pk
var input4 = document.querySelector('.pk-input');
var output4 = document.querySelector('.pk-output');

input4.addEventListener('input', function () {
    output4.textContent = input4.value;
});

//instagram
var input5 = document.querySelector('.instagram-input');
var output5 = document.querySelector('.instagram-output');

input5.addEventListener('input', function () {
    output5.textContent = input5.value;
});

//facebook
var input6 = document.querySelector('.facebook-input');
var output6 = document.querySelector('.facebook-output');

input6.addEventListener('input', function () {
    output6.textContent = input6.value;
});

//download image 

function downloadElementImage() {
    const element = document.querySelector('.card-cont');

    html2canvas(element).then(function (canvas) {
        // Create an <a> element to download the image
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'fanatic-card.png';
        link.click();
    });
}


