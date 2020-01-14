# Übung 9

1. Hinzufügen der isSelected-Property zur Basemap.vue Komponente:

```javascript
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
        }
    }
};
```

2. Binden der selected Klasse an den container der Basemap.vue-Komponente, wenn isSelected den Wert true annimmt:

```javascript
<template>
    <v-container
        @click="$emit('changeBasemap')"
        :class="{selected: isSelected}"
        grid-list-md>
        <v-layout row wrap>
            <v-flex md12>{{ title }}</v-flex>
        </v-layout>
    </v-container>
</template>
```

3. Binden der isSelected-Propery an die basemap Komponente in der BasemapChangerWidget.vue-Komponente:

```javascript
<basemap
    v-for="basemap in basemaps"
    class="basemapEntry"
    :key="basemap.id"
    :id="basemap.id"
    :title="basemap.title"
    :isSelected="basemap.id === selectedId"
    @changeBasemap="selectedId = basemap.id"
></basemap>
```

4. Hinzufügen eines Styles für die selected-Klasse in der styles.css:

```javascript
.ctAppRoot .basemapChangerWidget .basemapEntry.selected {
    border: 2px solid blue;
}
```
