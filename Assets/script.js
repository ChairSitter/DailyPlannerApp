
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

const nineText =  document.querySelector("#9text");
const tenText =  document.querySelector("#10text");
const elevenText =  document.querySelector("#11text");
const twelveText =  document.querySelector("#12text");
const oneText =  document.querySelector("#1text");
const twoText =  document.querySelector("#2text");
const threeText =  document.querySelector("#3text");
const fourText =  document.querySelector("#4text");
const fiveText =  document.querySelector("#5text");

const nineBut =  document.querySelector("#9but");
const tenBut =  document.querySelector("#10but");
const elevenBut =  document.querySelector("#11but");
const twelveBut =  document.querySelector("#12but");
const oneBut =  document.querySelector("#1but");
const twoBut =  document.querySelector("#2but");
const threeBut =  document.querySelector("#3but");
const fourBut =  document.querySelector("#4but");
const fiveBut =  document.querySelector("#5but");

//gets date div element from HTML, sets the current formatted day/date as the text content
const currentTime = document.querySelector(".lead");
currentTime.textContent = dayjs().format("dddd MMMM DD, YYYY");

//creates a Divider class
const Divider = class {
    #time;
    #div;
    #text;
    #button;
    
    constructor(time, div, text, button) {
        this.#time = time;
        this.#div = div;
        this.#text = text;
        this.#button = button;
    }

    getTime() {
        return this.#time;
    }

    getDiv() {
        return this.#div;
    }

    displayText(string) {

    }

    save() {

    }
}

const nineAm = new Divider(9, nineAmDiv, nineText, nineBut);
const tenAm = new Divider(10, tenAmDiv, tenText, tenBut);
const elevenAm = new Divider(11, elevenAmDiv, elevenText, elevenBut );
const twelvePm = new Divider(12, twelvePmDiv, twelveText, twelveBut );
const onePm = new Divider(13, onePmDiv, oneText, oneBut );
const twoPm = new Divider(14, twoPmDiv, twoText, twoBut );
const threePm = new Divider(15, threePmDiv, threeText, threeBut );
const fourPm = new Divider(16, fourPmDiv, fourText, fourBut );
const fivePm = new Divider(17, fivePmDiv, fiveText, fiveBut );

let arrayHours = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm,
     threePm, fourPm, fivePm];

let currentHour = dayjs().format("H");

const changeColors = () => {
    for (hour of arrayHours) {
        if(currentHour < hour.getTime()){
            hour.getDiv().classList.replace("past", "future");
        } else if(currentHour === hour.getTime()) {
            hour.getDiv().classList.replace("past", "present");
        }
    }
}
changeColors()