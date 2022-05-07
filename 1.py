num=int(input("enter the number"))
sum=0
i=0
while i<=100:
    if i%2==0:
        sum=sum+i
        print(i,"even number")
    else:
        print(i,"odd number")
    i=i+1
    