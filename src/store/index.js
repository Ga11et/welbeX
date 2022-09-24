import { createStore } from 'vuex'
import { fetchAPI } from './api/fetchAPI'

export default createStore({
  state: {
    tableData: [],
    activeSort: null,
    activePage: 1,
    itemsOnPage: 10,
    filterText: '',
    filterHead: '',
    filterExact: '',
  },
  getters: {
    tableData (store) {
      return store.tableData.sort((a, b) => {
        switch (store.activeSort) {
          case 'name':
            if (a.name >= b.name) return 1
            return -1
          case 'amount':
            return a.amount - b.amount
          case 'distance':
            return a.distance - b.distance
          default:
            break;
        }
      }).filter(item => {
        switch (store.filterHead) {
          case 'name':
            if (store.filterExact === 'equal') return item.name === store.filterText
            return item.name.toLowerCase().indexOf(store.filterText.toLowerCase()) !== -1
          case 'amount':
            if (!/[0-9]/.test(store.filterText)) return item
            if (store.filterExact === 'equal') return item.amount === +store.filterText
            if (store.filterExact === 'contain') return item.amount.toString().indexOf(store.filterText) !== -1
            if (store.filterExact === 'more') return item.amount > +store.filterText
            if (store.filterExact === 'less') return item.amount < +store.filterText
            return item
          case 'distance':
            if (!/[0-9]/.test(store.filterText)) return item
            if (store.filterExact === 'equal') return item.distance === +store.filterText
            if (store.filterExact === 'contain') return item.distance.toString().indexOf(store.filterText) !== -1
            if (store.filterExact === 'more') return item.distance > +store.filterText
            if (store.filterExact === 'less') return item.distance < +store.filterText
            return item
          default:
            return item
        }
      })
    },
    activeSort (store) {
      return store.activeSort
    },
    activePage (store) {
      return store.activePage
    },
    itemsOnPage (store) {
      return store.itemsOnPage
    }
  },
  mutations: {
    setTableData (state, payload) {
      state.tableData = payload
    },
    setActiveSort (state, payload) {
      state.activeSort = payload
    },
    setActivePage (state, payload) {
      if (payload === 0) return
      if (payload > Math.ceil(state.dataCount / state.itemsOnPage)) return
      state.activePage = payload
    },
    setFilterValues (state, payload) {
      state.filterText = payload.filterText
      state.filterHead = payload.filterHead
      state.filterExact = payload.filterExact
    }
  },
  actions: {
    async fetchTableData ({ commit }) {
      const data = await fetchAPI.fetchData()
      commit('setTableData', data)
    },
    setActiveSort ({ commit }, newActiveSort) {
      commit('setActiveSort', newActiveSort)
    },
    setActivePage ({ commit }, newActive) {
      commit('setActivePage', newActive)
    },
    setFilterValues ({ commit }, newFilterValues) {
      console.log(newFilterValues)
      commit('setFilterValues', newFilterValues)
    }
  },
  modules: {
  }
})
