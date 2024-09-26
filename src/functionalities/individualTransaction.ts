export function individualTransaction(type: string, amount: number) {
  var currentAmount = 5000;
  switch (type) {
    case "debit":
      if (currentAmount > amount) {
        return `current balence: ${currentAmount - amount}`;
      }
      if (currentAmount < amount && currentAmount != 0) {
        return `Unable to make the transaction as current balance is less than the debited amount`;
      }

      return `Unable to make transaction as current account balance is 0`;

    case "credit":
      return `current balence: ${currentAmount + amount}`;
  }
}
