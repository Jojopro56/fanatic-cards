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
    
    html2canvas(element).then(function(canvas) {
        // Create an <a> element to download the image
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'fanatic-card.png';
        link.click();
    });
}


