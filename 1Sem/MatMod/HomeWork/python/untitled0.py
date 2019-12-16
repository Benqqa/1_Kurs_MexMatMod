"""
b=10
while b>1:
    a=b-1
    s="Было "+str(b)+"негретят "+"олстаось "+str(a)
    print(s)
    b=a
    """
from random import randint
n, m = 3, 3
k=n-1
sum1=0
sum3=0
sum2=0
a = [[randint(1, 10) for j in range(m)] for i in range(n)]
for i in range(n):
	print(a[i])
z=a[k][k]
s1=a[0][0]
s2=a[1][0]
s3=a[2][0]
for i in range(n):
        sum3 += a[2][i]
        sum2 += a[1][i]
        sum1 += a[0][i]
        if s3<a[2][i]:
            k=a[2][i]
            a[2][i]=a[2][i+1]
            s3=k
            a[2][i+1]=k
        if s2<a[1][i]:
            k=a[1][i]
            a[1][i]=a[1][i+1]
            s2=k
            a[1][i+1]=k
        if s1<a[0][i]:
            k=a[0][i]
            a[0][i]=a[0][i+1]
            s1=k
            a[0][i+1]=k
            
print(sum1,sum2,sum3)
print(a)

