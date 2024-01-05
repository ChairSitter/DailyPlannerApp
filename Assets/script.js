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
    getText(){
        return this.#text;
    }
    saveText = () => {
        let data = this.getText().value;
        localStorage.setItem(this.#index, data);
    }
    getButton(){
        return this.#button;
    }
    setText(text){
        this.#text.textContent = text;
    }
    auto = () => {
        this.updateColor();
        this.setText(localStorage.getItem(this.#index));
        this.getButton().addEventListener("click", this.saveText);
    }
}

const nineAm = new HourDivider(0, 9, document.querySelector("#hour-9"), document.querySelector("#text9"), document.querySelector("#but9"));
const tenAm = new HourDivider(1, 10, document.querySelector("#hour-10"), document.querySelector("#text10"), document.querySelector("#but10"));
const elevenAm = new HourDivider(2, 11, document.querySelector("#hour-11"), document.querySelector("#text11"), document.querySelector("#but11"));
const twelvePm = new HourDivider(3, 12, document.querySelector("#hour-12"), document.querySelector("#text12"), document.querySelector("#but12"));
const onePm = new HourDivider(4, 13, document.querySelector("#hour-1"), document.querySelector("#text1"), document.querySelector("#but1"));
const twoPm = new HourDivider(5, 14, document.querySelector("#hour-2"), document.querySelector("#text2"), document.querySelector("#but2"));
const threePm = new HourDivider(6, 15, document.querySelector("#hour-3"), document.querySelector("#text3"), document.querySelector("#but3"));
const fourPm = new HourDivider(7, 16, document.querySelector("#hour-4"), document.querySelector("#text4"), document.querySelector("#but4"));
const fivePm = new HourDivider(8, 17, document.querySelector("#hour-5"), document.querySelector("#text5"), document.querySelector("#but5"));

let arrayHours = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm,
     threePm, fourPm, fivePm];

for (hour of arrayHours){
    hour.auto();
}

