//spiral matrix
int row=matrix.size(),col=matrix[0].size();
int top=0,bottom=row-1,left=0,right=col-1;

while(top<=bottom&&left<=right)
{

 for(int j=left;j<=right;j++)
 ans.push_back(matrix[top][j]);
 top++;

 for(int i=top;i<=bottom;i++)
 ans.push_back(matrix[i][right]);
 right--;

if(top<=bottom){
 for(int j=right;j>=left;j--)
 ans.push_back(matrix[bottom][j]);
 bottom--;
}
if(left<=right)
{
 for(int i=bottom;i>=top;i--)
 ans.push_back(matrix[i][left]);
 left++;
}

}

return ans;

    }
    //search a 2d matrix
    int N=matrix.size(),M=matrix[0].size();
 int row_index,col_index,start=0,end=N*M-1,mid;

 while(start<=end)
 {
    mid=start+(end-start)/2;
    row_index=mid/M;
    col_index=mid % M;
    if(matrix[row_index][col_index]==target)
    return 1;
    else if(matrix[row_index][col_index]<target)
    start=mid+1;
    else
    end=mid-1;
    
     }
return 0;
        
    }
    string ans;
  int index1=num1.size()-1,index2=num2.size()-1;
  int sum,carry=0;


  while(index2>=0)
  {
    sum=(num1[index1]-'0'+num2[index2]-'0')+carry;
    carry=sum/10;
    char c = '0'+sum%10;
    ans+=c;
    index2--,index1--;
  }
 while(index1>=0)
  {
    sum=(num1[index1]-'0')+carry;
    carry=sum/10;
    char c = '0'+sum%10;
    ans+=c;
    index1--;
  }
  if(carry)
  ans+='1';
  reverse(ans.begin(),ans.end());
  return  ans;






}
    string addStrings(string num1, string num2) {
    
    if(num1.size()<num2.size())
    return add(num2,num1);
    else
     return add(num1,num2);



        
    }
    //fibonacchi number
    int fib(int n) {
        if(n<=1)
        return n;
      
         return fib(n-1)+fib(n-2);
      
      
              
          }
      };
      //climbing stairs
      int climbStairs(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        return climbStairs(n-1) + climbStairs(n-2);
    }
    //pow(x,n)
    if(x==0)return 0.0;
       if(x==1)return 1.0;
       if(x==-1 && n%2==0)return 1.0;
       if(x==-1 && n%2!=0)return -1.0;

        long binary=n;
        if(n<0){
            x=1/x;
            binary=-binary;
        }
        double ans=1;
        while(binary>0){
            if(binary%2==1){
                ans=ans*x;
            }
            x=x*x;
            binary/=2;
        }
        return ans;
    }
    //two sum
    
    int n = nums.size();
        for (int i = 0; i < n - 1; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] == target) {
                    return {i, j};
                }
            }
        }
        return {};
    
        
    }
    //maximum subarray
    int maxSubArray(vector<int>& nums) {
        
        int currentsum=0,maxsum=INT_MIN;
   
        for(int val:nums){
           currentsum+=val;
           maxsum=max(currentsum,maxsum);
   
           if(currentsum<=0){
               currentsum=0;
           }
        }
   return maxsum;
   
       }
       
