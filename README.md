# Übung 11

1. Hinzufügen der MapWidgetModel-Referenz zur BasemapChangerWidgetFactory:

```javascript
{
    "name": "BasemapChangerWidgetFactory",
    "provides": [
        "dijit.Widget",
        "maptest.Widget"
    ],
    "instanceFactory": true,
    "properties": {
        "widgetRole": "basemapChangerWidget",
        "selectedBasemapId": "esri_street"
    },
    "references": [
        {
            "name": "_mapWidgetModel",
            "providing": "map-widget.MapWidgetModel"
        },
        {
            "name": "_basemapsModel",
            "providing": "map-basemaps-api.BasemapsModel"
        }
    ]
}
```

2. Zoom-Property zur BasemapChangerWidget.vue hinzufügen:

```javascript
export default {
    components: {
        basemap: Basemap
    },
    mixins: [Bindable],
    data: function () {
        return {
            selectedId: undefined,
            basemaps: [],
            zoom: undefined
        };
    }
};
```

3. Anlegen eines neuen Bindings für das MapWidgetModel in der BasemapChangerWidgetFactory:

```javascript
const _mapWidgetModelBinding = Symbol("_mapWidgetModelBinding");
```

```javascript
deactivate() {
    this[_binding].unbind();
    this[_binding] = undefined;
    this[_mapWidgetModelBinding].unbind();
    this[_mapWidgetModelBinding] = undefined;
    this[_vm] = undefined;
}
```

```javascript
const mapWidgetModel = this._mapWidgetModel;
this[_mapWidgetModelBinding] = Binding.for(vm, mapWidgetModel)
    .syncAll("zoom")
    .syncToLeftNow()
    .enable();
```

4. Hinzufügen eines Sliders zum BasemapChangerWidget.vue:

```javascript
<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex md12>
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
            </v-flex>
            <v-flex md12>
                <v-slider
                    v-model="zoom"
                    max="15"
                    min="1"
                    label="Zoom"
                    thumb-label>
                </v-slider>
            </v-flex>
        </v-layout>
    </v-container>
</template>
```
