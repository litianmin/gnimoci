<template>
  <div style="background:#fff;">
    <!-- BEGIN 排序条 -->
    <mu-flex class="sort-bar" justify-content="center" align-items="center" >
      <span style="margin-left:.3rem">回复列表</span>
      <span @click="convertSort" class="sort-bar-svg">
        <svg-icon :icon-class="IsSortup == true ? 'sortup' : 'sortdown'"></svg-icon>
      </span>
    </mu-flex>
    <!-- END 排序条 -->

    <div style="padding:.5rem; margin-bottom:1rem;">
      <mu-flex>
        <mu-flex>
          <mu-avatar 
            size="35" 
            class="avatar-male">
            <img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2575047779,2966283883&fm=26&gp=0.jpg">
          </mu-avatar>
        </mu-flex>

        <mu-flex style="padding:.2rem .5rem .5rem;" wrap="wrap">
          <div style="display:flex; align-items:center; width:100%;">
            <span style="font-size:13px; font-weight:700; color:#009688; letter-spacing:1px;">这里是我的昵称</span>

            <span style="margin-left:auto;">
              <svg-icon icon-class="thumb_up" style="font-size:16px;"></svg-icon>
            </span>
            <div style="margin-left:.8rem; position:relative;">
              <div style="position:absolute; top:-.1rem; right:1.7rem; width:5.2rem; background:#757575; color:#fff; padding:.1rem .3rem; text-algin:center; display:flex; justify-content:center; align-items:center; border-radius:.1rem; z-index:2; ">
                <span style="font-size:11px;">举报</span>
                <span style="margin-left:.4rem; margin-right:.4rem;">|</span>
                <span style="font-size:11px;">评论</span>
                <div style="position:absolute; right:-.2rem; margin-left:auto; width:.5rem; height:.5rem; background:#757575; z-index:1; transform:rotate(45deg);"></div>
              </div>
              <svg-icon icon-class="omit"></svg-icon>
            </div>
          </div>

          <div style="width:100%; margin-top:.2rem; font-size:14px; color:#424242;">
            <div>
              <span>
                其实是我的图片
                15724067414,哇哈哈，这个还行吧，每次都是这样子，该怎么办呢，你这个渣渣，我真的是人
              </span>
            </div>
            <!-- <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581233978569&di=7708dae4b77014ff0e890d6f5a010a70&imgtype=0&src=http%3A%2F%2Fi3.bbs.fd.zol-img.com.cn%2Fg5%2FM00%2F06%2F0C%2FChMkJ1m1meyIEB8pAAh0T-1HNigAAgWKwM0NiQACHRn909.jpg" style="max-height:10rem; border-radius:.3rem; margin-top:.5rem;"> -->
          </div>

          <div style="background:#f5f5f5; color:#616161; font-size:13px; padding:.5rem .8rem; letter-spacing: 1px; width:100%; margin-top:.5rem; margin-bottom:.5rem;">
            <div style="border-bottom:1px solid #e0e0e0; padding:0 0 .3rem 0; margin-bottom:.5rem;">
              <div style="display:flex; width:100%;">
                <span style="color:#009688;">啊真</span> 回复 <span style="color:#009688;">田鸡</span>：
                <div style="margin-left:auto; position:relative;">
                  <div style="position:absolute; top:-.1rem; right:1.7rem; width:5.2rem; background:#757575; color:#fff; padding:.1rem .3rem; text-algin:center; display:flex; justify-content:center; align-items:center; border-radius:.1rem; z-index:2; ">
                    <span style="font-size:11px;">举报</span>
                    <span style="margin-left:.4rem; margin-right:.4rem;">|</span>
                    <span style="font-size:11px;">评论</span>
                    <div style="position:absolute; right:-.2rem; margin-left:auto; width:.5rem; height:.5rem; background:#757575; z-index:1; transform:rotate(45deg);"></div>
                  </div>
                  <svg-icon icon-class="omit"></svg-icon>
                </div>
              </div>
              <div>
                <span>你这个渣渣，哇哈哈，你这个渣渣</span>
              </div>
              <!-- <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581233978569&di=7708dae4b77014ff0e890d6f5a010a70&imgtype=0&src=http%3A%2F%2Fi3.bbs.fd.zol-img.com.cn%2Fg5%2FM00%2F06%2F0C%2FChMkJ1m1meyIEB8pAAh0T-1HNigAAgWKwM0NiQACHRn909.jpg" style="max-height:4.5rem; border-radius:.3rem; margin-top:.3rem;"> -->
            </div>

            <div style="border-bottom:1px solid #e0e0e0; padding:0 0 .3rem 0; margin-bottom:.5rem;">
              <div>
                <span style="color:#009688;">啊真</span> 回复 <span style="color:#009688;">田鸡</span>：
              </div>
              <div>
                <span>你这个渣渣，哇哈哈，你这个渣渣</span>
              </div>
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581233978569&di=7708dae4b77014ff0e890d6f5a010a70&imgtype=0&src=http%3A%2F%2Fi3.bbs.fd.zol-img.com.cn%2Fg5%2FM00%2F06%2F0C%2FChMkJ1m1meyIEB8pAAh0T-1HNigAAgWKwM0NiQACHRn909.jpg" style="max-height:4.5rem; border-radius:.3rem; margin-top:.3rem;">
            </div>

            <div style="display:flex; width:100%; align-items:center;">
              <span><svg-icon icon-class="expand-gray"></svg-icon></span>
              <span style="font-size:11px; color:#616161; margin-left:.5rem;">展开更多回复 </span>
            </div>
          </div>

          <div style="font-size:12px; margin-bottom:1rem;">
            <span style="color:#9e9e9e; letter-spacing:1px; margin-left:auto;">发表于 · 2020/02/09 13:29</span>
          </div>

        </mu-flex>
      </mu-flex>
    </div>

    <!-- BEGIN 回复评论 -->
    <mu-load-more :loading="Loading" @load="load" :loaded-all="IsTheLast">
      <mu-container class="chat-container" v-for="(item, index) in ChatList" :key="index">
        <mu-flex align-items="center">
          <mu-avatar 
            @click="$router.push(`/usr/usercard/${item.userID}`)"
            size="35" 
            :class="item.sex == 1 ? 'avatar-male' : 'avatar-female'">
            <img :src="item.avatar | imgPrefixDeal()">
          </mu-avatar>
          <span class="nickname">
            {{ item.nickname }}
          </span>
        </mu-flex>

        <mu-row class="reply-row">
          <span class="reply-span">
            <span v-if="item.replyID > 0" style="color:#795548; font-size:13px;">@{{ item.replyNickname }}: </span>
            <span>{{ item.cont }}</span>
          </span>
        </mu-row>

        <mu-row v-if="item.img" class="img-row">
          <img class="img-self" :src="item.img | imgPrefixDeal()">
        </mu-row>

        <mu-row class="create-time">
          <span style="color:#757575;">{{ item.createTime | formatTime('{y}/{m}/{d} {h}:{i}') }} ·</span>  
          <span @click="newChat(item.userID, item.chatID, item.nickname)" class="reply-button"> 回复</span>
        </mu-row>

        <mu-row v-if="item.replyID" class="reply-origin-row">
          <span><span style="color:#795548;">{{ item.replyNickname }}：</span>{{ item.replyCont }}</span>
        </mu-row>

        <mu-row style="padding: 0 .1rem;">
          <div style="border-top:1px solid #eeeeee; height:1px; width:100%;"></div>
        </mu-row>

      </mu-container>
    </mu-load-more>

    <mu-row v-show="IsTheLast" justify-content="center" class="no-more-reply">
      <span> 没有更多的回复 </span>
    </mu-row>
    <!-- END 回复评论 -->
  </div>
