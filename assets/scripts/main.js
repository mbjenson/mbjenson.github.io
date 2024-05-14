
// reveals element with id 'shown' and hides elements with ids in 'hidden'
function reveal(shown, hidden) {
    hidden = hidden.length ? hidden : [hidden];
    for (var i = 0; i < hidden.length; i++) {
        document.getElementById(hidden[i]).style.display = 'none';
    }
    document.getElementById(shown).style.display = 'block';
    // window.location.hash = shown; // this line causes the screen to jump a bit each time
    window.scrollTo(0, 0);
}



//var current;
//= document.getElementById('projects-section');


// function initialize(){
//     current = document.getElementById("projects-section");
// }

// function reveal_projects() {
//     // current.style.display = 'none';
//     current = document.getElementById('projects-section');
//     current.style.display = 'block';
// }

// function reveal_skills() {
//     // current.style.display = 'none';
//     current = document.getElementById('skills-section');
//     current.style.display = 'block';
// }

// function test() {
//     document.getElementById('demo').innerHTML = "<h1>hello world</h1>";
// }

