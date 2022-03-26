
let curr;

document.getElementById('but').addEventListener("click", async function(e) {
    e.preventDefault();
    const rawResponse = await fetch('/signin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:document.getElementById('email').value,password:document.getElementById('password').value})

    })
    const content = await rawResponse.json();

    console.log(content);


    if(content.message==="success")
        window.location.href="/patientportal";






})