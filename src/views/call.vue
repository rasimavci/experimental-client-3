<template>
  <div>
    <mt-header title="Call">
      <router-link to="/mintUiComponent" slot="left">
        <mt-button icon="back">return</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

  <div class="page-navbar">
    <div class="page-title">Navbar</div>
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">CHAT</mt-tab-item>
      <mt-tab-item id="2">VOICE</mt-tab-item>
      <mt-tab-item id="3">VIDEO</mt-tab-item>
      <mt-tab-item id="4">PEOPLE</mt-tab-item>
    </mt-navbar>

    <div>
      <mt-cell class="page-part" title="Currently selected">{{ selected }}</mt-cell>
    </div>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'Content ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'Content ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'Content ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'Content ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
  </div>
</template>

<script>
export default {
  name: 'page-navbar',
  data () {
    return {
      selected: '1'
    }
  }
}
</script>
