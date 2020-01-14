# Übung 4

1. Entfernen des @change-Events von der RadioButtonGroup in der BasemapChangerWidget.vue:

```javascript
<v-radio-group v-model="selectedId">
    <v-radio
        v-for="basemap in basemaps"
        :key="basemap.id"
        :label="basemap.title"
        :value="basemap.id"
    ></v-radio>
</v-radio-group>
```

2. Entfernen der changeBasemap-Methode in der BasemapChangerWidget.vue:

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

3. Entfernen des Bindings an das changeBasemap-Event. Verwendung der "apprt-binding/Binding"-Klasse zur erzeugen eines Bindings:

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

    Binding.for(vm, basemapsModel)
        .syncAll("selectedId")
        .syncAllToLeft("basemaps")
        .syncToLeftNow()
        .enable();

    return VueDijit(vm);
}
```
