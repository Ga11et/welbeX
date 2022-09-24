<template>
  <div class="todoItem">
    <div class="item">
      {{ new Date(content.date).toLocaleDateString() }}
    </div>
    <div class="item">
      {{ content.name }}
    </div>
    <div class="item">
      {{ content.amount }}
    </div>
    <div class="item">
      {{ content.distance }}
    </div>
  </div>
</template>
<script>

export default {
  name: "todo-item",
  props: ['content']
}
</script>
<style lang="scss" scoped>
@import '@/variables.scss';
@import '@/styles/todoItem.scss';
</style>