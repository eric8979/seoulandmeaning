gu = open('gu.txt', 'r')
lines = gu.readlines()
 
newGu = open('newgu.txt', 'w')

for line in lines:
    num = 0
    for i in range(len(line)):
        if line[i] == ']':
            newGu.write(line[:i])
            num = i
            break

    korean = ''
    for i in range(num+4, len(line)):
        if line[i] == ';':
            break
        else:
            korean += line[i]
    newGu.write(': ' + korean)
    newGu.write('\n')

gu.close()
newGu.close()
    
