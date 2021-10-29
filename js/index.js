// to clear generated css code
function clearcontent() {
  document.getElementById('generatedCss').innerHTML = "";
}

document.getElementById("height").addEventListener("input", changeHeight);
document.getElementById("width").addEventListener("input", changeWidth);
document.getElementById("shadowX").addEventListener("input", changeShadowXY);
document.getElementById("shadowY").addEventListener("input", changeShadowXY);
document.getElementById("border").addEventListener("input", changeBorderWidth);
// document.getElementById("radius").addEventListener("input", changeRadius);
document.getElementById("shadowBlur").addEventListener("input", changeBlur);
document.getElementById("shadowSpread").addEventListener("input", changeShadowSpread);
document.getElementById("shadowColor").addEventListener("input", changeShadowColor);
document.getElementById("bgColor").addEventListener("input", changeBG);
document.getElementById("borderColor").addEventListener("input", changeBorderColor);
document.getElementById("animateBtn").addEventListener("click", animate);
document.getElementById("borderRadiusTopLeft").addEventListener("input", changeBorderRadius);
document.getElementById("borderRadiusTopRight").addEventListener("input", changeBorderRadius);
document.getElementById("borderRadiusBottomLeft").addEventListener("input", changeBorderRadius);
document.getElementById("borderRadiusBottomRight").addEventListener("input", changeBorderRadius);
document.getElementById("animateStopBtn").addEventListener("click", stopAnimation);
// document.getElementById("cssBtn").addEventListener("click", openModal);

function copyDivToClipboard() {
     var range = document.createRange();
     range.selectNode(document.getElementById("generatedCss"));
     window.getSelection().removeAllRanges(); // clear current selection
     window.getSelection().addRange(range); // to select text
     document.execCommand("copy");
     window.getSelection().removeAllRanges();// to deselect
 }
function animate() {
  const val = document.getElementById('create');
  const stopBtn =  document.getElementById('animateStopBtn');
  stopBtn.style.display = "block";
  let id = null;
  clearInterval(id);
  color = setInterval(generateRandomColor, 2000);
  function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];

      console.log(letters[Math.floor(Math.random() * 16)]);
    }
    console.log(color);
    val.style.backgroundColor = color;
    document.body.style.backgroundColor = 'black';
    // val.style.backgroundColor = color;
    val.style.boxShadow = getRadioValue() + ' ' + shadowXValue() + 'px' + ' ' + shadowYValue() + 'px' + ' ' + blurValue() + 'px' + ' ' + shadowSpread() + 'px' + ' ' + color;
    // document.getElementById('textColor').style.textShadow = shadowXValue() + 'px' + ' ' + shadowYValue() + 'px' + ' ' + blurValue() + 'px' + ' ' + color;
    document.getElementById('textColor').style.color = color;


  }

}

function stopAnimation(){
  location.reload();
}
// to change height of the card
function changeHeight() {
  var val = document.getElementById('height').value;
  document.getElementById('create').style.height = val + 'px';
  // generateCss();
  localStorage.setItem('height', val);
}
// to change width of the card
function changeWidth() {
  var val = document.getElementById('width').value;
  document.getElementById('create').style.width = val + 'px';
  localStorage.setItem('width', val);
}
// to get shadow blur value from multi range
function blurValue() {
  return document.getElementById('shadowBlur').value;
}
// to change shadow color of the card
function shadowColor() {
  return document.getElementById('shadowColor').value;
}
// to change shadow color of the card
function changeShadowColor() {
  document.getElementById('create').style.boxShadow = getRadioValue() + ' ' + shadowXValue() + 'px' + ' ' + shadowYValue() + 'px' + ' ' + blurValue() + 'px' + ' ' + shadowSpread() + 'px' + ' ' + shadowColor();

}
// to change shadow value of the card
function changeShadowValue() {
  var shadowValue = document.getElementById('shadow').value;
  shadowValue++;
}
// to get radio button value of the card
function getRadioValue() {
  var radioVal = document.querySelector('input[name="radioButton"]:checked').value;
  if (radioVal == 'outset') {
    radioVal = '';
    return radioVal;
  } else {
    return radioVal;
  }
}

