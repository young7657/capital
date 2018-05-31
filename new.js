function getChinaNumber (num) {
  const NUM = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
  const UNIT = ['', '十', '百', '千']
  const EXUNIT = ['万', '亿']

  num = parseInt(num, 10)

  let res = []
  num = num.toString().split('').reverse()
  let arr = num.toString().split('').reverse()
  let chunk = []
  let temp = []
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i])

    if ((i !== 0 && (i + 1) % 4 === 0) || i === arr.length - 1) {
      chunk.push(temp)
      temp = []
    }
  }
  let res = ''
  for (let i = 0; i < chunk.length; i++) {
    let temp = ''
    for (let j = 0; j < chunk[i].length; j++) {
      temp = CNUM[chunk[i][j]] + UNIT[j] + temp
    }
    temp += EXUNIT[i]

    res = temp + res
  }

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
