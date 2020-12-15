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

```html
<template>
    <v-container
        grid-list-md
        :class="{selected: isSelected}"
        @click="$emit('change-basemap')">
        <v-layout
            row
            wrap>
            <v-flex md12>
                {{ title }}
            </v-flex>
        </v-layout>
    </v-container>
</template>
```

3. Binden der isSelected-Propery an die basemap Komponente in der BasemapChangerWidget.vue-Komponente:

```html
<basemap
    v-for="basemap in basemaps"
    :id="basemap.id"
    :key="basemap.id"
    :title="basemap.title"
    :is-selected="basemap.id === selectedId"
    class="basemapEntry"
    @change-basemap="selectedId = basemap.id"
></basemap>
```

4. Hinzufügen eines Styles für die selected-Klasse in der styles.css:

```css
.ctAppRoot .basemapChangerWidget .basemapEntry {
    cursor: pointer;
}

.ctAppRoot .basemapChangerWidget .basemapEntry.selected {
    border: 2px solid blue;
}
```
