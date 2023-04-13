let num = prompt("Enter a Mobile Number");
let a = Array.from(num);
let sum = 0;
for(let i=0; i<a.length; i++) {
    sum += a[i];
}

function FizzBuzz(sum) {
  for (j = 1; j <= sum; j++) {
    if (j % 20 == 0) 
        document.write("FizzBuzz" + " ");
    else if (j % 4 == 0) 
        document.write("Fizz" + " ");
    else if (j % 5 == 0) 
        document.write("Buzz" + " ");
    else document.write(j + " ");
  }
}

FizzBuzz();
