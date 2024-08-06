// Enum
enum TransactionType {
    Deposit = "Desposit",
    Withdrawal = "Withdrawal"
}
// Interfaces
interface Transaction {
    type:TransactionType;
   amount: number;
   date: Date;
   description: string
}



interface Account {
    id:number;
    holderName: string;
    balance: number;
    transictions: Transaction[];
}

// ATM Class
class ATM {
    private accounts: Account[] = [];

    createAccount(holderName: string): Account {
        const newAccount: Account = {
            id: this.accounts.length + 1,
            holderName: holderName,
            balance: 0,
            transactions: []
        };
        this.accounts.push(newAccount);
        return newAccount;
    }

  
getAccount(accountId: number): Account | undefined {
    return this.accounts.find(account => account.id === accountId);
}
    checkBalance(accountId: number): number | undefined {
        const account = this.getAccount(accountId);
        return account ? account.balance : undefined;
    }

    deposit(accountId: number, amount: number): void {
        const account = this.getAccount(accountId);
        if (account && amount > 0) {
            account.balance += amount;
            account.transictions.push({
                type: TransactionType.Deposit,
                amount: amount,
                date: new Date(),
                description: `Deposited $${amount}`
            });
        }
    }


    withdraw(accountId: number, amount: number): boolean {
        const account = this.getAccount(accountId);
        if (account && amount > 0 && account.balance >= amount) {
            account.balance -= amount;
            account.transictions.push({
                type: TransactionType.Withdrawal,
                amount: amount,
                date: new Date(),
                description: `Withdrew $${amount}`
            });
            return true;
        }
        return false;
    };
getTranscationHistory(accountId: number): Transaction[] | undefined {
    const account = this.getAccount(accountId);
    return account ? account.transictions : undefined;
}
}


const atm = new ATM();
const aliceAccount = atm.createAccount("Alice");
const bobAccount = atm.createAccount("Bob")

atm.deposit(aliceAccount.id, 1000);
atm.deposit(bobAccount.id, 500);

console.log(`Alice's balance: $${atm.checkBalance(aliceAccount.id)}`);
console.log(`Bob's balance: $${atm.checkBalance(bobAccount.id)}`);

if (atm.withdraw(aliceAccount.id, 200)) {
    console.log("Withdrawal sucessful");
} else {
    console.log("Withdrawak failed");
    
}

console.log(`Alice's balance after withdrawal: $${atm.checkBalance(aliceAccount.id)}`);

console.log("Alice's transaction history:");
console.log(atm.getTransactionHistory(aliceAccount.id));

console.log("Bob's transaction history:");
console.log(atm.getTransactionHistory(bobAccount.id));