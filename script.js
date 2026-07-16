// =====================================
// Smile F Webtoon Viewer
// =====================================

// 이미지 목록
const pages = [
    "page1.png",
    "page2.png",
    "page3.png",
    "page4.png",
    "page5.png",
    "page6.png"
];

let currentPage = 0;

// 요소
const loading = document.getElementById("loading");
const cover = document.getElementById("cover");
const viewer = document.getElementById("viewer");

const comicImage = document.getElementById("comicImage");

const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


// =====================================
// 이미지 미리 로딩
// =====================================

pages.forEach(file => {

    const img = new Image();

    img.src = "images/" + file;

});


// =====================================
// 로딩 → Cover
// =====================================

window.addEventListener("load", () => {

    setTimeout(() => {

        loading.classList.add("hidden");

        cover.classList.remove("hidden");

    }, 700);

});


// =====================================
// Cover → Viewer
// =====================================

startBtn.addEventListener("click", () => {

    cover.classList.add("hidden");

    viewer.classList.remove("hidden");

    currentPage = 0;

    showPage();

});


// =====================================
// 페이지 표시
// =====================================

function showPage(){

    comicImage.style.opacity = 0;

    setTimeout(()=>{

        comicImage.src = "images/" + pages[currentPage];

    },100);

}


// 이미지 로드 후 Fade

comicImage.onload = function(){

    comicImage.style.transition = "opacity .25s";

    comicImage.style.opacity = 1;

    prevBtn.disabled = currentPage===0;

    if(currentPage===pages.length-1){

        nextBtn.textContent="처음으로";

    }else{

        nextBtn.textContent="다음 ▶";

    }

}


// =====================================
// 다음
// =====================================

nextBtn.addEventListener("click",()=>{

    // 마지막 페이지

    if(currentPage===pages.length-1){

        viewer.classList.add("hidden");

        loading.classList.remove("hidden");

        setTimeout(()=>{

            loading.classList.add("hidden");

            cover.classList.remove("hidden");

            currentPage=0;

        },500);

        return;

    }

    currentPage++;

    showPage();

});


// =====================================
// 이전
// =====================================

prevBtn.addEventListener("click",()=>{

    if(currentPage===0) return;

    currentPage--;

    showPage();

});


// =====================================
// 키보드
// =====================================

document.addEventListener("keydown",(e)=>{

    if(viewer.classList.contains("hidden")) return;

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});


// =====================================
// 모바일 스와이프
// =====================================

let startX=0;

let endX=0;

comicImage.addEventListener("touchstart",(e)=>{

    startX=e.changedTouches[0].clientX;

});

comicImage.addEventListener("touchend",(e)=>{

    endX=e.changedTouches[0].clientX;

    if(startX-endX>60){

        nextBtn.click();

    }

    if(endX-startX>60){

        prevBtn.click();

    }

});
