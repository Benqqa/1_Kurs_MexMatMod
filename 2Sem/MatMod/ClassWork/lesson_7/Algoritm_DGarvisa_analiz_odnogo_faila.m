

A =  dlmread('crack0000000.xyz',' ',[2 1 19 2])

N = size(A,1);
for i= 1 : N
A(i,1)=A(i,1)+0.6*rand();
A(i,2)=A(i,2)+0.6*rand();
end

i_left = 1;
%Определяем самую левую частицу
for i = 2 : N
    if A(i_left,1)>A(i,1)
        i_left = i;
    end
end
n = [0,-1];
c = -1;
i_sec = 0;
for i = 1 : N%алгоритм джарвиса
   if (i~=i_left)
      n1 = [A(i,1)-A(i_left,1),A(i,2)-A(i_left,2)];
      c_i = (n1(1)*n(1)+n1(2)*n(2))/sqrt(n1(1)^2+n1(2)^2)/sqrt(n(1)^2+n(2)^2);%теормема косинусов
      if c_i>c
          i_sec = i;
          c=c_i;
      end
   end
end


Num=1:N;

Num(i_sec)=[];

Nod=[i_left, i_sec];

while Nod(size(Nod,2)) ~= Nod(1)
Last=size(Nod,2);
n=[A(Nod(Last),1)-A(Nod(Last-1),1),A(Nod(Last),2)-A(Nod(Last-1),2)];
c=-1;
it_next=0;
    for it= 1: size(Num,2)
        i=Num(it);
        n1=[A(i,1)-A(Nod(Last),1),A(i,2)-A(Nod(Last),2)];

          c_i = (n1(1)*n(1)+n1(2)*n(2))/sqrt(n1(1)^2+n1(2)^2)/sqrt(n(1)^2+n(2)^2);%теормема косинусов
        if c_i >c 
        i_next=i;
        it_next=it;
       c=c_i;
        end

    end

Nod=[Nod,i_next];
Num(it_next)=[];    
end




figure
hold on
plot(A(:,1),A(:,2),'vk')
plot(A(i_left,1),A(i_left,2),'or')
for it= 2 : size(Nod,2)
i=Nod(it);
j=Nod(it-1);

plot(A(i,1),A(i,2),'or');
line([A(i,1),A(j,1)],[A(i,2),A(j,2)]);
end


plot(A(i_sec,1),A(i_sec,2),'or')

    