var html_underline = document.getElementById('underline')
var html_capitalize = document.getElementById('capitalize')
var html_italic = document.getElementById('italic')
var html_bold = document.getElementById('bold')


var html_color = document.getElementById('color')

var para = document.getElementById('para');

var isUnderlined = false;
var isBold = false;
var isItalic = false;
var isCapitalized = false;
var isColored = false;

html_underline.addEventListener('click', function () {
    isUnderlined = !isUnderlined
    para.style.textDecoration = isUnderlined ? "underline" : "none";
})

html_bold.addEventListener('click', function () {
    isBold = !isBold

    para.style.fontWeight = isBold ? "bold" : "normal"

})

html_capitalize.addEventListener('click', function () {
    isCapitalized = !isCapitalized
    para.style.textTransform = isCapitalized ? "capitalize" : "none"

})

html_italic.addEventListener('click', function () {
    isItalic = !isItalic
    para.style.fontStyle = isItalic ? "italic" : "noraml"

})

html_color.addEventListener('click', function () {
    isColored = !isColored
    para.style.color = isColored ? "red" : "black"

})
