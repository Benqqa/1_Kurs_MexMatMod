L=10;
a=1;
D=0.1;
dt=0.01;
N=25;
m=1;
X =rand(1,N)*L;
Y=rand(1,N)*L;
Vx=rand(1,N);
Vy=rand(1,N);
rad=0.5;
eps=0.8;
V_px=[];%
V_py=[];% ������� ������� ������
V_p=[];%%%%
betta=0.0005; %% �������
T=0.00005*sin(linspace(0,100,10000));%%�����������   linespace-���������� ���������� ������ ������� ����� � ������ ����� ����������� ���������
%% ����

F_eps=(12*D/a)*(-(a/eps)^13+(a/eps)^7);% ���� �������� ������� ������ ���� � �����
figure

for st =1:1000%step po  timu
    for i=1:N
        for j=1:N
            if(i~=j)
                %% �������� �������
                rx=X(j)-X(i);
                ry=Y(j)-Y(i);
                r=sqrt(rx.^2+ry.^2);
                if(r<eps)%���� ������� ����� ��� ���� �������
                    F=F_eps;
                else
                    F=(12*D/a)*(-(a/r)^13+(a/r)^7);%���� �����
                end
                Vx(i)=Vx(i)+((1/m)*(rx/r)*F*dt);
                Vy(i)=Vy(i)+(((1/m)*(ry/r)*F*dt));
                %%  ������ ������(����� ��g)
           %%top
                rx=X(j)-X(i);
                ry=Y(j)+L-Y(i);
                r=sqrt(rx.^2+ry.^2);
                if(r<=L)
                    if(r<eps)%���� ������� ����� ��� ���� �������
                        F=F_eps;%�������� ������ �������������
                    else
                        F=(12*D/a)*(-(a/r)^13+(a/r)^7);%���� �����
                    end
                    Vx(i)=Vx(i)+((1/m)*(rx/r)*F*dt);
                    Vy(i)=Vy(i)+(((1/m)*(ry/r)*F*dt));
                end
            %%Right
                rx=X(j)+L-X(i);
                ry=Y(j)-Y(i);
                r=sqrt(rx.^2+ry.^2);
                if(r<=L)
                    if(r<eps)%���� ������� ����� ��� ���� �������
                        F=F_eps;%�������� ������ �������������
                    else
                        F=(12*D/a)*(-(a/r)^13+(a/r)^7);%���� �����
                    end
                    Vx(i)=Vx(i)+((1/m)*(rx/r)*F*dt);
                    Vy(i)=Vy(i)+(((1/m)*(ry/r)*F*dt));
                end
            %%bottom
                rx=X(j)-X(i);
                ry=Y(j)-L-Y(i);
                r=sqrt(rx.^2+ry.^2);
                if(r<=L)
                    if(r<eps)%���� ������� ����� ��� ���� �������
                        F=F_eps;%�������� ������ �������������
                    else
                        F=(12*D/a)*(-(a/r)^13+(a/r)^7);%���� �����
                    end
                    Vx(i)=Vx(i)+((1/m)*(rx/r)*F*dt);
                    Vy(i)=Vy(i)+(((1/m)*(ry/r)*F*dt));
                end
            %%Left
                rx=X(j)-L-X(i);
                ry=Y(j)-Y(i);
                r=sqrt(rx.^2+ry.^2);
                if(r<=L)
                    if(r<eps)%���� ������� ����� ��� ���� �������
                        F=F_eps;%�������� ������ �������������
                    else
                        F=(12*D/a)*(-(a/r)^13+(a/r)^7);%���� �����
                    end
                    Vx(i)=Vx(i)+((1/m)*(rx/r)*F*dt);
                    Vy(i)=Vy(i)+(((1/m)*(ry/r)*F*dt));
                end
            %% ��������
            Vx=Vx-Vx*betta*dt;
            Vy=Vy-Vy*betta*dt;
            %% �����������
            Vx=Vx+T(st)*rand(1,N);%��������� �������� �� ����������� � ��������� � �������
            Vy=Vy+T(st)*rand(1,N);
            
            %% ��
            % ���� ����� ����������� �� ������ �� ���������� ��������, ��
            % ��������� �������� ��������
            end
            
        end
    end
        X=X+Vx*dt;
        Y=Y+Vy*dt;
        for i=1:N
            %% ������� ������
%             if(X(i)>L-rad || X(i)<rad)
%             Vx(i)=Vx(i)*(-1);
%             end                               %%������� ������
%             
%             if(Y(i)>L-rad || Y(i)<rad)
%             Vy(i)=Vy(i)*(-1);
%             end
%% ������ ������(����������)
%���� ������� ������������ � ������ ����� ������� � �������� ��� �
%��������� ���� ��� ��������� �������, �� ��� ��������� ������ ������� ��
%������ �����, ������� �� �������� ������� �������� � ������
if(X(i)>L)
    X(i)=X(i)-L;
end
if(X(i)>L)
    Y(i)=Y(i)-L;
end
if(X(i)<0)
    X(i)=X(i)+L;
end
if(X(i)<0)
    Y(i)=Y(i)+L;
end

        end
       V_px=[V_px;Vx(7)];
       V_py=[V_py;Vy(7)];
       V_p=[V_p;sqrt(Vx(7)^2+Vy(7)^2)];        
       if(mod(st,2)==0)
        subplot(1,2,1)
        plot(X,Y,'kO','MarkerSize',8)
        axis([0,L,0,L])%�������� ���
        subplot(1,2,2)
        %��������� � � � �� ���������
            hold on
            grid on
            plot(V_px,'r');
            plot(V_py,'b');
            plot(V_p,'k');
       legend('V_px','V_py','V_p');
        pause(0.09)
        clf;
        
       end
end