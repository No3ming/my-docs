# 剑指 offer（1-11）1

1.在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

思路：

- 多层遍历？低级
- 读取每行每列的最大最小值， 得到整数是否在该范围，不在则退出；在则使用二等分查找这一行。
- 降维遍历，

```javascript
function findIt(arr, it) {
  let i = 0;
  const findb = (arr2, it) => {
    let low = 0;
    let height = arr2.length;
    let mid;
    while (low <= height) {
      mid = Math.floor((low + height) / 2);
      if (arr2[mid] === it) {
        return true;
      } else if (arr2[mid] < it) {
        low = mid + 1;
      } else {
        height = mid - 1;
      }
    }
    return false;
  };
  for (i; i < arr.length; i++) {
    if (arr[i][0] <= it && arr[i][arr[i].length - 1] <= it) {
      if ((findb(arr[i]), it)) {
        return true;
      }
    }
  }
  return false;
}
console.log(
  findIt(
    [
      [1, 2, 3, 4],
      [4, 5, 6, 7],
    ],
    5
  )
);
```

```javascript
function findIt(arr, it) {
  let row = arr.length - 1,
    i,
    j;
  for (i = row, j = 0; i >= 0, j < arr[i].length; ) {
    if (arr[i][j] === it) {
      return true;
    } else if (arr[i][j] > it) {
      j++;
    } else {
      i--;
    }
  }
}
```

2.请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为 We Are Happy.则经过替换之后的字符串为 We%20Are%20Happy。

思路：

- 现成的 encodeComponent，
- 正则

```javascript
function encode(str) {
  return str.replace(/\s/g, "%20");
}
```

3.输入一个链表，从尾到头打印链表每个节点的值。
思考： 利用递归。

```javascript
function myLog(line) {
  if (!line) {
    return null;
  }
  myLog(line.child);
  console.log(line.value);
}
```

4.输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

思路：

- 前序遍历是从顶遍历左树到右树， 中序排序是从底遍历左树到右树
  ![image.png](http://lidomi.oss-cn-shenzhen.aliyuncs.com/image/png/9fd3ecc536dbf72d0c4417b9539e8f62/image.png)

```javascript
function reCo(font, mid) {
  if (font.length == 0 || mid.length === 0) {
    return false;
  }
  const index = mid.indexOf(font[0]);
  const leftMid = mid.slice(0, index);
  const rightMid = mid.slice(index + 1);
  return {
    value: font[0],
    left: reCo(font.slice(1, index + 1), leftMid),
    right: reCo(font.slice(index + 1), rightMid),
  };
}
```

5.用两个栈来实现一个队列，完成队列的 Push 和 Pop 操作。队列中的元素为 int 类型。

思路：

- 考察对堆栈和队列的理解,队列是先进先出，栈是先进后出
- 将数据按时间顺序倒到另一个栈中,push 和 pop 是栈的方法，别搞错了

```javascript
const inS = [],
  outS = [];
function push(node) {
  inS.push(node);
}
function pop() {
  // 判断先将outS的全部数据为空了再重新倒数据
  if (!outs.length) {
    while (inS.length) {
      outS.push(inS.pop);
    }
  }
  return outS.pop();
}
```

6.把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为 1。NOTE：给出的所有元素都大于 0，若数组大小为 0，请返回 0。

思路:

- 废话这么多，其实就是要找出最小值

```javascript
function findMin(arr) {
  if (arr.length) {
    return 0;
  }
  // min 的值一组值不是数组
  return Math.min.apply(null, arr);
}
```

7.大家都知道斐波那契数列，现在要求输入一个整数 n，请你输出斐波那契数列的第 n 项。n<=39.

思路：

- 斐波那契数列： [1, 1，2，3，5，8...]
- 使用递归创建数列, 优先定义 a=1,b=1,从第三项开始 for 累加

```javascript
function findN(n) {
  if (n <= 0) {
    return 0;
  }
  let i = 2,
    a = 1,
    b = 1,
    tmp = 0;
  while (i <= n) {
    i++;
    tmp = b;
    b = a + b;
    a = tmp;
  }
  return a;
}
```

8.一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

思路：

- 数学模型, 其实就一个斐波那契
- 1: [1]1
- 2: [1,1][2]2
- 3: [1,1,1][1,2][2,1]3
- 4: [1,1,1,1][1,1,2][1,2,1][2,1,1][2,2]5
- 5: [1,1,1,1,1][1,1,1,2][1,1,2,1][1,2,1,1][2,1,1,1][1,2,2][2,1,2][2,2,1]8

```javascript
function fbnq(n) {
	if (n <= 0) { return 0}
	if (n === 1) { return 1}
	if (n === 2) { retuen 2}
	let i = 3, a = 2, b = 1
	while(i <= n) {
		tmp = a
		a = a + b
		b = tmp
	}
	return a
}
```

9.一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级……它也可以跳上 n 级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
思路： 这就是 2 的 N-1 次方阶乘。

```javascript
function floor() {
  return Math.pow(2, n - 1);
}
```

10.我们可以用 21 的小矩形横着或者竖着去覆盖更大的矩形。请问用 n 个 21 的小矩形无重叠地覆盖一个 2\*n 的大矩形，总共有多少种方法？
思路： 和第 8 题是一样的。

11.输入一个整数，输出该数二进制表示中 1 的个数。其中负数用补码表示。
思路：

- number.toString(2) 可以进行进制转换
- 最高位正数是 0，负数为 1
- 如果是负，使用 >>> 进行补位
- 利用 reduce 来统计

```javascript
function getOneN(n) {
  if (n < 0) {
    n = n >>> 0;
  }
  const arr = n.toString(2).split("");
  return arr.reduce((a, b) => (b === "1" ? a + 1 : a), 0);
}
```
