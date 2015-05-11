


<h3>eLis - tiny JavaScript library for creating elements easily<h3>
<p>

There are two ways to use it: </br>
1. Creating single elements with <code>eLis.cEl({})</code>
</br>
2. Creating linked list using <code>eLis.list({})</code> and child methods.
    <ul>
      <li>Append method eLis.mainEl cache: <code>eLis.list({}).next({appendTo: eLis.mainEl}).append("body")</code></li>
      <li>Save method: <code>eLis.list({}).next({}).save(true || false)</code></li>
    </ul>
</p>
</br>
<p>
All children elements must be appended to parent by using appendTo. 
</br>
<code>eLis.list({})</code> is <code>eLis.mainEl</code>.
</br>
Everything else is appended to <code>eLis.mainEl.next.next.next.next</code>
</br>
For information how to use, check examples.
</p>

<h4>How to use <code>eLis.cEl({})</code></h4>

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

<h4>How to use <code>eLis.list({})</code></h4>

<h5>Example 11 : </h5>

    eLis.list({
       el : "nav"
    }).next({
       el : "li",
       html : "home",
       attr : {
         attr : "class",
         data : "home"
       },
       appendTo : eLis.mainEl
    }).append("body");

<h5>Example 12 : </h5>

    eLis.list({
       el : "nav"
    }).next({
       el : "li",
       elNum : 2,
       elHtml : ["hello", "world"],
       attr : {
         attrs : ["class", "id"],
         attrsData : ["hello", "world"]
       },
       appendTo : eLis.mainEl
    }).append("body");

<h5>Example 13 : </h5>

    var nav = eLis.list({
        el : "nav"
    }).next({
        el : "li",
        elNum : 2,
        elHtml : ["hello", "world"],
        attr : {
            attrs : ["class", "id"],
            attrsData : ["hello", "world"]
        },
        appendTo : eLis.mainEl
    }).save(true);

<h5>Example 14 : </h5>

    eLis.list({
        el : "main"
    }).next({
        el : "section",
        appendTo : eLis.mainEl
    }).next({
        el : "h5",
        elNum : 2,
        elHtml : ["hello", "world"],
        appendTo : eLis.mainEl.next
    }).next({
        el : "h3",
        html : "hello world",
        appendTo : eLis.mainEl
    }).append("body");

<h5>Example 15 : </h5>

    eLis.list({
        el : "main"
    }).next({
        el : "section",
        appendTo : eLis.mainEl,
        class : "container"
    }).next({
        el : "header",
        appendTo : eLis.mainEl.next
    }).next({
        el : "nav",
        appendTo : eLis.mainEl.next.next,
        class : "mainNav"
    }).next({
        el : "ul",
        appendTo : eLis.mainEl.next.next.next
    }).next({
        el : "li",
        elNum : 5,
        elHtml : ["Home", "About", "Portfolio", "Contact", "Blog"],
        appendTo : eLis.mainEl.next.next.next.next
    }).append("body");

<h5>Example 16 : </h5>

    var z = eLis.list({
        el : "main"
    }).next({
        el : "section",
        appendTo : eLis.mainEl
    }).next({
        el : "p",
        elNum : 2,
        elHtml : ["hello", "world"],
        appendTo : eLis.mainEl.next
    }).next({
        el : "h3",
        html : "hello world",
        appendTo : eLis.mainEl
    }).save(true);

<h5>Example 17 : </h5>
<p>
If <code>append()</code> or <code>save()</code> are not defined, elements will me cached in eLis.mainEl
</br>
To empty cache use <code>eLis.mainEl = null;</code> or <code>destroyEl()</code> method.
Cache need to be empty or elements will duplicate.
</p>
Full cache:

    /*Element not saved and nod appended. Cache gets filled up.*/
    eLis.list({
       el : "article",
       class : "blogPost"
    }).next({
       el : "h2",
       html : "hi",
       appendTo : eLis.mainEl
    })

Empty cache:

    eLis.mainEl = null;
    /*or*/
    eLis.list({
       el : "article",
       class : "blogPost"
    }).next({
       el : "h2",
       html : "hi",
       appendTo : eLis.mainEl
    }).destroyEl();

