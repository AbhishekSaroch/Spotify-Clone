console.log("Welcome To Spotify");
//variables
let masterplay=document.getElementById('masterplay');
let audioElem=new Audio("songs/1.mp3");
let songindex=0;
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songitem=document.getElementsByClassName('songitem');
let songs=[
    {songname:"marrioyo",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"bhuladena",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"tumharekasam",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"salam-e-ishq",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"salam-e-ishq",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"salam-e-ishq",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname:"salam-e-ishq",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
]
masterplay.addEventListener('click',()=>{
    if(audioElem.paused || audioElem.currentTime<=0){
        audioElem.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add( 'fa-pause');
        gif.style.opacity=1;
    }else{
         audioElem.pause();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add( 'fa-play');
        gif.style.opacity=0;
    }
})
audioElem.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElem.currentTime/audioElem.duration)*100);
   myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElem.currentTime=((audioElem.duration*myprogress.value)/100);
})
let songitems=document.getElementsByClassName('songitem');
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=> {
        makeallplays();
        let index=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElem.src=`songs/${index+1}.mp3`;
        audioElem.currentTime=0;
        audioElem.play();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add( 'fa-play');
    })
})


