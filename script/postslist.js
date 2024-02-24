var postToDelete ;
function selectpost1() {
   postToDelete = document.getElementsByClassName('post1');
   console.log("Post to delete:", postToDelete);
   showDeletePopup();
}
function selectpost2(){
    postToDelete = document.getElementsByClassName('post2');
    showDeletePopup();
}
function selectpost3(){
    postToDelete = document.getElementsByClassName('post3');
    showDeletePopup();
}
function selectpost4(){
    postToDelete = document.getElementsByClassName('post4');
    showDeletePopup();
}
function selectpost5(){
    postToDelete = document.getElementsByClassName('post5');
    showDeletePopup();
}

function deletePost() {
    console.log("Deleting posts:", postToDelete);
    // Loop through each element in the collection
    for (let i = 0; i < postToDelete.length; i++) {
        // Remove each element from the DOM
        postToDelete[i].remove();
    }
    removedeletepopup();
}

function showDeletePopup(){
    document.querySelector('.overlay').classList.add('showoverlay');
        document.querySelector('.delete-section').classList.add('showdelete-section');
}
function removedeletepopup() {
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.delete-section').classList.remove('showdelete-section');
}


// signup and signin POP UP 
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
}3