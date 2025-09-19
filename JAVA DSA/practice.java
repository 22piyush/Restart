
public class practice {

    public static int removeDuplicates(int nums[]) {
        int i = 0; int j = i+1; int temp =0;

        while (i<=j) {

            if(nums[i] == nums[j]){
                nums[temp] = nums[i];
            }

            if(nums[i] != nums[j]){
                nums[temp] = nums[i];
            }
            
            i++;
            j++;
        }
        return temp;
        
    }

    public static void main(String[] args) {
       
        int number[] = {1,1,2};
        System.out.println(removeDuplicates(number));

    }
}
