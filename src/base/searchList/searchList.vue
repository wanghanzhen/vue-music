<template>
  <div class="search-list" v-show="searches.length">
    <transition-group tag="ul" name="list">
      <li class="search-item" @click="selectItem(item)" v-for="item in searches" :key="item">
        <span class="text">{{item}}</span>
        <span class="icon" @click.stop="deleteOne(item)">
          <i class="icon-delete"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    props: {
      searches: {
        type: Array,
        default: []
      }
    },
    methods: {
      selectItem(item) {
        this.$emit('select', item)
      },
      deleteOne(item) {
        this.$emit('delete', item)
      },
    }
  }
</script>

<style lang="stylus">
  @import "../../common/stylus/variable.styl"
  
  .search-list
    .search-item
      display: flex
      align-items: center
      height: 40px
      overflow: hidden
      &.list-enter-active,&.list-leave-active
        transition: all 0.1s
      &.list-enter,&.list-leave-to
        height: 0
      .text
        flex: 1
        color: $color-text-l
      .icon
        extend-click()
        .icon-delete
          fon-size: $font-size-small
          color: $color-text-d
</style>

