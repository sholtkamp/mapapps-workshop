<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <basemap
                v-for="basemap in basemaps"
                class="basemapEntry"
                :key="basemap.id"
                :id="basemap.id"
                :title="basemap.title"
                :isSelected="basemap.id === selectedId"
                @changeBasemap="selectedId = basemap.id"
            ></basemap>
        </v-layout>
    </v-container>
</template>
<script>
    import Bindable from "apprt-vue/mixins/Bindable";
    import Basemap from "./Basemap.vue";

    export default {
        components: {
            basemap: Basemap
        },
        mixins: [Bindable],
        data: function () {
            return {
                selectedId: undefined,
                basemaps: []
            };
        }
    };
</script>
