const app = document.getElementById("app");
let heartsCaught = 0;
let catPos = 50;

// helper to load screens
function load(html) {
  app.innerHTML = html;
}

// screen 1: landing
function screen1() {
  load(`
    <div class="screen">
      <div>
        <img src="https://placekitten.com/200/200"/>
        <img src="https://upload.wikimedia.org/wikipedia/en/8/85/Batman_DC_Comics.png"/>
      </div>
      <h2>hey princess, i know it’s tough rn, but i’m here 🫂</h2>
      <p>take it easy, breathe, relax with me</p>
      <button onclick="screen2()">💖 continue</button>
    </div>
  `);
}

// screen 2: sorry card
function screen2() {
  load(`
    <div class="screen" style="background: pink;">
      <h1>my babie princess 💖</h1>
      <p>i’m sooo sorry ×1000<br>wish i could hug u tight rn 🫂</p>
      <p>babie • cutie • princess • gurll • my love</p>
      <button onclick="screen3()">🐱🦇 continue</button>
    </div>
  `);
}

// screen 3: rose
function screen3() {
  load(`
    <div class="screen">
      <img src="https://pngimg.com/d/rose_PNG669.png" style="height:150px;" />
      <p>press the rose to see the surprise 💕</p>
      <button onclick="screen4()">🌹 press</button>
    </div>
  `);
}

// screen 4: game
function screen4() {
  load(`
    <div class="screen" style="position:relative; overflow:hidden;">
      <div id="gameArea" style="width:100%; height:100%; position:relative;">
        <div id="cat" style="position:absolute; bottom:5%; left:${catPos}%; transform:translateX(-50%); font-size:40px;">🐱</div>
      </div>
      <div>
        <button onclick="moveCat(-10)">◀</button>
        <button onclick="moveCat(10)">▶</button>
      </div>
      <p id="score">caught: 0</p>
    </div>
  `);

  heartsCaught = 0;
  let gameArea = document.getElementById("gameArea");

  let gameInterval = setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 90 + "%";
    heart.innerHTML = "❤️";
    gameArea.appendChild(heart);

    let fall = setInterval(() => {
      let cat = document.getElementById("cat").getBoundingClientRect();
      let h = heart.getBoundingClientRect();
      if (h.bottom >= cat.top && h.left > cat.left-40 && h.left < cat.right+40) {
        heartsCaught++;
        document.getElementById("score").innerText = "caught: " + heartsCaught;
        heart.remove();
        clearInterval(fall);
        if (heartsCaught >= 10) {
          clearInterval(gameInterval);
          screen5();
        }
      }
    }, 100);
  }, 1000);
}

function moveCat(step) {
  catPos = Math.min(90, Math.max(10, catPos + step));
  document.getElementById("cat").style.left = catPos + "%";
}

// screen 5: kisses
function screen5() {
  load(`<div class="screen" style="background:pink; overflow:hidden;">
    <h2>all these kisses are yours, my babie princess 💕</h2>
    <button onclick="screen6()">continue 💖</button>
  </div>`);
  for (let i=0; i<50; i++) {
    let kiss = document.createElement("div");
    kiss.className = "kiss";
    kiss.style.left = Math.random()*100 + "%";
    kiss.style.top = "100%";
    kiss.innerHTML = "😘";
    app.appendChild(kiss);
  }
}

// screen 6: final love
function screen6() {
  load(`
    <div class="screen">
      <div>
        <img src="https://placekitten.com/200/200"/>
        <img src="https://upload.wikimedia.org/wikipedia/en/8/85/Batman_DC_Comics.png"/>
      </div>
      <h1 style="font-size:30px;">i loveee uu bbie 💖</h1>
      <p>always yours, your batman & your lil cat 🐱🦇✨</p>
      <button onclick="screen1()">restart 💖</button>
    </div>
  `);
}

// start app
screen1();
