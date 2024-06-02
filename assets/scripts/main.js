
function reveal(shown, hidden) {
    hidden = hidden.length ? hidden : [hidden];
    for (var i = 0; i < hidden.length; i++) {
        document.getElementById(hidden[i]).style.display = 'none';
    }
    document.getElementById(shown).style.display = 'block';
    // change css style for selected item
    // var x = document.getElementsByClassName("header-list a").length
    // document.getElementById("home-button").setAttribute("home-button", "header-list-a-after-click");

    // for (var i = 0; i < hidden.length; i++) {
    //     document.getElementById(hidden[i]).setAttribute();

    // }

    window.scrollTo(0, 0);
}


function makeActive(selected, unselected) {
    document.getElementById(selected).classList.add("active");
    unselected = unselected.length ? unselected : [unselected];
    for (var i = 0; i < unselected.length; i++) {
        document.getElementById(unselected[i]).classList.remove("active");
    }
}



function headerButtonClick(selected, unselected) {
    
    document.getElementById(selected).classList.add("header-list-current");

    unselected = unselected.length ? unselected : [unselected];
    for (var i = 0; i < unselected.length; i++) {
        document.getElementById(unselected[i]).classList.remove("header-list-current");
    }

    // const button = document.querySelector('button');
    
    // button.addEventListener('click', () => {
        // selected.classList.add('active');
    // });

    // document.querySelector(selected).classList.add('header-list-active');
    // for (var i = 0; i < unselected.length; i++) {
    //     document.querySelector(unselected[i]).classList.remove('header-list-active');
    // }
    
    // button.addEventListener('mouseup', () => {
    //     button.classList.remove('active');
    // });

    // document.getElementById("home-button").addEventListener("click", function() {
    //     this.classList.
    //     this.classList.toggle("header-list.active");
    // });
    
    // unselected = unselected.length ? unselected : [unselected];
    // for (var i = 0; i < unselected.length; i++) {
        
    // }
    // document.getElementById("home-button").setAttribute("class", "header-list a:active");
    // document.getElementById(shown).style.display = 'block';
}