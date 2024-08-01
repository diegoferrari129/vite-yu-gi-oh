<script>
import CardsList from './CardsList.vue'

export default {
    components: {
        CardsList
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <CardsList />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    main {
        background-color: white;
    }
    
</style>