// CLI-JS-ATM using inquirer library.
//  This ATM model can ask and perform Withdraw,Fast Cash,Balance Inquiry functions.

import inquirer from "inquirer";


let user = {
    name: "Bob",
    pin: 2232,
    balance: 50000
};
const resp = await inquirer.prompt([
    {
        name: "pin",
        type: "password",
        message: "Please enter your PIN"
    }
]);
if (Number(resp.pin) !== user.pin) {
    console.log("You have entered an incorrect PIN");
}
else{
    const resp = await inquirer.prompt([
    {
        name: "selectedType",
        message: "Please select an option",
        type: "list",
        choices:['Withdraw','Fast Cash','Balance Inquiry']
    },
    {
        name: "amount",
        message: "Please select amount",
        type:"list",
        choices:['500','1000','2000','3000','5000','10000'],
        when(resp) {
            return resp.selectedType   == 'Fast Cash'
         },
        
    },
    {
        name:"amount",
        message:"Please enter amount",
        when(resp) {
            return resp.selectedType   == 'Withdraw'
         }
    }                                                                                                                                                                             
    ])
 if(resp.selectedType == 'Balance Inquiry'){
    console.log(`Your balance is ; ${user.balance} `)
 } else{    
     user.balance = user.balance - resp.amount
     console.log(`Your balance after transaction is ; ${user.balance} `);
 }
}
