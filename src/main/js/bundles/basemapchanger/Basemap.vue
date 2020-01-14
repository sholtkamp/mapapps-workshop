<template>
    <v-container
        @click="$emit('changeBasemap')"
        :class="{selected: isSelected}"
        pa-0
        grid-list-md text-xs-center>
        <v-layout row wrap align-center>
            <v-flex md6>
                <v-img :src="thumbnailUrl"></v-img>
            </v-flex>
            <v-flex md6>{{ title }}</v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        props: {
            id: {
                type: String,
                default: ""
            },
            title: {
                type: String,
                default: ""
            },
            isSelected: {
                type: Boolean,
                default: false
            },
            thumbnailUrl: {
                type: String,
                default: ""
            }
        }
    };
</script>
