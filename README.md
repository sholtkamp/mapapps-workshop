# Übung 6

1. Private Variablen zur BasemapChangerWidgetFactory.js hinzufügen

```javascript
#vm = undefined;
#binding = undefined;
```

2. _initComponent-Methode hinzufügen, welche die Vue-Komponente erzeugt und in einem Symbol speichert. Zusätzlich wird das Binding erzeugt:

```javascript
_initComponent() {
    const basemapsModel = this._basemapsModel;
    const basemaps = basemapsModel.basemaps.map((basemap) => {
        return {
            id: basemap.id,
            title: basemap.title
        }
    });

    const vm = this.#vm = new Vue(BasemapChangerWidget);

    this.#binding = Binding.for(vm, basemapsModel)
        .syncAll("selectedId")
        .syncToLeftNow()
        .enable();
}
```

3. Vue-Komponente in der createInstance-Methode zurückgeben:

```javascript
createInstance() {
    return VueDijit(this.#vm);
}
```

4. activate und deactivate-Methoden hinzufügen, die beim Starten und Beenden des Bundles aufgerufen werden:

```javascript
activate() {
    this._initComponent();
}

deactivate() {
    this.#binding.unbind();
    this.#binding = undefined;
    this.#vm = undefined;
}
```
