(function(global) {
  var kkeys = [],
      knm = "up,up,down,down,left,right,left,right,b,a",
      doc = document;
    
  function keydown(e) {
    kkeys.push(e.key);
    if (kkeys.join(',').indexOf(knm) > -1) {
      window.removeEvent('keydown', keydown);
      new Element('script', {
          src: "http://www.cornify.com/js/cornify.js",
          events: {
            'load': function() {
                if (global.cornami) clearTimeout(global.cornami.clear);
                window.addEvent('keydown', (!cornify_add() && cornify_add));
          }
          }
      }).inject(document.head);
    }
  }
 
  window.addEvent('keydown', keydown);
})(this);