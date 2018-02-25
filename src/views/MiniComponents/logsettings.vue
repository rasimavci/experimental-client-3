<template>
  <div>
    <mt-header title="logsettings">
      <router-link to="/mintUiComponent" slot="left">
        <mt-button icon="back">return</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

        <div class="page-radio">
    <div class="page-title">radio</div>

    <mt-radio
      class="page-part"
      title="Radio list"
      v-model="value1"
      :options="options1" />
    <div>
      <mt-cell title="Selected items">{{ value1 }}</mt-cell>
    </div>

    <mt-radio
      class="page-part"
      title="The second radio list"
      v-model="value2"
      :options="options2" />
    <div>
      <mt-cell title="Selected items">{{ value2 }}</mt-cell>
    </div>

    <mt-radio
      align="right"
      class="page-part"
      title="Align right"
      v-model="value3"
      :options="options3" />
  </div>

    </div>

  </div>
</template>
<script>
export default {
  name: '',
  data: () => ({
    value: false,
    value1: '',
    value2: 'Value A',
    value3: ''
  }),
  methods: {
    handleChange (value) {
      console.log(value)
    }
  },
  created () {
    this.options1 = ['Option ', 'Option B', 'Option C']
    this.options3 = ['Option ', 'Option B', 'Option C']
    this.options2 = [
      {
        label: 'Disabled',
        value: 'Value F',
        disabled: true
      },
      {
        label: 'Option ',
        value: ' Value A'
      },
      {
        label: 'OptionB',
        value: ' Value B'
      }
    ]
  }
}

</script>
<style lang="scss" scoped>
  .swich_wrap{
    padding: 1rem 0.3rem;
  }
</style>
