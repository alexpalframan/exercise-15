//q 1 calculate mean of an array
// i need to add all elements of array then divide by the NUMBER of elements in the array

function mean(array){
    sum = 0 
    len = array.length
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    meanOfArray = (sum/len)
    document.write(meanOfArray)
}
mean([1,3,5,5,3,1])

//q2
document.write("<br>")
function mode(array){
    let mode= {}
    let max =0
    let count = 0
    for(let i=0; i<len; i++){
        const item = array[i]
    

    if(mode[item]){
        mode[item]++
    }else{
        mode[item]=1
    }

    if(count < mode[item]){
        max = item;
        count = mode[item]
    }
}
    document.write(max)

}
mode([1,1,1,2,1,3])

//q3 median 


document.write("<br>")
median([1,2,3,4,5,4,5,6,6]);
let temp = [1,2,3,4,5,4,5,6,6]
function median(arr) {
  if (arr.length == 0) {
    return; // 0.
  }
 
  
  const midpoint = Math.floor(arr.length / 2); // 2.
  const median = arr.length % 2 === 1 ?
    arr[midpoint] : // 3.1
    (arr[midpoint - 1] + arr[midpoint]) / 2; // 3.2. If even length, take median of midpoints
   document.write(median)
}

//q frequency
document.write("<br>")

function frequency(a, n, x)
{
    let count = 0;
    for (let i=0; i < n; i++)
    if (a[i] == x)
        count++;
    return count;
}
 
let a = [0, 5, 5, 5, 4];
let x = Number(prompt("Which number do you want to check the frequency of? The array is: "+ a));
let n = a.length;

document.write(frequency(a, n, x));

