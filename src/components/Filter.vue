<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="col-12">
        <div class="text-center mb-2">
            <select @change="$emit('filterByArch')" v-model="store.archSearch">
                <option value="">Filter by Archetype</option>
                <option :value="archetype.archetype_name" v-for="archetype in store.arch">
                    {{ archetype.archetype_name }}
                </option>
            </select>
        </div>
    </div>
</template>

<style lang="sass" scoped >
    
</style>