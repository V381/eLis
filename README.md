


<h3>eLis - tiny JavaScript library for creating elements easily<h3>

<h4>How to use:</h4>

<h5>Example 1 : </h5>
    eLis.cEl({
       el : "p",
       html : "Hello"
    });

<h5>Example 2 : </h5>
    eLis.cEl({
       el : "h2",
       html : "Hello",
       class : "text",
    });

    
<h5>Example 3 : </h5>
    eLis.cEl({
        el : "h3",
        html : "Hello",
        id : "text",
    });

    
<h5>Example 4 : </h5>
    eLis.cEl({
        el : "h4",
        html : "Hello",
        appendTo: "body"
    });
    
<h5>Example 5 : </h5>
    eLis.cEl({
        el : "h5",
        html : "Hello",
        attr : {
          attr : "style",
          data : "color:red"
        },
        appendTo: "body"
    });
    
  <h5>Example 6 : </h5>
  
    eLis.cEl({
        el : "li",
        elNum : 5,
        elHtml : ["Home", "About", "Contact", "Text1", "Text2"],
        attr : {
           attrs : ["class", "style", "id", "href", "src"],
           attrsData : ["someClass", "color:black", "someId", "/about", "../js/"]
        },
        appendTo : ".navigation"
    });
    
  <h5>Example 7 : </h5>  
  
    eLis.cEl({
         el : "section",
         attr : {
            attrs : ["class", "id"],
            attrsData : ["class1", "id2"]
        }
    });
    
  <h5>Example 8 : </h5>
    
    eLis.cEl({
        el : "p",
        elNum : 2,
        elHtml : ["hello", "world"],
        classes : ["class1", "class2"],
        ids : ["", "ids2"],
        appendTo : "body"
    });
 
 <h5>Example 9 : </h5>
 
    eLis.cEl({
        el : "li",
        elNum : 2,
        elHtml : ["hello", "world"],
        classes : ["class1", "class2"],
        ids : ["", "ids2"],
        prependTo : "li"
    });
    
 <h5>Example 10 : </h5>
 
    eLis.cEl({
        el : "p",
        elNum : 5,
        elHtml : ["Some text", "Some text", "Some text", "Some text", "TSome text"],
        attr : {
           attrs : ["class", "style", "id", "href", "src"],
           attrsData : ["someClass", "color:black", "someId", "/about", "../js/"]
        },
        prependTo : "section"
    });
