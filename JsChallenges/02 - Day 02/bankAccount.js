
// Challenge: Create a Bank Account

//     Create an object called bankAccount to represent a simple bank account.
//     Inside bankAccount, have properties for balance and accountHolder. Initialize balance to 0 and accountHolder to an empty string.


//     Implement "get" and "set" methods for the balance property. These methods should allow you to get the balance and deposit or withdraw money from the account.

//     Implement "get" and "set" methods for the accountHolder property. These methods should allow you to get the account holder's name and change the account holder's name.

//     Make sure that you can't withdraw more money than the current balance (balance should never go below 0).

//     Test your bankAccount by depositing and withdrawing money and changing the account holder's name


const bankAccount = {
    _balance: 0,
    _accountHolder: '',


    get balance(){
        return this._balance;
    },

    set deposit(amount){
        if(typeof amount === 'number' && amount > 0){
            this._balance += amount
            console.log(`${amount} deposited, current balace is ${this._balance}`)
        }else{
            console.log(`invalid deposit amount`)
        }

    },


    set withdraw(amount){
        if(typeof amount === 'number' && amount > 0){
            if(amount <= this._balance){
                this._balance -= amount
                console.log(`${amount} withdrawn, new balance is ${this._balance}`)
            }else{
                console.log(`insufficient funds`)
            }
        }else{
            console.log(`Invalid withdrwal amount`)
        }
    },



    get accountHolder(){
        return this._accountHolder
    },

    set accountHolder(name){
        if(typeof name === 'string' && name.trim() !== ''){
            this._accountHolder = name
        }else{
            console.log(`invalid account holder name`)
        }
    },


}


// testing

// deposit 
bankAccount.deposit = 100
console.log(`Balance: `, bankAccount.balance)
// output => Balance:  100

bankAccount.withdraw = 40

console.log(`Balance: `, bankAccount.balance)
// output => Balance:  60

bankAccount.accountHolder = 'Hiro'
console.log(`Account Holder : `, bankAccount.accountHolder)
