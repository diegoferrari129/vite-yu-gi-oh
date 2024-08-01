<script>
import axios from 'axios';
import store from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import CardsList from './components/CardsList.vue';

export default {

  components: {
    AppHeader,
    AppMain,
    CardsList
  },
  
  data() {
    return {
      store
    }
  },

  created() {
    this.getCardsList()
  },

  methods: {
    getCardsList() {
      axios.get(store.api).then((data) => {
        store.cardsList = data.data.data

        console.log(store.cardsList);
        
      });
    }
  },

}
</script>

<template>
  <div>
    
  </div>
</template>

<style lang="scss">
@use './styles/general.scss'
  
</style>