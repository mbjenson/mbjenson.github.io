
function reveal(shown, hidden) {
    hidden = hidden.length ? hidden : [hidden];
    for (var i = 0; i < hidden.length; i++) {
        document.getElementById(hidden[i]).style.display = 'none';
    }
    document.getElementById(shown).style.display = 'block';
    window.scrollTo(0, 0);
}
