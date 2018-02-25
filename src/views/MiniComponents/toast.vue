<template>
  <div class="page-toast">
    <mt-header title="switch">
      <router-link to="/mintUiComponent" slot="left">
        <mt-button icon="back">return</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <h1 class="page-title">Toast</h1>
    <div class="page-toast-wrapper">
      <mt-button @click.native="openToast" size="large">Click to popup Toast</mt-button>
      <mt-button @click.native="openToastWithIcon" size="large">Click to pop Toast with icon</mt-button>
      <mt-button @click.native="openBottomToast" size="large">Customize the Toast location</mt-button>
    </div>
  </div>
</template>

<style>

</style>

<script type="text/babel">
 // import { Toast } from '../../mint/index'
  export default {
    // methods: {
    //   openToast () {
    //     Toast('Prompt information')
    //   },
    //   openToastWithIcon () {
    //     Toast({
    //       message: 'Successful operation',
    //       iconClass: 'mintui mintui-success'
    //     })
    //   },
    //   openBottomToast () {
    //     Toast({
    //       message: 'Prompt information',
    //       position: 'bottom'
    //     })
    //   }
    // }
  }
</script>
