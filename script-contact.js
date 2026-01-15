function validateForm(){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let name
    let email
    let number
    let comment
    if((document.getElementById("name").value.length < 20)&&(document.getElementById("name").value.length > 2)){
        name = true
        document.getElementById("name").setAttribute("style", "border-bottom:1px solid #55ff55 !important")
        document.getElementById("name-error").setAttribute("style", "display:none")
    }
    else{
        name = false
        document.getElementById("name").setAttribute("style", "border-bottom:1px solid #ff0000 !important")
        document.getElementById("name-error").setAttribute("style", "display:inline-block")
    }
    if ((validation.test((document.getElementById("email").value)))&&(document.getElementById("email").value.length > 5)){
        email = true
        document.getElementById("email").setAttribute("style", "border-bottom:1px solid #55ff55 !important")
        document.getElementById("email-error").setAttribute("style", "display:none")
    }
    else{
        email = false
        document.getElementById("email").setAttribute("style", "border-bottom:1px solid #ff0000 !important")
        document.getElementById("email-error").setAttribute("style", "display:inline-block")
    }
    if(document.getElementById("number").value.length == 8){
        number = true
        document.getElementById("number").setAttribute("style", "border-bottom:1px solid #55ff55 !important")
        document.getElementById("number-error").setAttribute("style", "display:none")
    }
    else{
        number = false
        document.getElementById("number").setAttribute("style", "border-bottom:1px solid #ff0000 !important")
        document.getElementById("number-error").setAttribute("style", "display:inline-block")
    }
    if(document.getElementById("comment").value.length > 7){
        comment = true
        document.getElementById("comment").setAttribute("style", "border-bottom:1px solid #55ff55 !important;resize: none;height: 150px;;width:258px;")
        document.getElementById("comment-error").setAttribute("style", "display:none")
    }
    else{
        comment = false
        document.getElementById("comment").setAttribute("style", "border-bottom:1px solid #ff0000 !important;resize: none;height: 150px;;width:258px;")
        document.getElementById("comment-error").setAttribute("style", "display:inline-block")
    }
    if(name&email&number&comment){
        return true
    }
    else{
        return false
    }
}

function collapsed(){
if ( document.getElementById("button_1").ariaExpanded == "false"){
    if (window.innerHeight <= 680){
        document.getElementById("form").setAttribute("style","padding-bottom:0;height:85% !important;margin-top: 60px;transition: padding-bottom 0.5s,margin-top 0.5s,height 0.5s;background-color: rgba(1, 1, 1, 0.2);border-radius: 2.5%;border: black 1px solid;flex-direction: column;")

    }
    else{
        document.getElementById("form").setAttribute("style","height:75% !important;margin-top: 0;transition: margin-top 0.5s,height 0.5s;background-color: rgba(1, 1, 1, 0.2);border-radius: 2.5%;border: black 1px solid;flex-direction: column;")

    }
} else{
    if (window.innerHeight <= 780){
        document.getElementById("form").setAttribute("style","padding-bottom:5%;height:73% !important;margin-top: 179px;transition: margin-top 0.3s,height 0.3s;background-color: rgba(1, 1, 1, 0.2);border-radius: 2.5%;border: black 1px solid;flex-direction: column;")

    }
    else{
        document.getElementById("form").setAttribute("style","height:65% !important;margin-top: 130px;transition: padding-bottom 0.5s,margin-top 0.3s,height 0.3s;background-color: rgba(1, 1, 1, 0.2);border-radius: 2.5%;border: black 1px solid;flex-direction: column;")
    }

}
}