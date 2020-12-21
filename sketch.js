// function setup() {
//   createCanvas(displayWidth, displayHeight);
// }

// function draw() {
//   if (mouseIsPressed) {
//     fill(255);
//   } else {
//     fill(0);
//   }
//   ellipse(mouseX, mouseY, 20, 20);
// }

//js here
window.addEventListener("load", function load() {
  document.getElementById("defaultOpen").click();
  });
  function openTab(evt, tabName) {
      // Declare all variables
      var i, tabcontent, tablinks;
    
      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
    
      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
    
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.className += " active";
    }


    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    
    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      // add a zero in front of numbers<10
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
      t = setTimeout(function() {
        startTime()
      }, 500);
    }
    startTime();

    var dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleDateString();