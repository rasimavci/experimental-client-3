<template>
  <div class="page-field">
  <mt-header title="Add Contact">
    <router-link to="/index" slot="left">
      <mt-button icon="back">Return</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>

    <picture-input ref="pictureInput" @change="onChange" width="200" height="200" margin="5" accept="image/jpeg,image/png" size="5" buttonClass="btn" :customStrings="{upload: '<h1>Bummer!</h1>',
       drag:  'Drag a 😺 GIF or GTFO'
      }">
      </picture-input>

    <div class="page-title">Field</div>
    <div class="page-part">
      <mt-field label="Username" placeholder="please enter user name" :attr="{ maxlength: 10 }"></mt-field>
      <mt-field label="Email" placeholder="please input your email" type="email"></mt-field>
      <mt-field label="Password" placeholder="Please enter phone number password" type="password"></mt-field>
      <mt-field label="Phone Number" placeholder="Please enter phone number" type="tel"></mt-field>
      <mt-field label="Collab Url" placeholder="Please enter the URL" type="url"></mt-field>
      <mt-field label="Number of Cliets" placeholder="Please enter the number" type="number"></mt-field>
      <mt-field label="Birthday" placeholder="Please enter birthday" type="date"></mt-field>
      <mt-field label="Self introduction" placeholder="Self introduction" type="textarea" rows="4"></mt-field>
    </div>

    <div class="page-part">
      <mt-field placeholder="Login E-mail" type="email"></mt-field>
      <mt-field placeholder="password" type="password"></mt-field>
    </div>

    <div class="page-part">
      <mt-field label="mailbox" placeholder="Success status" state="success"></mt-field>
      <mt-field label="mailbox" placeholder="Failure status" state="error"></mt-field>
      <mt-field label="mailbox" placeholder="Warning status" state="warning"></mt-field>
    </div>

    <div class="page-part">
      <mt-field label="Verification code" placeholder="Enter confirmation code">
        <img src="../assets/100x100.png" height="48px" width="100px">
      </mt-field>
    </div>

  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'
export default {

  name: 'page-field',
  data () {
    return {}
  },
  components: {
    PictureInput
  },
  methods: {
    onChange () {
      console.log('New picture selected!')
      if (this.$refs.pictureInput.image) {
        console.log('Picture loaded.')
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
}
</script>
