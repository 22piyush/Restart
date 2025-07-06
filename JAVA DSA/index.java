import java.util.*;
public class index {
    public static void main(String[] args) {
        
        int number[] = {10,4,56,78,8,9,5,67,66};
        System.out.println("Largest Number Is " + num(number));
    }
    
    public static int num(int number[]){
        
        int largest = Integer.MIN_VALUE;
        System.out.println(largest +"Largest Value Fiesr ");
        for(int i=0;i<number.length;i++){
            if(largest < number[i]){
                largest = number[i];
            }
        }
        return largest;

    }

}
