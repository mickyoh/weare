'use strict';
    
function process() {
  document.getElementById('target').textContent = 'ネアンデルマン！';
  document.getElementById('trigger').classList.add('changed');
}

document.getElementById('trigger').addEventListener('click', process);