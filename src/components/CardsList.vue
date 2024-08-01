<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    data() {
        return {
            store,
        }
    },
    created() {
        this.getCards()
    },
    methods: {
        getCards() {
            axios.get(store.api).then((data) => {
                store.cardsList = data.data.data;
            });
        }
    },
}
</script>

<template>
    <div class="col-20" v-for="card in store.cardsList" :key="card.id">
        <div class="card">
            <img :src="card.card_images[0].image_url" :alt="card.name">
            {{ card.name }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .col-20 {
        width: calc(100% / 5);
    }
</style>