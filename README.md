# Übung 3

1. Referenz auf das BasemapsModel zur manifest.json hinzufügen:

```javascript
{
    "name": "BasemapChangerWidgetFactory",
    "provides": [
        "dijit.Widget",
        "maptest.Widget"
    ],
    "instanceFactory": true,
    "properties": {
        "widgetRole": "basemapChangerWidget"
    },
    "references": [
        {
            "name": "_basemapsModel",
            "providing": "map-basemaps-api.BasemapsModel"
        }
    ]
}
```

2. Attribute zur data-function der BasemapChangerWidget.vue hinzufügen:

```javascript
export default {
    components: {},
    mixins: [Bindable],
    data: function () {
        return {
            selectedId: undefined,
            basemaps: []
        };
    }
};
```

3. RadioButton-Group zum template der BasemapChangerWidget.vue hinzufügen:

```javascript
<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-radio-group v-model="selectedId">
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
```

4. basemaps-Array in der BasemapChangerWidgetFactory erzeugen:

```javascript
createInstance() {
    const basemapsModel = this._basemapsModel;
    const basemaps = basemapsModel.basemaps.map((basemap) => {
        return {
            id: basemap.id,
            title: basemap.title
        }
    });

    let vm = new Vue(BasemapChangerWidget);
    vm.basemaps = basemaps;
    vm.selectedId = basemapsModel.selectedId;
    return VueDijit(vm);
}
```
