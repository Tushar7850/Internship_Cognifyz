// ------------------------Color Changing  ---------------------------

const colorBtn = document.querySelector(".color-btn button");

colorBtn.addEventListener("click", () => {
  let randomColor = getRandomColor();
  colorBtn.style.backgroundColor = `${randomColor}`;
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// ------------------------CalCulator ---------------------------

function Calculate() {
  const Number1 = parseFloat(document.getElementById("Number1").value);
  const Number2 = parseFloat(document.getElementById("Number2").value);

  if (isNaN(Number1) || isNaN(Number2)) {
    alert("Please Enter Numbers");
  } else {
    const Total = Number1 + Number2;

    document.querySelector("#Totalval").innerHTML = Total;
  }
}


//  ------------------------ Greeting time Alert Message --------------------------
var currTime = new Date();
var currHr = currTime.getHours();

var Greeting;
if (currHr < 12) {
    Greeting = 'Good Morning';
} else if (currHr < 16) {
    Greeting = 'Good Afternoon';
} else {
    Greeting = 'Good Night';
}

alert(currTime + '\n' + Greeting);