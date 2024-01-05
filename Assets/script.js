//gets the time div, text field, and button elements from HTML
const nineAmDiv = document.querySelector("#hour-9");
const tenAmDiv = document.querySelector("#hour-10");
const elevenAmDiv = document.querySelector("#hour-11");
const twelvePmDiv = document.querySelector("#hour-12");
const onePmDiv = document.querySelector("#hour-1");
const twoPmDiv = document.querySelector("#hour-2");
const threePmDiv = document.querySelector("#hour-3");
const fourPmDiv = document.querySelector("#hour-4");
const fivePmDiv = document.querySelector("#hour-5");

const nineText = document.querySelector("#text9");
const tenText = document.querySelector("#text10");
const elevenText = document.querySelector("#text11");
const twelveText = document.querySelector("#text12");
const oneText = document.querySelector("#text1");
const twoText = document.querySelector("#text2");
const threeText = document.querySelector("#text3");
const fourText = document.querySelector("#text4");
const fiveText = document.querySelector("#text5");

const nineBut = document.querySelector("#but9");
const tenBut = document.querySelector("#but10");
const elevenBut = document.querySelector("#but11");
const twelveBut = document.querySelector("#but12");
const oneBut = document.querySelector("#but1");
const twoBut = document.querySelector("#but2");
const threeBut = document.querySelector("#but3");
const fourBut = document.querySelector("#but4");
const fiveBut = document.querySelector("#but5");

//gets date div element from HTML, sets the current formatted day/date as the text content
const currentTime = document.querySelector(".lead");
currentTime.textContent = dayjs().format("dddd MMMM DD, YYYY");
//current hour in 24-hour time for comparison
let currentHour = dayjs().format("H");

//creates a Divider class
const HourDivider = class {
    #index
    #time
    #div
    #text
    #button
    storageData
    
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
        console.log(data)
    }
    getButton(){
        return this.#button;
    }
    setText(text){
        this.#text.textContent = text;
    }
}

//instantiate class objects for each hour
const nineAm = new HourDivider(0, 9, nineAmDiv, nineText, nineBut);
const tenAm = new HourDivider(1, 10, tenAmDiv, tenText, tenBut);
const elevenAm = new HourDivider(2, 11, elevenAmDiv, elevenText, elevenBut);
const twelvePm = new HourDivider(3, 12, twelvePmDiv, twelveText, twelveBut);
const onePm = new HourDivider(4, 13, onePmDiv, oneText, oneBut);
const twoPm = new HourDivider(5, 14, twoPmDiv, twoText, twoBut);
const threePm = new HourDivider(6, 15, threePmDiv, threeText, threeBut);
const fourPm = new HourDivider(7, 16, fourPmDiv, fourText, fourBut);
const fivePm = new HourDivider(8, 17, fivePmDiv, fiveText, fiveBut);

let arrayHours = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm,
     threePm, fourPm, fivePm];

for (let i = 0; i < arrayHours.length; i++){
    arrayHours[i].updateColor();
    arrayHours[i].storageData = localStorage.getItem(i);
    arrayHours[i].setText(arrayHours[i].storageData);
    arrayHours[i].getButton().addEventListener("click", arrayHours[i].saveText);
}

