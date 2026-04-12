class Pattern {
    public static void main(String[] args) {

        // QUESTION - 1
        // ROW
        // for(int i=1 ; i<=5; i++){
        // COLUMN
        // for (int j = 1; j<=5; j++){
        // System.out.print("* ");
        // }
        // System.out.println();
        // }

        // OUTPUT
        // * * * * *
        // * * * * *
        // * * * * *
        // * * * * *
        // * * * * *

        // QUESTION - 2
        // for (int i = 1; i <= 5; i++) {
        // for (int j = 1; j <= i; j++) {
        // System.out.print("* ");
        // }
        // System.out.println();
        // }

        // OUTPUT
        // *
        // * *
        // * * *
        // * * * *
        // * * * * *

        // int n = 5;
        // for (int i = 1; i<= n; i++) {

        // for (int space = 1; space <= n-i; space++) {
        // System.out.print(" ");
        // }

        // for (int j = 1; j <= n; j++) {
        // System.out.print("* ");
        // }
        // System.out.println();
        // }

        // * * * * *
        // * * * * *
        // * * * * *
        // * * * * *
        // * * * * *

        // for(int i=1; i<=5; i++){
        // for(int j=5; j>=i; j--){
        // System.out.print("* ");
        // }
        // System.out.println();
        // }

        // * * * * *
        // * * * *
        // * * *
        // * *
        // *

        // int n = 5;
        // for (int i = 1; i <= n; i++) {
        // for (int s = 1; s <= n - i; s++) {
        // System.out.print(" ");
        // }
        // for (int j = 1; j <= 2*i-1; j++) {
        // System.out.print("* ");
        // }
        // System.out.println();
        // }
        // *
        // * * *
        // * * * * *
        // * * * * * * *
        // * * * * * * * * *

        // int n = 5;
        // for (int i = 1; i <= n; i++) {
        // for (int s = 1; s <= i - 1; s++) {
        // System.out.print(" ");
        // }
        // for (int j = 1; j <= 2*n-2*i+1; j++) {
        // System.out.print("* ");
        // }
        // System.out.println();
        // }
        // * * * * * * * * *
        // * * * * * * *
        // * * * * *
        // * * *
        // *

        // int n = 5;
        // for (int i = 1; i <= n; i++) {
        // for (int j = 1; j <= 6; j++) {
        // if (i == 1 || i == 5 || j == 1 || j == 6) {
        // System.out.print("* ");
        // }else{
        // System.out.print(" ");
        // }

        // }
        // System.out.println();
        // }

        // * * * * * *
        // * *
        // * *
        // * *
        // * * * * * *

        // for (int i = 1; i <= 9; i++) {
        // for (int j = 1; j <= i; j++) {

        // if (j == 1 || j == i || i == 9) {
        // System.out.print("* ");

        // } else {
        // System.out.print(" ");
        // }

        // }
        // System.out.println();
        // }

        // *
        // * *
        // * *
        // * *
        // * *
        // * *
        // * *
        // * *
        // * * * * * * * * *

        // int n = 5;
        // for (int i = 1; i <= n; i++) {
        // for (int s = 1; s <= n - i; s++) {
        // System.out.print(" ");
        // }
        // for (int j = 1; j <= 2 * i - 1; j++) {

        // if (j == 1 || j == 2 * i - 1 || i == n) {
        // System.out.print("* ");

        // } else {
        // System.out.print(" ");
        // }
        // }
        // System.out.println();
        // }

        // *
        // * *
        // * *
        // * *
        // * * * * * * * * *

        // int n = 5;
        // for (int i = 1; i <= n; i++) {
        // for (int s = 1; s <= n - i; s++) {
        // System.out.print(" ");
        // }
        // for (int j = 1; j <= 2 * i - 1; j++) {
        // System.out.print("* ");
        // }
        // System.out.println();
        // }

        // // int n = 5;
        // for (int i = 1; i <= n; i++) {

        // if(i==1) continue;

        // for (int s = 1; s <= i - 1; s++) {
        // System.out.print(" ");
        // }
        // for (int j = 1; j <= 2 * n - 2 * i + 1; j++) {
        // System.out.print("* ");
        // }
        // System.out.println();
        // }

        // *
        // * * *
        // * * * * *
        // * * * * * * *
        // * * * * * * * * *
        // * * * * * * *
        // * * * * *
        // * * *
        // *

        // int n = 5;
        // for (int i = 1; i <= n; i++) {
        // for (int s = 1; s <= n - i; s++) {
        // System.out.print(" ");
        // }
        // for (int j = 1; j <= 2 * i - 1; j++) {
        // if (j == 1 || j == 2 * i - 1) {
        // System.out.print("* ");

        // } else {
        // System.out.print(" ");
        // }
        // }
        // System.out.println();
        // }

        // for (int i = 1; i <= n; i++) {

        // if (i == 1)
        // continue;

        // for (int s = 1; s <= i - 1; s++) {
        // System.out.print(" ");
        // }
        // for (int j = 1; j <= 2 * n - 2 * i + 1; j++) {
        // if (j == 1 || j == 2 * n - 2 * i + 1) {
        // System.out.print("* ");

        // } else {
        // System.out.print(" ");
        // }
        // }
        // System.out.println();
        // }

        // *
        // * *
        // * *
        // * *
        // * *
        // * *
        // * *
        // * *
        // *



        

    }
}