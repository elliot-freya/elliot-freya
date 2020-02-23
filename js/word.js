(function (a) {
    a.fn.typewriter = function () {
        let df = $.Deferred();
        this.each(function () {
            let d = a(this), c = d.html(), b = 0;
            let tm = Math.floor(Math.random() * (300)) + 100;
            d.html("");
            let e = setInterval(function () {
                var f = c.substr(b, 1);
                if (f == "<") {
                    b = c.indexOf(">", b) + 1
                } else {
                    b++;
                }
                d.html(c.substring(0, b) + (b & 1 ? "_" : ""));
                if (b >= c.length) {
                    clearInterval(e);
                    df.resolve();
                }
                tm = Math.floor(Math.random() * (10)) + 0;
                // console.log(tm);
            }, tm);

        });
        return df
    }
})(jQuery);
