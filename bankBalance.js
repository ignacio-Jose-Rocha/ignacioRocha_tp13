const operaciones = [5000, 2000, -3000, -4000, 7000, -1000];

function calculateBalances(transacciones) {
  let totalDepositos = 0;
  let totalRetiros = 0;

  transacciones.forEach((operacion) => {
    if (operacion > 0) {
      totalDepositos += operacion;
    } else {
      totalRetiros += operacion;
    }
  });

  const saldoActual = totalDepositos + totalRetiros;

  return {
    totalDepositos,
    totalRetiros,
    saldoActual,
  };
}

function bankBalance(nombre, apellido, transacciones) {
  const balances = calculateBalances(transacciones);

  return `Estimada ${nombre} ${apellido}:
El monto total de los depósitos es de: $${balances.totalDepositos}.
El monto total de los retiros es de: $${Math.abs(balances.totalRetiros)}.
Por lo tanto, su saldo actual en la cuenta es de: $${balances.saldoActual}.`;
}


// console.log(bankBalance("Gloria", "Medina", operaciones));
// console.log(bankBalance("Carlos", "Pérez", [10000, -5000, 7000, -2000, 3000]));

module.exports = bankBalance;
