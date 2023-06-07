class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log('Login realizado com sucesso!');
    } else {
      console.log('Erro no login! Por favor, verifique seu email e senha.');
    }
  }
}

const john = new User('John Doe', 'email@email.com', '123456');

console.log(john);

john.login(john.email, john.password); // sucesso
john.login(john.email, '654321');      // falha
