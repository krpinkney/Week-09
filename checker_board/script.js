/*
to place/spawn a piece using JavaScript:

var piece = document.createElement('div');            // create an empty div
piece.setAttribute('class', 'piece');                 // assign the div class="piece"
document.getElementById('board').appendChild(piece);  // add the div to the id="board"
piece.style.top = '0px';                              // assign the top/y position
piece.style.left = '0px';                             // assign the left/x position
*/

var x = 0;

for (var i = 0; i <=12; i += 1) {
    var piece = document.createElement('div');            // create an empty div
    piece.setAttribute('class', 'piece');                 // assign the div class="piece"
    document.getElementById('board').appendChild(piece);  // add the div to the id="board"

    if (i < 6) {
        piece.style.top = '0px';                              // assign the top/y position
        piece.style.left = x*100 + 'px';                          // assign the left/x position
        x++;
    } else {
        piece.style.top = '100px';                              // assign the top/y position
        piece.style.left = x*100 + 'px';                          // assign the left/x position
        x = 0;
        x ++;
    }
}