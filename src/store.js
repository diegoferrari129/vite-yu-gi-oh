import { reactive } from "vue";

export const store = reactive({

    api: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    apiArch: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    arch: [],
    cardsList: [],
});