<?php
class PluginJsonBind{
  public function widget_include(){
    wfPlugin::enable('wf/embed');
    $widget = wfDocument::createWidget('wf/embed', 'embed', array('type' => 'script', 'file' => '/plugin/json/bind/js/'.__CLASS__.'.js'));
    wfDocument::renderElement(array($widget));
  }
}
