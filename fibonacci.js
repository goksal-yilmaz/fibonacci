/* Fibonacci dizisindeki her yeni terim, önceki iki terimin eklenmesiyle oluşturulur. 1 ve 2 ile başlayarak, ilk 10 terim şöyle olacaktır: 

                            1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... 

Fibonacci dizisindeki değerleri dört milyonu geçmeyen terimleri dikkate alarak çift değerli terimlerin toplamını bulunuz.*/



let temp = 0, x = 1, y = 1, total = 0;
function fibonacciNumbers(){
    
    while(temp < 4000000){
        if (temp % 2 === 0){
            total += temp;
        }
        temp = x + y;
        x = y;
        y = temp;
    }
}
fibonacciNumbers();
let start = Date.now();

console.log("Answer => " + total);

let end = Date.now();
console.log("Hesaplama Süresi => " + (end - start)/1000);
