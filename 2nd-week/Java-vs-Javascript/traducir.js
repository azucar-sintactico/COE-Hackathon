function traducir(identificadores) {
  var isJavascript = function(string) {
    var pattern = /[A-Z]/;
    return string.match(pattern) != null ? string.match(pattern).length > 0 : false;
  }
  var isJava = function(string) {
    var pattern = /[_]/;
    return string.match(pattern) != null ? string.match(pattern).length > 0 : false;
  }
  var traduceUno = function(identificador) {
    if ( isJava(identificador) ) {
      var upper = false, results = '';
      for(var i = 0; i < identificador.length; i++) {
        if ( identificador[i] === '_' ) {
          upper = true;
          continue;
        }
        results += upper? identificador[i].toUpperCase() : identificador[i];
        upper = false;
      }
      return results;
    } else if ( isJavascript(identificador) ) {
      var results = '', lastWasUpper = false;
      for(var i = 0; i < identificador.length; i++) {
        if ( identificador[i].match(/[A-Z]/) && !lastWasUpper) {
          lastWasUpper = true;
          results += '_' + identificador[i].toLowerCase();
        }
        else if(identificador[i].match(/[A-Z]/) && lastWasUpper) {
          lastWasUpper = true;
          results += identificador[i].toLowerCase();
        }
        else {
          lastWasUpper = false;
          results += identificador[i];
        }
      }
      return results;
    } else {
      return identificador;
    }
  }

  var traducidos = identificadores.map(function(identificador) {
    return traduceUno(identificador);
  });
  return traducidos;
}


module.exports = traducir;