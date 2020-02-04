syms x y p f g
%1
f = log(x.^2.*abs(sin(x.^5).*sin(x.^5))) 
%2
f1 = subs(f, x, 2*p^2 - 7*p)
%3
f2 = simplify(f1)
f3 = factor(f2)
g = sin(p+2).*(p^3 - 8*p^2 - 10).*(p+3)
f4 = f3.*g
f5 = simplify(f4)

figure
hold on
grid on
xlabel('Ox')
ylabel('Oy')
ezplot(f5)