#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'climbingLeaderboard' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER_ARRAY ranked
#  2. INTEGER_ARRAY player
#


def climbingLeaderboard(ranked, player):
    index = []
    arr = sorted(list(set(ranked)),reverse=True)
    print(arr)
    for value in sorted(player, reverse=True):
        for i in range(0, len(arr)):
            if value > arr[i]:
                index.append(i + 1)
                break
            elif value == arr[i]:
                index.append(i + 1)
                break
            elif value < ranked[i] and i == len(arr) - 1:
                index.append(len(arr) + 1)
                break

    return sorted(index,reverse=True)



ranked = [100, 100, 50, 40, 40, 20, 10]

player = [5, 25, 50, 120]
print(climbingLeaderboard(ranked, player))
