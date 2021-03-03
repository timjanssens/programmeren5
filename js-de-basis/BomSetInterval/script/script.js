
window.setInterval(changeTrafficLight, 2000);

var pos = 1;
function changeTrafficLight() {
  let block1 = document.querySelector('#block1');
  let block2 = document.querySelector('#block2');
  let block3 = document.querySelector('#block3');
  if (pos == 1) {
    block1.style.backgroundColor = 'gray';
    block2.style.backgroundColor = 'orange';
    pos = 2;
  } else if (pos == 2) {
     block2.style.backgroundColor = 'gray';
     block3.style.backgroundColor = 'green';
    pos = 3;   
  } else {
     block1.style.backgroundColor = 'red';
     block3.style.backgroundColor = 'gray';
     pos = 1;
  }
}