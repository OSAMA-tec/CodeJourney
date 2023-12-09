f = open("file.txt", "r")
match = []
count = 0
newMatch = []
finalList=[]
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


    for i in firstHalf:
        for k in secondHalf:
            if i == k:
               count+=1
                                 
    match.append(count)            
    count=0
               
print(match)

total_copies = 0
new_match = match.copy()

while new_match:
    total_copies += sum(new_match)
    for i in range(1, len(match)):
        if i < len(new_match):
           new_match.append(match[i])
print(total_copies)



