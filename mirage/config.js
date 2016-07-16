import config from '../config/environment';

export default function() {

  this.namespace = config.api.host;
  this.logging = false;

  this.get('/tips');
  this.post('/tips');
  this.get('/tips/:id');
  this.patch('/tips/:id');
  this.delete('/tips/:id');

  this.get('/users');
  this.post('/users');
  this.get('/users/:id');
  this.patch('/users/:id');

  this.get('/votes');
  this.post('/votes');
  this.get('/votes/:id');
  this.delete('/votes/:id');

  this.get('/confirmations');
  this.post('/confirmations');
  this.get('/confirmations/:id');
  this.delete('/confirmations/:id');

}
