// Decorative rising bubbles only. The invitation works fine without this file.
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var box = document.getElementById("bubbles");
  if (!box) return;
  for (var i = 0; i < 14; i++) {
    var b = document.createElement("span");
    var size = 8 + Math.random() * 26;
    b.className = "bubble";
    b.style.width = b.style.height = size + "px";
    b.style.left = Math.random() * 100 + "%";
    b.style.animationDuration = 12 + Math.random() * 14 + "s";
    b.style.animationDelay = -Math.random() * 20 + "s";
    b.style.setProperty("--drift", (Math.random() * 60 - 30) + "px");
    box.appendChild(b);
  }
})();
