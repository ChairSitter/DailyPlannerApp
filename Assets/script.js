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
if(nineAm.storageData){
    nineAm.setText(JSON.parse(nineAm.storageData));
    nineAm.getText.textContent = nineAm;
}

tenAm.storageData = localStorage.getItem("Text10am")
if(tenAm.storageData){
    tenAm.setText(JSON.parse(tenAm.storageData));
    tenAm.getText.textContent = tenAm;
}

elevenAm.storageData = localStorage.getItem("Text11am")
if(elevenAm.storageData){
    elevenAm.setText(JSON.parse(elevenAm.storageData));
    elevenAm.getText.textContent = elevenAm;
}

twelvePm.storageData = localStorage.getItem("Text12pm")
if(twelvePm.storageData){
    twelvePm.setText(JSON.parse(twelvePm.storageData));
    twelvePm.getText.textContent = twelvePm;
}

onePm.storageData = localStorage.getItem("Text1pm")
if(onePm.storageData){
    onePm.setText(JSON.parse(onePm.storageData));
    onePm.getText.textContent = onePm;
}

twoPm.storageData = localStorage.getItem("Text2pm")
if(twoPm.storageData){
    twoPm.setText(JSON.parse(twoPm.storageData));
    twoPm.getText.textContent = twoPm;
}

threePm.storageData = localStorage.getItem("Text3pm")
if(threePm.storageData){
    threePm.setText(JSON.parse(threePm.storageData));
    threePm.getText.textContent = threePm;
}

fourPm.storageData = localStorage.getItem("Text4pm")
if(fourPm.storageData){
    fourPm.setText(JSON.parse(fourPm.storageData));
    fourPm.getText.textContent = fourPm;
}

fivePm.storageData = localStorage.getItem("Text5pm")
if(fivePm.storageData){
    fivePm.setText(JSON.parse(fivePm.storageData));
    fivePm.getText.textContent = fivePm;
}

//Method to take text from box when button is clicked and save to local storage
const saveText9 = () => {
    nineAm.storageData = localStorage.getItem("Text9am");
    if(nineAm.storageData){
        nineAm.storageData = JSON.parse(nineAm.storageData);
        nineAm.setText(nineAm.storageData);
    } else {
        nineAm.storageData = [];
    }
    let stringifiedData = JSON.stringify(nineAm.getText().value);
    console.log(nineAm.getText().value)
    console.log(stringifiedData)
    localStorage.setItem("Text9am", stringifiedData);
}
const saveText10 = () => {
    tenAm.storageData = localStorage.getItem("Text10am");
    if(tenAm.storageData){
        tenAm.storageData = JSON.parse(tenAm.storageData);
        tenAm.setText(tenAm.storageData);
    } else {
        tenAm.storageData = [];
    }
    let stringifiedData = JSON.stringify(tenAm.getText().value);
    console.log(tenAm.getText().value)
    console.log(stringifiedData)
    localStorage.setItem("Text10am", stringifiedData);
}
const saveText11 = () => {
    elevenAm.storageData = localStorage.getItem("Text11am");
    if(elevenAm.storageData){
        elevenAm.storageData = JSON.parse(elevenAm.storageData);
        elevenAm.setText(elevenAm.storageData);
    } else {
        elevenAm.storageData = [];
    }
    let stringifiedData = JSON.stringify(elevenAm.getText().value);
    console.log(elevenAm.getText().value)
    console.log(stringifiedData)
    localStorage.setItem("Text11am", stringifiedData);
}
const saveText12 = () => {
    twelvePm.storageData = localStorage.getItem("Text12pm");
    if(twelvePm.storageData){
        twelvePm.storageData = JSON.parse(twelvePm.storageData);
        twelvePm.setText(twelvePm.storageData);
    } else {
        twelvePm.storageData = [];
    }
    let stringifiedData = JSON.stringify(twelvePm.getText().value);
    console.log(twelvePm.getText().value)
    console.log(stringifiedData)
    localStorage.setItem("Text12pm", stringifiedData);
}
const saveText1 = () => {
    onePm.storageData = localStorage.getItem("Text1pm");
    if(onePm.storageData){
        onePm.storageData = JSON.parse(onePm.storageData);
        onePm.setText(onePm.storageData);
    } else {
        onePm.storageData = [];
    }
    let stringifiedData = JSON.stringify(onePm.getText().value);
    console.log(onePm.getText().value)
    console.log(stringifiedData)
    localStorage.setItem("Text1pm", stringifiedData);
}
const saveText2 = () => {
    twoPm.storageData = localStorage.getItem("Text2pm");
    if(twoPm.storageData){
        twoPm.storageData = JSON.parse(twoPm.storageData);
        twoPm.setText(twoPm.storageData);
    } else {
        twoPm.storageData = [];
    }
    let stringifiedData = JSON.stringify(twoPm.getText().value);
    console.log(twoPm.getText().value)
    console.log(stringifiedData)
    localStorage.setItem("Text2pm", stringifiedData);
}
const saveText3 = () => {
    threePm.storageData = localStorage.getItem("Text3pm");
    if(threePm.storageData){
        threePm.storageData = JSON.parse(threePm.storageData);
        threePm.setText(threePm.storageData);
    } else {
        threePm.storageData = [];
    }
    let stringifiedData = JSON.stringify(threePm.getText().value);
    console.log(threePm.getText().value)
    console.log(stringifiedData)
    localStorage.setItem("Text3pm", stringifiedData);
}
const saveText4 = () => {
    fourPm.storageData = localStorage.getItem("Text4pm");
    if(fourPm.storageData){
        fourPm.storageData = JSON.parse(fourPm.storageData);
        fourPm.setText(fourPm.storageData);
    } else {
        fourPm.storageData = [];
    }
    let stringifiedData = JSON.stringify(fourPm.getText().value);
    console.log(fourPm.getText().value)
    console.log(stringifiedData)
    localStorage.setItem("Text4pm", stringifiedData);
}
const saveText5 = () => {
    fivePm.storageData = localStorage.getItem("Text5pm");
    if(fivePm.storageData){
        fivePm.storageData = JSON.parse(fivePm.storageData);
        fivePm.setText(fivePm.storageData);
    } else {
        fivePm.storageData = [];
    }
    let stringifiedData = JSON.stringify(fivePm.getText().value);
    console.log(fivePm.getText().value)
    console.log(stringifiedData)
    localStorage.setItem("Text5pm", stringifiedData);
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

