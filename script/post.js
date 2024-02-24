/*function to increase Likes when presed*/
function updateLikes() {
    var x = 1;
    var elements = document.getElementsByClassName('numberOfLikes');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = x + ' person likes this!';
        x++;
    }


    var liked = document.getElementsByClassName('like');
    for (var i = 0; i < liked.length; i++) {
        liked[i].innerHTML = 'Liked';
    }
}

/* function to edit the content  */
function makeEditable() {
    var text = document.querySelector('.edit');
    var icon = document.querySelector('.edit-saveIcon');
    var titleh2 = document.querySelector('.titleh2');
    var description = document.querySelector('.content-section');

    if (text.innerHTML === 'Edit') {

        // Toggle contenteditable attribute
        titleh2.contentEditable = (titleh2.contentEditable === 'true') ? 'false' : 'true';
        description.contentEditable = (description.contentEditable === 'true') ? 'false' : 'true';


        if (titleh2.contentEditable === 'true') {
            titleh2.style.border = '2px solid rgb(232, 32, 105)';
        }

        if (description.contentEditable === 'true') {
            description.style.border = '2px solid rgb(232, 32, 105)';
        } 

        text.innerHTML = "Save";
        icon.innerHTML = '<i class="fas fa-save"></i>';
    }
    else if (text.innerHTML === 'Save') {
        var updatedText = document.querySelectorAll('.updatedText');
        updatedText.forEach(function(element) {
            element.innerHTML = "UPDATED: ";
          });

        text.innerHTML = "Edit";
        icon.innerHTML = '<i class="fas fa-edit"></i>';

        titleh2.contentEditable = 'false';
        titleh2.style.border = '0px solid black'; 

        description.contentEditable = 'false';
        description.style.border = '0px solid black';
    }

}

function postComments(commentform){
    
    var allCommentsPosted = document.querySelector('.allCommentsPosted');
    allCommentsPosted.innerHTML += '<p class="singleBlockComment">' + commentform.value + '</p>';

    commentform.value = "";
   // * var comment = document.getElementById('commentform').value;
   // var allCommentsPosted = document.querySelector('.allCommentsPosted');
    //var newComment = document.createElement('p');
   // newComment.className = 'singleBlockComment';
   // newComment.textContent = comment;
   // allCommentsPosted.appendChild(newComment);
}









/*signup and sign in popup*/
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

function showsignupform2() {
    document.querySelector('.signinform').classList.remove('showsigninform');
    document.querySelector('.signupform').classList.add('showsignupform');
}
