function startVideo(){
    part5.playVideo();
}

















// let player;
// function onYouTubeIframeAPIReady(){
//     console.log("api is loaded");
//     player = YT.Player("player",{
//         height:500,
//         width:900,
//         videoId:"9SbnhgjeyXA&ab",
//         playerVars:{
//             playersinline:1,
//             autoplay:0,
//             controls:0,
//         },events:{
//             // onReady : onPlayerReady ,
//             // onStateChange : onPlayerStateChange,
//         }
//     });
// }














































// // <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
// //     <div id="player"></div>
// //     <div id="btn" onclick="startVideo()"></div>
// //     <script>
//       // 2. This code loads the IFrame Player API code asynchronously.
//       var tag = document.createElement('script');

//       tag.src = "https://www.youtube.com/iframe_api";
//       var firstScriptTag = document.getElementsByTagName('script')[0];
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//       // 3. This function creates an <iframe> (and YouTube player)
//       //    after the API code downloads.
//       var player;
//       function onYouTubeIframeAPIReady() {
//         player = new YT.Player('player', {
//           height: '390',
//           width: '640',
//           videoId: '9SbnhgjeyXA&ab',
//           playerVars: {
//             'playsinline': 1
//           },
//           events: {
//             // 'onReady': onPlayerReady,
//             // 'onStateChange': onPlayerStateChange
//           }
//         });
//       }