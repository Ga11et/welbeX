<template>
  <div class="todoItem withPadding">
    <div class="item">
      Дата
    </div>
    <div @click="$store.dispatch('setActiveSort', 'name')" :class="['item', 'leftBorder', 'clickable', { active: activeSort === 'name' }]">
      Название
      <SvgIcons type="dropdown" class="svg" />
    </div>
    <div @click="$store.dispatch('setActiveSort', 'amount')" :class="['item', 'leftBorder', 'clickable', { active: activeSort === 'amount' }]">
      Количество (шт)
      <SvgIcons type="dropdown" class="svg" />
    </div>
    <div @click="$store.dispatch('setActiveSort', 'distance')" :class="['item', 'leftBorder', 'clickable', { active: activeSort === 'distance' }]">
      Дистанция (км)
      <SvgIcons type="dropdown" class="svg" />
  </div>
  </div>
</template>
<script>
import SvgIcons from './svgIcons.vue';
export default{
    name: "todo-head",
    computed: {
        activeSort() {
            return this.$store.getters.activeSort;
        }
    },
    components: { SvgIcons }
}
</script>
<style lang="scss" scoped>
@import '@/_variables.scss';
@import '@/styles/todoItem.scss';
.todoItem{
  .leftBorder{
    border-left: 1px solid $grey;
  }
}
.withPadding{
  padding: 14px 0;
}
</style>
