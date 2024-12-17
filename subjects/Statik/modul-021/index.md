# Modul 21

## 示例 2 (问题 A.1.7.1)

**问题描述**：
为了使下方的木块（标记为“2”）能够被拉出，需要施加多少力 $F$？

**已知条件**：

- 上方木块 $F_{G1} = 120 \text{N}$
- 下方木块 $F_{G2} = 200 \text{N}$
- 绳索与水平面的夹角 $\alpha = 25^\circ$
- 上方木块与下方木块之间的摩擦系数 $\mu_{01} = 0.3$
- 下方木块与地面之间的摩擦系数 $\mu_{02} = 0.4$

![b2-0](./subjects/Statik/modul-021/imgs/b2-0.png)

### 示意图

- 木块 1 放置在木块 2 上。
- 水平向右的力 $F$ 作用于木块 2 上。
- 绳索将木块 1 与墙壁连接，并形成夹角 $\alpha$。

### 任务

求解所需的水平拉力 $F$。

![b2-1](./subjects/Statik/modul-021/imgs/b2-1.png)

![b2-2](./subjects/Statik/modul-021/imgs/b2-2.png)

![b2-3](./subjects/Statik/modul-021/imgs/b2-3.png)

---

## 7.4 Seilreibung

### 假设条件

- 绳索完全柔性。
- 绳索以恒定速度通过圆柱被 $F_2$ 拉动。

### 受力分析

- 绳索元件长度 $\Delta s$，角度增量 $\Delta \varphi$。
- 正向力 $\Delta F_N$，摩擦力 $\Delta F_R = \mu \cdot \Delta F_N$。

![7.4-1](./subjects/Statik/modul-021/imgs/7.4-1.png)

---

## 平衡条件

1. **切向力平衡**：
$
\sum F_{it} = 0 = -\Delta F_R - F(\varphi) \cdot \cos\left(\frac{\Delta \varphi}{2}\right) + F(\varphi + \Delta \varphi) \cdot \cos\left(\frac{\Delta \varphi}{2}\right)
$

2. **法向力平衡**：
$
\sum F_{in} = 0 = -\Delta F_N + F(\varphi) \cdot \sin\left(\frac{\Delta \varphi}{2}\right) + F(\varphi + \Delta \varphi) \cdot \sin\left(\frac{\Delta \varphi}{2}\right)
$

3. **摩擦定律**：
$
\Delta F_R = \mu \cdot \Delta F_N
$

## 微分方程推导

当 $\Delta \varphi \to 0$：
$
\frac{F(\varphi + \Delta \varphi) - F(\varphi)}{\Delta \varphi} \to \frac{dF}{d\varphi}
$
得到微分方程：
$
\frac{dF(\varphi)}{d\varphi} = \mu \cdot F(\varphi)
$

## 微分方程求解

通过分离变量并积分：

$
\int_{F_1}^{F_2} \frac{1}{F(\varphi)} dF = \mu \int_{\varphi_1}^{\varphi_2} d\varphi
$
解得：
$
\ln \frac{F_2}{F_1} = \mu \cdot \alpha
$
其中 $\alpha = \varphi_2 - \varphi_1$，$\alpha$ 用弧度表示。

---

## 结果

$
\frac{F_2}{F_1} = e^{\mu \cdot \alpha}
$

1. **滑动条件**：
$
F_2 = F_1 \cdot e^{\mu \cdot \alpha}
$

2. **静摩擦条件**（附着）：
$
F_2 = F_1 \cdot e^{\mu_0 \cdot \alpha}
$

---

## 示例 3：绳索/带式制动器

### 已知条件

- **半径 $r$ = 0.2 m**
- **摩擦系数 $\mu = 0.6$**
- **拉力 $F = 200 N$**

### 问题

通过 $F$ 可以制动的驱动力矩 $M_{Antr}$ 是多少？

### 受力分析（示意图）

- 圆柱表面与绳索接触。
- 角度 $\alpha = 70^\circ$。
- 绳索右端受到垂直向下的力 $F = 200 N$。
- 剪力图已展示了接触点的法向力和摩擦力。

### 旋转方向改变的影响

- 若圆柱旋转方向反向，摩擦力的方向发生改变。
- 系统的受力图与第一张相同，但需考虑旋转反向带来的受力变化。
- 右端的拉力 $F = 200 N$ 保持不变，圆柱上存在法向力和摩擦力。

![b3-0](./subjects/Statik/modul-021/imgs/b3-0.png)

![b3-1](./subjects/Statik/modul-021/imgs/b3-1.png)

![b3-2](./subjects/Statik/modul-021/imgs/b3-2.png)

![b3-3](./subjects/Statik/modul-021/imgs/b3-3.png)

![b3-4](./subjects/Statik/modul-021/imgs/b3-4.png)

---

## 7.5 滚动摩擦

### 理想滚动情况

- **前提**：速度 $v = \text{常数}$。
- **平衡条件**：

$
\sum M_{i[0]} = 0 \implies -F_R \cdot r = 0 \implies F_R = 0
$

在理想条件下，没有滚动摩擦力。

![7.5-1](./subjects/Statik/modul-021/imgs/7.5-1.png)

### 实际滚动摩擦

- 实际情况下，由于轮与接触表面之间的变形，产生了滚动摩擦力 $F_R$。
- 滚动摩擦力计算如下：

$
F_R = \frac{f}{r} \cdot F_G = \mu_R \cdot F_G
$

其中：

- $\mu_R$ 是滚动摩擦系数。
- $f$ 是接触点的变形量。
- $F_G$ 是重力作用下的正向力。

![7.5-2](./subjects/Statik/modul-021/imgs/7.5-2.png)

### 结论

- 典型的滚动摩擦系数（例如轴承）：$\mu_R = 0.001$。

