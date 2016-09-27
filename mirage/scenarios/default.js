import { faker } from 'ember-cli-mirage';

export default function(server) {
  let users = server.createList('user', 30);
  let tips = server.createList('tip', 20, {
    author: faker.list.random(...users)
  });
  users.forEach((user) => {
    user.tips = tips.filter((tip) => tip.author.id === user.id);
    user.save();
  });
  server.createList('vote', 30, {
    voter: faker.list.random(...users),
    tip: faker.list.random(...tips)
  });
  server.createList('comment', 15);
}
