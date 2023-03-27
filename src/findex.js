let form = document.querySelector("form")
let h1 = document.getElementById("regdisplay")

form.addEventListener("submit", (e)=>{
    let username = form.username.value
let email = form.email.value
let password = form.password.value
let locationel = form.location.value
    console.log("click")
    e.preventDefault()
    let regobj = {
        username:username,
        email:email,
        password:password,
        location:locationel
    }
    console.log(regobj)
    

    fetch("https://thankful-puce-fedora.cyclic.app/user/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(regobj),
    }).then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    alert("Registration is done!")
    h1.innerText = "Registration Successfull!!, redirecting...."
    setTimeout(()=>{
        window.location.assign("login.html");
    },5000)

    // fetch("http://localhost:8080/user/register",{
    //     method:"POST",
    //     headers:{
    //         "Content-Type":"application/json"
    //     },
    //     body:JSON.stringify(regobj)

    // }).then((response)=>{
        
    //     response.json()
    // }).then((data)=>{
    //     console.log(data)
    // }).catch((err)=>{
    //     console.log(err)
    // })
   
})