<template>
  <div>
    <mt-header title="MintUi easy to use component collection">
      <router-link to="/index" slot="left">
        <mt-button icon="back">Return</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-tab-container>
      <mt-tab-container-item>
        <mt-cell v-for="n in catalogs" :title="n.text" :href="n.url" :key="n.key" />
      </mt-tab-container-item>
    </mt-tab-container>

    <div class="content easy-button">
      <ul class="table-view">
        <li class="table-view-cell media">
          <router-link class="navigate-right" to="/navbar">
            <span class="media-object pull-left icon icon-person"></span>
            <div class="media-body">
              Nav Bar
            </div>
          </router-link>
        </li>
        <li class="table-view-cell media">
          <router-link class="navigate-right" to="/addcontact">
            <span class="media-object pull-left icon icon-person"></span>
            <div class="media-body">
              Add Contact
            </div>
          </router-link>
        </li>
        <li class="table-view-cell media">
          <router-link class="navigate-right" to="/detail">
            <span class="media-object pull-left icon icon-gear"></span>
            <div class="media-body">
              Set fix settings
            </div>
          </router-link>
        </li>
        <li class="table-view-cell media">
          <router-link class="navigate-right" to="/detail">
            <span class="media-object pull-left icon icon-pages"></span>
            <div class="media-body">
              Arrange sessions page
            </div>
          </router-link>
        </li>
        <li class="table-view-cell media">
          <router-link class="navigate-right" to="/detail">
            <span class="media-object pull-left icon icon-trash"></span>
            <div class="media-body">
              Delete Contacts
            </div>
          </router-link>
        </li>
        <li class="table-view-cell media">
          <router-link class="navigate-right" to="/detail">
            <span class="media-object pull-left icon icon-search"></span>
            <div class="media-body">
              Search Settings
            </div>
          </router-link>
        </li>
        <li class="table-view-cell media">
          <router-link class="navigate-right" to="/detail">
            <span class="media-object pull-left icon icon-more"></span>
            <div class="media-body">
              More settings
            </div>
          </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
const catalog = [
  {
    url: '#/navBar',
    text: 'Navbar'
  },
  {
    url: '#/cityMint',
    text: '1 the city choose'
  },
  {
    url: '#/device',
    text: 'Device Settings'
  },
  {
    url: '#/mintUiCityPicker',
    text: '2, provincial and municipal linkage and date selection'
  },
  {
    url: '#/mintUiSwitch',
    text: 'Vibration'
  },
  {
    url: '#/battery',
    text: 'Battery'
  },
  {
    url: '#/logsettings',
    text: 'Log Settings'
  },
  {
    url: '#/mintUiToast',
    text: '3, toast'
  }
]
export default {
  data: () => ({
    catalogs: catalog
  })
}
</script>
<style lang="scss" scoped>
.easy-button {
  background-color: #eee;
}

.easy-button ul {
  border: none !important;
  margin-top: 100px !important;
}

.easy-button span {
  color: #1abc9c;
}

.easy-button li {
  border-bottom: 1px solid #eee;
  background: #fff;
}
</style>
