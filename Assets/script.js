//Display today's date
//dayjs: probably use "now" and format it (read the docs)

//save formatted date to a variable
//console log it to make sure it's correct

//append to page
    //create an element
    //set the inner text to that variable
    //append the element to the page
const currentTime = document.querySelector(".lead");
currentTime.textContent = dayjs().format("MM/DD/YYYY");

const Divider = class {
    #time;
    #color;
    #text;

    constructor(time) {
        this.#time = time;
    }

    getTime() {
        return this.#time;
    }

    changeColor(color) {
        this.#color = color;
    }

    displayText(string) {

    }

    save() {

    }


}

let currentHour = dayjs().format("H");

const nineAm = new Divider(9);
const tenAm = new Divider(10);
const elevenAm = new Divider(11);
const twelvePm = new Divider(12);
const onePm = new Divider(13);
const twoPm = new Divider(14);
const threePm = new Divider(15);
const fourPm = new Divider(16);
const fivePm = new Divider(17);
console.log(onePm.getTime());
console.log(currentHour);

let arrayHours = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm,
     threePm, fourPm, fivePm];

const changeColors = () => {
    for (hour of arrayHours) {
        if(currentHour < hour.getTime){
            hour.changeColor(green);
        }
    }
}
changeColors()