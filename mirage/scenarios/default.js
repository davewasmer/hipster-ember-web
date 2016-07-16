import { faker } from 'ember-cli-mirage';

export default function(server) {
  let users = server.createList('user', 30);
  let tips = server.createList('tip', 20, {
    author: faker.list.random(...users)
  });
  server.createList('vote', 30, {
    voter: faker.list.random(...users),
    tip: faker.list.random(...tips)
  });
  server.createList('confirmation', 35, {
    tip: faker.list.cycle(...tips),
    confirmer: faker.list.random(...users.filter((user) => user.canConfirm))
  });
}