</template>

<script>
export default {
  name: 'chat-list',
  data () {
    return {
      Loading: false,
      IsSortup: false,
      IsTheLast: true,
      ChatList: [],
      Page: 1,
      TeamType: 1,
      TeamID: 5,
    }
  },
  // props: [
  //   'TeamType',
  //   'TeamID'
  // ],
  mounted () {
    this.load()
  },
  methods: {
    load () {
      this.Loading = true      
      let sortWay = this.IsSortup == false ? 0 : 1
      this.$axios.get(`/common/chatList/${this.TeamType}/${this.TeamID}/${this.Page}/${sortWay}`,{}).then((resp)=>{
        if(resp.data.code != 20000) {
          this.$toast.message(resp.data.msg)
          return
        }

        let dataBack = resp.data.msg
        this.IsTheLast = dataBack.length < 15 ? true : false

        this.ChatList = this.ChatList.concat(dataBack)
        this.Page++
        this.Loading = false
      })
    },
    convertSort () {
      // 当转换排序顺序的时候，把页数重置，然后，重新加载回复评论
      this.Page = 1
      this.ChatList = []
      this.IsSortup = !this.IsSortup
      this.load()
    },
    newChat (replyTo, chatID, replyNickname) {
      this.$parent.newChat(true, replyTo, chatID, replyNickname)
    }
  }
}
</script>

<style scoped>

.sort-bar { background:#f5f5f5; border-top:1px solid #fff; font-size:12px; padding:.4rem .5rem; margin-bottom:.5rem; }
.sort-bar-svg { margin-left:auto; font-size:18px; margin-right:.3rem; }

.chat-container { padding:.5rem .5rem; background:#fff;}
.avatar-male { border-radius:50%; }
.avatar-female { padding:.1rem; border:1px solid #e91e63; border-radius:50%; background:white; }
.nickname { font-size:14px; margin-left:.5rem; margin-right:.5rem; color:#424242; letter-spacing: 1px; }

.reply-row { font-size:14px; padding:.2rem 1rem 0 2rem; color:#424242; }
.reply-span { margin-left:.5rem; letter-spacing: 1px; }

.img-row { padding:.5rem .5rem .5rem 2.3rem; font-size:12px; color:#616161; }
.img-self { max-width:100%; max-height:10rem; border-radius:.3rem; }

.create-time { padding: .5rem 0 0 2.5rem; font-size:13px; margin-bottom:1rem; }
.reply-button { color:green; margin-left:.3rem; }

.reply-origin-row { background:#f5f5f5; color:#616161; font-size:13px; padding:.5rem; margin-right:1.5rem; margin-left:2.2rem; letter-spacing: 1px; margin-bottom:1rem; }

.no-more-reply { padding:.5rem .5rem .3rem .5rem; margin-top:.3rem; margin-bottom:3rem; color:#9e9e9e; }

</style>

