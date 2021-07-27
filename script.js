window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(jsonResponse){
            let astroInfo = document.getElementById('container');
            let jsonArray = jsonResponse;
            console.log(jsonArray.length);
            for (i=0;i<jsonArray.length;i++){
                astroInfo.innerHTML += 
                `
                    <div class="astronaut">
                        <div class="bio">
                        <h3>${jsonArray[i].firstName} ${jsonArray[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${jsonArray[i].hoursInSpace}</li>
                            <li>Active: ${jsonArray[i].active}</li>
                            <li>Skills: ${jsonArray[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${jsonArray[i].picture}">
                </div>
            `
            }
        })
    })
});




