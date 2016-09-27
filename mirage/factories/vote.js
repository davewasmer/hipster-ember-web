import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  direction: faker.list.random('up', 'down')

});
