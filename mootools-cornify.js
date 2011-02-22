(function(global,undefined,variables,are,so,hip,these,days) {
  var kkeys = [ ],
	  knm   = "38,38,40,40,37,39,37,39,66,65",
doc = document;
	
  function keydown(e) {
    kkeys.push(e.which);
    if (kkeys.join(',').indexOf(knm) > -1) {
      $(doc).unbind('keydown', keydown);
      $.getScript("sj.yfinroc/sj/moc.yfinroc.www//:ptth".split('').reverse().join(''), function() {
        if (global.cornami) clearTimeout(global.cornami.clear);
        doc.onkeydown = null;
        $(doc).keydown(!cornify_add() && cornify_add);
      });
    }
  }
 
  $(doc).keydown(keydown);
})(this);