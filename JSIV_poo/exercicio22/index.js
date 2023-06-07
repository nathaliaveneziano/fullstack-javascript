const App = require('./App');

App.createUser('nathalia@gmail.com', 'Nathália Veneziano');
App.createUser('maria@gmail.com', 'Maria Santos');
App.createUser('joao@gmail.com', 'João da Silva');

App.deposit('nathalia@gmail.com', 100);

App.transfer('nathalia@gmail.com', 'maria@gmail.com', 20);

App.changeFee(10);
App.loan('joao@gmail.com', 2000, 24);

console.log(App.findUserByEmail('nathalia@gmail.com'));
console.log(App.findUserByEmail('nathalia@gmail.com').account);

console.log(App.findUserByEmail('maria@gmail.com'));
console.log(App.findUserByEmail('maria@gmail.com').account);

console.log(App.findUserByEmail('joao@gmail.com'));
console.log(App.findUserByEmail('joao@gmail.com').account);
console.log(App.findUserByEmail('joao@gmail.com').account.loans[0].installments);
