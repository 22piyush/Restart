

using System;

class Program {

    static void Main(String[] args) {

        var b = 2;

        b = 100;

        Console.WriteLine(b);

        dynamic d = 100;
        d = "Hello";

        Console.WriteLine();

        Console.WriteLine(d);


        //==================== Boxing And Unboxing =======================

        int i = 100;
        object obj = i;

        Console.WriteLine(obj);

    }

}

