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
const page = document.getElementById("pageNumber");
const viewer = document.getElementById("viewer");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// --------------------
// 로딩
// --------------------

window.onload = () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

        viewer.classList.remove("hidden");

        render();

    },1200);

};

// --------------------
// 화면 출력
// --------------------

function render(){

    img.src = pages[current];

    page.textContent = `${current+1} / ${pages.length}`;

    prevBtn.style.visibility =
        current===0 ? "hidden":"visible";

    if(current===pages.length-1){

        nextBtn.textContent="🏠";

    }else{

        nextBtn.textContent="❯";

    }

}

// --------------------
// 다음
// --------------------

function nextPage(){

    if(current===pages.length-1){

        current=0;

        render();

        return;

    }

    img.classList.add("slide-left");

    setTimeout(()=>{

        current++;

        render();

        img.classList.remove("slide-left");

    },180);

}

// --------------------
// 이전
// --------------------

function prevPage(){

    if(current===0) return;

    img.classList.add("slide-right");

    setTimeout(()=>{

        current--;

        render();

        img.classList.remove("slide-right");

    },180);

}

nextBtn.onclick = nextPage;

prevBtn.onclick = prevPage;

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

let wheelLock=false;

window.addEventListener("wheel",(e)=>{

    if(wheelLock) return;

    wheelLock=true;

    setTimeout(()=>wheelLock=false,400);

    if(e.deltaY>0){

        nextPage();

    }else{

        prevPage();

    }

});

// --------------------
// 스와이프
// --------------------

let startX=0;

img.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

img.addEventListener("touchend",(e)=>{

    let endX=e.changedTouches[0].clientX;

    let diff=endX-startX;

    if(diff<-60){

        nextPage();

    }

    if(diff>60){

        prevPage();

    }

});
