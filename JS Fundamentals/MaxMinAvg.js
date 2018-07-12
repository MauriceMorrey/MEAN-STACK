function printMaxMinAvg(arr){
    var Max = arr[0];
    var Min = arr[0];
    var Sum = 0;
    for(var i = 1; i <= arr.length; i++){
        if(arr[i] > Max){Max = arr[i];}
        if(arr[i] < Min){Min = arr[i];}
        Sum += arr[i];
    }
    console.log("Max = "  + Max + "," + "Min = " + Min + "," + "Avg = " + Sum/arr.length);
}
printMaxMinAvg([2,-2,5,12,8]);