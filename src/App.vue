<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import CardsList from './components/CardsList.vue';

export default {

  components: {
    AppHeader,
    AppMain,
    CardsList
  },

}
</script>

<template>
  <div>
    <AppHeader />

    <AppMain />
    
  </div>
</template>

<style lang="scss">
@use './styles/general.scss'
  
</style>