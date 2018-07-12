// Sort unordered array by swapping out starting from idx=0, N^2 or 1.67?
function BubbleSort(arr){
    let start = 0, next = 1, end = 0, swapped = false;
    while(end < arr.length){
        // console.log(start, next, end)
        if(arr[start] > arr[next]){
            let temp = arr[next];
            arr[next] = arr[start];
            arr[start] = temp;
            swapped = true;
        }
        if(next == arr.length-1){
            if(!swapped){
                break;
            }
            swapped = false;
            start = 0;
            next = 1;
            end++;
            continue;
        }
        next++;
        start++;
    }
    console.log(end)
    return arr;
}
console.log(BubbleSort([1,20,5,3,16]))

//
function SelectionSort(arr){
    let minIdx = 0, start = 0, end = 0, next = 1, swapped = false;
    while(end<arr.length-1){
        console.log(minIdx, start, end, next, arr)
        if(arr[next]<arr[minIdx]){
            console.log(arr[minIdx]);
            minIdx = next;
            swapped = true;
            console.log(arr[minIdx]);
        }
        if(next == arr.length-1){
            console.log(next);
            if(!swapped && minIdx!==0){
                break;
            }
            let temp = arr[start];
            arr[start] = arr[minIdx];
            arr[minIdx] = temp;
            end++;
            start++;
            minIdx = start;
            next = start+1;
            continue;
        }
        next++;
    }
    console.log(end);
    return arr;
}
console.log(SelectionSort([1,20,5,3,16]))

// Merge 2 sorted arrays into 1 sorted array
function Merge(arr1, arr2){
    let arr1Idx = 0, arr2Idx = 0, newArr = [], count = 0;
    while(count < (arr1.length + arr2.length)){
        if(arr1[arr1Idx] > arr2[arr2Idx] || arr1Idx === arr1.length){
            newArr.push(arr2[arr2Idx]);
            arr2Idx++;
            count++;
        }
        else{
            newArr.push(arr1[arr1Idx])
            arr1Idx++;
            count++;
        }
    }
    return newArr;
}
console.log(Merge([5,9,11],[2,8,10,12]))

// Merge Sort Always N Log N. Cuts Array into halfs/subarrays until 1 arr.length then orders both halfs into single ordered and returns array part by part until original array whole and ordered.
function MergeSort(arr){
    if(arr.length < 2){
        // console.log(arr)
        return arr;
    }
    let L = MergeSort(arr.slice(0,Math.floor(arr.length/2)));
    // console.log("CALLSTACK L", L);
    let R = MergeSort(arr.slice(Math.floor(arr.length/2)));
    // console.log("CALLSTACK R", R);
    // console.log("L",L,"R",R);
    // console.log(Merge(L,R));
    return Merge(L,R);
}
console.log(MergeSort([12,5,10,6,1]))

// Quick Sort N Log N average case, worst case N^2. Pivot arr[0], push values less than pivot into subarray and greater into different subarray. Repeat process with subarrays and so forth until single arrays. Then start concatenating lessor, pivot, greator. Keep returning until original array whole and ordered.
function QuickSort(arr){
    if(arr.length < 2){
        console.log(arr)
        return arr
    }
    let i = 1, prev =[], next =[], pivot = arr[0];
    while(i<arr.length){
        if(arr[i]<=pivot){
            prev.push(arr[i])
            console.log("prev", prev)
        }
        if(arr[i]>pivot){
            next.push(arr[i])
            console.log("next", next)
        }
        i++;
    }
    console.log([pivot]);
    return QuickSort(prev).concat([pivot],QuickSort(next))
}
console.log(QuickSort([5,1,8,6,3,4]))