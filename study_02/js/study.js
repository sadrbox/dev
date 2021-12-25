const obj = {};
obj.name = "John";
obj.surname = "Smith";
// console.log(obj);

obj.name = "Pete";
// console.log(obj);

const obj2 = {};

function isEmpty(o) {
	if (Object.keys(o).length > 0) {
		return false;
	} else {
		return true;
	}
}

// console.log(isEmpty(obj2));

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

// let sum = salaries.reduce((d, acc) => acc + d, 0);
let sum = 0;
for (let d in salaries) sum += salaries[d];

// console.log(sum);

let menu = {
	width: 200,
	height: 300,
	title: "My menu",
};

const multiplyNum = (obj) => {
	let sum = 0;
	for (let prop in obj) {
		if (typeof obj[prop] === "number") {
			// sum += obj[prop];
			menu[prop] = obj[prop] * 2;
		}
	}
	// return sum;
};

multiplyNum(menu);
console.log(menu);
