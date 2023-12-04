#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'formingMagicSquare' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY s as parameter.
#

def formingMagicSquare(s):
    ltbrSum=0
    k=len(s)-1;
    rtblSum=0
    for i in range(0,len(s)):
        ltbrSum+=s[i][i]
        rtblSum+=s[k][i]
        k-=1
    
    
    print(rtblSum)
    print(ltbrSum)
    

formingMagicSquare([[5,3,4],[1,5,8],[6,4,2]])    