function changeShadowInsetOutset(radioVal) {
  if (radioVal == 'outset') {
    radioVal = '';
    document.getElementById('create').style.boxShadow = radioVal + ' ' + shadowXValue() + 'px' + ' ' + shadowYValue() + 'px' + ' ' + blurValue() + 'px' + ' ' + shadowSpread() + 'px' + ' ' + shadowColor();
  } else {
    document.getElementById('create').style.boxShadow = radioVal + ' ' + shadowXValue() + 'px' + ' ' + shadowYValue() + 'px' + ' ' + blurValue() + 'px' + ' ' + shadowSpread() + 'px' + ' ' + shadowColor();
  }
}

// to get shadow x & y value
// function shadowXYValue() {
//   return document.getElementById('shadow').value;
// }

// to get shadow x   value
function shadowXValue() {
  return document.getElementById('shadowX').value;
}
// to get shadow y   value
function shadowYValue() {
  return document.getElementById('shadowY').value;
}
// to get shadow spread value
function shadowSpread() {
  return document.getElementById('shadowSpread').value;
}
// to get border top - left radius value
function borderRadiusTopLeft() {
  return document.getElementById('borderRadiusTopLeft').value;
}
// to get border top - right radius value
function borderRadiusTopRight() {
  return document.getElementById('borderRadiusTopRight').value;
}
// to get border bottom -left  radius value
function borderRadiusBottomLeft() {
  return document.getElementById('borderRadiusBottomLeft').value;
}
// to get border bottom - right  radius value
function borderRadiusBottomRight() {
  return document.getElementById('borderRadiusBottomRight').value;
}
// to chabge border radius of the card
function changeRadius() {
  let radiusValue = document.getElementById('radius').value;
  document.getElementById('create').style.borderRadius = radiusValue + '%';
}
// to chabge border top radius of the card
function changeBorderRadius() {
  // 100% 0% 100% 0% / 0% 100% 0% 100%
   document.getElementById('create').style.borderRadius = borderRadiusTopLeft() + '%' + ' ' + borderRadiusTopRight() + '%' + ' ' + borderRadiusBottomLeft() + '%' + ' ' + borderRadiusBottomRight() + '%';
}
// to change background color of the card
function changeBG() {
  document.getElementById('create').style.backgroundColor = bgColor();
  document.body.style.backgroundColor = bgColor();
  localStorage.setItem('bgColor', val);
}
// to change background image of the card
function changeBackgroundImage(val) {
  var d = document.getElementById('create').style.backgroundImage = 'url(' + val + ')';
}
// to change border color of the card
function changeBorderColor(val) {
  document.getElementById('create').style.borderColor = borderColor();
}
// to get border width of the card
function borderWidth() {
  return document.getElementById('border').value;
}
// to get background color of the card
function bgColor() {
  return document.getElementById('bgColor').value;
}
// to get border color of the card
function borderColor() {
  return document.getElementById('borderColor').value;
}
// to change border width of the card
function changeBorderWidth() {
  document.getElementById('create').style.border = borderWidth() + 'px' + ' solid' + ' ' + borderColor();
  console.log(borderWidth() + 'px' + ' solid' + ' ' + borderColor());
}

// function changeShadowXY(val) {
//   var radioInsetOutset = getRadioValue();
//   var boxShadowData = document.getElementById('create').style.boxShadow = radioInsetOutset + ' ' + shadowXYValue() + 'px' + ' ' + shadowXYValue() + 'px' + ' ' + blurValue() + 'px' + ' ' + shadowSpread() + 'px' + ' ' + shadowColor();
//   // document.getElementById('toolCard').style.boxShadow = radioInsetOutset + ' ' + shadowXYValue() + 'px' + ' ' + shadowXYValue() + 'px' + ' ' + blurValue() + 'px' + ' ' + shadowSpread() + 'px' + ' ' + shadowColor() ;
//
// }

function changeShadowXY() {
  var radioInsetOutset = getRadioValue();
  var boxShadowData = document.getElementById('create').style.boxShadow = radioInsetOutset + ' ' + shadowXValue() + 'px' + ' ' + shadowYValue() + 'px' + ' ' + blurValue() + 'px' + ' ' + shadowSpread() + 'px' + ' ' + shadowColor();
  // document.getElementById('toolCard').style.boxShadow = radioInsetOutset + ' ' + shadowXYValue() + 'px' + ' ' + shadowXYValue() + 'px' + ' ' + blurValue() + 'px' + ' ' + shadowSpread() + 'px' + ' ' + shadowColor() ;

}
// function changeShadowY(val) {
//   var radioInsetOutset = getRadioValue();
//   var boxShadowData = document.getElementById('create').style.boxShadow = radioInsetOutset + ' ' + shadowXValue() + 'px' + ' ' + shadowYValue() + 'px' + ' ' + blurValue() + 'px' + ' ' + shadowSpread() + 'px' + ' ' + shadowColor();
//   // document.getElementById('toolCard').style.boxShadow = radioInsetOutset + ' ' + shadowXYValue() + 'px' + ' ' + shadowXYValue() + 'px' + ' ' + blurValue() + 'px' + ' ' + shadowSpread() + 'px' + ' ' + shadowColor() ;
//
// }

