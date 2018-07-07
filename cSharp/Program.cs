using System;

namespace cSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Functions.Array(new int[]{1,35,5,7,9});
            // Functions.Print1to255();
            // Functions.Odds();
            // Functions.Sum();
            System.Console.WriteLine(Recursion.rSigma(5));
            System.Console.WriteLine(Recursion.rFact(4));

        }
    }
}
