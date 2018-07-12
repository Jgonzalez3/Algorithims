using System;
using System.Collections.Generic;

namespace cSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Arrays.PrintIdx(new int[]{1,35,5,7,9});
            // Basic.Print1to255();
            // Basic.Odds();
            // Basic.Sum();
            System.Console.WriteLine(Recursion.rSigma(5));
            System.Console.WriteLine(Recursion.rFact(4));
            System.Console.WriteLine(Arrays.BinarySearch( new int[]{1,3,5,6,13,20,35,67,89,100}, 36));
            List<int> bSearch = new List<int>();
            for(int i = 1; i<100; i++){
                bSearch.Add(i);
                i = i + (i/2);
            }
            System.Console.WriteLine(Lists.BinarySearch(bSearch, 11));
            Sorts.BubbleSort(new int[]{1,2,3});
            
            System.Console.WriteLine(Sorts.BubbleSort(new int[]{1,4,9,6,3}));
            List<int> list = new List<int>();
            list.Add(3); 
            list.Add(20); 
            list.Add(6); 
            list.Add(1);
            // System.Console.WriteLine(Sorts.QuickSort(list));
            System.Console.WriteLine(Sorts.BubbleSort(list));
            System.Console.WriteLine(Lists.BinarySearch(list, 2));

            var sList = new SLL();
            sList.ATF(10);
            sList.ATF(5);
            System.Console.WriteLine(sList.head.val);
            System.Console.WriteLine(sList.head.next.val);
        }
    }
}
