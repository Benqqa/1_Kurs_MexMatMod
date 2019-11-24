x0=0;
y0=0;
z0=0;
a=1;
b=1;
c=1;
R=11;
A=3;
B=17;
C=11;
D=2;

x=-50:5:50;
y=-50:5:50;
[X, Y]=meshgrid(x,y);
%./(a^2)%b.*
% Y=y0+sqrt(abs((X-x0)^2));
Z=sqrt((X-x0)^2./a^2+(Y-y0).^2./b^2).*c+z0;

figure
grid on
 hold on
 mesh(X,Y,Z)
