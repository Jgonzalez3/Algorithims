using System;
using System.Collections.Generic;

namespace cSharp{
    static class Arrays{
        public static void PrintIdx(int[] x){
            for(int idx = 0; idx < x.Length; idx++){
                System.Console.WriteLine(x[idx]);
            }
        }
        //Find Location in Sorted Array given int array and int value
        public static object BinarySearch(int[] arr, int val){
            int iterations = 0;
            int start = 0;
            int end = arr.Length-1;
            int idx = arr.Length/2;
            if(val < arr[start] || val > arr[end]){
                return false;
            }
            while(arr[idx] != val){
                if(arr[start] == val){
                    return start;
                }
                if(arr[end] == val){
                    return end;
                }
                if(idx == end || idx == start){
                    return false;
                }
                //is value less than middle index value.
                if(val < arr[idx]){
                    end = idx;
                    idx = end/2;
                }
                //is value greater than middle index value
                if(val > arr[idx]){
                    start = idx;
                    idx = start + ((end-start)/2);
                }
                iterations++;
            }
            System.Console.WriteLine($"iterations: {iterations}");
            return idx;
        }
    }
}