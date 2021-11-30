let change = document.getElementById("tio");
let bod = document.querySelector("body");

bod.addEventListener("mouseenter", function () {
  setTimeout(() => {
    let s = ["Coffepolis", "No one can understand the truth until he drinks of coffee’s frothy goodness.","Sharing flavours and connecting people on a global spectrum we are Coffeepolis"];
    let char = 1;

    var elem = $("#tio");

    var inte = setInterval(thisa, 4500);
    function thisa() {
      elem.fadeOut(function () {
        change.textContent = s[char];
        char++;

        if (char == s.length) {
          char = 0;
        }
        elem.fadeIn();
      });
    }
    //change.classList.add("chane");
  }, 3000);
});