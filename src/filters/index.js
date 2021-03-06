/**
 * Show plural label if time is plural number
 * @param {number} time
 * @param {string} label
 * @return {string}
 */
function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

/**
 * @param {number} time
 */
export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export function numberFormatter(num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * Upper case first char
 * @param {String} string
 */
export function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function parseUnixToDesc(time) {
  let publishTime = time
  
  let d_seconds = 0
  let d_minutes = 0
  let d_hours = 0
  let d_days = 0
  let timeNow = parseInt(new Date().getTime()/1000)
  let d = 0

  let date = new Date(publishTime*1000)
  let Y = date.getFullYear()
  let M = date.getMonth() + 1
  let D = date.getDate()
  let H = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()

  if (H < 10) {
      H = '0' + H
  }
  if (m < 10) {
      m = '0' + m
  }
  if (s < 10) {
      s = '0' + s
  }

  d = timeNow - publishTime
  d_days = parseInt(d / 86400)
  d_hours = parseInt(d / 3600)
  d_minutes = parseInt(d / 60)
  d_seconds = parseInt(d)

  if(d_days > 0 && d_days < 3) {
    return d_days + '天前'
  }

  if(d_days <= 0 && d_hours > 0) {
    return d_hours + '小时前'
  }

  if(d_hours <= 0 && d_minutes > 0) {
    return d_minutes + '分钟前'
  }

  if(d_seconds < 60) {
    if (d_seconds <= 0) {
      return '刚刚发表'
    }
    return d_seconds + '秒前'
  }

  if(d_days >= 3 && d_days < 30) {
    return `${M}月${D}日 ${H}:${m}`
  }

  if(d_days >= 30) {
    return `${Y}年${M}月${D}日 ${H}:${m}`
  }
}


export function imgPrefixDeal(imgURL) {  // 图片前缀处理
  if(!!imgURL == false) {
    return imgURL
  }
  let prefix = 'http'
  let isExist = imgURL.indexOf(prefix)
  if(isExist == -1) {
    return `https://www.icoming.top/${imgURL}`
  }
  return imgURL
}

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

export function distanceFormat(distance) { // 距离格式化
  let newDistance = parseInt(distance)
  if(newDistance < 1000) {
    return newDistance + 'm'
  }
  return newDistance = parseInt(newDistance / 100) / 10 + 'km'
}

export function parsePartyTheme(numb) {
  let themeName = ''
  switch(numb) {
    case 1:
      themeName = '普通聚会'
      break
    case 2:
      themeName = '节日聚会'
      break
    case 3:
      themeName = '健身运动'
      break
    case 4:
      themeName = '随便逛逛'
      break
    case 5:
      themeName = '线下手游'
      break
    case 6:
      themeName = '野外聚餐'
      break
    case 7:
      themeName = '音乐派对'
      break
    case 8:
      themeName = '单身派对'
      break
    case 9:
      themeName = '联谊聚会'
      break
    default:
      break
  }
  return themeName
}