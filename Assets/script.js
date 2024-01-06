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
    auto = () => {
        this.updateColor();
        this.displayText();
        this.#button.addEventListener("click", this.saveText);
    }
}

let arrayHours = [
    new HourDivider(0, 9, document.querySelector("#hour-9"), document.querySelector("#text9"), document.querySelector("#but9")),
    new HourDivider(1, 10, document.querySelector("#hour-10"), document.querySelector("#text10"), document.querySelector("#but10")), 
    new HourDivider(2, 11, document.querySelector("#hour-11"), document.querySelector("#text11"), document.querySelector("#but11")), 
    new HourDivider(3, 12, document.querySelector("#hour-12"), document.querySelector("#text12"), document.querySelector("#but12")), 
    new HourDivider(4, 13, document.querySelector("#hour-1"), document.querySelector("#text1"), document.querySelector("#but1")), 
    new HourDivider(5, 14, document.querySelector("#hour-2"), document.querySelector("#text2"), document.querySelector("#but2")),
    new HourDivider(6, 15, document.querySelector("#hour-3"), document.querySelector("#text3"), document.querySelector("#but3")), 
    new HourDivider(7, 16, document.querySelector("#hour-4"), document.querySelector("#text4"), document.querySelector("#but4")), 
    new HourDivider(8, 17, document.querySelector("#hour-5"), document.querySelector("#text5"), document.querySelector("#but5"))
]

for (hour of arrayHours){
    hour.auto();
}

