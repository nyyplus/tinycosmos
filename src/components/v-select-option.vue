<template>
<div class="select-option" @click="select">
  <span>{{item.value}}</span>
  <span>{{item.desc}}</span>
</div>
</template>
<script>
  export default {
    name: 'v-select-option',
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      select () {
        this.$emit('checked', this.item)
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
