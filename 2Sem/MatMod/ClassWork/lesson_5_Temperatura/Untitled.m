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
T=T_0*sin(linspace(0,3*pi,N))+T_0; %linespase ����������� ������ �� ������ ����� � ������� ����� �� ��������������� ������������
%T=T_0*ones(1,N); %�������
T(1)=T_L;%�������� �����
T(N)=T_R;%�������� �������
T(N/2)=60;
T_dr=T_0*ones(7,N);%���������
figure
for st= 1:10000 %�� ������� ������� �� ���� �����
for i= 2:N-1
T(i)=T(i)+lambda*dt/rho/c*(T(i+1)-2*T(i)+T(i-1))/dx^2;%%��� �������
end
for i= 1:N
T_dr(:,i)=T(i)*ones(7,1);%% ��������� (:,1)
%%�� ������ ������� ��� ������ � ��������� ��
%���� ����������� ������� ������� �� ���, �.�. � ������ �������� �������
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