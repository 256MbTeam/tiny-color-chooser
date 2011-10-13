var TinyColorChooser = Class.create({
    initialize:function(input_id, options){
        var input_field = $(input_id);
        this.options = Object.extend({
            element_classname: "color-chooser-element",
            popup_classname: "color-chooser-popup",
            preview_classname: 'color-chooser-preview',
            default_color: "daf",
            popup_width: "102px",
            popup_height: "41px",
            colors: ["faa","fdd","fee","aaf","afa","faa","aff","ffa","faf"]
        },
        options);
        this.createColorChooserDiv(input_field)
    },
    createColorChooserDiv: function(input_field){
        var preview = new Element('div');
        
        preview.addClassName(this.options.preview_classname);
        preview.style.background = "#"+(input_field.value || this.options.default_color);
        
        preview.input_field = input_field;
        
        preview.chooser = this.createPopup(this.options['colors'], preview, this.options);
        preview.selected_color = this.options['selected_color'];
        
        var parent = input_field.parentNode;
        parent.appendChild(preview);
        parent.appendChild(preview.chooser);
        document.observe("click", function(event){
            if(preview != event.srcElement){
                preview.chooser.hide(); 
            }else
            {
                preview.chooser.toggle();      
            }
            return;
        });
    },
    createPopup: function(colors, preview, options){
        var popup = new Element('div');
        popup.addClassName(options.popup_classname);
        popup.setStyle({
            display: 'none',
            width: options["popup_width"],
            height: options["popup_height"]
        });
        
        colors.each(function(color){
            var color_field = document.createElement('div');
            color_field.addClassName(options.element_classname);
            color_field.setStyle({
                'background': "#"+color
            });
            
            color_field.color = color;
            color_field.onclick = function(){
                preview.setStyle({
                    'background-color': "#"+this.color
                });
                popup.setStyle({
                    display: 'none'
                });
                preview.input_field.value = this.color;
            }
            popup.appendChild(color_field);
        });
        return popup;
    }
});
