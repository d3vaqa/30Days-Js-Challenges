function createBankAccount(initalBalance){
    // Private variable for balance
    let balance = initalBalance

    // Private function for checking if withdrawal is possible
    function canWithDraw(amount){
        return balance >= amount
    }

    // public methods available through the returned object

    return {

        deposit: function(amount){
            if(amount > 0){
                balance += amount
                console.log(`Deposited ${amount}. New Balance: ${balance}`)
            }else {
                console.log('Invalid deposit amount.');
            }
        },

        withdraw: function(amount){
            if(canWithDraw(amount)){
                balance -= amount
                console.log(`Withdrew $${amount}. New balance: $${balance}`);
            } else {
                console.log('Insufficient funds.');
            }
        },

        checkBalance: function(){
            console.log(`Current Balance $${balance}`)
        },
    } //end of object

}


const myAccount = createBankAccount(1000)

myAccount.checkBalance()

myAccount.withdraw(500)
myAccount.deposit(5000)
myAccount.checkBalance()
myAccount.withdraw(5500)
myAccount.withdraw(5500)