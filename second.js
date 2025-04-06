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
       //rotate image
       int n=matrix.size();
        for(int i=0;i<n-1;i++){
            for(int j=i+1;j<n;j++)
            swap(matrix[i][j],matrix[j][i]);
        };

        for(int i=0;i<n;i++){
         int start=0,end=n-1;
         while(start<end){
            swap(matrix[i][start],matrix[i][end]);
            start++,end--;
         }

        }  
        
          }

          //best time to buy stock and sell
          int maxProfit(vector<int>& prices) {

            int maxprofit=0,buy=prices[0];
            for(int i=0;i<prices.size();i++){
                if(prices[i]>buy){
                maxprofit=max(maxprofit,prices[i]-buy);
                }
                buy=min(buy,prices[i]);
            }
            return maxprofit;
        }

        //longest substring without repeating character
        vector<bool>count(256,0);
        int first=0,second=0,longest=0;
        while(second<s.size())
        {
while(count[s[second]])
{
     count[s[first]]=0;
     first++;

}
    count[s[second]]=1;
    longest=max(longest,second-first+1);
    second++;

        }
        return longest;

        //sort vowels
        vector<int>lower(26,0);
        vector<int>upper(26,0);
   
        for(int  i=0;i<s.size();i++)
        {
           if(s[i]=='a'||  s[i]=='e'||  s[i]=='i'|| s[i]=='o'|| s[i]=='u')
           {
           lower[s[i]-'a']++;
           s[i]='#';
           }
   
     else if(s[i]=='A'||  s[i]=='E'||  s[i]=='I'|| s[i]=='O'|| s[i]=='U')
           {
           upper[s[i]-'A']++;
           s[i]='#';
           }
        }
         string vowel;
         for(int i=0;i<26;i++)
         {
           char c='A'+i;
           while(upper[i])
           {
               vowel+=c;
               upper[i]--;
           }
         }
         for(int i=0;i<26;i++)
         {
           char c ='a'+i;
         while(lower[i])
         {
           vowel+=c;
           lower[i]--;
         }
         }
          int first=0,second=0;
          while(second<vowel.size())
          {
           if(s[first]=='#')
           {
          (s[first]=vowel[second]);
          second++;
           }
           first++;
          }
          return s;
           
           
        
       }

       //roman to integer
       int num(char c)
{
    if(c=='I')
    return 1;
    else if(c=='V')
    return 5;
    else if(c=='X')
    return 10;
    else if(c=='L')
    return 50;
    else if(c=='C')
    return 100;
    else if(c=='D')
    return 500;
    else 
    return 1000;
}
    int romanToInt(string s) {

    int sum=0,index=0;
    while(index<s.size()-1)
    {
        if(num(s[index])<num(s[index+1]))
        sum-=num(s[index]);
        else
        sum+=num(s[index]);
        index++;
    }
    sum+=num(s[index]);
    return sum;

        
    }
    //time needed to buy tickest
    for (int i=0;i<tickets.size();i++)
        {
            q.push(i);
        }
        int time = 0;
        while(tickets[k]!=0)
        {
            tickets[q.front()]--;
            if(tickets[q.front()])
                q.push(q.front());
                q.pop();
            time++;
        }
        return time;

        //defanding ip address
         
        int index=0;
        string ans;

        while(index<address.size())
        {
            if(address[index]=='.')
            ans=ans+"[.]";
            
            else
            ans=ans+address[index];
           index++;
        }
        return ans;
        
    }

    //longest palindrome
    vector<int>lower(26,0);
       vector<int>upper(26,0);
       
      for(int i=0;i<s.size();i++){
        if(s[i]>='a')
        lower[s[i]-'a']++;
        else
        upper[s[i]-'A']++;
      }
      int count=0;
      bool odd=0;
      for(int i=0;i<26;i++){
        if(lower[i]%2==0)
        count+=lower[i];
        else{
            count+=lower[i]-1;
            odd=1;
        }
        if(upper[i]%2==0)
        count+=upper[i];
        else{
            count+=upper[i]-1;
            odd=1;
        }
      }
      return count+odd;
    }

    //check if the statement is pangram
    vector<bool>alpha(26,0);
        for(int i=0;i<sentence.size();i++){
            int index=sentence[i]-'a';
            alpha[index]=1;
        }
        for(int i=0;i<26;i++){
            if(alpha[i]==0)
            return false;
        }
        return true;

    }

    //valid palindrome
    if((ch>='0' && ch<='9')||
    (tolower(ch)>='a' && tolower(ch)<='z')){
    return true;
    }
    return false;

    }
    bool isPalindrome(string s) {
        
        int start=0,end=s.length()-1;

       while(start<=end){
        if(!isAlphanum(s[start])){
            start++;continue;
        }
         if(!isAlphanum(s[end])){
            end--;continue;
        }
        if(tolower(s[start])!= tolower(s[end])){
        return false;
       }
       start++,end--;

       }
     return true ; 
    }
}

