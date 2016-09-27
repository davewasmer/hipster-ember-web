import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  text: faker.lorem.paragraph,

  afterCreate(comment, server) {
    comment.author = faker.random.arrayElement(server.schema.users.all().models);
    comment.tip = faker.random.arrayElement(server.schema.tips.all().models);
    comment.save();
  }

});
