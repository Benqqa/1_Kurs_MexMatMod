m=1;
dt=0.1;
R=0.4;
a=2*R;
D=0.1;
X=[];
Y=[];

V=1;
Num=[];
eps=0.6;%��������� ��� ����������� ���������
F_eps=(12*D/a)*(-(a/eps)^13+(a/eps)^7);
N_row=6;%������� ������
N_line=10;%�������
%  /\y
%  |
%4R*
%  |   *|
%2R*    |2R
%  |   *|
% 0*--sqrt(3)R->x

%�������� ������� ������
for i=1:N_row
    for j=1:N_line
      x=(i-1)*sqrt(3)*R;
      y=mod(i-1,2)*R+(j-1)*2*R;
        X=[X x];
        Y=[Y y];
        if (j>=N_line-3) || (j<4)
           Num=[Num (i-1)*N_line+j];
        end
    end
end
X=[X N_row*2*R*3];%����� ������� ����
Y=[Y N_line*R];

X=[X N_row*2*R*3+2*R];%������ ������� ����
Y=[Y N_line*R];

X=[X N_row*2*R*3+R];%���� ������� ����
Y=[Y N_line*R+sqrt(3)*R];

X=[X N_row*2*R*3+R];%��� ������� ����
Y=[Y N_line*R-sqrt(3)*R];

N=size(X,2);
%������� ������ ���������
Vx=zeros(1,N);
Vy=zeros(1,N);
%������� �������� ������
Vx(N)=-V;
Vx(N-1)=-V;%��������� 4 ������� ��� �������, ������� ����� � ���� ���������
Vx(N-2)=-V;
Vx(N-3)=-V;
figure
for st=1:100000
for i=1:N
for j=1:N
if (j~=i)
    rx=X(j)-X(i);
    ry=Y(j)-Y(i);
    r=sqrt(rx*rx+ry*ry);%���������
    if (r<eps)
        F=F_eps;
    else
        F=(12*D/a)*(-(a/r)^13+(a/r)^7);
    end
    Vx(i)=Vx(i)+F*dt*rx/m/r;
    Vy(i)=Vy(i)+F*dt*ry/m/r;
end
end
end

for i=1: size(Num,2)
Vx(Num(i))=0;%����������� ������� � ����
Vy(Num(i))=0;
end

% for i=1:N_line
%     Vx(i)=0;%������� ������
%     Vy(i)=0;
% end

X=X+Vx*dt;
Y=Y+Vy*dt;
if (mod(st-1,10)==0)
clf
    hold on
grid on
axis([-1 14 -1 9])
plot(X,Y,'ko','MarkerSize',16)
pause(0.01);
end
end


