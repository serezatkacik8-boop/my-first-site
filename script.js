let count = localStorage.getItem('likes') || 0;

document.getElementById('count').innerText = count;

function addClick() {
  count++;
  localStorage.setItem('likes', count);
  document.getElementById('count').innerText = count;
}