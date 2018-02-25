<template>
  <div>
    <mt-header title="Vibration">
      <router-link to="/mintUiComponent" slot="left">
        <mt-button icon="back">return</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


  <div class="page-checklist">
    <div class="page-title">Checklist</div>

    <mt-checklist
      class="page-part"
      title="复选框列表"
      v-model="value1"
      :options="options1">
    </mt-checklist>

    <div>
      <mt-cell title="选中的项">{{ value1 }}</mt-cell>
    </div>

    <mt-checklist
      class="page-part"
      title="第二个复选框列表"
      v-model="value2"
      :options="options2">
    </mt-checklist>

    <div>
      <mt-cell title="选中的项">{{ value2 }}</mt-cell>
    </div>

    <mt-checklist
      class="page-part"
      title="最多选两个"
      :max="2"
      v-model="value3"
      :options="options3">
    </mt-checklist>

    <div>
      <mt-cell title="选中的项">{{ value3 }}</mt-cell>
    </div>

    <mt-checklist
      align="right"
      class="page-part"
      title="右对齐"
      v-model="value4"
      :options="options4">
    </mt-checklist>
  </div>


  </div>
</template>
<script>
export default {
  name: '',
  data: () => ({
    value: false,
    value1: [],
    value2: ['Select the disabled value'],
    value3: ['Option A'],
    value4: []

  }),
  methods: {
    handleChange (value) {
      console.log(value)
    }
  },
  created () {
    this.options1 = ['Call Mode', 'Im Mode']
    this.options3 = ['Option A', 'Option B', 'Option C', 'Option D']
    this.options4 = ['Option A', 'Option B', 'Option C', 'Option D']
    this.options2 = [
      {
        label: 'Disabled',
        value: 'Value F',
        disabled: true
      },
      {
        label: '选中禁用',
        value: '选中禁用的值',
        disabled: true
      },
      {
        label: 'OptionA',
        value: '值A'
      },
      {
        label: 'OptionB',
        value: '值B'
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
