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
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const loading = document.getElementById("loading");

function render() {

    img.style.opacity = "0";

    setTimeout(() => {

        img.src = pages[current];

        img.onload = () => {
            img.style.opacity = "1";
        };

    },120);

    prevBtn.style.display = current === 0 ? "none" : "flex";

    if(current === pages.length-1){
        nextBtn.innerHTML="↺";
    }else{
        nextBtn.innerHTML="❯";
    }
}

nextBtn.onclick = ()=>{

    if(current === pages.length-1){

        current = 0;

    }else{

        current++;

    }

    render();

};

prevBtn.onclick = ()=>{

    if(current>0){

        current--;

        render();

    }

};

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight") nextBtn.click();

    if(e.key==="ArrowLeft") prevBtn.click();

});

let startX=0;

img.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

img.addEventListener("touchend",(e)=>{

    const endX=e.changedTouches[0].clientX;

    if(endX-startX>60) prevBtn.click();

    if(startX-endX>60) nextBtn.click();

});

let wheelLock=false;

window.addEventListener("wheel",(e)=>{

    if(wheelLock) return;

    wheelLock=true;

    if(e.deltaY>0){

        nextBtn.click();

    }else{

        prevBtn.click();

    }

    setTimeout(()=>wheelLock=false,350);

});

window.onload=()=>{

    render();

    setTimeout(()=>{

        loading.classList.add("hide");

    },700);

};
