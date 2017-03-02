should = require ('should');
expect = require('chai').expect;
require('mocha');
traducir = require('./traducir.js');
//require('../server.js')

describe('traductor', () => {
  it('Devuelve un valor de tipo arreglo', () => {
    salida = traducir(['valor', 'valor_dos']);
    expect(salida).to.be.an.instanceof(Array);
  });
  it('Devuelve un arreglo del mismo tamaño', () => {
    salida = traducir(['valor', 'valor_dos']);
    expect(salida.length).to.be.equal(salida.length);
  });
  it('Traduce correctamente identificadores de JS a Java', () => {
    salida = traducir([
      'javascriptEsGenial',
      'otroEjemplo',
      'estamosEnMRM'
    ]);
    correctas = [
      'javascript_es_genial',
      'otro_ejemplo',
      'estamos_en_mrm'
    ]
    expect(salida).to.be.equal(correctas);
  });
  it('Traduce correctamente identificadores de Java a JS', () => {
    salida = traducir([
      'devuelvo_un_json',
      'un_ejemplo'
    ]);
    correctas = [
      'devuelvoUnJson',
      'unEjemplo',
    ]
    expect(salida).to.be.equal(correctas);
  });
  it('Traduce correctamente identificadores mezclados', () => {
    salida = traducir([
      'javascriptEsGenial',
      'devuelvo_un_json',
      'un_ejemplo',
      'otroEjemplo',
      'estamosEnMRM'
    ]);
    correctas = [
      'javascript_es_genial',
      'devuelvoUnJson',
      'unEjemplo',
      'otro_ejemplo',
      'estamos_en_mrm'
    ]
    expect(salida).to.be.equal(correctas);
  });
});