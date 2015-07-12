/**依赖jquery*/
(function($) {
    var CNUM = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    var UNIT = ['', '十', '百', '千', '万', '亿'];

    $.zh_num = function(num) {
        var result = '';
        //数字翻转遍历时可以适配对应单位
        num = (+num).toString().split('').reverse();

        var l = num.length;
        var pre = '';
        for(var i = l - 1; i >= 0; i--) {
            var unit = UNIT[i];
            var n = +num[i];
            var cn = CNUM[n];
            //判断如果为0则缓存零值，直到遇到下一位不是零的数
            if (n === 0) {
                pre = cn;
                continue;
            }

            result += pre + cn + unit;
            //缓存的零只能用一次
            pre = '';
        }
        console.log(result);
    };

})(jQuery);
