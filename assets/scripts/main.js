
function reveal(shown, hidden) {
    hidden = hidden.length ? hidden : [hidden];
    for (var i = 0; i < hidden.length; i++) {
        document.getElementById(hidden[i]).style.display = 'none';
    }
    document.getElementById(shown).style.display = 'block';
    window.scrollTo(0, 0);
}

// highlights selected css button
function makeActive(selected, unselected) {
    document.getElementById(selected).classList.add("active");
    unselected = unselected.length ? unselected : [unselected];
    for (var i = 0; i < unselected.length; i++) {
        document.getElementById(unselected[i]).classList.remove("active");
    }
}


