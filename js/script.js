/*===============Animation of the Input in Contact Section=========*/
/*name the document that the class is input into Inputs*/
const Inputs =document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc(){
    let parent = this.parentNode;
    /*if(this.value == ""){*/
        parent.classList.remove("focus");
    /*}*/
}

Inputs.forEach((input) => {
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc)
})