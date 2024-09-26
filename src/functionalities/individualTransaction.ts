const data = [{ username: "souya", password: 12456 }];

export function individualTransaction(type: string, amount: number) {
    let currenAmount = 5000
    return `current balence: ${currenAmount-amount}`;
}
