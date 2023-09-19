
const container = document.querySelector(".container");
const setting = document.querySelector(".setting");
const btnAsk = document.createElement("button");
const btnAskText = document.createTextNode("How many Per Rows");
btnAsk.appendChild(btnAskText);
setting.appendChild(btnAsk);


const gridPrompt = btnAsk.addEventListener("click", ()=>{
    let numberPerRow = Number(prompt("How many rows?"));
    const total = (numberPerRow * numberPerRow) + numberPerRow;
    const mod = numberPerRow + 1;
    let child = container.firstElementChild;
    while(child) {
        container.removeChild(child);
        child = container.firstElementChild;
    }
    for(let i = 1 ; i < total  ; i++){
        const div = document.createElement("div");
        if(i % mod === 0){
            div.style.cssText = "border: 0; height: 0; width: 100%";
        }
        else {
            div.style.cssText = "border: 1px solid black; aspect-ratio: 1/1; flex:1";
        }
        container.appendChild(div);
    }
    
});


