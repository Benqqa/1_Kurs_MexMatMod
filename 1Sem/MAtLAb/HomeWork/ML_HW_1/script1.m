x_r=-10:0.001:0;
x_q=0:0.001:5;
x_f=5:0.001:10;
x=-10:0.001:10;
y_q=fQ(x);
y_r=fR(x);
y_f=fF(x);

y_qM=-fQ(x);
y_rM=-fR(x);
y_fM=-fQ(x)./(fR(x)~=0);
%%%%%%%%%%%
y_q2=fQ(x_q);
y_r2=fR(x_r);
y_f2=fQ(x_f)./(fR(x_f)~=0);
%%%%%%%%%%%%%%%%%%%
%
x_q_z1=fzero('fQ',6);
x_q_z2=fzero('fQ',0);
x_q_z3=fzero('fQ',-5);
y_q_z1=fQ(x_q_z1);
y_q_z2=fQ(x_q_z2);
y_q_z3=fQ(x_q_z3);

x_q_min1=fminbnd ('fQ',0,4);
x_q_min2=fminbnd ('fQ',-4,0);
x_q_min3=fminbnd ('fQ',4,6);
y_q_min1=fQ(x_q_min1);
y_q_min2=fQ(x_q_min2);
y_q_min3=fQ(x_q_min3);

x_q_max1=fminbnd ('fQ2',0,4);
x_q_max2=fminbnd ('fQ2',-4,0);
x_q_max3=fminbnd ('fQ2',4,6);
y_q_max1=fQ2(x_q_max1);
y_q_max2=fQ2(x_q_max2);
y_q_max3=fQ2(x_q_max3);
%
x_r_z1=fzero('fR',5);
x_r_z2=fzero('fR',0);
x_r_z3=fzero('fR',-6);
y_r_z1=fR(x_r_z1);
y_r_z2=fR(x_r_z2);
y_r_z3=fR(x_r_z3);

x_r_min1=fminbnd ('fR',0,4);
x_r_min2=fminbnd ('fR',-4,0);
x_r_min3=fminbnd ('fR',4,6);
y_r_min1=fR(x_r_min1);
y_r_min2=fR(x_r_min2);
y_r_min3=fR(x_r_min3);

x_r_max1=fminbnd ('fR2',0,4);
x_r_max2=fminbnd ('fR2',-4,0);
x_r_max3=fminbnd ('fR2',4,6);
y_r_max1=fR2(x_r_max1);
y_r_max2=fR2(x_r_max2);
y_r_max3=fR2(x_r_max3);
%
x_f_z1=fzero('fF',1.5);
x_f_z2=fzero('fF',1);
x_f_z3=fzero('fF',-6);
y_f_z1=fQ(x_f_z1)./(fR(x_f_z1)~=0);
y_f_z2=fQ(x_f_z2)./(fR(x_f_z2)~=0);
y_f_z3=fQ(x_f_z3)./(fR(x_f_z3)~=0);

x_f_min1=fminbnd ('fF',0,4);
x_f_min2=fminbnd ('fF',-2,2);
x_f_min3=fminbnd ('fF',4,6);
y_f_min1=fQ(x_f_min1)./(fR(x_f_min1)~=0);
y_f_min2=fQ(x_f_min2)./(fR(x_f_min2)~=0);
y_f_min3=fQ(x_f_min3)./(fR(x_f_min3)~=0);

x_f_max1=fminbnd ('fF2',0,4);
x_f_max2=fminbnd ('fF2',-4,0);
x_f_max3=fminbnd ('fF2',4,6);
y_f_max1=fQ(x_f_max1)./(fR(x_f_max1)~=0);
y_f_max2=fQ(x_f_max2)./(fR(x_f_max2)~=0);
y_f_max3=fQ(x_f_max3)./(fR(x_f_max3)~=0);

%%%%%%%%%%%%%%%%%%%%

dq=diff(fQ(x));
dr=diff(fR(x));
df=diff(fF(x));

%%%%%%%%%%%%%%%%%%%%



%1)%%%%%%%%%%%%%%%% 

figure
hold on
grid on
plot(x,y_q)
plot(x,y_r)
plot(x,y_f)
Xlable='x';
Ylable='y';
legend('Q(x)','R(x)','Q(x)/R(x)')
%%%%%%%%%%%%%%%%%%%%

%2)%%%%%%%%
figure
hold on
grid on
plot(x_q,y_q2)
plot(x_r,y_r2)
plot(x_f,y_f2)
%%%%%%%%%%%
%3)
figure

subplot(3,1,1)
hold on
grid on
plot(x,y_q)
plot(x_q_z1,y_q_z1,'h')
plot(x_q_z2,y_q_z2,'h')
plot(x_q_z3,y_q_z3,'h')

plot(x_q_min1,y_q_min1,'c*')
plot(x_q_min2,y_q_min2,'c*')
plot(x_q_min3,y_q_min3,'c*')

plot(x_q_max1,-y_q_max1,'gs')
plot(x_q_max2,-y_q_max2,'gs')
plot(x_q_max3,-y_q_max3,'gs')

subplot(3,1,2)
hold on
grid on
plot(x,y_r)
plot(x_r_z1,y_r_z1,'h')
plot(x_r_z2,y_r_z2,'h')
plot(x_r_z3,y_r_z3,'h')

plot(x_r_min1,y_r_min1,'c*')
plot(x_r_min2,y_r_min2,'c*')
plot(x_r_min3,y_r_min3,'c*')

plot(x_r_max1,-y_r_max1,'gs')
plot(x_r_max2,-y_r_max2,'gs')
plot(x_r_max3,-y_r_max3,'gs')

subplot(3,1,3)
hold on
grid on
plot(x,y_f)
plot(x_f_z1,y_f_z1,'h')
plot(x_f_z2,y_f_z2,'h')
plot(x_f_z3,y_f_z3,'h')

plot(x_f_min1,y_f_min1,'c*')
plot(x_f_min2,y_f_min2,'c*')
plot(x_f_min3,y_f_min3,'c*')

plot(x_f_max1,y_f_max1,'gs')
plot(x_f_max2,y_f_max2,'gs')
plot(x_f_max3,y_f_max3,'gs')

%%%%%%%%%%%%%%%%%%
%4)
figure
subplot(3,1,1)
hold on
grid on
plot(x,y_q)
plot(x(1:20000),dq)
axis([-8 -2 -2 2])


subplot(3,1,2)
hold on
grid on
plot(x,y_r)
plot(x(1:20000),dr)
axis([-6 6 -200 600])

subplot(3,1,3)
hold on
grid on
plot(x,y_f)
plot(x(1:20000),df)
axis([-0.6 0.8 -40 20])


%%%%%%%%%%%%%%%%%%




