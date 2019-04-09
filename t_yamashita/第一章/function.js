(function(){
    'use strict';
    function a(r){
        for(r=5 ,r++){
        var menseki = r*r*3.14;
        document.write('半径'+r+'㎝の時、'+'円の面積は'+menseki+'㎠');
    }}
    setInterval(a,1000);
})();