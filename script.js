document.getElementById('search-btn').addEventListener('click', findSomething)

function findSomething() {
  fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => {
      document.getElementById('text').textContent = data.activity
      document.getElementById('title').textContent = '🦾 HappyBot 🦿'
      document.getElementById('title').style.color = '#333'
      document.body.classList.add('fun')
    })
}