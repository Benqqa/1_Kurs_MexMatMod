%% ����:
x0=-2;
y0=-11;
z0=-10;
a=-8;
b=-9;
c=-16;
R=0;
A=17;
B=-12;
C=17;
D=1;
%% ������� �1    
r = 20;
z = 0:5:30; 
f = (0:10:360)*pi/180; 
[F, Z] = meshgrid(f, z);
X = r*cos(F);
Y = r*sin(F);
figure   
view(40,25)
grid on
hold on
rotate3d on
surf(X-x0,Y-y0,Z-z0);
title('������������� �������','FontSize', 14)
xlabel('X'); ylabel('Y'); zlabel('Z');
%% ������� �2
figure  
view(40,25)
grid on
hold on
rotate3d on
subplot(2,2,1)
view(40,25)
grid on
hold on
rotate3d on
alpha(0.95)
surf(X-x0,Y-y0,Z-z0);
title('������� ������ ��������� �����������(surf)')
xlabel('X'); ylabel('Y'); zlabel('Z');
subplot(2,2,2)
view(40,25)
grid on
hold on
rotate3d on
surfl(X-x0,Y-y0,Z-z0);
title('���������� �����������(surfl)')
xlabel('X'); ylabel('Y'); zlabel('Z');
subplot(2,2,3)
view(40,25)
grid on
hold on
rotate3d on
mesh(X-x0,Y-y0,Z-z0);
title('��������� �����������(mesh)')
xlabel('X'); ylabel('Y'); zlabel('Z');
subplot(2,2,4)
view(40,25)
grid on
hold on
rotate3d on
plot3(X-x0,Y-y0,Z-z0);
title('���������� ����� � ����� � ���������� ������������(plot3)')
xlabel('X'); ylabel('Y'); zlabel('Z');
%% ������� �3
figure  
subplot(2,2,1)
grid on
surf(X-x0,Y-y0,Z-z0);    
view(40,25)
colormap(subplot(2,2,1),'hot(8)')
shading interp  %������� �������
xlabel('X'); ylabel('Y'); zlabel('Z');
title('�������:hot,��� �����')
subplot(2,2,2)
grid on
rotate3d on
surf(X-x0,Y-y0,Z-z0,'FaceColor','k','EdgeColor','b' )
view(40,25)
xlabel('X'); ylabel('Y'); zlabel('Z');
title('�������� ����, ����� �����' )
subplot(2,2,3)
grid on
surf(X-x0,Y-y0,Z-z0,'FaceColor','y','EdgeColor','g' )    
view(40,25)
xlabel('X'); ylabel('Y'); zlabel('Z');
title('������ ����, ������� �����' )
subplot(2,2,4)
grid on
surf(X-x0,Y-y0,Z-z0);  
view(40,25)
colormap(subplot(2,2,4), 'parula')
xlabel('X'); ylabel('Y'); zlabel('Z');
title('�������: parula' )
%% ������� �4 
x = -36:5:10 ;
y = -11:5:29 ;
[X1,Y1] = meshgrid(x,y);
Z1 = (A.*(X1-x0) + B.*(Y1-y0) + D)./(-C);
figure
subplot(2,2,1)
grid on
hold on
rotate3d on
surf(X-35,Y+15,Z+10, 'FaceColor','w','EdgeColor','m') 
surf(X1-16,Y1+9.5,Z1-10, 'FaceColor','k','EdgeColor','m')
view([-141, 20])
xlabel('X'); ylabel('Y'); zlabel('Z');
title('����� 1' )
subplot(2,2,2)
grid on
hold on
rotate3d on
surf(X-35,Y+15,Z+10, 'FaceColor','w','EdgeColor','m')
surf(X1-16,Y1+9.5,Z1-10, 'FaceColor','k','EdgeColor','m')
view([138, 35])
xlabel('X'); ylabel('Y'); zlabel('Z');
title('����� 2' )
subplot(2,2,3)
grid on
hold on
rotate3d on 
surf(X-35,Y+15,Z+10, 'FaceColor','w','EdgeColor','m')
surf(X1-16,Y1+9.5,Z1-10, 'FaceColor','k','EdgeColor','m')
view([-130, 2])
xlabel('X'); ylabel('Y'); zlabel('Z');
title('����� 3' )
subplot(2,2,4)
grid on
hold on
rotate3d on
surf(X-35,Y+15,Z+10, 'FaceColor','w','EdgeColor','m')
surf(X1-16,Y1+9.5,Z1-10, 'FaceColor','k','EdgeColor','m') 
view([9, 9])
xlabel('X'); ylabel('Y'); zlabel('Z');
title('����� 4' )



