const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');
const numMin = document.querySelector('.minutes');
const numHour = document.querySelector('.hours');

let i = 360;

function clock() {  

  let time = new Date();

  let seconds = time.getSeconds() * 6;
  let minutes = time.getMinutes() * 6;
  let hours = time.getHours() * 30;

  if(seconds == 0 || i > 360){
    sec.style.transform = `rotate(${i}deg)`;
    i += 6;
  }else{
    sec.style.transform = `rotate(${seconds}deg)`;
  }

  sec.style.transition = `1s linear`;
  min.style.transform = `rotate(${minutes}deg)`;
  hour.style.transform = `rotate(${hours}deg)`;

  numMin.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
  numHour.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();

  setTimeout(() => {clock()}, 1000);
}

clock();

const tabsItems = document.querySelectorAll('.tabsItem');
const tabsContentItem = document.querySelectorAll('.tabsContentItem');


tabsItems.forEach((el, i)=> {

  // el.onclick = function () {  
  //   console.log('Привет!');
  // }
  // el.onclick = function () {  
  //   console.log('Пока!');
  // }

  el.addEventListener('click', (e)=> {
    
    e.preventDefault(); /* Отменяет события поумолчанию */

    // add("ИмяКласса") - Добавляет класс тегу
    // remove("ИмяКласса") - Удаляет класс у тега
    // contains("ИмяКласса") - Проверяет есть ли класс у тега
    // toggle("ИмяКласса") - Удаляет класс если он есть, и добавляет класс если его нет


    tabsItems.forEach((item, x)=>{
      item.classList.remove('active');
      tabsContentItem[x].classList.remove('active');
    })

    tabsItems[i].classList.add('active');
    tabsContentItem[i].classList.add('active');

  })

});

let stopwatchSeconds = document.querySelector('.stopwatch__seconds');
let stopwatchMinutes = document.querySelector('.stopwatch__minutes');
let stopwatchHours = document.querySelector('.stopwatch__hours');
let stopwatchBtn = document.querySelector('.stopwatch__btn');
let tabsLinkSpan = document.querySelector('.tabsLink__span');


stopwatchBtn.addEventListener('click', ()=>{

  if(stopwatchBtn.innerHTML == 'start'){
    stopwatchBtn.innerHTML = 'stop';
    tabsLinkSpan.classList.add('active');
    start();
  }else if(stopwatchBtn.innerHTML == 'stop'){
    stopwatchBtn.innerHTML = 'clear';
    tabsLinkSpan.classList.remove('active');
    tabsLinkSpan.classList.add('active_clear');
  }else if(stopwatchBtn.innerHTML == 'clear'){
    stopwatchBtn.innerHTML = 'start';
    tabsLinkSpan.classList.remove('active_clear');
    stopwatchSeconds.innerHTML = 0;
    stopwatchMinutes.innerHTML = 0;
    stopwatchHours.innerHTML = 0;
  }

});

function start() {  
  setTimeout(() => {
    if(stopwatchBtn.innerHTML == 'stop'){
      stopwatchSeconds.innerHTML++;
      start();
    }
  }, 1);

  if(stopwatchSeconds.innerHTML > 59){
    stopwatchSeconds.innerHTML = 0;
    stopwatchMinutes.innerHTML++;
  }else if(stopwatchMinutes.innerHTML > 59){
    stopwatchMinutes.innerHTML = 0;
    stopwatchHours.innerHTML++;
  }else if(stopwatchHours.innerHTML > 23){
    stopwatchHours.innerHTML = 0;
  }


}
