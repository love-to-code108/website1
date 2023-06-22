var myVideo = document.getElementById("video1"); 


function playPause() { 
    if (myVideo.paused) 
      myVideo.play(); 
    else 
      myVideo.pause(); 
  } 

  function hide() {
    document.getElementById('hidden').hidden = true;
    document.getElementById('hiddenBtn').hidden = true;
    const myElement = document.getElementById("part6");
    myElement.style.top = "12.4rem";
    myElement.style.marginBottom = "5.4rem";
    myVideo.play();
 }