// Import necessary dependencies
import Binding from "apprt-binding/Binding";
import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import BasemapChangerWidget from "./BasemapChangerWidget.vue";

/** @classdesc BasemapChangerWidgetFactory representing a BasemapChangerWidgetFactory */
export default class BasemapChangerWidgetFactory {
    /**
     * Allows instantiating of BasemapChangerWidgets
    */

    // Specify attributes of BasemapChangerWidgetFactory
    // the # indicator describes these attributes as private
    #vm = undefined;
    #basemapModelBinding = undefined;
    #mapWidgetModelBinding = undefined;

    /**
     * @method activate Is executed when component status resolves to active
     *
     * This function calls _initComponent(), acting as the constructor of the widget
     */
    activate() {
        this._initComponent();
    }

    /**
     * @method deactivate Is executed when component is deactivated
     *
     * This function clears the bindings between the widget and the models
     */
    deactivate() {
        this.#basemapModelBinding.unbind();
        this.#basemapModelBinding = undefined;
        this.#mapWidgetModelBinding.unbind();
        this.#mapWidgetModelBinding = undefined;
        this.#vm = undefined;
    }

    /**
     * @method createInstance
     *
     * @returns {VueDijit} The Vue widget wrapped as a Dijit
     */
    createInstance() {
        return VueDijit(this.#vm);
    }


    /**
     * Creates an instance of a BasemapChangerWidgetFactory
     *
     * @param {basemapModel} this._basemapModel  Reference to the basemapModel
     * @param {basemap} basemap Basemap avilable in the application
     * @param {properties} this._properties Reference to the properties
     * @param {Vue} vm Instance of a BasemapChangerWidget
     * @param {Binding} basemapModelBinding Binding between the BasemapChangerWidget and the basemapModel; Used for syncing properties
     * @param {Binding} mapWidgetModelBinding Binding between the BasemapChangerWidget mapWidgetModel; Used for syncing properties
     *
     * @return {basemaps} Array containing the id, title and thumbnailUrl of all available maps
     */
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
        basemapsModel.selectedId = properties.selectedBasemapId;

        const vm = this.#vm = new Vue(BasemapChangerWidget);
        vm.basemaps = basemaps;

        this.#basemapModelBinding = Binding.for(vm, basemapsModel)
            .syncAll("selectedId") // Sync the selectedId between widget and baseMapmodel
            .syncToLeftNow() // Push selectedId from basemapModel to widget initially
            .enable(); // Activate binding

        const mapWidgetModel = this._mapWidgetModel;
        this.#mapWidgetModelBinding = Binding.for(vm, mapWidgetModel)
            .syncAll("zoom") // Sync the zoom between widget and mapWidgetModel
            .syncToLeftNow() // Push zoom from mapWidgetModel to widget initially
            .enable(); // Activate binding
    }
}
