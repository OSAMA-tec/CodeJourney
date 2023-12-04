#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'hurdleRace' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER k
#  2. INTEGER_ARRAY height
#

def hurdleRace(k, height):
    if abs(k-max(height))==0 or k>max(height):
        return 0
    else:
        return abs(k-max(height))
    
    
    
print(hurdleRace(7,[2,5,4,5,2]))    