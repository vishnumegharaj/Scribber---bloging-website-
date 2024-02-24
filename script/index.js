function showsignupform() {
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.signupform').classList.add('showsignupform');
}
function removesignupform() {
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.signupform').classList.remove('showsignupform');
}

function showsigninform() {
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.signinform').classList.add('showsigninform');
}
function removesigninform() {
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.signinform').classList.remove('showsigninform');
}

function showsignupform2(){
    document.querySelector('.signinform').classList.remove('showsigninform');
    document.querySelector('.signupform').classList.add('showsignupform');
}

function showcreateform() {
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.createpostpopup').classList.add('showcreatepost');
}
function removecreateform() {
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.createpostpopup').classList.remove('showcreatepost');
}