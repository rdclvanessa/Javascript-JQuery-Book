var randoNum = Math.floor((Math.random() * 10) + 1);

var el = document.getElementById('info');
el.innerHTML = '<h2>rando number</h2><p>' + randoNum + '</p>';