function changeShadowSpread(val) {
  let shadowValue = document.getElementById('shadowSpread').value;
  var radioInsetOutset = getRadioValue();
  var boxShadowData = document.getElementById('create').style.boxShadow = radioInsetOutset + ' ' + shadowXValue() + 'px' + ' ' + shadowYValue() + 'px' + ' ' + blurValue() + 'px' + ' ' + shadowValue + 'px' + ' ' + shadowColor();
  // document.getElementById('toolCard').style.boxShadow =    radioInsetOutset + ' ' + shadowXYValue() + 'px' + ' ' + shadowXYValue() + 'px' + ' ' + blurValue() + 'px' + ' ' + val + 'px' + ' ' + shadowColor();
}

function changeBlur() {
  let blurVal = document.getElementById('shadowBlur').value;
  var radioInsetOutset = getRadioValue();
  document.getElementById('create').style.boxShadow = radioInsetOutset + ' ' + shadowXValue() + 'px' + ' ' + shadowYValue() + 'px' + ' ' + blurVal + 'px' + ' ' + shadowSpread() + 'px' + ' ' + shadowColor();
  // document.getElementById('toolCard').style.boxShadow = radioInsetOutset + ' ' + shadowXYValue() + 'px' + ' ' + shadowXYValue() + 'px' + ' ' + val + 'px' + ' '+ shadowSpread() +'px' + ' ' +shadowColor();
}

const cssBtn = document.getElementById('cssBtn');
cssBtn.addEventListener('click', generateCss);

function generateCss() {
  clearcontent();
  var height = document.getElementById('height').value;
  var width = document.getElementById('width').value;
  var boxShadowX = document.getElementById('shadowX').value;
  var boxShadowY = document.getElementById('shadowY').value;
  // var boxShadowColor = 'lightgray';
  // var borderRadius = document.getElementById('radius').value;
  var boxShadowColor = document.getElementById('shadowColor').value;
  var bgColor = document.getElementById('bgColor').value;
  var borderColor = document.getElementById('borderColor').value;
  var borderWidth = document.getElementById('border').value;
  var boxShadowSpread = document.getElementById('shadowSpread').value;
  var radioButton = document.querySelector('input[name="radioButton"]:checked').value;
  if (radioButton == 'outset') {
    radioButton = ' ';
  }
  var arr = ['height', 'width', 'box-shadow', 'border-radius', 'background-color', 'border'];
  var arrValue = [height + 'px;', width + 'px;', radioButton + ' ' + boxShadowX + 'px' + ' ' + boxShadowY + 'px' + ' ' + blurValue() + 'px' + ' ' + shadowSpread() + 'px' + ' ' + boxShadowColor + '<input type="color" style="width:15px;height:15px" disabled value="' + boxShadowColor + '"/>;', borderRadiusTopLeft() + '%' + ' ' + borderRadiusTopRight() + '%' + ' ' + borderRadiusBottomLeft() + '%' + ' ' + borderRadiusBottomRight() + '%', bgColor + '<input type="color" style="width:15px;height:15px" disabled value="' + bgColor + '"/>;', borderWidth + 'px solid' + ' ' + borderColor + '<input type="color" style="width:15px;height:15px" disabled value="' + borderColor + '"/>;'];
  var cont = document.getElementById('generatedCss');
  console.log(arrValue);
  // create ul element and set the attributes.
  var ul = document.createElement('ul');
  ul.setAttribute('style', 'padding: 2rem 1rem ; margin: 0;');
  ul.setAttribute('id', 'list');
  ul.setAttribute('class', 'h-auto');
  for (i = 0; i <= arr.length - 1; i++) {
    var li = document.createElement('li'); // create li element.
    li.innerHTML = arr[i] + ':' + arrValue[i]; // assigning text to li using array value.
    li.setAttribute('style', 'display: block;'); // remove the bullets.
    li.setAttribute('class', 'font-monospace copyData'); // remove the bullets.
    ul.appendChild(li); // append li to ul.
  }
  cont.appendChild(ul);
}
