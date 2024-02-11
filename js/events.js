//option 1 :direct html er modde
//<button onclick="console.log(65);"> Another </button>


//option 2 : add onclick function on the Html element[Important]
//<button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


//option 3:
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'Blue'
}

///option :3 another [use sometiome]

const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

/// Option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option 4 another
const makeYello = document.getElementById('make-yellow');
makeYello.addEventListener('click', function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
})


// option : 4 Final
// important : we will use this some times 
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
})