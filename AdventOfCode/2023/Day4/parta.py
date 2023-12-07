f = open("file.txt", "r")
newList = []
count = 0
finalList = []
for line in f.readlines():
    cardNumber = line.split(":")[0]

    flag=False
    total = 1
    # print(cardNumber)
    firstHalf = line.split(":")[1].split("|")[0].split(" ")
    secondHalf = line.split(":")[1].split("|")[1].split(" ")

    #    from intenet
    firstHalf = [s.strip() for s in firstHalf if s.strip() != ""]
    secondHalf = [s.strip() for s in secondHalf if s.strip() != ""]

    # print(firstHalf)
    # print(secondHalf)
    for i in firstHalf:
        for k in secondHalf:
            if i == k:
                flag=True
                print(i)
                if(count!=0):
                    total*=2
                else:
                    total*=1    
                print("total " ,total)
                count=count+1
    if(flag):                        
        finalList.append(total)            
    total=0 
    count=0
               
print(sum(finalList))
