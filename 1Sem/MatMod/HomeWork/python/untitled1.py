import random
N = int(input('size:'));
a = []
c=0
for i in range(N*N):
	a.append([0] * N)
	a[i//N][i%N] = int(random.uniform(0,N))
	if(i//N==i%N):
		c=c+a[i//N][i%N]
	elif(i//N==N-1-i%N):
		c=c+a[i//N][i%N]
for i in range(N):
	print(a[i])
print('------------------')
print("summ:" ,c)	