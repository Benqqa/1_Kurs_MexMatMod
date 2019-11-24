%111111111
r2=20;
Z2=;
z2=0:5:30;
f2=(0:10:360)*pi/180;
[F2,z2]=meshgrid(f2,z2);
X2=r2*cos(F2);
Y2=r2*sin(F2);
figure
view(40,25)
hold on
 grid on
 
 surf(X2,Y2,Z2)
 

