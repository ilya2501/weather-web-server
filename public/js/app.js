console.log('Client side javascript file is loaded!')

onsubmit = (e) => {
    e.preventDefault();
    const errorMessage = document.querySelector(".error")
    const forecastMessage = document.querySelector(".forecast")
    const locationMessage = document.querySelector(".location")
    
    forecastMessage.textContent = 'loading';
    fetch(`${location.origin}/weather?address=${e.target.children[0].value}`)
        .then((resp) => {
            resp.json()
                .then((data) => {
                    errorMessage.textContent = data.error;
                    locationMessage.textContent = data.location;
                    forecastMessage.textContent = data.forecast;
            })
        })
}