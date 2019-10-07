function y = fF(x)
%UNTITLED2 Summary of this function goes here
%   Detailed explanation goes here
y=(cos(x.^2).*x)./(abs(sin(x).*x+cos(x).*x.^2+atan(x).*x.^3));
end