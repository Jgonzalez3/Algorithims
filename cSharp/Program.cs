using System;

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
        }
    }
}
