function chessboard () {
    var mainBlock = document.createElement ('table'),
    letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
    blackFigs1 = ['8', '&#9820', '&#9822', '&#9821', '&#9819', '&#9818' ,'&#9821' ,'&#9822' ,'&#9820', '8'],
    blackFigs2 = ['7', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '&#9823', '7'],
    whiteFigs1 = ['2', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '&#9817', '2'],
    whiteFigs2 = ['1', '&#9814', '&#9816', '&#9815', '&#9813', '&#9812' ,'&#9815', '&#9816', '&#9814', '1'];
    for (var i = 0, a = 9; i < 10, a >= 0; i++, a--) {
        var newR = mainBlock.insertRow(i);
         for ( var j = 0; j < 10; j++ ) {
            var newC = newR.insertCell( j );
                        switch (i) {
                case 0:
                    newC.innerText = letters[ j ];
                    break;
                case 1:
                    newC.innerHTML = blackFigs1[ j ];
                    break;
                case 2:
                    newC.innerHTML = blackFigs2[ j ];
                    break;
                case 7:
                    newC.innerHTML = whiteFigs1[ j ];
                    break;
                case 8:
                    newC.innerHTML = whiteFigs2[ j ];
                    break;
                case 9:
                    newC.innerText = letters[ j ];
                    break;
                default:
                    if ( j === 0 || j === 9 ) {
                        newC.innerHTML = a;
                    }
                    break;
            }     
        }
    }
    document.body.appendChild(mainBlock);
};
chessboard();