function validateAndCalculate(){
    let service
    let hours
    let gender
    let comment
    let servicecost
    let gendercost
    if(document.getElementById("service").value != "bad"){
        service = true
        document.getElementById("service").setAttribute("style", "border:1px solid #55ff55 !important")
        document.getElementById("service-error").setAttribute("style", "display:none")
        if(document.getElementById("service").value == "boost"){
            servicecost = 50
        }
        else if(document.getElementById("service").value == "duo"){
            servicecost = 10
        }
        else if(document.getElementById("service").value == "pro"){
            servicecost = 100
        }
        else{
            servicecost = 0
        }
    }
    else{
        service = false
        document.getElementById("service").setAttribute("style", "border:1px solid #ff0000 !important")
        document.getElementById("service-error").setAttribute("style", "display:inline-block")
    }
    if(document.getElementById("hours").value != ""){
        hours = document.getElementById("hours").value
        document.getElementById("hours").setAttribute("style", "border:1px solid #55ff55 !important")
        document.getElementById("hours-error").setAttribute("style", "display:none")
    }
    else{
        hours = false
        document.getElementById("hours").setAttribute("style", "border:1px solid #ff0000 !important")
        document.getElementById("hours-error").setAttribute("style", "display:inline-block")
    }
    if (document.querySelector('input[name="gender"]:checked') != null){
        if (document.querySelector('input[name="gender"]:checked').id == "male"){
            document.getElementById("male_").setAttribute("style", "border:1px solid #55ff55 !important")
            document.getElementById("female_").setAttribute("style", "border:1px solid rgb(0, 0, 0) !important")
            gendercost = 1
        }
        else{
            document.getElementById("female_").setAttribute("style", "border:1px solid #55ff55 !important")
            document.getElementById("male_").setAttribute("style", "border:1px solid rgb(0, 0, 0) !important")
            gendercost = 1.25
        }
        gender = true
        document.getElementById("gender-error").setAttribute("style", "display:none")
    }
    else{
        gender = false
        document.getElementById("female_").setAttribute("style", "border:1px solid #ff0000 !important")
        document.getElementById("male_").setAttribute("style", "border:1px solid #ff0000 !important")
        document.getElementById("gender-error").setAttribute("style", "display:inline-block")
    }
    if(document.getElementById("comment").value.length > 7){
        comment = true
        document.getElementById("comment").setAttribute("style", "border:1px solid #55ff55 !important;resize: none;height: 150px;;width:258px;")
        document.getElementById("comment-error").setAttribute("style", "display:none")
    }
    else{
        comment = false
        document.getElementById("comment").setAttribute("style", "border:1px solid #ff0000 !important;resize: none;height: 150px;;width:258px;")
        document.getElementById("comment-error").setAttribute("style", "display:inline-block")
    }
    if(service&hours != false&gender&comment){
        console.log("finished")
        document.getElementById("total").innerHTML = `${(   servicecost*hours*gendercost    )}`
        document.getElementById("total_div").setAttribute("style", "margin-top:5%")
    }
    else{
    	document.getElementById("total_div").setAttribute("style", "margin-top:5%;display:none")
    }
}
function collapsed(){
    if ( document.getElementById("button_1").ariaExpanded != "false"){
        
            document.getElementById("background-image").setAttribute("style","transition:margin-top 0.5s;margin-top: 120px;height: 200vh;background-image: url(Images/Bg-contact-final.png);background-color: rgb(190 150 255);")
    } else{
        
        document.getElementById("background-image").setAttribute("style","transition:margin-top 0.5s;height: 200vh;background-image: url(Images/Bg-contact-final.png);background-color: rgb(190 150 255);")
        
    
    }
    }