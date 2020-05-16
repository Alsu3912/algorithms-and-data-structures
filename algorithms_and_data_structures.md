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
