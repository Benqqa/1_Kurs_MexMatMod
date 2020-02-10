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
V_py=[];% харанят скорост частиц
V_p=[];%%%%
betta=0.0005; %% вязксть
T=0.00005*sin(linspace(0,100,10000));%%Температура   linespace-равномерно заоленейны массив граница слева и справа хатем кколичество элементов
%% тело

F_eps=(12*D/a)*(-(a/eps)^13+(a/eps)^7);% если частички слишком близки друг к другу
figure

for st =1:1000%step po  timu
    for i=1:N
        for j=1:N
            if(i~=j)
                %% реальные чатсицы
                rx=X(j)-X(i);
                ry=Y(j)-Y(i);
                r=sqrt(rx.^2+ry.^2);
                if(r<eps)%если частицы ближе чем наши границы
                    F=F_eps;
                else
                    F=(12*D/a)*(-(a/r)^13+(a/r)^7);%сила шароф
                end
                Vx(i)=Vx(i)+((1/m)*(rx/r)*F*dt);
                Vy(i)=Vy(i)+(((1/m)*(ry/r)*F*dt));
                %%  мнимые частиы(через Тоg)
           %%top
                rx=X(j)-X(i);
                ry=Y(j)+L-Y(i);
                r=sqrt(rx.^2+ry.^2);
                if(r<=L)
                    if(r<eps)%если частицы ближе чем наши границы
                        F=F_eps;%заглушка против бесконечности
                    else
                        F=(12*D/a)*(-(a/r)^13+(a/r)^7);%сила шароф
                    end
                    Vx(i)=Vx(i)+((1/m)*(rx/r)*F*dt);
                    Vy(i)=Vy(i)+(((1/m)*(ry/r)*F*dt));
                end
            %%Right
                rx=X(j)+L-X(i);
                ry=Y(j)-Y(i);
                r=sqrt(rx.^2+ry.^2);
                if(r<=L)
                    if(r<eps)%если частицы ближе чем наши границы
                        F=F_eps;%заглушка против бесконечности
                    else
                        F=(12*D/a)*(-(a/r)^13+(a/r)^7);%сила шароф
                    end
                    Vx(i)=Vx(i)+((1/m)*(rx/r)*F*dt);
                    Vy(i)=Vy(i)+(((1/m)*(ry/r)*F*dt));
                end
            %%bottom
                rx=X(j)-X(i);
                ry=Y(j)-L-Y(i);
                r=sqrt(rx.^2+ry.^2);
                if(r<=L)
                    if(r<eps)%если частицы ближе чем наши границы
                        F=F_eps;%заглушка против бесконечности
                    else
                        F=(12*D/a)*(-(a/r)^13+(a/r)^7);%сила шароф
                    end
                    Vx(i)=Vx(i)+((1/m)*(rx/r)*F*dt);
                    Vy(i)=Vy(i)+(((1/m)*(ry/r)*F*dt));
                end
            %%Left
                rx=X(j)-L-X(i);
                ry=Y(j)-Y(i);
                r=sqrt(rx.^2+ry.^2);
                if(r<=L)
                    if(r<eps)%если частицы ближе чем наши границы
                        F=F_eps;%заглушка против бесконечности
                    else
                        F=(12*D/a)*(-(a/r)^13+(a/r)^7);%сила шароф
                    end
                    Vx(i)=Vx(i)+((1/m)*(rx/r)*F*dt);
                    Vy(i)=Vy(i)+(((1/m)*(ry/r)*F*dt));
                end
            %% вязкость
            Vx=Vx-Vx*betta*dt;
            Vy=Vy-Vy*betta*dt;
            %% температура
            Vx=Vx+T(st)*rand(1,N);%случацные значения на температуру и добавляем к сорости
            Vy=Vy+T(st)*rand(1,N);
            
            %% ДЗ
            % хочу чтобы температура не влиядо на направлние движения, но
            % амплитуда скорости движения
            end
            
        end
    end
        X=X+Vx*dt;
        Y=Y+Vy*dt;
        for i=1:N
            %% жесткие стенки
%             if(X(i)>L-rad || X(i)<rad)
%             Vx(i)=Vx(i)*(-1);
%             end                               %%Жесткие стенки
%             
%             if(Y(i)>L-rad || Y(i)<rad)
%             Vy(i)=Vy(i)*(-1);
%             end
%% мягкие стенки(прозрачные)
%елси частица приближается к правой части области и понимаем что в
%следующем шаге она пересечет границу, то она появитсяс другой стороны из
%мнимой части, напимер из верханей границы перейдет в нижнюю
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
        axis([0,L,0,L])%закрепим оси
        subplot(1,2,2)
        %изменение х и у со времемнем
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