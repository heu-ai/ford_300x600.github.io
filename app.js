// Imported Images in a Array by giving complete url
var imges = ['img/1.png', 'img/2.png'];

var landing_page = "https://clientefavoritofordsp.com/"

var output = document.getElementById('output');

openfile(imges[0]);

// adding Event Listener
document.getElementById("output").addEventListener('click', function() {
                    //console.log('Click');
                    clickpattern();});



// Opening a  file
function openfile(filepath){
    output.src = filepath;
    //console.log("Current Img URL = ", output.src);
};

// click count but it refreshes again as per page loads
function APICall(n){
            //console.log("Clicked Now !!!!!", n);
};


function pg2func(op){
    var knowmore = document.getElementById("knowmore");
    knowmore.style = "position: absolute;top: 710px;left: 513px;height: 65px;background: transparent;width: 220px;border-radius: 2%;border: 1px solid transparent;";
    knowmore.onclick= function(){APICall(0); window.location.href=landing_page};
};

// Clicking of Images
function clickpattern(){
    var op = document.getElementById('output');
    op.onmousedown = GetCoordinates;

    if (op.src.search('1.png') > -1)
    {
        op.src = imges[1];
        pg2func(op);
    }
    else if (op.src.search('2.png') > -1)
    {
        pg2func(op);
    }
};




function FindPosition(oElement){
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
};

//Getting a Co-ordinates of Mouse click
function GetCoordinates(e){

  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  ImgPos = FindPosition(output);

  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];
  //document.getElementById("x").innerHTML = PosX;
  //document.getElementById("y").innerHTML = PosY;
  return (PosX, PosY);
};