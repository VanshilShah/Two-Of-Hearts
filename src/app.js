/*
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

// This is an example of using an image with Image and Window
var UI = require('ui');
var Vector2 = require('vector2');
var curImgPos = 0;

var imageStrs = ["images/SmallHeart.png" , "images/BigHeart.png" , "images/BiggestHeart.png"];


var wind = new UI.Window({ fullscreen: true });
var heart = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  image: imageStrs[curImgPos]
});

var growing;

  growing = setInterval(grow, 2000);
  


function grow() {
  console.log("growin");
  heart.remove();
  heart = new UI.Image({
    position: new Vector2(0, 0),
    size: new Vector2(144, 168),
    image: imageStrs[curImgPos+1]
 });

  wind.add(heart);
  wind.show();
  
  setTimeout(function() {
    console.log("shrinkin");
    heart.remove();
      heart = new UI.Image({
      position: new Vector2(0, 0),
      size: new Vector2(144, 168),
      image: imageStrs[curImgPos]
    });
    wind.add(heart);
    wind.show();
},1000);
}  


wind.add(heart);

//var rect = new UI.Rect({ size: new Vector2(40, 40) });
//wind.add(rect);
//wind.pic('images/Heart.png');

wind.show();


wind.on('click', 'up', function(e) {
  console.log(curImgPos);
  if (curImgPos < 2) {
    

      curImgPos++;
      heart.remove();
  heart = new UI.Image({
    position: new Vector2(0, 0),
    size: new Vector2(144, 168),
    image: imageStrs[curImgPos]

});
      wind.add(heart);
  wind.show();
  }




});

wind.on('click', 'select', function(e) {

  console.log(curImgPos);
});

wind.on('click', 'down', function(e) {
    console.log(curImgPos);
  if (curImgPos > 0) {
      curImgPos--;
      heart.remove();
    heart = new UI.Image({
      position: new Vector2(0, 0),
      size: new Vector2(144, 168),
      image: imageStrs[curImgPos]

    });
            wind.add(heart);
  wind.show();
  }



});
