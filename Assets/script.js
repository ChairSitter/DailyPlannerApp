const currentTime = document.querySelector(".lead");
currentTime.textContent = dayjs().format("dddd MMMM DD, YYYY");
let currentHour = dayjs().format("H");

const HourDivider = class {
    #time
    #div
    #text
    #button
    constructor(time, div, text, button) {
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
        this.#text.textContent = localStorage.getItem(this.#time);
    }
    saveText = () => {
        localStorage.setItem(this.#time, this.#text.value);
    }
    auto(){
        this.updateColor();
        this.displayText();
        this.#button.addEventListener("click", this.saveText);
    }
}

    let hours = [];
for(let i = 9; i < 18; i++){
    hours[i] = new HourDivider((i), document.querySelector(`#hour${i}`), document.querySelector(`#text${i}`), document.querySelector(`#but${i}`));
    hours[i].auto();
}