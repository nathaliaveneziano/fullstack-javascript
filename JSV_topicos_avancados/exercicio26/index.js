let transactions = [];

function createTransactionContainer(id) {
  const container = document.createElement('div');
  container.classList.add('transaction');
  container.id = `transaction-${id}`;
  return container;
}

function createTransactionTitle(name) {
  const title = document.createElement('span');
  title.classList.add('transaction-title');
  title.textContent = name;
  return title;
}

function createTransactionAmount(amount) {
  const value = document.createElement('span');

  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency',
  });

  const formatedAmount = formater.format(amount);

  if (amount > 0) {
    value.textContent = `${formatedAmount} C`;
    value.classList.add('transaction-amount', 'credit');
  } else {
    value.textContent = `${formatedAmount} D`;
    value.classList.add('transaction-amount', 'debit');
  }

  return value;
}

function createEditTransactionBtn(transaction) {
  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.textContent = 'Editar';

  editBtn.addEventListener('click', () => {
    document.querySelector('#id').value = transaction.id;
    document.querySelector('#name').value = transaction.name;
    document.querySelector('#amount').value = transaction.amount;
  });

  return editBtn;
}

function createDeleteTransactionBtn(id) {
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'Excluir';

  deleteBtn.addEventListener('click', async () => {
    await fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'DELETE',
    });
    deleteBtn.parentElement.remove();
    const indexToRemove = transactions.findIndex((t) => t.id === id);
    transactions.splice(indexToRemove, 1);
    updateBalance();
  });

  return deleteBtn;
}

function renderTransaction(transaction) {
  const container = createTransactionContainer(transaction.id);
  const title = createTransactionTitle(transaction.name);
  const amount = createTransactionAmount(transaction.amount);
  const editBtn = createEditTransactionBtn(transaction);
  const deleteBtn = createDeleteTransactionBtn(transaction.id);

  container.append(title, amount, editBtn, deleteBtn);
  document.querySelector('#transactions').append(container);
}

async function saveTransaction(event) {
  event.preventDefault();

  const id = document.querySelector('#id').value;
  const name = document.querySelector('#name').value;
  const amount = parseFloat(document.querySelector('#amount').value);

  if (id) {
    // editat a transação com o id
    const response = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, amount }),
    });

    const transaction = await response.json();
    const indexToRemove = transactions.findIndex((t) => t.id === id);
    transactions.splice(indexToRemove, 1, transaction);
    document.querySelector(`#transaction-${id}`).remove();
    renderTransaction(transaction);
  } else {
    // criar nova transação
    const response = await fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, amount }),
    });

    const transaction = await response.json();
    transactions.push(transaction);
    renderTransaction(transaction);
  }

  event.target.reset();
  updateBalance();
}

async function fetchTransactions() {
  return await fetch('http://localhost:3000/transactions').then((response) =>
    response.json()
  );
}

function updateBalance() {
  const balanceSpan = document.querySelector('#balance');
  const balance = transactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency',
  });

  balanceSpan.textContent = formater.format(balance);
}

async function setup() {
  const results = await fetchTransactions();
  transactions.push(...results);
  transactions.forEach(renderTransaction);

  updateBalance();
}

document.addEventListener('DOMContentLoaded', setup);
document.querySelector('form').addEventListener('submit', saveTransaction);
