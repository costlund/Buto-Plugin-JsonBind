# Buto-Plugin-JsonBind
Bind json data to an element using element attributes.
Bind Datatable data to a select.

## Include
Include script in head.
```
type: widget
data:
  plugin: json/bind
  method: include
```

## Bind json data
Set innerHTML in an element.
```
type: p
attribute:
  json-bind: _my_json_object.name
```
Select item in a selectbox.
```
type: select
attribute:
  json-bind: Data.city_id
```

### Bind Datatable data
Bind select from datatable.
```
type: select
attribute:
  json-bind-datatable-to-select: table_city_list
  json-bind-datatable-to-select-value: name
  json-bind-datatable-to-select-option: id
```

## Bind method
```
-
  type: span
  attribute:
    json-bind: Data.name
    json-bind-method: handle_name
-
  type: script
  innerHTML: |
    function handle_name(e){
      console.log('Method handle_name is called when bind method is fired! Param e is element object.');
      console.log(e);
    }
```

## Call bind method
Call bind method to set elements and select boxes.
```
PluginJsonBind.bind();
```
