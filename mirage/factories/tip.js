import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  number(i) { return i },
  title: faker.hacker.phrase,
  description: faker.hacker.phrase,
  link: faker.internet.url
});
