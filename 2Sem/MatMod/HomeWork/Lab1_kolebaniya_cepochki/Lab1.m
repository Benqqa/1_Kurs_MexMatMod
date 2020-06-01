N = 13; 
c = 3; 
m = 1;  
L0 = 3; 
b=0.4;  
dt = 0.01; 
E_p = 0; 
E_k = 0; 
E_f = 0; 
Ar_p = [];  
Ar_k = [];  
Ar_f = [];  



X = 0:L0:(N-1)*L0;
Vx = zeros(1,N);
Vy = zeros(1,N);
V = zeros(1,N);
Y=[];

for i= 1:N
    y = 1.5*(-(X(i))^2+18*X(i));
    Y = [Y y];
end

    if b < 1 
       b=1+ 0.01*(b); 
  
    end
    if b > 1
       b=1 - 0.1*(b-1); 
 
    end
   
  
for it = 1:100000
    for i = 2:N-1
        Fr = c*(sqrt((X(i)-X(i+1))^2+(Y(i)-Y(i+1))^2)-L0); 
        Fl = -c*(sqrt((X(i)-X(i-1))^2+(Y(i)-Y(i-1))^2)-L0);
        Frx = Fr*(X(i+1)-X(i))/(sqrt((X(i)-X(i+1))^2+(Y(i)-Y(i+1))^2));
        Fry = Fr*(Y(i+1)-Y(i))/(sqrt((X(1)-X(i+1))^2+(Y(i)-Y(i+1))^2));
        Flx = Fl*(X(i)-X(i-1))/(sqrt((X(i)-X(i-1))^2+(Y(i)-Y(i-1))^2));
        Fly = Fl*(Y(i)-Y(i-1))/(sqrt((X(1)-X(i-1))^2+(Y(i)-Y(i-1))^2));
        Fx=Flx+Frx;
        Fy=Fly+Fry;
        Vx(i) = (Vx(i)*b + Fx/m*dt);
        Vy(i) = (Vy(i)*b+ Fy/m*dt);
        V(i) = sqrt((Vx(i))^2+(Vy(i))^2)*b;

    end
       
%         Fl = -c*(sqrt((X(N)-X(N-1))^2+(Y(N)-Y(N-1))^2)-L0);
%         Flx = Fl*(X(N)-X(N-1))/(sqrt((X(N)-X(N-1))^2+(Y(N)-Y(N-1))^2));
%         Fly = Fl*(Y(N)-Y(N-1))/(sqrt((X(1)-X(N-1))^2+(Y(N)-Y(N-1))^2));  %правая частица
%         Fx=Flx;
%         Fy=Fly;
%         Vx(N) = (Vx(N)*(-1)b + Fx/m*dt);
%         Vy(N) = (Vy(N)*b+ Fy/m*dt);
%         V(N) = sqrt((Vx(N))^2+(Vy(N))^2)*b;

%         Fr = c*(sqrt((X(1)-X(1+1))^2+(Y(1)-Y(1+1))^2)-L0); 
%        
%         Frx = Fr*(X(1+1)-X(1))/(sqrt((X(1)-X(1+1))^2+(Y(1)-Y(1+1))^2));
%         Fry = Fr*(Y(1+1)-Y(1))/(sqrt((X(1)-X(1+1))^2+(Y(1)-Y(1+1))^2)); % левая частица
%                   
%       
%         Fx=Frx;
%         Fy=Fry;
%         Vx(1) = (Vx(1)*b + Fx/m*dt);
%         Vy(1) = (Vy(1)*b+ Fy/m*dt);
%         V(1) = sqrt((Vx(1))^2+(Vy(1))^2)*b;
%       


%     Vx(1)= 0;
%     Vy(1)= 0;
%     
   Vx(N) = 0;
   Vy(N) = 0; 
    
    X = X+Vx.*dt;
    Y = Y+Vy.*dt;
     
   
   

    E_k = 0;    %Кинетическая
    for i = 1:N
        E_k = E_k + m*V(i)^2*0.5;
    end
    Ar_k = [Ar_k,E_k];
    
    E_p = 0;    %Потенциальная
    for i = 1:N-1
        E_p = E_p + c*(sqrt((X(i)-X(i+1))^2+(Y(i)-Y(i+1))^2)-L0)^2*0.5;
    end
    Ar_p = [Ar_p, E_p];
    
    
    E_f = E_p+E_k;  %Полная
    Ar_f = [Ar_f,E_f];
    
    if mod(it,100)==0
        subplot(2,1,2)
        plot(X, Y,'ro','Markersize',15) %визуализация частиц
        xlabel('x')
        ylabel('y')
        title('-x^2')
        
        subplot(2,1,1)
        hold on
        plot(Ar_k,'g')  %График кин. энергии
        plot(Ar_p, 'r') %Пот. энергия
        plot(Ar_f, 'k') %Полная энергия
        legend('Кинетическая', 'Потенциальная', 'Полная')
        xlabel('t')
        ylabel('w')
        title('E')
        pause(0.1)
        clf
    end
end
