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
    myVideo.play();
 }