# 4 数列极限讲解

## 4.1 数列极限的定义

若数列 $\{x_n\}$ 对任意的 $\varepsilon > 0$，总存在一个正整数 $N$，使得当 $n > N$ 时，有：

$
|x_n - a| < \varepsilon
$
则称数列 $\{x_n\}$ 收敛于 $a$，记作：
$
\lim_{n \to \infty} x_n = a
$
或 $\{x_n\} \to a$。

图中的符号和表达式描述的是 **数列收敛的定义**，以下是对各个符号和表达式的详细解释：

1. **$x_n$**：
   - 表示一个数列，数列的第 $n$ 项是 $x_n$。

2. **$\varepsilon > 0$**：
   - $\varepsilon$ 是一个任意的小正数，通常用于表示“误差范围”或“精度”。
   - 它是数学分析中用来精确描述数列项与极限 $a$ 距离的关键参数。

3. **$N$**：
   - $N$ 是一个正整数，表示一个分界点。
   - 当 $n > N$ 时，数列的第 $n$ 项 $x_n$ 和极限 $a$ 的距离 $|x_n - a|$ 小于 $\varepsilon$。

4. **$n > N$**：
   - $n$ 是数列的索引（通常是正整数）。
   - 这表示数列的索引 $n$ 大于某个临界值 $N$。

5. **$|x_n - a| < \varepsilon$**：
   - 表示数列第 $n$ 项 $x_n$ 与极限 $a$ 的距离小于 $\varepsilon$。
   - 换句话说，数列 $x_n$ 的值已经足够接近 $a$，并且这种接近程度可以任意小（由 $\varepsilon$ 决定）。

6. **$\lim_{n \to \infty} x_n = a$**：
   - 表示数列 $x_n$ 当 $n \to \infty$ 时（即数列的项越来越往后），收敛于 $a$。

7. **$x_n \to a$**：
   - 是极限符号的简写，表示数列 $x_n$ 收敛于 $a$。

### 总结

这段文字的意思是：如果数列 $x_n$ 对任意给定的正数 $\varepsilon$，都能找到一个正整数 $N$，使得当 $n > N$ 时，数列项 $x_n$ 距离 $a$ 的绝对值小于 $\varepsilon$，那么称数列 $x_n$ 收敛于 $a$，记作 $\lim_{n \to \infty} x_n = a$ 或 $x_n \to a$。

### 图像与直观解释

数列的值会在某个范围内不断逼近极限 $a$，且这个范围可以通过调节 $\varepsilon$ 来变得任意小。

---

## 4.2 数列极限性质

1. **极限唯一性**：数列极限若存在，则唯一。
2. **有界性**：若数列 $\{x_n\}$ 收敛，则其必有界。
3. **夹逼准则**：若 $\{a_n\} \leq \{x_n\} \leq \{b_n\}$，且 $\lim a_n = \lim b_n = L$，则 $\lim x_n = L$。

---

## 4.3 例题分析

### 例题 1：数列 $\{x_n\} = \frac{n + (-1)^n}{n}$

- **目标**：证明 $\lim_{n \to \infty} x_n = 1$。
- **解答**：
  $
  x_n = \frac{n + (-1)^n}{n} = 1 + \frac{(-1)^n}{n}
  $
  当 $n \to \infty$ 时，$\frac{(-1)^n}{n} \to 0$。因此：
  $
  x_n \to 1
  $
- **严谨证明**：
  对任意 $\varepsilon > 0$，取 $N = \left\lceil\frac{1}{\varepsilon}\right\rceil + 1$，当 $n > N$ 时：
  $
  |x_n - 1| = \left|\frac{(-1)^n}{n}\right| < \frac{1}{n} < \varepsilon
  $
  因此，数列极限为 $1$。

---

### 例题 2：数列 $\{x_n\} = \frac{(-1)^n}{(n+1)^2}$

- **目标**：证明 $\lim_{n \to \infty} x_n = 0$。
- **解答**：
  $
  |x_n - 0| = \left|\frac{(-1)^n}{(n+1)^2}\right| = \frac{1}{(n+1)^2}
  $
  当 $n \to \infty$ 时，$\frac{1}{(n+1)^2} \to 0$。因此：
  $
  x_n \to 0
  $
- **严谨证明**：
  对任意 $\varepsilon > 0$，取 $N = \left\lceil\frac{1}{\sqrt{\varepsilon}}\right\rceil - 1$，当 $n > N$ 时：
  $
  \frac{1}{(n+1)^2} < \frac{1}{n^2} < \varepsilon
  $
  所以，$\{x_n\} \to 0$。

---

### 例题 3：数列 $\{x_n\} = q^n, |q| < 1$

- **目标**：证明 $\lim_{n \to \infty} x_n = 0$。
- **解答**：
  由于 $|q| < 1$，当 $n \to \infty$ 时，$q^n \to 0$。因此：
  $
  x_n \to 0
  $
- **严谨证明**：
  对任意 $\varepsilon > 0$，取 $N = \left\lceil\frac{\ln \varepsilon}{\ln |q|}\right\rceil$，当 $n > N$ 时：
  $
  |x_n - 0| = |q|^n < \varepsilon
  $
  因此，$\{x_n\} \to 0$。
