const state = {
    result: 0,
    current: "",
    prev: "",
    action: "",
    lastkey: ""
};

function main() {
    console.log("Starting Calculator");
    renderView();
    setUpListeners();
}

function setUpListeners() {
    console.log("Setting Up Listeners");
    const allBtns = document.querySelectorAll("button"); //TODO query only App buttons
    // alternative const allBtns = document.getElementsByTagName("button")
    // for(let i=0; i < allBtns.length; i++) {
    //     allBtns[i].onmousedown = onMouseDown;
    //     //alternative addEventListener (look it up MDN)
    //     //someElement.addEventListener("mousedown", onMouseDown);
    //     //this way we can add many listeners to
    // }
    allBtns.forEach((bt) => { bt.onmousedown = onMouseDown });

    //upListener
    const myMCel = document.querySelector("#mkey-MC");
    myMCel.onmouseup = (ev) => {console.log('You Released'+ev.target.innerText)};

    //FIXME better to just delete unused code and let git handle revisions
    // const h1 = document.querySelector("h1");
    // h1.addEventListener("click", ev => {console.log('Clicked h1');});
    // h1.addEventListener("click", ev => {console.log('Clicked h1 and doing more');})
    // document.querySelector('header').addEventListener("click", ev => {console.log('clicked on header')});
    // document.body.addEventListener("click", ev => {
    //     console.log('Clicked body  anywhere in the document');
    //     console.log('Origin of this even was:'+ev.target.innerText);
    // });
    // document.addEventListener("click", ev => {console.log('Clicked anywhere in the document');})
    const mySlider = document.querySelector("#myRange");
    mySlider.mysecret = 42;
    mySlider.oninput = onSliderInput;
    document.getElementById("myRange2").oninput = onSliderInput;
}

function onSliderInput(ev) {
    console.log("My slider value is:"+this.value);
    console.log("My slider target value is:"+ev.target.value);
    console.log("My slider current target value is:"+ev.currentTarget.value);
    console.log("I know the secret of this! "+this.mysecret);
    // document.querySelector(".display").innerText = ev.target.value;
    state.result = ev.target.value;
    renderView();
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

function isLastKeyAction() {
    switch (state.lastkey) {
        case "key-MINUS":
        case "key-PLUS":
        case "key-EQUAL":
            return true;
    }
    return false;
    //TODO add more action keys
}
function onMouseDown(event) {
    console.log("You pressed some div"+event.target.id);
    
    switch (event.target.id) {
        case "key-0":
        case "key-1":
        case "key-2":
        case "key-3":
        case "key-4":
        case "key-5":
        case "key-6":
        case "key-7":
        case "key-8":
        case "key-9":
            if (isLastKeyAction()) {
                state.current = "";
            }
            state.current += event.target.id[event.target.id.length-1];
            console.log("CURRENT:"+state.current);
            state.result = parseInt(state.current);
            break;
        case "key-C":
        case "key-CE":
            state.result = 0;
            state.prev = "";
            state.current = "";
            state.action = "";
            state.result = state.current ? parseInt(state.current):0;
            break;
        case "key-PLUS":
            state.prev = state.result;
            state.action = "+";
            break;
        case "key-MINUS":
            state.prev = state.result;
            state.action = "-";
            break;
        case "key-EQUAL":
            switch (state.action) {
                case "+":
                    state.result += state.prev;
                    break;
                case "-":
                    // console.log(state.result);
                    // console.log(state.prev);
                    state.result = state.prev - state.result;
                    break;
            }
        default:
            console.log("DEFAULT"+event.target.id);
            break;
    }
    // alternative to below const disp = document.querySelector(".display");
    
    //FIXME possible that we might not need to render after each mouseDown
    state.lastkey = event.target.id;
    renderView();
}

function onHeaderClick() {
    console.log('you clicked on header 2');
}
main();

