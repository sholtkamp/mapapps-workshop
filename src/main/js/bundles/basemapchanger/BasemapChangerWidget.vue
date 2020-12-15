<template>
    <v-container grid-list-md>
        <v-layout
            row
            wrap>
            <basemap
                v-for="basemap in basemaps"
                :id="basemap.id"
                :key="basemap.id"
                :title="basemap.title"
                class="basemapEntry"
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
