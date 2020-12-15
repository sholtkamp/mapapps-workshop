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

2. Anpassen der basemaps in der app.json:

```javascript
"basemaps": [
    {
        "id": "esri_street",
        "basemap": "streets",
        "title": "Strassen",
        "selected": true
    },
    {
        "id": "esri_street2",
        "basemap": "streets-vector",
        "title": "Strassen Vector"
    },
    {
        "id": "esri_satellite",
        "basemap": "satellite",
        "title": "Satellit"
    },
    {
        "id": "esri_hybrid",
        "basemap": "hybrid",
        "title": "Hybrid"
    }
]
```

3. Binden der thumbnail-url-Propery an die basemap-Komponente in der BasemapChangerWidget.vue-Komponente:

```javascript
<basemap
    v-for="basemap in basemaps"
    class="basemapEntry"
    :key="basemap.id"
    :id="basemap.id"
    :title="basemap.title"
    :is-selected="basemap.id === selectedId"
    :thumbnail-url="basemap.thumbnailUrl"
    @changeBasemap="selectedId = basemap.id"
></basemap>
```

4. Hinzufügen der thumbnailUrl-Property in der Basemap.vue-Datei:

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

5. Anpassen des templates der Basemap.vue-Datei:

```javascript
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
```
