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
    storageData;
    
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
    getButton(){
        return this.#button;
    }
    getText(){
        return this.#text;
    }
    setText(text){
        this.#text.textContent = text;
    }
}

//instantiate class objects for each hour
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
}

nineAm.storageData = localStorage.getItem("Text9am")
tenAm.storageData = localStorage.getItem("Text10am")
elevenAm.storageData = localStorage.getItem("Text11am")
twelvePm.storageData = localStorage.getItem("Text12pm")
onePm.storageData = localStorage.getItem("Text1pm")
twoPm.storageData = localStorage.getItem("Text2pm")
threePm.storageData = localStorage.getItem("Text3pm")
fourPm.storageData = localStorage.getItem("Text4pm")
fivePm.storageData = localStorage.getItem("Text5pm")

nineAm.setText(nineAm.storageData);
tenAm.setText(tenAm.storageData);
elevenAm.setText(elevenAm.storageData);
twelvePm.setText(twelvePm.storageData);
onePm.setText(onePm.storageData);
twoPm.setText(twoPm.storageData);
threePm.setText(threePm.storageData);
fourPm.setText(fourPm.storageData);
fivePm.setText(fivePm.storageData);

//Method to take text from box when button is clicked and save to local storage
const saveText9 = () => {
    let data = nineAm.getText().value;
    localStorage.setItem("Text9am", data);
}
const saveText10 = () => {
    let data = tenAm.getText().value;
    localStorage.setItem("Text10am", data);
}
const saveText11 = () => {
    let data = elevenAm.getText().value;
    localStorage.setItem("Text11am", data);
}
const saveText12 = () => {
    let data = twelvePm.getText().value;
    localStorage.setItem("Text12pm", data);
}
const saveText1 = () => {
    let data = onePm.getText().value;
    localStorage.setItem("Text1pm", data);
}
const saveText2 = () => {
    let data = twoPm.getText().value;
    localStorage.setItem("Text2pm", data);
}
const saveText3 = () => {
    let data = threePm.getText().value;
    localStorage.setItem("Text3pm", data);
}
const saveText4 = () => {
    let data = fourPm.getText().value;
    localStorage.setItem("Text4pm", data);
}
const saveText5 = () => {
    let data = fivePm.getText().value;
    localStorage.setItem("Text5pm", data);
}

nineAm.getButton().addEventListener("click", saveText9);
tenAm.getButton().addEventListener("click", saveText10);
elevenAm.getButton().addEventListener("click", saveText11);
twelvePm.getButton().addEventListener("click", saveText12);
onePm.getButton().addEventListener("click", saveText1);
twoPm.getButton().addEventListener("click", saveText2);
threePm.getButton().addEventListener("click", saveText3);
fourPm.getButton().addEventListener("click", saveText4);
fivePm.getButton().addEventListener("click", saveText5);

