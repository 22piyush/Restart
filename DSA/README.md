1) Linear Search in Array.
    <!-- function linearSearch(arr , key){
        for(let i = 0; i<arr.length; i++){
            if(arr[i] == key){
                return i;
            }
            
        }
        return -1;
    }
    let arr = [30,50,64,78,45,67,75];
    let key = 67
    let index = linearSearch(arr , key);
    if(index == -1){
        console.log("Not Found");
        
    }else{
        console.log("Found at index position", index);
        
    } -->


2) Largest Element in Array.

    public class demo {

      public static int getLargest(int arr[]) {

          int largest = arr[0];
          for(int i=0; i<arr.length;i++){
              if(largest < arr[i]){
                  largest = arr[i];
              }
          }
          return largest;

      }
      public static void main(String[] args) {

          int arr[] = {13,5,6,7,89,35,79,80};
          System.out.println("Largest is "+getLargest(arr));
          
      }
    }

3) Binary Search in Array.
    public class demo {

        public static int binarySearch(int arr[], int key) {
            
            int start = 0;
            int end = arr.length-1;
            while(start <= end){
                int mid = (start + end) / 2;

                if(arr[mid] == key){
                    return mid;
                }
                if(arr[mid] < key){
                    start = mid + 1;
                }
                else{
                    end = mid - 1;
                }
            }

            return -1;

        }
        public static void main(String[] args) {

            int arr[] = {10,20,30,40,50,60,70};
            int key = 89;
            System.out.println("Search is "+binarySearch(arr, key));
            
        }
    }

4) Pairs in Array.
    <!-- public class demo {

      public static void pairsArray(int arr[]) {
          int tp = 0;
          for(int i=0; i<arr.length; i++){
              // int curr = arr[i];
              for(int j = i+1; j<arr.length; j++){
                  System.out.print("("+arr[i]+","+arr[j]+")");
                  tp++;
              }
              System.out.println();
          }
          System.out.println("Count of pairs is "+tp);
        

      }
      public static void main(String[] args) {

          int arr[] = {10,20,30,40,50,60,70};
          pairsArray(arr);
      }
  } -->

5) Total Subaarays.
    <!-- public class demo {

        public static void subArray(int arr[]) {
            int ts = 0;
            for(int i=0; i<arr.length; i++){
                int start = i;
                for(int j=i; j<arr.length; j++){
                    int end = j;
                    for(int k=start; k<=end; k++){
                        
                        System.out.print(arr[k]+" ");
                    }
                    ts++;
                    System.out.println();
                }
                System.out.println();
            }
            System.out.println("Total Subarray " +ts);
        }
        public static void main(String[] args) {

            int arr[] = {10,20,30,40,50,60,70};
            subArray(arr);
        }
    } -->

6) Sum and MAx SubArray.
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

7) 




12) Second Largest Element
    some sort Approach{
        arr.sort(function(a,b){
          return a - b;
        });
    }  