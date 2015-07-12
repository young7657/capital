/**依赖jquery*/
(function($) {
    var CNUM = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    var UNIT = ['', '十', '百', '千', '万', '亿'];
        var prepare = {'20' : '二十','30' : '三十', '40' : '四十','50' : '五十','60' : '六十','70' : '七十','80' : '八十','90' : '九十','100' : '一百'};
    $.zh_num = function(num) {
        //数字翻转遍历时可以适配对应单位
        num = (+num).toString().split('').reverse();

        var l = num.length;
        var pre = '';
        var result = '';
        for(var i = l - 1; i >= 0; i--) {
            var unit = UNIT[i];
            var n = CNUM[num[i]];

            result += n + unit;
        }
    };

})(jQuery);
