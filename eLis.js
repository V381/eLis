
/*Author : Pavle Paunovic */

var eLis = (function(){
    var eLis = {};
    eLis.version = "0.0.1";
    return {
        cEl : function(data) {
            data = data || {};
            if (typeof data.el === "string") {
                data.el = document.createElement(data.el);
            } else {
                throw "el must be string"
            }
            data.html = data.html || "";
            data.el.innerHTML = data.html || "";
            data.elHtml = data.elHtml || [];
            data.classes = data.classes || [];
            data.ids = data.ids || [];

            if (data.appendTo) {
                if (typeof data.appendTo === "string") {
                    data.appendTo = document.querySelector(data.appendTo).appendChild(data.el);
                }
                else {
                    data.appendTo = data.appendTo.appendChild(data.el);
                }
            }

                if (data.elNum && data.el) {
                    data.elNum = data.elNum || 0;
                    for (var i = 0; i < data.elNum; i++) {
                        if (data.elNum != data.elHtml.length) {
                            throw "elNum must match elHtml array length"
                        } else {
                            var el = document.createElement(data.el.tagName);

                            el.appendChild(document.createTextNode(data.elHtml[i] || data.html));
                            el.setAttribute("class", data.classes[i]);
                            el.setAttribute("id", data.ids[i]);
                            this.attrs(data, el, i);
                            if (el.className === "undefined" || el.className === "") {
                                el.removeAttribute("class");
                            }
                            if (el.id === "undefined" || el.id === "") {
                                el.removeAttribute("id");
                            }

                            if (!data.appendTo) {
                                throw "You must define appendTo property. !appendTo works only with single elements";
                            }
                            else {
                                data.appendTo.parentNode.appendChild(el);
                            }
                        }
                    }
                    data.appendTo.parentNode.removeChild(data.appendTo)

                }


            data.attrarg = data.attrarg || "";
            if (data.class) data.class = data.el.setAttribute("class", data.class);
            if (data.id) data.id = data.el.setAttribute("id", data.id || ""
            );
            this.attr(data, el);
            this.attrs(data, data.el, 0);
            return data.el;
        },

        attr : function(data){
            if (data.attr) {
                data.attr = data.attr || {};
                data.attr.data = data.attr.data || "";
                data.attr.attr = data.el.setAttribute(
                    data.attr.attr, data.attr.data
                );
            }
        },

        attrs : function(data, el, i){
            data.attr.attrs = data.attr.attrs || [];
            data.attr.attrsData = data.attr.attrsData || [];
            if(data.attr && data.elNum){
                if(data.attr.attrsData.length != data.elNum){
                    throw "attrsData length must match elNum"
                }else if(data.attr.attrs.length != data.elNum){
                    throw "attrs length must match elNum"
                }
                el.setAttribute(data.attr.attrs[i], data.attr.attrsData[i]);
            }
            if(data.html){
                for (var j = 0; j < data.attr.attrs.length; j++){
                    if(data.attr.attrs.length === data.attr.attrsData.length){
                        data.el.removeAttribute("undefined");
                        data.el.setAttribute(data.attr.attrs[j], data.attr.attrsData[j]);
                    }else
                    {
                        throw "attrs length must match attrsData length"
                    }
                }
            }
        }
        
    }

})();