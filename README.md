# Übung 8

1. Hinzufügen der Basemap.vue Komponente:

```javascript
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
```

2. Registrierung der Vue-Komponente in der BasemapChangerWidget.vue:

```javascript
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
```

3. Hinzufügen der basemap-Komponente zum template der BasemapChangerWidget.vue:

```javascript
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
```
