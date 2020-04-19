m = 10;
dt = 0.01;
R = 0.4;
a = 2*R;
D = 0.01;
X = [];
Y = [];
N_row = 30;
N_line = 3;
eps = 0.4;
F_eps=(12*D/a)*(-(a/eps)^13+(a/eps)^7);
V =0.07;
Num =[];
for i = 1:N_row
    for j = 1:N_line
        x = (i-1)*sqrt(3)*R;
        y = mod(i-1,2)*R + (j-1)*2*R;
        X = [X,x];
        Y = [Y,y];
        if(j>=N_line-3)||(j<4)
            Num = [Num (i-1)*N_line+j];
        end
        
    end
end
X_in=X;
Y_in=Y;
% X = [X N_row*2*R*5];
% Y = [Y N_line*R];
% X = [X N_row*2*R*5+2*R];
% Y = [Y N_line*R];
% X = [X N_row*2*R*5+R];
% Y = [Y N_line*R+sqrt(3)*R];
% X = [X N_row*2*R*5+R];
% Y = [Y N_line*R-sqrt(3)*R];
N = size(X,2);
Vx = zeros(1,N);
Vy = zeros(1,N);
% Vx(N) = -V;
% Vx(N-1) = -V;
% Vx(N-2) = -V;
% Vx(N-3) = -V;
for i=1:N_row
Vx(N-i+1)=-V;
end
E_kin=[];
E_el=zeros(1,N_row);
figure

for st = 1:100000
    for i = 1:N
        for j = 1:N
            if j~=i
                rx = X(j)-X(i);
                ry = Y(j)-Y(i);
                r = sqrt(rx*rx + ry*ry);
                if r<=eps
                    F = F_eps;
                else 
                    F = (12*D/a)*(-(a/r)^13+(a/r)^7);
                end
                Vx(i) = Vx(i) + F*dt*rx/m/r;
             %   Vy(i) = Vy(i) + F*dt*ry/m/r;
            end
        end
    end
%     for i=1:size(Num,2)
%          Vx(Num(i))=0;
%          Vy(Num(i))=0;
%     end
    for i = 1:N_line
        Vx(i)=0;
        Vy(i)=0;
    end
    X = X + Vx*dt;
    Y = Y +Vy*dt;
    for i=1:N_row
    el=X((i-1)*N_line+3)-X_in((i-1)*N_line+3);
    E_el(i)=el;
    end
    
%     e_kin=0;
%     for i=1:N%ñóììàğíûé êèí ıíåïğãèÿ ñèñòåìû
%         e_kin=e_kin+m*(Vx(i)^2+Vy(i)^2)/2;
%     end
    %E_kin=[E_kin e_kin];
    if mod(st-1,30)==0
        clf
        subplot(2,1,1)
        hold on
        axis([-1 N_row*2*R -1 N_line*2*R])
        plot(X,Y, 'ko', 'MarkerSize', 16)
        subplot(2,1,2)
        axis([-inf inf -0.8 0.8])
        hold on
        grid on
        plot(E_el,'r*-')
        legend('E_kin');
        pause(0.01)
        
    end
        
end
