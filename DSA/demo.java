public class demo {

    public static void subArraySumMAX(int arr[]) {
       
        int currsum = 0;
        int maxsum = Integer.MIN_VALUE;


        for(int i=0; i<arr.length; i++){
            int start = i;
            for(int j=i; j<arr.length; j++){
                int end = j;
                currsum = 0;
                for(int k=start; k<=end; k++){
                   currsum = currsum + arr[k];
                }
                System.out.println("Subarray currunt sum " +currsum);
                if(maxsum < currsum){
                    maxsum = currsum;
                }
            }
        }
        System.out.println("Max sum = "+maxsum);
    }
    public static void main(String[] args) {

        int arr[] = {10,20,30,40,50,60,70};
        subArraySumMAX(arr);
    }
}