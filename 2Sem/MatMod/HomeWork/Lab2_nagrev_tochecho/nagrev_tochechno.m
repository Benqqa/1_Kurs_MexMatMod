N_x=21;
N_y=21;
L=10;
H=5;
dt=0.01;
dx=L/N_x;
dy=L/N_y;
k=1;


T_0=0;
T_N=15;
T_1=50;
T_2=50;
T_3=10;
T_4=10;

T=ones(N_y,N_x)*T_0;
T(7:13,7:13)=T_N;
T(:,N_x)=T_2;
T(1,:)=T_3;
T(:,1)=T_1;
T(N_y,:)=T_4



for st = 1:10000
    for i =2:N_y-1
        for j=2:N_x-1
           if i <11 || i> 11 || j <11 || j>11
            T(i,j)=T(i,j)+k*dt*((T(i+1,j)-2*T(i,j)+T(i-1,j))/dx^2+...
                (T(i,j+1)-2*T(i,j)+T(i,j-1))/dy^2);
            end
        end
    end
    T(11,11)=T(11,11)+0.1
%     T(1,:)=T(1,:)-0.01
%     T(:,1)=T(:,1)-0.01
%     T(N_x,:)=T(N_x,:)-0.01
%     T(:,N_x)=T(:,N_x)-0.01
    if mod(st-1,40)==0
        clf
        colormap default
        surf(T) 
        colorbar('vert')
        view([90, -90, 90])
        pause(0.01);
    end
end
