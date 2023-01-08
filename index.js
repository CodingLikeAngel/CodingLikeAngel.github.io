

setInterval(function(){
    document.querySelector("body").style.display = "none";
    document.querySelector("body").remove();

    var newBody = document.createElement("body");
    document.querySelector("html").appendChild(newBody);
    
    newBody.innerHTML = `
    <img src="baila.gif" alt="Descripción del GIF">
    <h1>
        <span class="word">Clarabirubi</span>
        <span class="word">Clarabiruba</span>
        <span class="word">Yo no se que tienes... </span>
        <span class="word">Que cada día me gustas más!</span>
        <br>
        <span class="word">:) :)</span>
    </h1>
    `;

  }, 10000);



