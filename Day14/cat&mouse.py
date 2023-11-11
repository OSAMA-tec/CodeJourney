#!/bin/python3

import math
import os
import random
import re
import sys

def catAndMouse(x, y, z):
    if abs(x-z)>abs(y-z):
        return "Cat B"
    elif abs(x-z)<abs(y-z):
        return "Cat A"
    else:
        return "Mouse C"




print(catAndMouse(1,2,3));
print(catAndMouse(1,3,2));




# x=2    y =5    z=4




#    2          4  5