(function(){
    'use strict';
    var header = document.getElementById('header');
    var deg = 0;
    function rotateHeader(){
        deg = deg + 6;//６度ずつ回転
        deg = deg % 360;
        if ((0 <= deg && deg < 90) || (270 <= deg && deg < 360)){　//反転すると色が薄くなる
            header.className = 'face';
        } else {
            header.className = 'toumei';
        }
        header.style.transform = 'rotateX(' + deg + 'deg)';
    }
    setInterval(rotateHeader, 20);//回転は20ミリ秒に一度
})();