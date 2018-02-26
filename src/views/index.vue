<template>
  <div id="index">
    <!--头部-->
    <div id="uploader"></div>
    <mt-header title="Home">
      <router-link to="/" slot="left">
        <mt-button icon="back">return</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--内容区域-->
    <div class="page-tabbar">
      <div class="page-wrap">
        <div class="page-title"></div>
        <div>
          <mt-cell class="page-part" title="Currently selected" :value="selected" />
        </div>

        <mt-tab-container class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item id="table of Contents">
            <mt-cell v-for="catalog in catalogs" :key="catalog.key" :title="catalog.text" :href="catalog.url" />
          </mt-tab-container-item>
          <mt-tab-container-item id="Tutorial">
            <mt-cell v-for="(course,index) in courses" :key="course.key" :title="course.text" :href="course.url" target="_blank" />
          </mt-tab-container-item>
          <mt-tab-container-item id="To be determined">
            <mt-cell v-for="n in 7" :key="n.key" :title="'To be determined ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="unknown">
            <div class="page-part">
              <mt-cell v-for="n in 12" :key="n.key" :title="'unknown ' + n" />
            </div>
            <router-link to="/">
              <mt-button type="danger" size="large">退出</mt-button>
            </router-link>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>

      <mt-tabbar v-model="selected" fixed>

        <button class="button" @click="endCall()" v-show="activeCallRinging">
          <i class="material-icons">{{!activeCall? "phone_in_talk" : "not interested" }}</i>
          hey
        </button>

        <mt-tab-item id="table of Contents1 ">
<i class="indexicon icon-message-box"></i>
Chat
        </mt-tab-item>



        <mt-tab-item id="table of Contents">
          <i class="iconfont">&#xe6c2;</i>
          table of Contents
        </mt-tab-item>
        <mt-tab-item id="Tutorial" icon="back">
          <i class="iconfont">&#xe606;</i>
          Tutorial
        </mt-tab-item>
        <mt-tab-item id="To be determined">
          <i class="iconfont">&#xe618;</i>
          To be determined
        </mt-tab-item>
        <mt-tab-item id="unknown">
          <i class="iconfont">&#xe677;</i>
          unknown
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
const catalog = [
  {
    url: '#/dialpad',
    text: 'Dialpad'
  },
  {
    url: '#/call',
    text: 'Call'
  },
  {
    url: '#/city',
    text: 'Contacts'
  },
  {
    url: '#/mintUiComponent',
    text: 'Settings'
  },
  {
    url: '#/map',
    text: '2, jump to the high German map'
  },
  {
    url: '#/vcharts',
    text: '3, Jump to vcharts chart example'
  },
  {
    url: '#/uploadImg',
    text: '4, Profile Settigs'
  },
  {
    url: '#/upload',
    text: 'Rich Messaging'
  },
  {
    url: '#/touch',
    text: '6, Imitation qq chat list'
  },
  {
    url: '#/lcalendar',
    text: '7. Time selector'
  },
  {
    url: '#/popup',
    text: '7. Pop up'
  },
  {
    url: '#/addressbook',
    text: 'Global Addressbook'
  },
  {
    url: '#/addcontact',
    text: 'Add Contact'
  }
]
const course = [
  {
    url: 'http://www.cnblogs.com/star-wind/p/6913002.html',
    text: '0, a city to choose from'
  },
  {
    url: 'http://www.cnblogs.com/star-wind/p/6774204.html',
    text: '1, call high Germany map'
  },
  {
    url: 'http://www.cnblogs.com/star-wind/p/7018817.html',
    text: '2, Goode map of the fun around'
  },
  {
    url: 'https://github.com/chenyk2016/LCalendar-extension',
    text: '3、LCalendar Time picker'
  }
]
export default {
  data () {
    return {
      activeCall: true,
      selected: 'table of Contents',
      catalogs: catalog,
      courses: course
    }
  }
}
</script>

<style  lang="scss">
.page-tabbar {
  overflow: hidden;
  height: 100vh;
}

.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}

.mint-cell {
  border-bottom: 1px solid #ccc;
}

#index {
  .mint-cell:nth-child(2) {
    background-color: rgba(8, 42, 182, 0.5);
    color: #fff;
  }
}

.mint-tab-item {
  color: #ccc;
  padding: 10px 0;
}
</style>
