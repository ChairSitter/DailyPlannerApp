
//save formatted date to a variable
//console log it to make sure it's correct

//append to page
    //create an element
    //set the inner text to that variable
    //append the element to the page
const nineAmDiv = document.querySelector("#hour-9");
const tenAmDiv = document.querySelector("#hour-10");
const elevenAmDiv = document.querySelector("#hour-11");
const twelvePmDiv = document.querySelector("#hour-12");
const onePmDiv = document.querySelector("#hour-1");
const twoPmDiv = document.querySelector("#hour-2");
const threePmDiv = document.querySelector("#hour-3");
const fourPmDiv = document.querySelector("#hour-4");
const fivePmDiv = document.querySelector("#hour-5");

const currentTime = document.querySelector(".lead");
currentTime.textContent = dayjs().format("dddd MMMM DD, YYYY");

const Divider = class {
    #time;
    #div;
    #text;
    
    constructor(time, div) {
        this.#time = time;
        this.#div = div;
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

let currentHour = dayjs().format("H");

const nineAm = new Divider(9, nineAmDiv);
const tenAm = new Divider(10, tenAmDiv);
const elevenAm = new Divider(11, elevenAmDiv);
const twelvePm = new Divider(12, twelvePmDiv);
const onePm = new Divider(13, onePmDiv);
const twoPm = new Divider(14, twoPmDiv);
const threePm = new Divider(15, threePmDiv);
const fourPm = new Divider(16, fourPmDiv);
const fivePm = new Divider(17, fivePmDiv);

let arrayHours = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm,
     threePm, fourPm, fivePm];

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