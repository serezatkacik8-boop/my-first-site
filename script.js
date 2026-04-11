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
let secret = Math.floor(Math.random() * 5) + 1;

function checkGuess(){
  const value = document.getElementById('guessInput').value;

  if(value == secret){
    document.getElementById('result').innerText = 'Угадал 🎉';
  } else {
    document.getElementById('result').innerText = 'Не угадал 😢';
  }
}
function sendForm() {
  const name = document.getElementById('nameInput').value;
  const message = document.getElementById('messageInput').value;
  const result = document.getElementById('formResult');

  if(!name || !message){
    result.innerText = 'Заполни все поля ❌';
    return;
  }
  result.innerText = `Спасибо, ${name}! Сообщение отправлено 🚀`
}