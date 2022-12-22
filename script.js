const timeContainer = document.getElementById("time-container");
const start_date = "10-03-2022";
const start_day_date = new Date(start_date);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
  const now = new Date();
  const difference = Math.floor(
    (now.getTime() - start_day_date.getTime()) / 1000 / 60 / 60
  );

  timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);

function changeImg1(){
 document.getElementById("img1").src = "./resources/images/about_image.color.jpg";
};
function changeImg2(){
 document.getElementById("img1").src = "./resources/images/about_image.jpg";
};

function changeImg3() {
 document.getElementById("img3").src = "./resources/images/websiteproject_brainnest.color.png";
};
function changeImg4() {
 document.getElementById("img3").src = "./resources/images/websiteproject_brainnest.png";
};
function changeImg5() {
 document.getElementById("img5").src = "./resources/images/websiteproject_dogfriendly.color.png";
};
function changeImg6() {
 document.getElementById("img5").src = "./resources/images/websiteproject_dogfriendly.png";
};
function changeImg7() {
 document.getElementById("img7").src = "./resources/images/calculator.color.png";
};
function changeImg8() {
 document.getElementById("img7").src = "./resources/images/calculator.png";
};
function changeImg9() {
  document.getElementById("img8").src = "./resources/images/Diddit.color.png";
 };
 function changeImg10() {
  document.getElementById("img8").src = "./resources/images/Diddit.png";
 };

const projectContainers= [...document.querySelectorAll('.projects-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

projectContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

