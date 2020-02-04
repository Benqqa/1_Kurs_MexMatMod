a = 2.4 ;
b = 6.4 ;
%A = a + (b-a).*rand(6,6) ;
%dlmwrite('qqqN',A)
A=dlmread('qqqN')

%% 1. Математические операции с матрицей
B = A^2 ;
C = abs(sin(B)); 
D = C./13;
E = D^2;
%% 2. полином
p = poly(E);
X = -50:0.00002:50;
y = polyval(p,X);

p1 = polyder(p);
p2 = polyder(p1);  
y_1 = polyval(p1,X);
y_2 = polyval(p2,X);
r = roots(p);
r1 =  roots(p1);  
r2 =  roots(p2);
y1 = polyval(p, r1);
y2 = polyval(p, r2);


figure 
hold on
grid on
title('График полинома,экстремумы и перегибы')
plot(X,y)
plot(r,zeros(6,1), 'k*')
plot(r1,y1, 'b*') %экстремумы
plot(r2,y2, 'g*')
xlabel('Ox')
ylabel('Oy')
legend('Полином','корни', 'экстремумы', 'точки перегиба' ,'Location','southwest','Location','northwest')


figure 
hold on
grid on
title('График полинома,экстремумы и перегибы в приближении')
axis([0.0003 0.0018 -0.00000000000000004 0.0000000000000001])
plot(X,y)
plot(r,zeros(6,1), 'k*')
plot(r1,y1, 'b*') %экстремумы
plot(r2,y2, 'g*')
xlabel('Ox')
ylabel('Oy')
legend('Полином','корни', 'экстремумы', 'точки перегиба' ,'Location','southwest','Location','northwest')

figure 
subplot(3,1,1)
hold on
grid on
title('График полинома,экстремумы и перегибы')
axis([-0.02 0.015 -0.00000000000000001 0.000000000000001])
plot(X,y)
plot(r,zeros(6,1), 'k*')
plot(r1,y1, 'b*') %экстремумы
plot(r2,y2, 'g*')
xlabel('Ox')
ylabel('Oy')
legend('Полином','корни', 'экстремумы', 'точки перегиба' ,'Location','southwest','Location','northwest')
% axis([-50 50 (-1)*10^(-5) (3)*10^(-5)])
axis([-0.001 0.003 -0.0000000000000001 0.0000000000000002])
subplot(3,1,2)
hold on
grid on
title('1я производная')
plot(X,y_1)
plot(r1,zeros(5,1), 'b*')
xlabel('Ox')
ylabel('Oy')
legend('1я производная','корни','Location','southwest','Location','northwest')
% axis([-50 50 (-2)*10^(9) (2)*10^(9)])
axis([-0.001 0.003 -0.0000000000001 0.0000000000002])
subplot(3,1,3)
hold on
grid on
title('2я производная')
% axis([-50 50 -5.*10^6 7.*10^6])
axis([-0.001 0.003 -0.0000000001 0.0000000002])
plot(X,y_2)
plot(r2,zeros(4,1), 'g*')
xlabel('Ox')
ylabel('Oy')
legend('2я производная','корни','Location','southwest','Location','northwest')