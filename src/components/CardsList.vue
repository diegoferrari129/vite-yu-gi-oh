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
        this.getCards(),
        this.getArch()
    },
    methods: {
        getCards() {
            axios.get(store.api).then((data) => {
                store.cardsList = data.data.data;
            });
        },
        getArch() {
            axios.get(store.apiArch).then((response) => {
                for (let i = 0; i < 10; i++) {
                    store.arch.push(response.data[i]);
                }
            });
        },
    },
}
</script>

<template>

    
    <div class="bg-card">

        <div class="col-20" v-for="card in store.cardsList" :key="card.id">
            <div class="card">
                <img :src="card.card_images[0].image_url" :alt="card.name">
                <h6>{{ card.name.toUpperCase() }}</h6>
                <h5>{{ card.archetype || card.race }}</h5>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .bg-card {
        display: flex;
        flex-wrap: wrap;
        background-color: white;
        padding: 40px 40px 0px 40px;
    }

    .col-20 {
        width: calc(100% / 5);
    }

    .card {
        margin: 10px;
        background-color: #d48f38;
        text-align: center;
        min-height: 50vh;

        h6{
            color: white;
            font-weight: 700;
            padding: 15px 10px 20px 10px;
        }

    }
</style>