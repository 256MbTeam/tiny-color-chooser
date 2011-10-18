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

If you are using Ruby On Rails, you can define helper method
-------
    
    def select_color_tag(name, value=nil, options={})
        out = hidden_field_tag(name, value, options)
        out << javascript_tag("new TinyColorChooser(\"#{sanitize_to_id(name)}\", #{options.to_json})");
    end

and use it in your erb
-------

    <%=  select_color_tag("some_field_name", "some_field_value", {
            :default_color=>"CCC",
            :colors=>["AAA", "BBB", "CCC", "DDD", "EEE", "FFF"]
        }) %>

##Supported Properties
-------
`colors`, `default_color`, `popup_width`, `popup_height`, `element_classname`, `popup_classname`, `preview_classname`




