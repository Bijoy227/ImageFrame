"use strict";

/*
Created By : Bijoy Chandra Nath
*/

/*----------------------------- Selectors -------------------------------------------- */

const imageFrame = document.querySelector(".imageframe");
const body = document.querySelector("body");
const mainContainer = document.querySelector(".main-container");
const imageFrameContainer = document.querySelector(".imageframe-container");

/* get margin of the content */
const content = document.querySelector(".content");
const contentStyle = window.getComputedStyle(content);
let contentMargin = parseInt(contentStyle.margin);

/* Lets set the custom margin */
content.style.margin = "100px";
contentMargin = parseInt(content.style.margin);

/* ----------------------------- Adding Event on Window Rezise------------------------- */
let screenWidth = window.innerWidth;
function reportWindowSize() {
    screenWidth = window.innerWidth;
    if (screenWidth >= 1017 && screenWidth <= 1116) {
        WindowResizeOperation("90px");
    } else if (screenWidth > 1116) {
        WindowResizeOperation("100px");
    } else if (screenWidth >= 926 && screenWidth <= 1018) {
        WindowResizeOperation("80px");
    } else if (screenWidth >= 836 && screenWidth <= 925) {
        WindowResizeOperation("70px");
    } else if (screenWidth >= 745 && screenWidth <= 924) {
        WindowResizeOperation("60px");
    } else if (screenWidth >= 656 && screenWidth <= 744) {
        WindowResizeOperation("50px");
    } else if (screenWidth >= 566 && screenWidth <= 655) {
        WindowResizeOperation("45px");
    } else if (screenWidth >= 537 && screenWidth <= 566) {
        WindowResizeOperation("42px");
    } else if (screenWidth >= 516 && screenWidth <= 536) {
        WindowResizeOperation("40px");
    } else if (screenWidth >= 500 && screenWidth <= 515) {
        WindowResizeOperation("38px");
    } else if (screenWidth >= 475 && screenWidth <= 499) {
        WindowResizeOperation("36px");
    } else if (screenWidth >= 456 && screenWidth <= 474) {
        WindowResizeOperation("34px");
    } else if (screenWidth >= 436 && screenWidth <= 455) {
        WindowResizeOperation("32px");
    } else if (screenWidth >= 420 && screenWidth <= 435) {
        WindowResizeOperation("30px");
    } else if (screenWidth >= 405 && screenWidth <= 419) {
        WindowResizeOperation("29px");
    } else if (screenWidth >= 395 && screenWidth <= 404) {
        WindowResizeOperation("28px");
    } else if (screenWidth >= 333 && screenWidth <= 394) {
        WindowResizeOperation("20px");
    } else if (screenWidth >= 322 && screenWidth <= 332) {
        WindowResizeOperation("19px");
    } else if (screenWidth >= 315 && screenWidth <= 321) {
        WindowResizeOperation("18px");
    } else if (screenWidth >= 300 && screenWidth <= 314) {
        WindowResizeOperation("17px");
    } else {
        // nothing here....
    }

    /* Left Side */
    ImageColumn();
    ImageLowerRow();
}
window.onresize = reportWindowSize;
window.onload = reportWindowSize;

// Window Resize Operation
function WindowResizeOperation(marginValue) {
    imageFrame.innerHTML = " ";
    content.style.margin = marginValue;
    contentMargin = parseInt(content.style.margin);
    mainContainer.style.maxWidth = `${contentMargin * 10}px`;
    ImageUpperRow();
}

/*------------------------------- Rander Images on Upper Row and Lower Row ----------------------- */
function ImageUpperRow() {
    let left = 0;
    for (let itr = 1; itr <= 10; itr++) {
        let imgDiv = document.createElement("div");
        imgDiv.dataset.index = `${itr}`;
        imgDiv.style.width = `${contentMargin}px`;
        imgDiv.style.height = `${contentMargin}px`;
        imgDiv.style.left = `${left}px`;
        imgDiv.style.position = "absolute";
        imgDiv.style.display = "block";

        // innerHTML
        imgDiv.innerHTML = `<img src="images/${itr}.jpg" alt="" />`;
        imageFrame.append(imgDiv);

        // increment left
        left = left + contentMargin;
    }
}

ImageUpperRow();

