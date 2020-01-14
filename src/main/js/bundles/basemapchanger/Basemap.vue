<template>
    <v-container
        @click="$emit('changeBasemap')"
        grid-list-md>
        <v-layout row wrap>
            <v-flex md12>{{ title }}</v-flex>
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
