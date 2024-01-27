function generate(){
    let images=["./assets/Copy of Square Quote Templates – HubSpot.jpg",
    "./assets/Copy of Square Quote Templates – HubSpot (1).jpg",
    "./assets/Copy of Square Quote Templates – HubSpot (2).jpg",
    "./assets/Copy of Square Quote Templates – HubSpot (3).jpg",
    "./assets/Copy of Square Quote Templates – HubSpot (4).jpg",
    "./assets/Copy of Square Quote Templates – HubSpot (5).jpg",
    "./assets/Copy of Vertical Quote Templates – HubSpot (1).jpg",
    "./assets/Copy of Vertical Quote Templates – HubSpot (2).jpg",
    "./assets/Copy of Vertical Quote Templates – HubSpot (3).jpg",
    "./assets/Copy of Vertical Quote Templates – HubSpot.jpg",
    "./assets/Copy of Vertical Quote Templates – HubSpot (4).jpg",
    "./assets/Copy of Horizontal Post Quote Templates – HubSpot (1).jpg",
    "./assets/Copy of Horizontal Post Quote Templates – HubSpot.jpg",
    "./assets/Copy of Horizontal Post Quote Templates – HubSpot (2).jpg",
    "./assets/Copy of Horizontal Post Quote Templates – HubSpot (3).jpg"];
    let i=Math.floor(Math.random()*images.length);
    let img=document.querySelector("img");
    if (img==null){
        img=document.createElement("img");
        img.src=images[i];
        img.style.height="19rem";
        img.style.width="19rem";
        img.style.paddingLeft="2rem"
        let body=document.querySelector("body");
        body.append(img);
    }else{
        img.src=images[i];
    }
}
let btn=document.querySelector("button");
btn.onclick=generate;