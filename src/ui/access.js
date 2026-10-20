let button = document.getElementById("btn-login");


// == Adding an Event
button.addEventListener('click', async () =>{
    let res = await fetch("localhost:8000/data/api/v1/satellite");

    if(!res.ok){
        alert("No Data!");
    }
    let data = await res.json();
    alert(data);
})