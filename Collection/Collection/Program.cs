

namespace Collection { 

    internal class Program
    {
        static void Main(string[] args)
        {
            string[] colors = { "Red", "Green", "Blue", "Yellow" };

            var col1 = from c in colors orderby c select c;

            Console.WriteLine(String.Join(", ", col1));

            Console.ReadLine();
        }
    }

}
