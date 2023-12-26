let uniqueId = 0;
// create a post with an event listener on a submit button
document.getElementById('submit').addEventListener('click', function () {
      let postID = uniqueId++;
      var name = document.getElementById('name').value;
      var text = document.getElementById('message').value;
      var postsDiv = document.querySelector('.posts');
      var commentsDiv = document.createElement('div');
      commentsDiv.id = 'commentsContainer'+ postID;
      var newPostDiv = document.createElement('div');
      var newPostP = document.createElement('p');
      var newPostHR = document.createElement('hr');
      var TextAndNameNode = document.createTextNode("                         " + text + ' -Posted By: ' + name);
//btn1 = "REMOVE BUTTON"
// "REMOVE POST BUTTON" remove the post when removeP button is clicked
const btn1 = document.createElement("button");
        btn1.id = "remove"
        btn1.type = "button";
        btn1.innerText = "Remove Post";
        btn1.addEventListener("click", function () {
        newPostDiv.remove();
});
// btn2 = "COMMENTS BUTTON"    
//"COMMENTS BUTTON" + drop down form when button clicks
const btn2 = document.createElement("button");
        btn2.id = "comments"
        btn2.type = "button";
        btn2.innerText = "Comments";
            
// "COMMENT FORM"
// creating comment form, with uniqueId = uniqueId + 1;
var commentForm = document.createElement('form');
        commentForm.id = "commentForm" + postID;
//            
var commentInput = document.createElement("input");
      commentInput.setAttribute('type', 'text');
      commentInput.setAttribute('placeholder', 'comment text');
      commentInput.id = "commentText" + postID;
//           
var nameInput = document.createElement("input");
      nameInput.setAttribute('type', 'text');
      nameInput.setAttribute('placeholder', 'your name');
      nameInput.id = "nameText" + postID;
//            
var submitCommentButton = document.createElement('button');
    submitCommentButton.type = "button";
    submitCommentButton.textContent = "Submit Comment";
    
    //
let Id = 0;
submitCommentButton.addEventListener('click', function () {
        let cId = Id++;
        var commentText = document.getElementById("commentText" + postID).value;
        var nameText = document.getElementById("nameText" + postID).value;
        var br = document.createElement('br');
        var commentAndNameNode = document.createTextNode(commentText + ' - Comment Posted By: ' + nameText);
// - add a "REMOVE COMMENT BUTTON" button to each comment posted
        var newCommentP = document.createElement('p');
        const removeCbtn2 = document.createElement("button");
        removeCbtn2.type = "button";
        removeCbtn2.innerText= "Remove Comment";
        newCommentP.append(removeCbtn2);
        newCommentP.appendChild(commentAndNameNode);
        newCommentP.appendChild(br);
        commentsDiv.appendChild(newCommentP);
        removeCbtn2.addEventListener ("click", function () {
        newCommentP.remove();
  });
});
commentsDiv.style.display = "none";
commentForm.style.display = "none";
newPostP.appendChild(btn2).addEventListener ("click", function () {
  var form = document.getElementById("commentForm" + postID);
  var commentsContainer = document.getElementById("commentsContainer" + postID);
        if (form.style.display === 'none' && commentsContainer.style.display === 'none') {
        form.style.display = 'block'; 
        commentsContainer.style.display  = 'block'; 
        } else {
        form.style.display ='none';
         commentsContainer.style.display  = 'none';
        }
});
                  
commentForm.appendChild(commentInput);
commentForm.appendChild(nameInput);
commentForm.appendChild(submitCommentButton);
newPostP.appendChild(commentForm);
    
newPostDiv.appendChild(btn1);
newPostDiv.appendChild(btn2);
newPostDiv.appendChild(TextAndNameNode);
newPostDiv.appendChild(commentsDiv);
newPostDiv.appendChild(newPostP);
newPostDiv.appendChild(newPostHR);
postsDiv.appendChild(newPostDiv);
                
});