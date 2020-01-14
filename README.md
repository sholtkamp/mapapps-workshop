# Übung 4

1. Auslösen des @change-Events an der RadioButtonGroup in der BasemapChangerWidget.vue:

```javascript
<v-radio-group
    v-model="selectedId"
    @change="changeBasemap">
    <v-radio
        v-for="basemap in basemaps"
        :key="basemap.id"
        :label="basemap.title"
        :value="basemap.id"
    ></v-radio>
</v-radio-group>
```

2. changeBasemap-Methode zur BasemapChangerWidget.vue hinzufügen:

```javascript
export default {
    components: {},
    mixins: [Bindable],
    data: function () {
        return {
            selectedId: undefined,
            basemaps: []
        };
    },
    methods: {
        changeBasemap: function () {
            this.$emit("changeBasemap", this.selectedId);
        }
    }
};
```

3. In der BasemapChangerWidgetFactory.js an das changeBasemap-Event binden:

```javascript
vm.$on("changeBasemap", (selectedId)=>{
    basemapsModel.selectedId = selectedId;
});
```
