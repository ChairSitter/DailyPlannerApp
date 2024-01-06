const currentTime = document.querySelector(".lead");
currentTime.textContent = dayjs().format("dddd MMMM DD, YYYY");
let currentHour = dayjs().format("H");

const HourDivider = class {
    #index
    #time
    #div
    #text
    #button
    
    constructor(index, time, div, text, button) {
        this.#index = index;
        this.#time = time;
        this.#div = div;
        this.#text = text;
        this.#button = button;
    }
    updateColor(){
        if(currentHour < this.#time){
            this.#div.classList.replace("past", "future");
        } else if(currentHour == this.#time) {
            this.#div.classList.replace("past", "present");
        }
    }
    displayText(){
        this.#text.textContent = localStorage.getItem(this.#index);
    }
    saveText = () => {
        localStorage.setItem(this.#index, this.#text.value);
    }
    auto(){
        this.updateColor();
        this.displayText();
        this.#button.addEventListener("click", this.saveText);
    }
}

    let hours = [];
for(let i = 0; i < 9; i++){
    hours[i] = new HourDivider(i, (i + 9), document.querySelector(`#hour${i + 9}`), document.querySelector(`#text${i + 9}`), document.querySelector(`#but${i + 9}`));
    hours[i].auto();
}