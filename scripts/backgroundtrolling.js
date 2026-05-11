function changebackground() {
    localStorage.setItem('backgroundColor', document.getElementById('backgroundcolorform').value);
    let backgroundColor = localStorage.getItem('backgroundColor');
    let body = document.getElementById('mainpagebody');
    body.style.backgroundColor = backgroundColor;
    alert('poop'); 
}