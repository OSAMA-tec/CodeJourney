#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'pickingNumbers' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY a as parameter.
#
def pickingNumbers(a):
    max_length = 0

    for i in range(len(a)):
        temp_list = [a[i]]  
        for j in range(i + 1, len(a)):
            if abs(a[j] - a[i]) <= 1:
                temp_list.append(a[j])  
        max_length = max(max_length, len(temp_list))  

    return max_length

list1 = [4, 6, 5, 3, 3, 1]
print(pickingNumbers(list1))  