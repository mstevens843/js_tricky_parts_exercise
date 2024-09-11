function createAccount(pin, amount = 0) {
    let balance = amount; 
    let accountPin = pin; 

    return {
        checkBalance(enteredPin) {
            if (enteredPin !== accountPin) return 'Invalid PIN.';
            return `$${balance}`; 
        },

        deposit(enteredPin, depositAmount) {
            if (enteredPin !== accountPin) return "Invalid PIN.";
            balance += depositAmount;
            return `Successfully deposited $${depositAmount}. Current balance: $${balance}.`;
        }, 

        withdraw(enteredPin, withdrawalAmount) {
            if (enteredPin !== accountPin) return "Invalid PIN.";
            if (withdrawalAmount > balance) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled."; 
            }
            balance -= withdrawalAmount; 
            return `Successfully withdrew $${withdrawalAmount}. Current balance: $${balance}.`;
        }, 

        changePin(enteredPin, newPin) {
            if (enteredPin !== accountPin) return "Invalid PIN.";
            accountPin = newPin;
            return "PIN successfully changed!";
        }
    };
}

module.exports = { createAccount };



// implementation provides closure around balance and accountPin, ensuring that they can only be accessed or modified
// by the methods returned in the object. 

