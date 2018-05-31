function getChinaNumber (num) {
  const CNUM = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
  const UNIT = ['', '十', '百', '千']
  const EXUNIT = ['万', '亿']

  num = parseInt(num, 10)

// @todo每个数的显示方式和自己的位置有关也与上下的位置有关，
// 方式是记录当前值，当处理下一位数时再判断上一个值如何显示
  // let res = num.toString().replace(/\d/g, function (match, offset, string) {
  //   let unit = (string.length - 1) - offset
  //   console.log(match, unit, unit % 4, UNIT[unit % 4], unit % 4 === 0 ? EXUNIT[((unit / 4) - 1) % 2] : '')
  //   let n = (match == 0 && unit % 4 ==0 ? '' : CNUM[match])
  //   let u = (match == 0 ? '' : UNIT[unit % 4])
  //   let exu = ((unit % 4 === 0 ? EXUNIT[((unit / 4) - 1) % 2] : '') || '')
  //   return n + u + exu
  // })
  // res = res.replace(/零.*零/ig, function (match, offset) {
  //   return match.replace(/零+/g, '零').replace(/^零/, '')
  // })

  let res = []
  num = num.toString().split('').reverse().join('')
  num.replace(/\d{1,4}/g, (match, offset, string) => {
    n = match.split('').reverse().join('')
    n = parseInt(n, 10)
    offset = offset / 4

    let r = ''
    if (n) {
      let temp = []
      match.toString().replace(/\d/g, (m, o, s) => {
        temp.unshift(CNUM[m] + (m == 0 ? '' : UNIT[o % 4]))
      })
      r = temp.join('')
      r = r.replace(/零+/g, '零').replace(/零$/, '').replace(/^一十/, '十')
      r += EXUNIT[(offset - 1) % 2] || ''
    } else {
      r = '零'
    }
    res.unshift(r)
  })
  console.log(res.join('').replace(/零+/g, '零'))
}


getChinaNumber(1900)
getChinaNumber(1901)
getChinaNumber(1910)
getChinaNumber(7500000001)
getChinaNumber(750000001)
