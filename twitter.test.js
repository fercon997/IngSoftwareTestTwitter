const expect = require('expect');
const request = require('supertest');
const Twitter = require('twitter');
const assert = require('assert');

var client = new Twitter({
  consumer_key: 'aG2NUQzGsUBf1JF7PNDXIExEB',
  consumer_secret: 'DuXXQlw7JahnTQ6anF84vnHUCzMFG4IArpWDMPcAm9BtzMXmMN',
  access_token_key: '326769314-ENMOV8YVoz1mHwwMdUZqD5bSB5dxYBd59hNYUPwF',
  access_token_secret: 'oJirXQAdFocGlpCzmhRK582knD6rA16ncrPG3CG7du8Ga'
});


var {app} = require('./twitterr');

describe('GET un usuario en twitter', () => {

  it('Encuentra el usuario correctamente', (done) => {
    var user= {
      screen_name: "freatyun"
    }
      client.get("users/show", user, function(error, user, response){
        if (error) done(error);
      expect(user.name).toBe("Fernando Consalvo");
      expect(user.screen_name).toBe("freatyun");
      done();
      console.log("Respuesta del servidor(nombre del usuario): \n",user.name);
      })
  }).timeout(8000);

  it('Si usuario no existe retorna error', (done) => {
    var user = {
      id: 1281286127618
    }
    client.get("users/show", user, function(error,user, response){
      expect(error[0].code).toBe(50);
      expect(error[0].message).toBe("User not found.");
      done();
      console.log("Respuesta del servidor: \n",error);
    })
  }).timeout(8000);

});
