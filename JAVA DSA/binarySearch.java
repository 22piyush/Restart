public class binarySearch {
    public static void main(String[] args) {

        int number[] = {2,4,6,7,8,9,10,15,16,17,18};
        int key = 8;

        System.out.println("Value at index Position of "+binarySearch(number, key));
        
    }

    public static int binarySearch(int number[] , int key){

        int start = 0;
        int end = number.length-1;

        while (start <= end) {
            int mid = (start + end) / 2;

            if(number[mid] == key){
                return mid;
            }
            if(number[mid] < key){
                start = mid + 1;
            }else{
                end  = mid - 1;
            }
        }
        return -1;
    }
}
