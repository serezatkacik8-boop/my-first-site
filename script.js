let liked = localStorage.getItem('liked') === 'true';

const btn = document.getElementById('likeBtn');

function updateUI(){
  if(liked){
    btn.innerText = '💔 Убрать лайк'
  } else {
    btn.innerText = '❤️ Лайк'
  }
}

function toggleLike(){
  liked = !liked;
  localStorage.setItem('liked', liked);

  btn.classList.add('liked');
  
  setTimeout(() => {
    btn.classList.remove('liked');}, 300);

  updateUI();
}