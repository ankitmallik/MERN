#include<bits/stdc++.h>
using namespace std;
int main()
{
    int num1 = 10;
    int num2 = 20;
    for(int i{0};i<1e9;++i)
    {
        if(i%num1==0 && i % num2==0)
        {
            cout<<i<<endl;
            break;
        }
    }
}