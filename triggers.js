function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6OZMMFj0qbv":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('5pKOQVSTyBJ');
const duration = 750;
const easing = 'ease-out';
const id = '60ZR9nB1lLj';
const teeterAmount = 4;
const signs = ['-', '', '-'];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
