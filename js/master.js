$(document).ready(function(){
    $('.post-wrapper').slick({
        autoplay:true,
        autoplaySpeed:1000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive: [
            {
                breakpoint:  991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
            }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
            }
            }
            // You can unslick at given breakpoint now by adding:
            // settings: "unslick"
            //instead of a settings object
        ]
    });
});

// Create Popup With The Image
// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

img.addEventListener('click', (e) => {

// Create Overlay Element
let overlay = document.createElement("div");

// Add Class To Overlay
overlay.className = 'popup-overlay';

// Append Overlay To The Body
document.body.appendChild(overlay);

// Create The Popup
let popupBox = document.createElement("div");

// Add Class To The Popup Box
popupBox.className = 'popup-box';

if (img.alt !== null) {

// Create Heading
let imgHeading = document.createElement("h3");

// Create Text For Heading
let imgText = document.createTextNode(img.alt);

// Append The Text To The Headding
imgHeading.appendChild(imgText);

// Append The Heading To The Popup Box
popupBox.appendChild(imgHeading);

}

// Create The Image
let popupImage = document.createElement("img");

// Set Img Source
popupImage.src = img.src;

// Add Image To Popup Box
popupBox.appendChild(popupImage);

// Append The Popup Box To Body
document.body.appendChild(popupBox);

// Create The Close Span
let closeButton = document.createElement("span");


// Create The Colse Button Text
let closeButtonText = document.createTextNode("X");

// Append Text To Close Button
closeButton.appendChild(closeButtonText);

// Add Class To Close Button
closeButton.className = 'close-button';

// Add Close Button To The popup Box

popupBox.appendChild(closeButton);

});

});

// Close Popup
document.addEventListener("click", function (e) {

if (e.target.className == 'close-button'){

// Remove The Curren Popup
e.target.parentNode.remove();

// remove overlay
document.querySelector(".popup-overlay").remove();
}

});



// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn .onclick = function (e) {

// Stop Propagation
e.stopPropagation();

// Toggle Class "menu-active" On Button
this.classList.toggle("menu-active");


// Toggle Class "Open" On Links
tLinks.classList.toggle("open");


};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

if (e.target !== toggleBtn && e.target !== tLinks) {

// Check If Menu Is Open
if (tLinks.classList.contains("open")) {

// Toggle Class "menu-active" On Button
toggleBtn.classList.toggle("menu-active");


// Toggle Class "Open" On Links
tLinks.classList.toggle("open");

}

}

});

// Stop Propagation On  Menu
tLinks.onclick = function (e) {
e.stopPropagation();
}