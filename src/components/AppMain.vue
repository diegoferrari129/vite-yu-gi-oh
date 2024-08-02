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
                <div class="bg-main">
                    <CardsList />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    .bg-main {
        display: flex;
        flex-wrap: wrap;
        background-color: white;
        padding: 40px;
    }
    
</style>