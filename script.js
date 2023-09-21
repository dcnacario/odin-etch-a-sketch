
const container = document.querySelector(".container");
const setting = document.querySelector(".setting");
const btnAsk = document.createElement("button");
const btnAskText = document.createTextNode("How many Per Rows");
btnAsk.appendChild(btnAskText);
setting.appendChild(btnAsk);



for(let i = 1 ; i < 272  ; i++){
    const div = document.createElement("div");
    div.className = "child";
    if(i % (16+1) === 0){
        div.style.cssText = "border: 0; height: 0; width: 100%";
    }
    else {
        div.style.cssText = "border: 0.5px solid #CCC8AA; aspect-ratio: 1/1; flex:1";
    }
    container.appendChild(div);
}

const gridPrompt = btnAsk.addEventListener("click", ()=>{
    let numberPerRow = Number(prompt("How many rows(1-100)?"));
    if(numberPerRow > 100 || numberPerRow < 1){
         numberPerRow = Number(prompt("Please input(1-100)!"));
    }
    else{
        const total = (numberPerRow * numberPerRow) + numberPerRow;
        const mod = numberPerRow + 1;
        let child = container.firstElementChild;
        while(child) {
            container.removeChild(child);
            child = container.firstElementChild;
        }
        for(let i = 1 ; i < total  ; i++){
            const div = document.createElement("div");
            div.className = "child";
            if(i % mod === 0){
                div.style.cssText = "border: 0; height: 0; width: 100%";
            }
            else {
                div.style.cssText = "border: 0.5px solid #CCC8AA; aspect-ratio: 1/1; flex:1";
            }
            container.appendChild(div);
        }
    }
});

let parentContainer = document.getElementById("container");
let childContainer = parentContainer.children
console.log(childContainer);

parentContainer.addEventListener("mouseover", (event)=>{
    const childElement = event.target;
    
    for (let j = 0; j < childContainer.length; j++) {
        if (childElement === childContainer[j]) {
          childContainer[j].style.backgroundColor = '#7D7C7C';
        }
    }
});








