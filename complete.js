function getZhNum (num) {
  const NUM = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
  const UNIT = ['', '十', '百', '千'] // 个位没有单位
  const CUNIT = ['万', '亿']
  
  let chunk = []
  let temp = []
  for (let i = String(num).length - 1, j = 0; i >= 0; i--, j++) {
    temp.unshift(String(num)[i])
    if ((j + 1) % 4 === 0 || i === 0) {
      chunk.unshift(temp)
      temp = []
    } 
  }
  console.log(chunk)
  let res = []
  for (let i = chunk.length - 1, cu = 0; i >= 0; i--, cu++) {
    let temp = ''
    for (let j = chunk[i].length - 1, u = 0; j >= 0; j--, u++) {
      // 添加为0判断 
      temp = NUM[chunk[i][j]] + (parseInt(chunk[i][j], 10) === 0 ? '' : UNIT[u]) + temp
    }
    
    // 添加正则矫正
    temp = temp.replace(/零+/g, '零').replace(/零$/, '')
    
    // 添加块的单位
    if (cu >= 1) {
      temp += CUNIT[(cu - 1) % 2]
    }
    res.unshift(temp)
  }
  console.log(res)
  return res.join('')
}
getZhNum(782129376)
getZhNum(100100100100)
