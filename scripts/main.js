const state = {
    result: 0
};

function main() {
    console.log("Starting Calculator");
    renderView();
    setUpListeners();
}

function setUpListeners() {
    console.log("Setting Up Listeners");
}

function renderView() {
    document.querySelector(".display").innerText = state.result;
}

function oldmain() {
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

    
    // querySelectorAll returns an array
    const sections = document.querySelectorAll(".display");
    for(let i=0; i < sections.length; i++) {
        const secEl = document.createElement('p');
        secEl.innerText = "The display text";
        sections[i].appendChild(secEl);
    }
    
    // const section = document.querySelector(".display");
    // section.appendChild(secEl);
    // const section = document.querySelector("section");
    // section.appendChild(secEl);


    const lastEl = document.createElement('p');
    lastEl.innerText = "The very last text";
    document.body.appendChild(lastEl);
    // main.onmousemove = (ev) => {console.log("X:"+ev.pageX+"Y:"+ev.pageY)};
    console.log("Created Main");
}

function onMouseDown(event) {
    console.log("You pressed some div"+event.target.id);

    // alternative to below const disp = document.querySelector(".display");
    const disp = document.getElementsByClassName('display')[0];
    disp.innerText += event.target.id.slice(1);
    // console.log("Coordinates "+event.pageX+"Y:"+event.pageY);
}

main();

