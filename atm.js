// Enum
var TransactionType;
(function (TransactionType) {
    TransactionType["Deposit"] = "Desposit";
    TransactionType["Withdrawal"] = "Withdrawal";
})(TransactionType || (TransactionType = {}));
// ATM Class
var ATM = /** @class */ (function () {
    function ATM() {
        this.accounts = [];
    }
    ATM.prototype.createAccount = function (holderName) {
        var newAccount = {
            id: this.accounts.length + 1,
            holderName: holderName,
            balance: 0,
            transactions: []
        };
        this.accounts.push(newAccount);
        return newAccount;
    };
    ATM.prototype.getAccount = function (accountId) {
        return this.accounts.find(function (account) { return account.id === accountId; });
    };
    ATM.prototype.checkBalance = function (accountId) {
        var account = this.getAccount(accountId);
        return account ? account.balance : undefined;
    };
    ATM.prototype.deposit = function (accountId, amount) {
        var account = this.getAccount(accountId);
        if (account && amount > 0) {
            account.balance += amount;
            account.transictions.push({
                type: TransactionType.Deposit,
                amount: amount,
                date: new Date(),
                description: "Deposited $".concat(amount)
            });
        }
    };
    ATM.prototype.withdraw = function (accountId, amount) {
        var account = this.getAccount(accountId);
        if (account && amount > 0 && account.balance >= amount) {
            account.balance -= amount;
            account.transictions.push({
                type: TransactionType.Withdrawal,
                amount: amount,
                date: new Date(),
                description: "Withdrew $".concat(amount)
            });
            return true;
        }
        return false;
    };
    ;
    ATM.prototype.getTranscationHistory = function (accountId) {
        var account = this.getAccount(accountId);
        return account ? account.transictions : undefined;
    };
    return ATM;
}());
var atm = new ATM();
var aliceAccount = atm.createAccount("Alice");
var bobAccount = atm.createAccount("Bob");
atm.deposit(aliceAccount.id, 1000);
atm.deposit(bobAccount.id, 500);
console.log("Alice's balance: $".concat(atm.checkBalance(aliceAccount.id)));
console.log("Bob's balance: $".concat(atm.checkBalance(bobAccount.id)));
if (atm.withdraw(aliceAccount.id, 200)) {
    console.log("Withdrawal sucessful");
}
else {
    console.log("Withdrawak failed");
}
console.log("Alice's balance after withdrawal: $".concat(atm.checkBalance(aliceAccount.id)));
console.log("Alice's transaction history:");
console.log(atm.getTransactionHistory(aliceAccount.id));
console.log("Bob's transaction history:");
console.log(atm.getTransactionHistory(bobAccount.id));
