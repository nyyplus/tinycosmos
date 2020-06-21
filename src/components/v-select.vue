<template>
<div class="select">
  <div class="selected" @click.stop="handleClick">
    <span class="value">{{defaultValue}}</span>
    <span class="icons">
      <span class="icon icon-question" @click.stop="showHelp"></span>
      <span class="icon icon-caret" :class="{'select-open':isOpen}"></span>
    </span>
  </div>
  <div v-if="isOpen" class="options">
    <div class="option" v-for="item in items" :key="item.value" @click="handleSelect(item)">
      <span>{{item.value}}</span>
      <span>{{item.desc}}</span>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    name: 'v-select',
    props: {
      items: {
        type: Array
      }
    },
    data () {
      return {
        isOpen: false,
        defaultValue: {}
      }
    },
    methods: {
      handleClick () {
        this.isOpen = !this.isOpen
      },
      handleSelect (item) {
        console.log(item)
        this.defaultValue = item.value
        this.isOpen = false
      },
      showHelp () {
        console.log('help')
      }
    },
    mounted () {
      this.defaultValue = this.items[0].value
    }
  }
</script>
<style lang="scss" scoped>
.select {
  position: relative;
  z-index: 0;
  border-bottom:1px #ece6e2 solid;
  .selected {
    background-color: #fff;
    border-bottom-width: 1px;
    border-color: #ece6e2;
    cursor: pointer;
    position: relative;
    padding: 2rem 2.5rem;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    z-index: 10;

    .icons{
      width:40%;
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon:first-child{
        margin-right:20px;
      }
      .icon{
        transition: transform .2s ease-in;
        transform: rotate(0);
      }
      .select-open{
        transform: rotate(180deg);
      }
    }
  }
  .options{
    position: absolute;
    width:100%;
    top:59px;
    left:0;
    max-height: 23rem;
    overflow-y: scroll;
    background:#fff;
    .option{
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      padding: 0 2.5rem;
      transition: background-color .2s ease;
      height: 4.6rem;
      &:not(:last-child){
        border-bottom: 1px #ece6e2 solid;
      }
      &:hover{
        color: #c27030;
        background-color: #ffd196;
      }
    }
  }
}
</style>