//valid paqlindrome
if((ch>='0' && ch<='9')||
    (tolower(ch)>='a' && tolower(ch)<='z')){
    return true;
    }
    return false;

    }
    bool isPalindrome(string s) {
        
        int start=0,end=s.length()-1;

       while(start<=end){
        if(!isAlphanum(s[start])){
            start++;continue;
        }
         if(!isAlphanum(s[end])){
            end--;continue;
        }
        if(tolower(s[start])!= tolower(s[end])){
        return false;
       }
       start++,end--;

       }
     return true ; 
    }

    //peak index in an mountain array
    nt peakIndexInMountainArray(vector<int>& arr) {
        int start=1,end=arr.size()-2 ;
        while(start<=end){
           int mid=start+(end-start)/2;
            if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1])
            return mid;

            else if(arr[mid-1]<arr[mid])
            start=mid+1;
            else
            end=mid-1;
        }
       return -1; 
    }

    //find minimum in rotated sorted array
    int findMin(vector<int>& nums) {

        int mini=INT_MAX;
        for(int i=0;i<nums.size();i++)
        {
           if(mini>nums[i])
           mini=nums[i];
        }
        return mini;  
       }


//trapping rain water
int n =height.size(),water=0;
int leftmax=0,rightmax=0,maxheight=height[0],index=0;

for(int i=1;i<n;i++){
    if(height[i]>maxheight){
        maxheight=height[i];
        index=i;
    }
}
for(int i=0;i<index;i++){
    if(leftmax>height[i]){
        water+=leftmax-height[i];
    }
    else
    leftmax=height[i];
}
  for(int i=n-1;i>index;i--){
    if(rightmax>height[i]){
        water+=rightmax-height[i];
    }
    else
    rightmax=height[i];
}
return water;
}

//find first and last position in an sorted array

int start=0,end=nums.size()-1,mid;
        vector<int>a(2);
        a[0]=-1;
        a[1]=-1;

        if(nums.size() == 1 && target == nums[0]){
        a[0]=a[1]=0;
        return a;}
        else if(nums.size() == 2)
        {
            if(target = nums[0] && target == nums[1])
            {a[0]=0;a[1]=1;}
            else if (target == nums[0] && target != nums[1])
            a[0]= 0;
            else if(target != nums[0] && target == nums[1])
            a[1]=1;
            return a;
        }
        else{


        while(start<end){
            mid=start+(end-start)/2;
            if(nums[mid]==target){
                a[0]=mid-1;
                end = mid-1;
            }
            else if(nums[mid]<target)
            {
                start=mid+1;
            }
            else
            end=mid-1;
        }

        start=0,end=nums.size()-1;

        while(start<end){
            mid=start+(end-start)/2;
            if(nums[mid]==target){
                a[1]=mid;
                start = mid+1;
            }
            else if(nums[mid]<target){
                start=mid+1;
                }  
            else
                end=mid-1;
            }  
        }        
        return a;
    }

    //sqrt(x)
    if(x<2)
        return x;
      int start=0,end=x,mid,ans;
      while(start<=end){
        mid=start+(end-start)/2;
        if(mid==x/mid){
            ans=mid;
            break;
        }
        else if(mid<x/mid)
        {
            ans=mid;
            start=mid+1;
        }
        else
        end=mid-1;
      }
        
      return ans;
      
    }

    //search insert posiyion
    int start=0,end =nums.size()-1,ans=nums.size(),mid;
    while(start<=end)
    {
     mid=start+(end-start)/2;
     if(nums[mid]==target)
     {
         ans=mid;
         break;
     }
     else if(nums[mid]<target)
     start=mid+1;
     else
     {
         ans=mid;
         end=mid-1;
     }
    } 
     return ans;
 }
 //input array is sorted
 int start=0,end = numbers.size()-1;
 while(start<end){
    if(numbers[start]+numbers[end]==target){
        ans.push_back(start+1);
        ans.push_back(end+1);
        return ans;
    }
    else if(numbers[start]+numbers[end]<target)
    start++;
    else
    end--;
 }
 return ans;
}
//sort an oarray of 0,1,2s by dutch national flag algorithm
int n=nums.size();
int low=0,mid=0,high=n-1;
while(mid<=high){
  if(nums[mid]==0){
      swap(nums[low],nums[mid]);
      low++;
      mid++;
  }
  else if(nums[mid]==1){
      mid++;
  }
  else{
      swap(nums[mid],nums[high]);
      high--;
  }
}  
