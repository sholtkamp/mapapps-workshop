# Übung 7

1. Hinzufügen einer default selectedBasemapId-Property in der Konfiguration der BasemapChangerWidgetFactory in der manifest.json:

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
            "name": "_basemapsModel",
            "providing": "map-basemaps-api.BasemapsModel"
        }
    ]
}
```

2. Auslesen der Property in der BasemapChangerWidgetFactory und setzen der konfigurierten Basemap-ID:

```javascript
_initComponent() {
    const basemapsModel = this._basemapsModel;
    const basemaps = basemapsModel.basemaps.map((basemap) => {
        return {
            id: basemap.id,
            title: basemap.title
        }
    });

    const properties = this._properties;
    basemapsModel.selectedId = properties.selectedBasemapId;

    const vm = this[_vm] = new Vue(BasemapChangerWidget);

    this[_binding] = Binding.for(vm, basemapsModel)
        .syncAll("selectedId")
        .syncAllToLeft("basemaps")
        .syncToLeftNow()
        .enable();
}
```
