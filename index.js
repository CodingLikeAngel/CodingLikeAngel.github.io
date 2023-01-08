

setInterval(function(){
   
    document.querySelector("body div:first-of-type").remove();
    var newBody = document.createElement("div");
    document.querySelector("body").appendChild(newBody);
    
    newBody.innerHTML = `
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



