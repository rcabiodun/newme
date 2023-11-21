<!DOCTYPE html>
<html>
  <head>
    <title>AR.js Image Tracking</title>
    <script src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1.3.0/dist/aframe-master.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
  </head>
  <body style="margin : 0px; overflow: hidden;">
    <a-scene embedded arjs='sourceType: webcam;'>
      <a-image src="userHero.jpg" position="0 0 -1"></a-image>
      <a-entity camera></a-entity>
    </a-scene>
  </body>
</html>
