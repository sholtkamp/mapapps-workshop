import Binding from "apprt-binding/Binding";
import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import BasemapChangerWidget from "./BasemapChangerWidget.vue";

const _vm = Symbol("_vm");
const _binding = Symbol("_binding");
const _mapWidgetModelBinding = Symbol("_mapWidgetModelBinding");

export default class BasemapChangerWidgetFactory {

    activate() {
        this._initComponent();
    }

    deactivate() {
        this[_binding].unbind();
        this[_binding] = undefined;
        this[_mapWidgetModelBinding].unbind();
        this[_mapWidgetModelBinding] = undefined;
        this[_vm] = undefined;
    }

    createInstance() {
        return VueDijit(this[_vm]);
    }

    _initComponent() {
        const basemapsModel = this._basemapsModel;
        const basemaps = basemapsModel.basemaps.map((basemap) => {
            return {
                id: basemap.id,
                title: basemap.title,
                thumbnailUrl: basemap.thumbnailUrl
            }
        });

        const properties = this._properties;
        const selectedBasemapId = properties.selectedBasemapId;
        basemapsModel.selectedId = selectedBasemapId;

        const vm = this[_vm] = new Vue(BasemapChangerWidget);
        vm.basemaps = basemaps;

        this[_binding] = Binding.for(vm, basemapsModel)
            .syncAll("selectedId")
            .syncToLeftNow()
            .enable();

        const mapWidgetModel = this[_mapWidgetModelBinding] = this._mapWidgetModel;
        Binding.for(vm, mapWidgetModel)
            .syncAll("zoom")
            .syncToLeftNow()
            .enable();
    }

}
