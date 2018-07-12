using System;
using System.Collections.Generic;

namespace cSharp{
    static class Lists{
        // Binary Search with int Lists and int value C# return location in list
        public static int? BinarySearch(List<int> list, int val){
            int idx = list.Count/2;
            int start = 0;
            int end = list.Count - 1;
            if(val < list[start] || val > list[end]){
                return null;
            }
            while(list[idx] != val){
                if(list[start] == val){
                    return start;
                }
                if(list[end] == val){
                    return end;
                }
                if(idx == end || idx == start){
                    return null;
                }
                //is value less than middle index value.
                if(val < list[idx]){
                    end = idx;
                    idx = end/2;
                }
                //is value greater than middle index value
                if(val > list[idx]){
                    start = idx;
                    idx = start + ((end-start)/2);
                }
            }
            return idx;
        }
    }
}