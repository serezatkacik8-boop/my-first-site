let like = localStorage.getItem('like') === 'true';

const btn = document.getElementById('like-btn');

function updateUI(){
  if(like){
    btn.innerText = '💔 Убрать лайк'
  } else {
    btn.innerText = '❤️ Лайк'
  }
}

function toggleLike(){
  like = !like;
  localStorage.setItem('like', like);
  updateUI();
}
updateUI();