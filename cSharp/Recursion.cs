using System;
using System.Collections.Generic;

namespace cSharp{
    static class Recursion{
        public static int rSigma(int num){
            if(num == 1){
                return num;
            }
            return rSigma(num-1) + num;
        }
        public static int rFact(int num){
            if(num == 1){
                return num;
            }
            return rFact(num-1) * num;
        }
        // public static object rBinarySearch(int[] arr, int val){

        // }
    }
}