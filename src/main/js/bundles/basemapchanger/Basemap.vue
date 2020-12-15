<template>
    <v-container
        pa-0
        text-xs-center
        grid-list-md
        :class="{selected: isSelected}"
        @click="$emit('change-basemap')">
        <v-layout
            row
            wrap
            align-center>
            <v-flex md6>
                <v-img :src="thumbnailUrl"></v-img>
            </v-flex>
            <v-flex md6>
                {{ title }}
            </v-flex>
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
