<template>
<div class="pickers">
  <mt-header title="Two provinces and cities linkage">
    <router-link to="/mintUiComponent" slot="left">
      <mt-button icon="back">Return</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
<div class="popup_content">
    <mt-button  @click.native="handleClick('citypopupVisible')">Please choose the city</mt-button>
    <mt-cell title="Selected city" :value="cityvalue"></mt-cell>

    <mt-button  @click.native="openPicker">Please select a date</mt-button>
    <mt-cell title="Selected date" :value="datevalue"></mt-cell>
</div>
  <mt-popup
  v-model="citypopupVisible"
  position="bottom" class="common_popup">
    <div class="common_popup_header">
      <div class="" @click="hidePopup('citypopupVisible')">
        Cancel
      </div>
      <div class="">
        Select City
      </div>
      <div class="" @click="suerResult()">
        OK
      </div>
    </div>
    <mt-picker :slots='addressSlots' @change='onAddressChange' ></mt-picker>
</mt-popup>

<mt-datetime-picker
  v-model="currentValue"
  ref="picker"
  type="date"
  year-format="{value} Year"
month-format="{value} Month"
date-format="{value} Day"
:startDate = "startDate"
:endDate = "endDate"
@confirm="handleConfirm">
</mt-datetime-picker>
</div>

</template>

<script>
var i = {
  'Alberta ': ['Airdrie'],
  'British Columbia ': ['Abbotsford', 'Armstrong', 'Burnaby', 'Campbell River', 'Castlegar', 'Whiliwack', 'Colwood', 'Coquitlam', 'Crantbook', 'Dawson Creek', 'Delta', 'Duncan', 'Enderby', 'Fernie'],
  'Manitoba ': ['Brandon', 'Dauphin', 'Flin Flon', 'Morden', 'Portage la Prairie', 'Selkirk', 'Steinbach', 'Thompson', 'Winkler', 'Winnipeg'],
  'New Brunswick ': ['Bathurst', 'Campbellton', 'Dieppe', 'Edmundston', 'Fredericton', 'Miramichi', 'Moncton', 'Saint John'],
  'Newfoundland and Labrador ': ['Corner Brook', 'Mount Pearl', 'St. Johns'],
  'Northwest Territories ': ['Yellowknife'],
  'Nova Scotia ': ['Halifax', 'Sydney', 'Dartmouth'],
  'Nunavut ': ['Iqaluit'],
  'Ontario ': ['Barrie', 'Belleville', 'Brampton', 'Brant', 'Brantford', 'Brockville', 'Burlington', 'Cambridge', 'Clarence-Rockland', 'Cornwall', 'Dryden', 'Elliot Lake', 'Greater Sudbury', 'Guelp', 'Haldimand County', 'Hamilton', 'Kawartha Lakes'],
  'Prince Edward Island ': ['Charlottetown', 'Summerside'],
  'Quebec ': ['Acton Vale', 'Alma', 'Amos', 'Amqui', 'Asbestos', 'Baie-Comeau', 'Baie-DUrfé', 'Baie-Saint-Paul', 'Berkmere', 'Beaconsfield', 'Beauceville', 'Beauharnois', 'Beaupré'],
  'Saskatchewan ': ['Estevan', 'Flin Flon', 'Humboldt', 'Lloydminster', 'Martensville', 'Meadow Lake', 'Melfort', 'Melville', 'Moose Jaw', 'North Battleford', 'Prince Albert', 'Regina', 'Saskatoon', 'Swift Current', 'Warman', 'Weybun', 'Yorkton'],
  'Yukon ': ['Whitehorse']
}
export default {
  methods: {
    openPicker: function () {
      this.$refs.picker.open()
      this.currentValue = new Date((new Date()).getFullYear(), 0, 1)       // 设置初始值
    },
    hidePopup: function (citypopupVisible) {
      this[citypopupVisible] = false
    },
    onAddressChange: function (picker, value) {
      picker.setSlotValues(1, i[value[0]])
      this.addressProvince = value[0]
      this.addressCity = value[1]
      this.cityModel = this.addressProvince + this.addressCity
    },
    suerResult: function () {
      this.citypopupVisible = false
      this.cityvalue = this.cityModel
    },
    handleConfirm: function (value) {
      this.datevalue = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate()
    },
    handleClick: function (citypopupVisible) {
      this[citypopupVisible] = true
    }
  },
  data () {
    return {
      citypopupVisible: false,
      cityvalue: 'No selection',
      cityModel: 'No selection',
      datevalue: 'No selection',
      startDate: new Date((new Date()).getFullYear() - 90, 0, 1),
      endDate: new Date((new Date()).getFullYear() + 10, 0, 1),
      currentValue: new Date(Date.parse(new Date()) + 1000 * 60 * 60 * 24 * 7),
      addressSlots: [{
        flex: 1,
        values: Object.keys(i),
        className: 'slot1',
        textAlign: 'center'
      }, {
        divider: !0,
        content: '-',
        className: 'slot2'
      }, {
        flex: 1,
        values: ['Alberta '],
        className: 'slot3',
        textAlign: 'center'
      }],
      addressProvince: 'Alberta ',
      addressCity: 'addressCity: Alberta '
    }
  }
}
</script>
