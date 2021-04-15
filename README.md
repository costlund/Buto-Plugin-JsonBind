# Buto-Plugin-JsonBind
Bind json to element.

## Include
Include script in head.
```
type: widget
data:
  plugin: json/bind
  method: include
```

## JSON
```
type: p
attribute:
  json-bind: _my_json_object.name
```
Call bind method.
```
PluginJsonBind.bind();
```

### Datatable
Bind select from datatable.
```
var select = document.getElementById('_my_select_');
PluginJsonBind.bind_datatable_to_select(select, select.getAttribute('ondemand-json-bind-datatable-to-select'), select.getAttribute('ondemand-json-bind-datatable-to-select-value'), select.getAttribute('ondemand-json-bind-datatable-to-select-option'), _my_json_object_.id);
```
