var numberOfPictures = 4; //ここに背景写真の数を設定すると、あとはプログラムがおまかせでやってくれます
var bgWrapper = document.getElementById('about');

function getRandomArbitary(min, max){
  return Math.random() * (max - min) + min;
}
function createBackgroundNode(amount){
  for(var i=0;i<=amount;i++){
    var newBg = document.createElement('div');
    newBg.setAttribute('class', 'background background-'+i);
    newBg.style.backgroundImage = 'url(./img/'+i+'.jpg)';

    var min = (i===0) ? 1 : 1/i;
    var max = (i===0) ? 4 : 4/i;
    var duration = getRandomArbitary(min, max); //上に重なる画像ほど duration が短めになる
    newBg.style.animationDuration = duration+'s';

    bgWrapper.appendChild(newBg);
  }
}
window.addEventListener('load', createBackgroundNode(numberOfPictures));

function clickPlay(audio){
  var audio = document.getElementById('audio_'+audio);
  audio.preload = 'none';
  return function(e){
    e.preventDefault();
    audio.play();
    this.classList.toggle('is-disabled');
    this.nextElementSibling.classList.toggle('is-disabled');
  };
}
function clickPause(audio){
  var audio = document.getElementById('audio_'+audio);
  return function(e){
    e.preventDefault();
    audio.pause();
    this.classList.toggle('is-disabled');
    this.previousElementSibling.classList.toggle('is-disabled');
  };
}
var play_u2 = document.getElementById('play_u2');
var play_wassyoi = document.getElementById('play_wassyoi');
var play_rap = document.getElementById('play_rap');
play_u2.addEventListener('click', clickPlay('u2'));
play_wassyoi.addEventListener('click', clickPlay('wassyoi'));
play_rap.addEventListener('click', clickPlay('rap'));
var pause_u2 = document.getElementById('pause_u2');
var pause_wassyoi = document.getElementById('pause_wassyoi');
var pause_rap = document.getElementById('pause_rap');
pause_u2.addEventListener('click', clickPause('u2'));
pause_wassyoi.addEventListener('click', clickPause('wassyoi'));
pause_rap.addEventListener('click', clickPause('rap'));