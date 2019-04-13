const searchBar = document.querySelector('#searchfield');

searchBar.addEventListener('keyup', function(event) {
  let content = event.target.value;
  let last = content[content.length-1];

  let fullWidth = window.innerWidth;
  let fullHeight = window.innerHeight;

  var elem = document.createElement("div");
  elem.textContent = last;
  elem.style.position = "absolute";
  elem.style.left = Math.floor(Math.random() * fullWidth) + "px";
  elem.style.top = Math.floor(Math.random() * fullHeight) + "px";
  elem.style['font-size'] = (Math.floor(Math.random() * 90) + 6) + "px";
  document.body.appendChild(elem);
})
