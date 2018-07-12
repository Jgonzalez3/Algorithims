using System;
using System.Collections.Generic;

namespace cSharp{
    static class Sorts{
        public static int[] BubbleSort(int[] arr){
            int idx = 0;
            int next = 1;
            int end = 0;
            bool swapped = false;
            while(end < arr.Length-1){
                System.Console.WriteLine(arr[idx]);
                if(arr[next] < arr[idx]){
                    int temp = arr[idx];
                    arr[idx] = arr[next];
                    arr[next] = temp;
                    swapped = true;
                }
                if(next == arr.Length-1){
                    if(swapped == false){
                        break;
                    }
                    swapped = false;
                    idx = 0;
                    next = 1;
                    end++;
                    continue;
                }
                idx++;
                next++;
            }
            return arr;
        }
        public static List<int> BubbleSort(List<int> list){
            int idx = 0;
            int next = 1;
            int end = 0;
            bool swapped = false;
            while(end < list.Count-1){
                if(list[next] < list[idx]){
                    int temp = list[idx];
                    list[idx] = list[next];
                    list[next] = temp;
                    swapped = true;
                }
                if(next == list.Count-1){
                    if(swapped == false){
                        break;
                    }
                    swapped = false;
                    idx = 0;
                    next = 1;
                    end++;
                    continue;
                }
                idx++;
                next++;
            }
            return list;
        }

        // public static List<int> QuickSort(List<int> list){
        //     if(list.Count < 2){
        //         return list;
        //     }
        //     int idx = 1;
        //     List<int> prev = new List<int>();
        //     List<int> next = new List<int>();
        //     int pivot = list[0];
        //     while(idx < list.Count-1){
        //         System.Console.WriteLine(list[idx]);
        //         if(list[idx] <= pivot){
        //             prev.Add(list[idx]);
        //         }
        //         if(list[idx]>pivot){
        //             next.Add(list[idx]);
        //         }
        //         idx++;
        //     }
        //     List<int> less = QuickSort(prev);
        //     QuickSort(next);
        //     prev.Add(pivot);
        //     prev.AddRange(next);
        //     return prev;
        // }
    }
}