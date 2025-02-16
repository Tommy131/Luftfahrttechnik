# 5 收敛数列的性质

## 关键术语解释

1. **收敛数列**
   - **定义**：如果数列 $\{x_n\}$ 对任意的正数 $\varepsilon > 0$，总存在一个正整数 $N$，使得当 $n > N$ 时，$|x_n - a| < \varepsilon$，那么称该数列收敛于 $a$。
   - **类比**：现实中，某一任务的结果逐步逼近一个固定值。例如：用数值方法逼近 $\pi = 3.14159\ldots$ 的过程，随着计算精度的增加，每次计算结果逐步接近精确值。

2. **发散数列**
   - **定义**：如果数列 $\{x_n\}$ 不满足收敛的定义，则称其发散。发散可以表现为趋向无穷、无界，或者以某种周期性振荡。
   - **类比**：一个股票价格的变动，如果随时间的推移没有趋于稳定，而是不断波动、上下跳动，可以看作是“发散”现象。

3. **子数列**
   - **定义**：从原数列中取出某些项，按照原顺序重新排成的数列。常记为 $\{x_{n_k}\}$，其中 $n_k$ 是原数列索引的子集。
   - **类比**：挑选一个班级学生的身高数据中仅挑选奇数序号的学生，将其作为一个新数据集。

4. **极限唯一性**
   - **性质**：一个数列如果存在极限，则其极限唯一。如果数列被证明有两个不同的极限，则说明数列是发散的。
   - **类比**：如果一个钟摆最终会停止摇动，则它的最终位置（极限）是唯一的；若摇摆状态两侧都不停止，则无法定义“停止点”。

---

## 示例题解析

### **例题 1：数列极限唯一性**

- **题目**：若数列同时满足 $x_n \to a$ 和 $x_n \to b$，其中 $a \neq b$，证明矛盾。
- **分析**：
  - 设 $a < b$，取 $\varepsilon = \frac{b-a}{2}$，满足 $|x_n - a| < \frac{b-a}{2}$ 和 $|x_n - b| < \frac{b-a}{2}$。
  - 由三角不等式，有：
    \[
    |b-a| \leq |x_n - a| + |x_n - b| < \frac{b-a}{2} + \frac{b-a}{2} = b-a
    \]
    这是矛盾。
- **现实类比**：
  - 如果两条跑道的终点位置不同（$a \neq b$），一个人在同一时刻不可能同时到达两个不同的终点。

---

### **例题 2：发散性例子**

- **题目**：数列 $x_n = (-1)^{n+1}$ 是否收敛？
- **解答**：
  - 数列的项为 $1, -1, 1, -1, \ldots$，呈现振荡形式，没有固定的极限值。
  - 证明：假设存在极限 $a$，对 $\varepsilon = \frac{1}{2}$，无法找到一个 $N$ 使得对所有 $n > N$，$|x_n - a| < \varepsilon$。
  - 因此，该数列是发散的。
- **现实类比**：
  - 一个摇摆不定的秋千，它的状态始终在两个极端位置之间来回，没有停止的趋势。

---

### **例题 3：收敛数列的一定有界性**

- **题目**：证明如果数列收敛，则它必然有界。
- **分析**：
  - 假设 $x_n \to a$，对 $\varepsilon = 1$，存在 $N$ 满足当 $n > N$ 时 $|x_n - a| < 1$。
  - 对 $x_1, x_2, \ldots, x_N$ 的绝对值以及 $|a| + 1$ 的最大值取 $M$，则对任意 $n$，有 $|x_n| \leq M$。
- **现实类比**：
  - 在生活中，如果我们知道一个人走向某个点 $a$，他的行走范围就必然受到约束，不可能出现“走得无限远”的情况。

---

### **例题 4：子数列的性质**

- **题目**：证明收敛数列的任意子数列收敛于同一极限。
- **分析**：
  - 如果 $\{x_n\}$ 收敛于 $a$，则对任意的 $\varepsilon > 0$，存在 $N$ 使得当 $n > N$ 时，$|x_n - a| < \varepsilon$。
  - 子数列 $\{x_{n_k}\}$ 是原数列的某些项，若 $k > N$，必然满足 $|x_{n_k} - a| < \varepsilon$。
  - 因此，子数列也收敛于 $a$。
- **现实类比**：
  - 如果一个班级的身高逐步趋近于某个平均值（例如 170 cm），从中随机挑选一部分学生的身高数据，仍然会趋近于该平均值。

---

### **例题 5：两个不同子数列的收敛性**

- **题目**：数列 $(-1)^{n+1}$ 的子数列 $x_{2k-1}$ 和 $x_{2k}$。
- **解答**：
  - 奇数项子数列为 $1, 1, 1, \ldots$，$\lim_{k \to \infty} x_{2k-1} = 1$；
  - 偶数项子数列为 $-1, -1, -1, \ldots$，$\lim_{k \to \infty} x_{2k} = -1$。
  - 原数列有两个不同的子数列极限，说明数列发散。
- **现实类比**：
  - 如果两条平行赛道中，一条车趋近 1 km 点，而另一条车趋近 -1 km 点，整体系统的“趋势”（类比为发散性）不确定。
