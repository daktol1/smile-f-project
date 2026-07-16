const pages = [
    "images/cover.png",
    "images/page1.png",
    "images/page2.png",
    "images/page3.png",
    "images/page4.png",
    "images/page5.png",
    "images/page6.png"
];

let current = 0;

const img = document.getElementById("comicImage");
const progress = document.getElementById("progress");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const loading = document.getElementById("loading");

// --------------------
// 로딩
// --------------------

window.addEventListener("load", () => {

    render();

    setTimeout(() => {

        loading.classList.add("hide");

    }, 1200);

});

// --------------------
// 화면 갱신
// --------------------

function render(){

    img.style.opacity = 0;

    setTimeout(()=>{

        img.src = pages[current];

       

        progress.style.width =
            ((current+1)/pages.length*100)+"%";

        prevBtn.disabled =
            current===0;

        if(current===pages.length-1){

            nextBtn.innerHTML="🏠";

        }else{

            nextBtn.innerHTML="❯";

        }

        img.style.opacity=1;

    },120);

}

// --------------------
// 다음
// --------------------

function nextPage(){

    if(current===pages.length-1){

        current=0;

    }else{

        current++;

    }

    render();

}

// --------------------
// 이전
// --------------------

function prevPage(){

    if(current===0) return;

    current--;

    render();

}

// --------------------

nextBtn.onclick=nextPage;

prevBtn.onclick=prevPage;

// --------------------
// 키보드
// --------------------

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight") nextPage();

    if(e.key==="ArrowLeft") prevPage();

});

// --------------------
// 마우스 휠
// --------------------

let lock=false;

window.addEventListener("wheel",(e)=>{

    if(lock) return;

    lock=true;

    setTimeout(()=>{

        lock=false;

    },450);

    if(e.deltaY>0){

        nextPage();

    }else{

        prevPage();

    }

});

// --------------------
// 모바일 스와이프
// --------------------

let startX=0;

img.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

img.addEventListener("touchend",(e)=>{

    let endX=e.changedTouches[0].clientX;

    let diff=endX-startX;

    if(diff<-70){

        nextPage();

    }

    if(diff>70){

        prevPage();

    }

});
