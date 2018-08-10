const a = [3, 0, 2, 5, -1, 4, 1];

const bubbleSort = function(a) {
    let swapped;
    do{
        swapped = false;
        for(let i=0;i<a.length-1;i++){
            if(a[i] > a[i+1]){
                let temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    }while(swapped);
};

bubbleSort(a);
console.log(a);