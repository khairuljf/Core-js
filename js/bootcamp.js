// object function. 

let book = {
	title: '1998',
	author: 'khairul Islam',
	pageCount: 25
}



let getSummaery =  (book)=>{

	return {
		summary: `${book.title} by ${book.author}`,
		pageCountSummaery: `${book.title} is ${book.pageCount} pages long`
	}

	//console.log(`${book.title} by ${book.author}`);
}


let bookSummaery = getSummaery(book);

//console.log(`${bookSummaery.summary} total page ${bookSummaery.pageCountSummaery}`);

let myAccount  = {
	name: 'khairul islam',
	expenses: 0,
	income:0
}

let addExpense = (account, ammount) =>{
	account.expenses = account.expenses + ammount;
}

let addIncome = (account, income)=>{
	account.income = account.income + income;
}

let resetAccount = (account)=>{
	account.expenses = 0
	account.income = 0
}

let getAccountSummary = (account)=>{
	let balance = account.income- account.expenses;
	return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
}

addIncome(myAccount, 20000)
addExpense(myAccount, 5000)
resetAccount(myAccount)


//console.log(getAccountSummary(myAccount));

let resturant = {
	name: 'Bagdad',
	guestCcapacity: 75,
	guestCount:0,
	checkAvailability: function(partySize){
		let seats
		return true;
	}
}

let status = resturant.checkAvailability(4)

console.log(status)




