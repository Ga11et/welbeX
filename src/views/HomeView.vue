<template>
  <div class="home">
    <FilterForm />
    <template v-if="tableData">
      <Pagination :itemCount="tableData.length" :itemsInPage="itemsOnPage" :activeItem="activePage" @setActive="setActive" />
      <TableHead />
      <TableItem v-for="item in tableData.slice((this.activePage - 1) * this.itemsOnPage, (this.activePage) * this.itemsOnPage)" :content="item" :key="item.id" />
    </template>
  </div>
</template>
<script>
import TableHead from '@/components/tableHead.vue';
import TableItem from '@/components/tableItem.vue';
import Pagination from '@/components/pagination.vue';
import FilterForm from '@/components/filterForm.vue';

export default {
  name: 'HomeView',
  components: { TableHead, TableItem, Pagination, FilterForm },
  computed: {
    tableData () {
      return this.$store.getters.tableData
    },
    activePage () {
      return this.$store.getters.activePage
    },
    itemsOnPage () {
      return this.$store.getters.itemsOnPage
    }
  },
  mounted() {
    this.$store.dispatch('fetchTableData')
  },
  methods: {
    setActive (newActive) {
      this.$store.dispatch('setActivePage', newActive)
    }
  },
}
</script>
<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
