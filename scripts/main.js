function main() {
    console.log("Starting Calculator");

    const main = document.getElementById('App');
    // main.innerHTML = '<p>Our elements will be here</p>';

    for (let i=0;i < 16;i++) {
        const myDiv = document.createElement("div");
        myDiv.innerText = "Some Text for Div # "+i;
        myDiv.id = "d"+i;
        myDiv.className = "btn";
        myDiv.className += " numbers";
        
        main.appendChild(myDiv);
        myDiv.onmousedown = onMouseDown;
        // myDiv.onmouseleave = () => {console.log("Leaving some Div")};
    }

    // main.onmousemove = (ev) => {console.log("X:"+ev.pageX+"Y:"+ev.pageY)};
    console.log("Created Main");
}

function onMouseDown(event) {
    console.log("You pressed some div"+event.target.id);
    
    // console.log("Coordinates "+event.pageX+"Y:"+event.pageY);
}

main();

