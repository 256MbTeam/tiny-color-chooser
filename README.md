#Tiny Color Chooser
The component is used to select colors from a limited list. 

The component is based on the JavaScript library [Prototype](http://www.prototypejs.org/).

##Example Use
-------

    <input id="color_chooser_2" type="hidden"/>

    <script type="text/javascript">
        new TinyColorChooser("color_chooser_2", {
            colors: ["AAA","BBB","CCC","DDD","FFF"],
            default_color: "BBB",
            popup_height: 26,
            popup_width: 102
        });
    </script>

##Supported Properties
-------
`colors`, `default_color`, `popup_width`, `popup_height`, `element_classname`, `popup_classname`, `preview_classname`




