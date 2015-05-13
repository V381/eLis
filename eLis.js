
/*Author : Pavle Paunovic */

var eLis = (function(){
    var eLis = {};
    eLis.version = "0.4";
    var mainEl = null;
    return {
        cEl: function (data) {
            data = data || {};
            if (typeof data.el === "string") {
                data.el = document.createElement(data.el);
            } else if(typeof data.el != "string"){
                data.el = data.el || ""
            } else{
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

                        if (data.prependTo) {
                            document.querySelector(data.prependTo).parentNode.insertBefore(el,
                                document.querySelector(data.prependTo)
                            );
                        }

                        if (data.appendTo) {
                            data.appendTo.parentNode.appendChild(el);
                        }
                    }
                }
                if (data.appendTo) {
                    data.appendTo.parentNode.removeChild(data.appendTo);
                }

            }

            if (data.class) data.class = data.el.setAttribute("class", data.class);
            if (data.id) data.id = data.el.setAttribute("id", data.id || ""
            );
            this.prependTo(data);
            this.attr(data, el);
            this.attrs(data, data.el, 0);
            data.next = null;
            return data.el;
        },

        attr: function (data) {
            if (data.attr) {
                data.attr = data.attr || {};
                data.attr.data = data.attr.data || "";
                data.attr.attr = data.el.setAttribute(
                    data.attr.attr, data.attr.data
                );
            }
        },

        attrs: function (data, el, i) {
            if (data.attr && data.elNum) {
                data.attr.attrs = data.attr.attrs || [];
                data.attr.attrsData = data.attr.attrsData || [];
                if (data.attr.attrsData.length != data.elNum) {
                    throw "attrsData length must match elNum"
                } else if (data.attr.attrs.length != data.elNum) {
                    throw "attrs length must match elNum"
                }
                el.setAttribute(data.attr.attrs[i], data.attr.attrsData[i]);
            }

            if (data.attr) {
                if (data.attr.attrs) {
                    for (var j = 0; j < data.attr.attrs.length; j++) {
                        if (data.attr.attrs.length === data.attr.attrsData.length) {
                            data.el.removeAttribute("undefined");
                            data.el.setAttribute(data.attr.attrs[j], data.attr.attrsData[j]);
                        } else {
                            throw "attrs length must match attrsData length"
                        }
                    }
                }
            }
        },

        prependTo: function (data) {
            if (data.prependTo) {
                data.prependTo = data.prependTo || "";
                if (typeof data.prependTo === "string") {
                    var after = document.querySelector(data.prependTo);
                    if (data.elNum) {
                        if (after.parentNode) {
                            after.parentNode.insertBefore(data.el, after);
                            after.parentNode.removeChild(data.el);
                        }
                    } else {
                        after.parentNode.insertBefore(data.el, after);
                    }

                }
                else {
                    data.prependTo = data.prependTo.appendChild(data.el);
                }
            }
        },

        mainEl : null,

        list : function(data){

            var nodes = this.cEl(data);
            var current;
            if(this.mainEl === null){
                this.mainEl = nodes;
            }
            else{
                current = this.mainEl;
                while(current.next){
                    current = current.next;
                }
                current.next = nodes;
            }

            return this;

        },

        next : function(data){
            this.list(data);
            return this;
        },
        cache : null,
        save : function (arg1) {
              this.cache = this.mainEl;
              if(arg1 === true){
                  this.mainEl = null;
                  return this.cache
              }else if(arg1 === false){
                  this.mainEl = null;
                  return null;
              }
            return this;
        },

        append : function(to){

            var data = this.mainEl;
            if(typeof to === "string"){
                to = document.querySelector(to);
                to.appendChild(data);
            }
            else
            {
                to.appendChild(this.mainEl);
            }
            this.mainEl = null;
            return null;
        },

        destroyEl : function(){
            this.mainEl = null;
            return this;
        },

        traverseChildrenTree : function(node){
            var z, niz = [];
            node = node.children[0];
            while(node.children){
                z = node;
                node = node.children[0];
                if(node === undefined){
                    for (var j = 0; j < z.parentNode.childNodes.length; j++){
                        niz.push(z.parentNode.childNodes[j]);
                    }
                    break;
                }
            }
            return niz;
        }

    }


})();
