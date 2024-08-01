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
    <div class="col-20">
        
    </div>
</template>

<style lang="scss" scoped>
    .col-20 {
        width: calc(100% / 5);
    }
</style>