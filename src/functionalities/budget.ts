const User: any = {
  username: "soumya",
  password: 123,
  currentIncome: 25000,
  Budget: [
    { category: "groceries", allocated_amt: 2000 },
    { category: "entertainment", allocated_amt: 4000 },
    { category: "rent", allocated_amt: 6000 },
  ],
  savings: [
    { title: "emergency fund", target_amt: 10000, current_amt_saved: 5000 },
    { title: "trip", target_amt: 3000, current_amt_saved: 1000 },
  ],
};

export function Budget(category: string, amount: number) {
  return;
}
