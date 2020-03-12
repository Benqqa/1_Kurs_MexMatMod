L=10;
N=100;
dx=L/N;
dt=0.001;
rho=50;
lambda=100;
c=10;
T_0= 20; 
T_L=0;
T_R=50;
T=T_0*sin(linspace(0,3*pi,N))+T_0; %linespase равномерный массив по левому числу и правому числу сс равноудаленными эедлементами
%T=T_0*ones(1,N); %динейно
T(1)=T_L;%краайн€€ лева€
T(N)=T_R;%краайн€€ правоа€
T(N/2)=60;
T_dr=T_0*ones(7,N);%отрисовка
figure
for st= 1:10000 %по времени пройдем по всем узлам
for i= 2:N-1
T(i)=T(i)+lambda*dt/rho/c*(T(i+1)-2*T(i)+T(i-1))/dx^2;%%все расчеты
end
for i= 1:N
T_dr(:,i)=T(i)*ones(7,1);%% об€снение (:,1)
%%тк матлаб заточен под раюоту с матрицами то
%есть возможность сделать вырезку из нее, т.е. в скоках диапазон массива
end
%visualisacija
if(mod(st-1,20)==0)
    clf
    grid on
    hold on
    %plot(T,'o-');
    surf(T_dr)
    view(-16,40)
    colormap('jet')
    pause(0.001)
end
end