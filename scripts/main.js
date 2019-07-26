function main() {
    console.log("Starting Calculator");

    const main = document.getElementById('App');
    main.innerHTML = '<p>Our elements will be here</p>';

    for (let i=0;i < 16;i++) {
        const myDiv = document.createElement("div");
        myDiv.innerText = "Some Text for Div # "+i;
        myDiv.id = "d"+i;
        myDiv.className = "btn";
        myDiv.className += " numbers";
        main.appendChild(myDiv);
    }
}

main();

