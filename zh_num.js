/**依赖jquery*/
(function($) {
    var CNUM = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    var UNIT = ['十', '百', '千', '万', '亿'];
        var prepare = {'20' : '二十','30' : '三十', '40' : '四十','50' : '五十','60' : '六十','70' : '七十','80' : '八十','90' : '九十','100' : '一百'};
    $.zh_num = function(num) {

        //数字翻转遍历时可以适配对应单位
        num = (+num).toString().split('').reverse();

        var l = num.length;
        for(var i = l - 1; i >= 0; i--) {
            var unit = UNIT[i - 1];
        }

        // var item = [];
        // var indexArr = index.toString().split('').reverse();
        // var len = indexArr.length;
        // _.each(indexArr, function(v, k) {
        //     //多位数
        //     if (k > 0) {
        //         v--;
        //     }

        //     item.unshift(title[v]);

        //     if (k == len - 1) {
        //         //如果是两位数。则不需要前面的一
        //         if (k == 1 && v == 0) {
        //             item.shift();
        //         }

        //         return;
        //     }

        //     item.unshift(unit[k]);
        // });
        // item = item.join('');
        // if (prepare[index + 1]) {
        //     item = prepare[index + 1];
        // }
        // result['title'] = item;

        // result['title'] = '第' +  result['title'] + '名';
        // return result;
    };

})(jQuery);
