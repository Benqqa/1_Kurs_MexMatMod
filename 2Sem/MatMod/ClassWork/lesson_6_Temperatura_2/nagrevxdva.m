N_x=20;
N_y=20;
L=10;
H=5;
dt=0.01;
dx=L/N_x;
dy=L/N_y;
k=1;


T_0=15;
T_1=15;
T_2=15;
T_3=15;
T_4=15;

T=ones(N_y,N_x)*T_0;
T(:,1)=T_1;
T(:,N_x)=T_2;
T(1,:)=T_3;
T(N_y,:)=T_4



for st = 1:10000
    for i =2:N_y-1
        for j=2:N_x-1
            T(i,j)=T(i,j)+k*dt*((T(i+1,j)-2*T(i,j)+T(i-1,j))/dx^2+...
                (T(i,j+1)-2*T(i,j)+T(i,j-1))/dy^2);
            
        end
    end
    T(7:13,7:13)=T(7:13,7:13)+0.5
    T(1,:)=T(1,:)-0.1
    T(:,1)=T(:,1)-0.1
    T(N_x,:)=T(N_x,:)-0.1
    T(:,N_x)=T(:,N_x)-0.1
    if mod(st-1,40)==0
        clf
        colormap default
        
        surf(T) 
        colorbar('vert')
        view([90, -90, 90])
        pause(0.01);
    end
end
