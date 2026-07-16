const pages = [

"page1.png",
"page2.png",
"page3.png",
"page4.png",
"page5.png",
"page6.png"

];

const viewer = document.getElementById("viewer");

document
.getElementById("startBtn")
.onclick = function(){

    document.getElementById("cover").style.display="none";

    viewer.style.display="block";

    pages.forEach(function(file){

        const div=document.createElement("div");

        div.className="page";

        const img=document.createElement("img");

        img.src="images/"+file;

        img.loading="lazy";

        div.appendChild(img);

        viewer.appendChild(div);

    });

};
