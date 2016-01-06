alert("加载成功！");

(function() {
    if (!window.x) {
        x = {};
    }
    
    x.Selector = {};
    x.Selector.getSelected = function() {
        var t = '';
        if (window.getSelection) {
            t = window.getSelection();
        } else if (document.getSelection) {
            t = document.getSelection();
        } else if (document.selection) {
            t = document.selection.createRange().text;
        }
        return t;
    }
    
    var pageX;
    var pageY;
})();

require.config({
　　　　paths: {
　　　　　　"jquery": "vendor/jquery-1.11.3.min",
　　　　　　"underscore": "vendor/underscore",
　　　　　　"backbone": "vendor/backbone",
            "react": "https://fb.me/react-0.14.5",
            "react-dom": "https://fb.me/react-dom-0.14.5",
　　　　}
　　});

function setup() {
  $(document).bind("mouseup", function() {
        var selectedText = x.Selector.getSelected();
        if(selectedText != ''){
            $('ul.tools').css({
                'left': pageX + 5,
                'top' : pageY - 55
            }).fadeIn(200);
        } else {
            $('ul.tools').fadeOut(200);
        }
    });
    $(document).on("mousedown", function(e){
        pageX = e.pageX;
        pageY = e.pageY;
    });
}

require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone){
    setup();
});

require(['react', 'react-dom'], function(React, ReactDom) {
});
