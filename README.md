# Übung 10

1. Hinzufügen der thumbnailUrl-Property zum basemaps-Array in der BasemapChangerWidgetFactory:

```javascript
const basemaps = basemapsModel.basemaps.map((basemap) => {
    return {
        id: basemap.id,
        title: basemap.title,
        thumbnailUrl: basemap.thumbnailUrl
    }
});
```

2. Binden der thumbnail-url-Propery an die basemap-Komponente in der BasemapChangerWidget.vue-Komponente:

```javascript
<basemap
    v-for="basemap in basemaps"
    :id="basemap.id"
    :key="basemap.id"
    :title="basemap.title"
    :is-selected="basemap.id === selectedId"
    :thumbnail-url="basemap.thumbnailUrl"
    class="basemapEntry"
    @change-basemap="selectedId = basemap.id"
></basemap>
```

3. Hinzufügen der thumbnailUrl-Property in der Basemap.vue-Datei:

```javascript
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
```

4. Anpassen des templates der Basemap.vue-Datei:

```javascript
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
```
