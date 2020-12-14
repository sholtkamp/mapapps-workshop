import Binding from "apprt-binding/Binding";
import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import BasemapChangerWidget from "./BasemapChangerWidget.vue";

export default class BasemapChangerWidgetFactory {

    #vm = undefined;
    #binding = undefined;

    activate() {
        this._initComponent();
    }

    deactivate() {
        this.#binding.unbind();
        this.#binding = undefined;
        this.#vm = undefined;
    }

    createInstance() {
        return VueDijit(this.#vm);
    }

    _initComponent() {
        const basemapsModel = this._basemapsModel;
        const basemaps = basemapsModel.basemaps.map((basemap) => {
            return {
                id: basemap.id,
                title: basemap.title
            }
        });

        const properties = this._properties;
        const selectedBasemapId = properties.selectedBasemapId;
        basemapsModel.selectedId = selectedBasemapId;

        const vm = this.#vm = new Vue(BasemapChangerWidget);
        vm.basemaps = basemaps;

        this.#binding = Binding.for(vm, basemapsModel)
            .syncAll("selectedId")
            .syncToLeftNow()
            .enable();
    }

}
