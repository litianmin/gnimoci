import store from '@/store'

export default{
  TravelDefaultDisplayImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559386791000&di=b883951b4a21c41643c0e62f02827f57&imgtype=0&src=http%3A%2F%2Fpic30.nipic.com%2F20130612%2F12724384_085414541114_2.jpg',

  PartyDefaultDisplayImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559386791000&di=b883951b4a21c41643c0e62f02827f57&imgtype=0&src=http%3A%2F%2Fpic30.nipic.com%2F20130612%2F12724384_085414541114_2.jpg',

  isPhoneNumb (phone) {
    let exp = /^1[3|4|5|7|8|9][0-9]{9}$/
    if( exp.test(phone) ) {
      return true
    }
    return false
  },

  cookieObj: {
    // setCookie("name","hayden","s20")
    getCookie (name) {    //读取cookies 
      let reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      let arr = document.cookie.match(reg)
      if (arr)
          return unescape(arr[2]); 
      else 
          return null; 
    },
  //删除cookies 
    delCookie (name) { 
      let exp = new Date(); 
      exp.setTime(exp.getTime() - 1); 
      let cval=this.getCookie(name); 
      if(cval != null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
    }, 
    // 设置cookie
    setCookie (name, value, time) { 
      let strsec = this.getsec(time); 
      let exp = new Date();
      let thisDomain = document.domain 
      exp.setTime(exp.getTime() + strsec*1); 
      document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + `;path=/;domain=${thisDomain}`; 
    }, 
    getsec (str) {  
      let str1=str.substring(1,str.length)*1; 
      let str2=str.substring(0,1); 
      if (str2=="s") { 
        return str1*1000; 
      } else if (str2=="h") { 
        return str1*60*60*1000; 
      } else if (str2=="d") { 
        return str1*24*60*60*1000; 
      } 
    } 
  },

  // 判断是否为微信浏览器 还是 普通浏览器
  isWxBrowser () {
    let ua = window.navigator.userAgent.toLowerCase()
    // 通过正则表达式匹配ua中是否含有MicroMessenger字符串
    if(ua.match(/MicroMessenger/i) == 'mmicromessenger'){
      return true
    }
    return false
  },

  strTrim (s) {
    return s.replace(/(^\s*)|(\s*$)/g, "")
  },
  // 转换时间格式
  getDateDiff (time, isUnix) {

    let publishTime = 0
    if(isUnix === false) {
      publishTime = Date.parse(time.replace(/-/gi,"/")) / 1000
    } else {
      publishTime = time * 1000
    }
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
    //小于10的在前面补0
    // if (M < 10) {
    //     M = '0' + M
    // }
    // if (D < 10) {
    //     D = '0' + D
    // }
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
  },

  unixToDate (unixTime) { // 时间戳转换成日期格式
    unixTime = unixTime * 1000
    let time = new Date(unixTime);
    let y = time.getFullYear()
    let m = time.getMonth()+1
    let d = time.getDate() < 10 ? ('0'+time.getDate()) : time.getDate()
    let h = time.getHours() < 10 ? ('0'+time.getHours()) : time.getHours()
    let i = time.getMinutes() < 10 ? ('0'+time.getMinutes()) : time.getMinutes()  
    return `${y}/${m}/${d} ${h}:${i}`
  },

  distanceFormat (distance) { // 距离格式化
    let newDistance = parseInt(distance)
    if(newDistance < 1000) {
      return newDistance + 'm'
    }
    return newDistance = parseInt(newDistance / 100) / 10 + 'km'
  },

  getPartyThemeName (themeID) { // 获取party主题的名称
    let themeName = ''
    switch(themeID) {
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
  },

  getTravelThemeName (themeID) {  // 获取旅游模块的名称
    let themeName = ''
    switch(themeID) {
      case 1:
        themeName = '心灵'
        break
      case 2:
        themeName = '漂流'
        break
      case 3:
        themeName = '摄影'
        break
      case 4:
        themeName = '踏青'
        break
      case 5:
        themeName = '美食'
        break
      case 6:
        themeName = '亲子'
        break
      case 7:
        themeName = '沙滩'
        break
      case 8:
        themeName = '滑雪'
        break
      case 9:
        themeName = '朝圣'
        break
      default:
        break
    }
    return themeName
  },
  getTravelPathLengthName (pathLengthID) {  // 获取旅游模块的路程名称
    let pathLengthName = ''
    switch(pathLengthID) {
      case 1:
        pathLengthName = '周边游'
        break
      case 2:
        pathLengthName = '长途旅行'
        break
      default:
        break
    }
    return pathLengthName
  },
  getTravelTypeName (typeID) {  // 获取旅游模块的类型名称
    let typeName = ''
    switch(typeID) {
      case 1:
        typeName = '自由行'
        break
      case 2:
        typeName = '跟团游'
        break
      default:
        break
    }
    return typeName
  },

  imgPrefixDeal (imgURL) {  // 图片前缀处理
    if(imgURL == '') {
      return imgURL
    }
    let prefix = 'http'
    let isExist = imgURL.indexOf(prefix)
    if(isExist == -1) {
      return `https://www.icoming.top/${imgURL}`
    }
    return imgURL
  },

  now2Unix () { // 获取现在的时间戳
    return (new Date()).getTime() / 1000
  },

  isNeedRefreshLocation () {  // 是否需要刷新地理位置
    return this.now2Unix() > store.state.mdeUserInfo.userAddrInfo.forceRefresh 
  },

  // @return     
  // obj {  
  //   name: '市东下路20号B座',
  //   lng: 113.122629,
  //   lat: 23.029735,
  //   addr: '市东下路20号b座',
  //   district: '',
  //   forceRefresh: 0 // 时间到期了强制更新
  // }
  getLocationInfo () {  // 获取地理位置
    return store.state.mdeUserInfo.userAddrInfo
  }

}