export function individualTransaction(type: string, amount: number) {
  let currenAmount = 5000;
  switch (type) {
    case "debit":
      return `current balence: ${currenAmount - amount}`;

    case "credit":
      return `current balence: ${currenAmount + amount}`;
  }
}
