<template>
  <form class="filterForm" >
    <input placeholder="Фильтр" v-model="filterText" class="filterInput" />
    <select v-model="filterHead" class="select">
      <option value="name">Название</option>
      <option value="amount">Количество</option>
      <option value="distance">Дистанция</option>
    </select>
    <select v-model="filterExact" class="select">
      <option value="contain">Содержит</option>
      <option value="equal">Равно</option>
      <option value="more">Больше</option>
      <option value="less">Меньше</option>
    </select>
    <button class="button" type="submit" @click.prevent="submitHandler">Подтвердить</button>
  </form>
</template>
<script>
export default {
  name: 'filter-form',
  data() {
    return {
      filterText: '',
      filterHead: 'name',
      filterExact: 'contain'
    }
  },
  methods: {
    submitHandler () {
      this.$store.dispatch('setFilterValues', { filterText: this.filterText, filterHead: this.filterHead, filterExact: this.filterExact })
    }
  },
}
</script>
<style lang="scss" scoped>
  @import '@/variables';
  .filterForm{
    width: 100%;
    padding: 10px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: min-content 1fr 1fr min-content;

    .filterInput{
      width: 300px;
      height: 40px;
      border: 1px solid $blue;
      border-radius: 4px;
      padding: 10px;
      font-size: 16px;
    }

    .select {
      padding: 10px;
      height: 40px;
      font-size: 16px;
      border: 1px solid $blue;
      border-radius: 4px;
    }

    .button{
      height: 40px;
      width: 150px;
      background-color: transparent;
      border: 1px solid $blue;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      transition: 300ms;

      &:hover{
        cursor: pointer;
        background-color: $blue;
        transition: 400ms;
        color: white;
      }
    }
  }
</style>