function ImageLowerRow() {
    let left = 0;
    const contStyle = window.getComputedStyle(content);
    let topValue = parseInt(contStyle.height) + parseInt(contStyle.margin);
    for (let itr = 11; itr <= 20; itr++) {
        let imgDiv = document.createElement("div");
        imgDiv.dataset.index = `${itr}`;
        imgDiv.style.width = `${contentMargin}px`;
        imgDiv.style.height = `${contentMargin}px`;
        imgDiv.style.left = `${left}px`;
        imgDiv.style.top = `${topValue}px`;
        imgDiv.style.position = "absolute";
        imgDiv.style.display = "block";

        // innerHTML
        imgDiv.innerHTML = `<img src="images/${itr}.jpg" alt="" />`;
        imageFrame.append(imgDiv);

        // increment left
        left = left + contentMargin;
    }
}

/*------------------ Rander Images on the Both Sides of the Content  ----------------------*/

// Calculate Content Height
function CalculateContentHeight() {
    const contentStyle = window.getComputedStyle(content);
    const contentHeight = parseInt(contentStyle.height);
    const contentMargin = parseInt(contentStyle.margin);
    const numOfImage = Math.ceil(contentHeight / contentMargin);

    const imgHeight = numOfImage * contentMargin;
    imageFrameContainer.style.maxHeight = `${imgHeight}px`;
    return numOfImage;
}

function ImageColumn() {
    // Call the CalculateContentHeight() method
    const actualNumOfImage = CalculateContentHeight();
    const numOfImage = actualNumOfImage + 20;
    let left = 0;
    let topValue = contentMargin;

    // for left side images
    for (let itr = 21; itr <= numOfImage; itr++) {
        let imgDiv = document.createElement("div");
        imgDiv.dataset.index = `${itr}`;
        imgDiv.style.width = `${contentMargin}px`;
        imgDiv.style.height = `${contentMargin}px`;
        imgDiv.style.left = `${left}px`;
        imgDiv.style.top = `${topValue}px`;
        imgDiv.style.position = "absolute";
        imgDiv.style.display = "block";

        // inner HTML
        imgDiv.innerHTML = `<img src="images/${itr}.jpg" alt="" />`;
        imageFrame.append(imgDiv);

        // increment top
        topValue = topValue + contentMargin;
    }

    // for right side images
    const contStyle = window.getComputedStyle(content);
    topValue = contentMargin;
    left = parseInt(contStyle.width) + contentMargin;
    for (
        let itr = numOfImage + 1;
        itr <= numOfImage + actualNumOfImage;
        itr++
    ) {
        let imgDiv = document.createElement("div");
        imgDiv.dataset.index = `${itr}`;
        imgDiv.style.width = `${contentMargin}px`;
        imgDiv.style.height = `${contentMargin}px`;
        imgDiv.style.left = `${left}px`;
        imgDiv.style.top = `${topValue}px`;
        imgDiv.style.position = "absolute";
        imgDiv.style.display = "block";

        // inner HTML
        imgDiv.innerHTML = `<img src="images/${itr}.jpg" alt="" />`;
        imageFrame.append(imgDiv);

        // increment top
        topValue = topValue + contentMargin;
    }
}

ImageColumn();
ImageLowerRow();

/*------------------------------------- Random Swaping -------------------------------------------*/

function SwapImages() {
    const randomNumber = Math.trunc(Math.random() * 20) + 1;
    let f = 0,
        s = 0;
    if (randomNumber === 10 || randomNumber === 20) {
        s = randomNumber;
        f = randomNumber - 1;
    } else {
        f = randomNumber;
        s = randomNumber + 1;
    }
    // Get an element using data-index attribute
    const temp1 = document.querySelector(`[data-index='${f}']`);
    let temp1Left = temp1.style.left;
    let dataIndex1 = temp1.dataset.index;
    const temp2 = document.querySelector(`[data-index='${s}']`);
    let temp2Left = temp2.style.left;
    let dataIndex2 = temp2.dataset.index;

    temp1.classList.add("imgTransition");
    temp2.classList.add("imgTransition");
    // swap value
    let temp = temp1Left;
    temp1.style.left = temp2.style.left;
    temp2.style.left = temp;

    // swap data index
    temp = dataIndex1;
    temp1.dataset.index = temp2.dataset.index;
    temp2.dataset.index = temp;
}

setInterval(SwapImages, 2000);

/* If the tab is inactive */

/* var myInerval;
function StartSwaping() {
    console.log("Active");
    myInerval = window.setTimeout(SwapImages, 2000);
}

function StopSwapping() {
    window.clearInterval(myInerval);
}

window.addEventListener("focus", StartSwaping);
window.addEventListener("blur", StopSwapping);
 */

// window.addEventListener('load', onLoadFunction);
// function onLoadFunction(e){

// }
