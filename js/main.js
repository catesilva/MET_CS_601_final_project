
// Copy to Clipboard

var btn = document.querySelector(".btn");
btn.addEventListener('mouseover', function() {
    this.textContent = 'hello@catesilva.com';
})

btn.addEventListener('mouseout', function() {
    this.textContent = 'Email Copied';
})

function copyEmail() {
    var str = document.getElementById('btnId');
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy")
}