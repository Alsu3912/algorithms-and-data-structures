# Data structures
Typical task for the file is about a small (or a little bit bigger) investigation about certain theme. After researching the theme
we should have a discussion about it and you need to implement / solve a task. I will put theme and tasks and you need to pick them 
up and make pull request with solutions. Note that the task will be considered as done only after discussion with me.
## Linked list
You need to learn what linked list is. You can use sources like [that](https://humanwhocodes.com/blog/2019/01/computer-science-in-javascript-linked-list/)
### Task:
Implement a `LinkedList` class with operations `add(element)`, `remove(element)`, `get(index)`, `size()`. Try to be efficient and reasonable.
## Stack
Read about stack as a data structure. Apply this knowledge to solve a problem:
Given a text consisting of alphabetical letters and numbers. This text has three types of brackets: "()", "{}" and "[]". You need to write a function which takes the text and returns `true` if the brackets are valid, `false` otherwise. Note that, the brackets are valid if and only if each opened bracket has closed. The brackets may be nested.

The task might be solved without using stack by several local counters. But in your implementation you should use stack.

Input: ({[]})
Output: true

Input: ({(})
Output: false

Input: aaaaa
Output: true

## Queue
Implement a queue using stacks.

## Sorting
Read about sorting algorithms and sorting efficiency. [1](https://www.amazon.com/Data-Structures-Algorithms-Alfred-Aho/dp/0201000237) and [2](https://www.amazon.com/Algorithms-4th-Robert-Sedgewick/dp/032157351X) are classic books. You can use another sources as well.

Implement insertion-, bubble- and quick sort algorithms. Note that, it would be nice to write a single set of tests to be able to test a generic sort and check your implementations against this set of tests. As usually, we need to discuss after implementing the algorithms. 

## Set
Read about set as a data structure. You need to understand basic implementation of hash- and treesets. You may use example of another languages like Java or Python. After that, solve a task: given a list of integers and an integer number `k`. Write an application to return back all of unique pairs from the original list that equal to given `k`. The cost of the solution should be O(n) assuming that `has()` method in js set works in constant time.

Input: `array = [-1, 10, 2 , 3, 5, 0, 2], k = 5`

Output: `[[2, 3], [5, 0]]`


Input: `array = [1, 1, 1, 1, 1, 1], k = 2`

Output: `[[1, 1]]`

Input: `array = [4, 2, 3, 1, 2, 5], k = 10`

Output: `[]`

## Map
Read about commom implementation of maps (dictionaries / key-value stores). Please, read about three widely used implementations: TreeMap, HashMap and LinkedHashMap (Java / C++ / Python / ...). Used a map implementation, please, write a code to solve the following task: given a string, find the longest substring without repeating characters. In case of multiple max substring, you may return any of them.

Input: `abcabcbb`

Output: `abc`

Input: `bbbbb`

Output: `b`

Input: `pwwkew`

Output: `kew`

