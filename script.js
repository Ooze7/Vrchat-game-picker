let gameList = ["Never have I ever", "Truth or Dare", "scp-087", "Uno", "AMONGUS", "Cards against humanity", "Spy Ckeck", "Chess", "Tier Land", "Thermal Treatment", "Meat Grinder", "Yes/No", "Get to know your friends", "Danger Roulette"]


function onClick() {
    let choice = Math.floor(Math.random() * gameList.length);
    let T = document.getElementById('hidden1');
    let R = document.getElementById('hidden2');
    console.log(gameList[choice]);
    document.getElementById('result').innerHTML = gameList[choice]
    T.style.display = "block"
    R.style.display = "block"
}

function rickRoll() {
    window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0")
}

function whoCares() {
    window.open("https://www.youtube.com/watch?v=Ram7AKbtkGE")
}