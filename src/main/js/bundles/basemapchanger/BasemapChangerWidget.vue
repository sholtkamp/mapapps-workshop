<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-radio-group
                v-model="selectedId"
                @change="changeBasemap">
                <v-radio
                    v-for="basemap in basemaps"
                    :key="basemap.id"
                    :label="basemap.title"
                    :value="basemap.id"
                ></v-radio>
            </v-radio-group>
        </v-layout>
    </v-container>
</template>
<script>
    import Bindable from "apprt-vue/mixins/Bindable";

    export default {
        components: {},
        mixins: [Bindable],
        data: function () {
            return {
                selectedId: undefined,
                basemaps: []
            };
        },
        methods: {
            changeBasemap: function () {
                this.$emit("changeBasemap", this.selectedId);
            }
        }
    };
</script>
