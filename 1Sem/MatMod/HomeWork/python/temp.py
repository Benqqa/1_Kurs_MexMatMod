import random
N = int(input('size:'));
a = []
for i in range(N*N):
	a.append([0] * N)
	a[i//N][i%N] = int(random.uniform(0, N))
for i in range(N):
	print(a[i])
print('------------------')
for i in range(N):
	for j in range(N):
		for z in range(N):
			if(a[i][j]>a[i][z]):
				s=a[i][j]
				a[i][j]=a[i][z]
				a[i][z]=s

for i in range(N):
	for j in range(N):
		for z in range(N):
			if(a[j][i]>a[z][i]):
				st=a[j][i]
				a[j][i]=a[z][i]
				a[z][i]=st
for i in range(N):
	print(a[i])