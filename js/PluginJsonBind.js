function PluginJsonBind(){
  this.bind_datatable_to_select = function(e, datatable_id, json_value, json_option, json_default){
    e.options.length = 0;
    var data = $('#'+datatable_id).DataTable().rows().data();
    $.each( data, function( key, value ) {
      $(e)[0].options.add( eval("new Option(value."+json_value+", value."+json_option+")") )
    });
    /**
     * 
     */
    if(json_default){
      $(e).val(json_default);
    }
    /**
     * 
     */
    return null;
  }
  this.bind = function(){
    var elements = null;
    /**
     * Datatable to select
     */
    elements = document.querySelectorAll('[json-bind-datatable-to-select]');
    for (var i = 0; i < elements.length; i++) {
      this.bind_datatable_to_select(elements[i], elements[i].getAttribute('json-bind-datatable-to-select'), elements[i].getAttribute('json-bind-datatable-to-select-value'), elements[i].getAttribute('json-bind-datatable-to-select-option'))
    }
    /**
     * Elements with innerHTML or value
     */
    elements = document.querySelectorAll('[json-bind]');
    for (var i = 0; i < elements.length; i++) {
      var _value = null;
      try {
        if(typeof eval(elements[i].getAttribute('json-bind'))=='undefined'){
          _value = '';
        }else{
          _value = eval(elements[i].getAttribute('json-bind'));
        }
      }
      catch(err) {
        _value = '';
      }       
      if(!elements[i].getAttribute('json-bind-attribute')){
        if(elements[i].tagName=='INPUT' || elements[i].tagName=='TEXTAREA'){
          /**
           * Input, Textarea
           */
          elements[i].value = _value;
        }else if(elements[i].tagName=='SELECT'){
          /**
           * Select
           */
          $(elements[i]).val(_value);
        }else{
          /**
           * Other html elements
           */
          elements[i].innerHTML = _value;
        }
      }else{
        elements[i].setAttribute(elements[i].getAttribute('json-bind-attribute'), _value);
      }
    }
  }
}
var PluginJsonBind = new PluginJsonBind();
