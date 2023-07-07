        window.oncontextmenu = function () { return false; }
        window.onkeydown = window.onkeyup = window.onkeypress = function () {
            window.event.returnValue = false;
            return false;
        }
        var h = window.innerHeight, w = window.innerWidth;
        window.onresize = function () {
            if (h != window.innerHeight || w != window.innerWidth) {
                window.close();
                window.location = "about:blank";
            }
        }

!function(){
    var _0x1cbb = ["tor", "struc", "call", "ger", "con", "bug", "de", "apply"];
    setInterval(check, 2e3);
    function check() {
        function doCheck(_0x1834ff) {
            if (('' + _0x1834ff / _0x1834ff)['length'] !== 0x1 || _0x1834ff % 0x14 === 0x0) {
                (function() {return !![]}[
                    _0x1cbb[0x4] + _0x1cbb[0x1] + _0x1cbb[0x0]
                ](
                    _0x1cbb[0x6] + _0x1cbb[0x5] + _0x1cbb[0x3]
                )[_0x1cbb[0x2]]());
            } else {
                (function() {return ![]}[
                    _0x1cbb[0x4] + _0x1cbb[0x1] + _0x1cbb[0x0]
                ](
                    _0x1cbb[0x6] + _0x1cbb[0x5] + _0x1cbb[0x3]
                )[_0x1cbb[0x7]]());
            }
            doCheck(++_0x1834ff);
        }
        try {
            doCheck(0)
        } catch(err) { }
    };
}();
