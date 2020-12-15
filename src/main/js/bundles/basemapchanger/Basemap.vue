<template>
    <v-container
        grid-list-md
        @click="$emit('changeBasemap')">
        <v-layout
            row
            wrap>
            <v-flex md12>
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
            }
        }
    };
</script>
