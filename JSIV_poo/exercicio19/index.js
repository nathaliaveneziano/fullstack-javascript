const Author = require('./Author');

const john = new Author('John Doe');

const post = john.writePost('Título do Post', 'Lorem ipsum dolor sic...');

post.addComment('Nathália Veneziano', 'Muito bom!');
post.addComment('Claudia', 'Achei interessante.');

console.log(john);
console.log(post);
