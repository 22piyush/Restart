public class practice {
    public static void main(String[] args) {
        
       int arr[] = {2,3,4,5,6,7,8,9};
        subarray(arr);

    }

    public static void subarray(int arr[]){

        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr.length; j++){
                for(int k=i; k<=j; k++){
                    System.out.print(arr[k]+" ");
                }
                System.out.println();
            }
        }
        System.out.println();

    }
}
