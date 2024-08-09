<script>
import CardsList from './CardsList.vue'
import Filter from './Filter.vue';


export default {
    components: {
        CardsList,
        Filter,
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">

                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <Filter />
                <CardsList />

            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

    
</style>