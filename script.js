function booster(){
    localStorage.setItem('runCode1', true);
    }
console.log(window.location.pathname);

    if (window.location.pathname == "/index.html"){
        if (localStorage.getItem('runCode1')) {
                console.log("came from");
                window.scrollTo(0,document.body.scrollHeight)
                document.getElementById("service").value = "boost"
            localStorage.removeItem('runCode1'); 
        }
    }

function duo(){
    localStorage.setItem('runCode2', true);
    }
console.log(window.location.pathname);

    if (window.location.pathname == "/index.html"){
        if (localStorage.getItem('runCode2')) {
                console.log("came from");
                window.scrollTo(0,document.body.scrollHeight)
                document.getElementById("service").value = "duo"
            localStorage.removeItem('runCode2'); 
        }
    }
function pro(){
    localStorage.setItem('runCode3', true);
    }
console.log(window.location.pathname);

    if (window.location.pathname == "/index.html"){
        if (localStorage.getItem('runCode3')) {
                console.log("came from");
                window.scrollTo(0,document.body.scrollHeight)
                document.getElementById("service").value = "pro"
            localStorage.removeItem('runCode3'); 
        }
    }
function free_fun(){
    localStorage.setItem('runCode4', true);
    }
console.log(window.location.pathname);

    if (window.location.pathname == "/index.html"){
        if (localStorage.getItem('runCode4')) {
                console.log("came from");
                window.scrollTo(0,document.body.scrollHeight)
                document.getElementById("service").value = "free_duo"
            localStorage.removeItem('runCode4'); 
        }
    }