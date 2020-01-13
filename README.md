# Übung 1

1. Anpassen des Widgets in der manifest.json

```javascript
"layout-widgets": [
    {
        "widgetRole": "basemapChangerWidget",
        "template": "seasons",
        "window": {
            "title": "${ui.windowTitle}",
            "autofocus": false,
            "dockTool": "basemapChangerToggleTool",
            "minimizeOnClose": true,
            "marginBox": {
                "w": 400,
                "h": 500,
                "b": 100,
                "l": 20
            }
        }
    }
]
```

2. Anpassen des Widgets in der app.json

```javascript
"templates": {
    "TemplateModel": {
        "_templates": [
            {
                "name": "seasons",
                "widgets": [
                    {
                        "widgetRole": "basemapChangerWidget",
                        "window": {
                            "marginBox": {
                                "t": 40,
                                "b": 40,
                                "r": 0,
                                "w": 500
                            },
                            "fixEdgesInViewPort": {
                                "l": false
                            },
                            "closable": false,
                            "collapsable": true,
                            "collapseAxis": {
                                "l": true
                            }
                        }
                    }
                ]
            }
        ]
    }
}
```
