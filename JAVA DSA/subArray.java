public class subArray {
    public static void main(String[] args) {
        int arr[] = {2,3,4,5,6,7,8,9,10};
        subArray(arr);

    }

    public static void subArray(int arr[]){

        for(int i=0 ; i<arr.length; i++){
            for(int j=i ; j<arr.length; j++){
                for(int k=i; k<=j;k++){
                    System.out.print(arr[k]+" ");
                }
                System.out.println();
            }
        }
        System.out.println();

    }
}
