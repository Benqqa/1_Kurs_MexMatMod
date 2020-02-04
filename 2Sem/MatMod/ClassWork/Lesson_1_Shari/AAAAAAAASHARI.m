L=10;
a=1;
D=0.1;
dt=0.1;
N=5;
m=1;
X =rand(1,N)*L;
Y=rand(1,N)*L;
Vx=rand(1,N);
Vy=rand(1,N);

%% тело
figure

for st =1:1000%step po  timu
    for i=1:N
        for j=1:N
            if(i~=j)
                rx=X(j)-X(i);
                ry=Y(j)-Y(i);
                r=sqrt(rx.^2+ry.^2);
                F=(12*D/a)*(-(a/r)^13+(a/r)^7);
                Vx(i)=Vx(i)+((1/m)*(rx/r)*F*dt);
                Vy(i)=Vy(i)+(((1/m)*(ry/r)*F*dt));
            end
        end
    end
        X=X+Vx*dt;
        Y=Y+Vy*dt;
        for i=1:N
            if(X(i)>L || X(i)<0)
            Vx(i)=Vx(i)*(-1);
            end
            
            if(Y(i)>L || Y(i)<0)
            Vy(i)=Vy(i)*(-1);
            end
            
        end
        plot(X,Y,'kO','MarkerSize',8)
        pause(0.9)
        clf
end
