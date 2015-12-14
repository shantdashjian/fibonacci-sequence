var sum_even_fibonacci = function(limit) {
	var sum = 0;
	var first_number = 1;
	var second_number = 2;
	do {
		if (second_number % 2 === 0) {
			sum = sum + second_number;
		}
		new_number = first_number + second_number;
		first_number = second_number;
		second_number = new_number; 
	} while (second_number <= limit);	
	return sum;
};

var limit = 4000000;
var sum = sum_even_fibonacci(limit);
console.log("Sum of even-valued Fibonacci terms not exceeding " + limit + " = " + sum);