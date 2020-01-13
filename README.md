# Übung 2

1. Hinzufügen eines weiteren Toolsets zur toolset-Konfiguration in der app.json:

```javascript
"toolset": {
    "ToolsetManager": {
        "toolsets": [
            ...,
            {
                "id": "dropdown",
                "cssClass": "ctWDYWBtn ctPrimaryInput",
                "title": "${toolsets.whatDoYouWant}",
                "tools": [
                    "tocToggleTool",
                    "printingToggleTool",
                    "sharelinkTool",
                    "basemapChangerToggleTool"
                ],
                "container": "map",
                "position": {
                    "rel_t": 80,
                    "rel_l": 20
                },
                "windowType": "dropdown"
            }
        ]
    }
}
```

2. Anpassen der nls-Strings der app.json:

nls/bundle.js
```javascript
...
toolsets: {
    whatDoYouWant: "What do you want to do?"
},
...
```

nls/de/bundle.js
```javascript
...
toolsets: {
    whatDoYouWant: "Was m\u00f6chten Sie tun?"
},
...
```
