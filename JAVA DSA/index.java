import java.util.*;

public class index {

    public static void main(String[] args) {
        String arr[] = {"mango","apple","banana","treee"};  
        String key = "banana";

        int index = linearSearch(arr, key);
        System.out.println(index);

        if(index == 'not'){
            System.out.println("Not Found");
        }else{
            System.out.println("Index Found at Position " +index);
        }
    }

    public static String linearSearch(String arr[],String key){
        for(int i=0;i<arr.length();i++){
            if(arr[i] == key){
                return i;
            }
        }
        return -1;
    }
}

