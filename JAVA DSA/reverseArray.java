public class reverseArray {
    public static void main(String[] args) {
        
        int arr[] = {10,3,4,5,6,7,5,4,78};
        reverseArray(arr);
        printArray(arr);
    }

    static void reverseArray(int arr[]){

        int i = 0;
        int j = arr.length-1;

        while(i < j){
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            i++;
            j--;
        }

    }

    static void printArray(int arr[]){
        for(int i =0; i<arr.length; i++){
            System.out.print(arr[i]+" ");
        }
    }
}
