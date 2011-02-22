// https://github.com/RonnyO/mootools-cornify
(function(global,undefined,variables,are,so,hip,these,days) {
  var kkeys = [ ],
      knm   = "38,38,40,40,37,39,37,39,66,65",
      doc = document;
    
  function keydown(e) {
    kkeys.push(e.code);
    if (kkeys.join(',').indexOf(knm) > -1) {
      window.removeEvent('keydown', keydown);
      new Element('script', {
          src: "sj.yfinroc/sj/moc.yfinroc.www//:ptth".split('').reverse().join(''),
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