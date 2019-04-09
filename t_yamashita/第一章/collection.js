(function(){
    'use strict';
    var kouho = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ'];
    for (var i = 0 ; i < kouho.length; i++) {
        for (var u = 0; u < kouho.length; u++) {
            document.write('<p>' + kouho[i] + kouho[u] + '</p>');
        }
    }
})();