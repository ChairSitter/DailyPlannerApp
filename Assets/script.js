
//append to page
    //create an element
    //set the inner text to that variable
    //append the element to the page

//gets the time div elements from HTML
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
    #time;
    #div;
    #text;
    #button;
    #storageData;
    
    constructor(time, div, text, button) {
        this.#time = time;
        this.#div = div;
        this.#text = text;
        this.#button = button;
    }

    updateColor() {
        if(currentHour < this.#time){
            this.#div.classList.replace("past", "future");
        } else if(currentHour == this.#time) {
            this.#div.classList.replace("past", "present");
        }
    }

    //Method to take text from box when button is clicked and save to local storage
    saveText(){
        this.#storageData = localStorage.getItem("saveData");
        if(this.#storageData){
            console.log(this.#storageData)
        } else {
            console.log('there is not data')
        }
    }

    //Method to display text from local storage
    displayText(){
        this.#text.textContent = localStorage.getItem("saveData");
    }

    clickListener() {
        this.#button.addEventListener("click", this.saveText);
    }

    // getButton() {
    //     return this.#button;
    // }
    // getTime() {
    //     return this.#time;
    // }

    // getDiv() {
    //     return this.#div;
    // }
}
//instantiates class objects for each hour
const nineAm = new HourDivider(9, nineAmDiv, nineText, nineBut);
const tenAm = new HourDivider(10, tenAmDiv, tenText, tenBut);
const elevenAm = new HourDivider(11, elevenAmDiv, elevenText, elevenBut);
const twelvePm = new HourDivider(12, twelvePmDiv, twelveText, twelveBut);
const onePm = new HourDivider(13, onePmDiv, oneText, oneBut);
const twoPm = new HourDivider(14, twoPmDiv, twoText, twoBut);
const threePm = new HourDivider(15, threePmDiv, threeText, threeBut);
const fourPm = new HourDivider(16, fourPmDiv, fourText, fourBut);
const fivePm = new HourDivider(17, fivePmDiv, fiveText, fiveBut);

let arrayHours = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm,
     threePm, fourPm, fivePm];

for (hour of arrayHours) {
    hour.updateColor();
    hour.clickListener();
}
