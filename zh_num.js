/**依赖jquery*/
(function($) {
    var CNUM = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    var UNIT = ['', '十', '百', '千', '万', '亿'];
    var EXUNIT = ['', '万', '亿'];

    function getNum(N, cheng, weishu) {
      console.log(N);
      console.log(cheng);
      console.log(weishu);
        var num = N.splice(0, 4);
        var l = num.length;
        var pre = '';
        var result = '';
        var cc = cheng + 1;
        if (cc >= 3) cc = 0;

        for(var i = l - 1; i >= 0; i--) {
            var unit = UNIT[i];
            var n = +num[i];
            var cn = ((2 === l) && (l - 1 === i ) && (1 === n)) ? '' : CNUM[n];
            //判断如果为0则缓存零值，直到遇到下一位不是零的数
            if (0 === n && 1 !== l) {
                pre = cn;
                continue;
            }
            result += pre + cn + unit;
            //缓存的零只能用一次
            pre = '';
        }
        var child = '';
        if (N.length) {
            child = getNum(N, cc, num);
        }
        var exunit =  EXUNIT[cheng];
        if (result == '') {
            exunit = '';
        }
        result = result + exunit;
        if (!result && +weishu.join('')) {
            result = '零';
        }
        return child + result;
    }

    $.zh_num = function(num) {
        var result = '';
        //数字翻转遍历时可以适配对应单位
        num = (+num || 0).toString().split('').reverse();

        var result = getNum(num, 0, [0]);
        console.log(result);
    };

})(jQuery);
