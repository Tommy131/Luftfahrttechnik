# Modul 18

## 5.6 内力的微分方程

**一般受力的梁：**

图示中为一个受到均布载荷 $q(x)$ 的梁，沿 $x$ 方向划分小段 $\Delta x$ 进行分析。

![5.6-0](./subjects/Statik/modul-018/imgs/5.6-0.png)

### 对元素 $\Delta x$ 的受力分析

**z 方向的力平衡：**

$$
\sum F_{iz} = 0 = -F_Q + q \cdot \Delta x + F_Q + \Delta F_Q
$$

$$
\Rightarrow q \cdot \Delta x + \Delta F_Q = 0 \quad \text{(1)}
$$

**对 $\Delta x$ 的中心点 (MP) 的力矩平衡：**

$$
\sum M_{i[\text{MP}]} = 0 = -M_b - F_Q \cdot \frac{\Delta x}{2} + M_b + \Delta M_b - F_Q \cdot \frac{\Delta x}{2} - \Delta F_Q \cdot \frac{\Delta x}{2}
$$

$$
\Rightarrow \Delta M_b - F_Q \cdot \Delta x - \Delta F_Q \cdot \frac{\Delta x}{2} = 0 \quad \text{(2)}
$$

**将方程 (1) 和 (2) 除以 $\Delta x$：**

$$
q + \frac{\Delta F_Q}{\Delta x} = 0 \quad \text{(3)}
$$

$$
- F_Q + \frac{\Delta M_b}{\Delta x} + \frac{\Delta F_Q}{2} = 0 \quad \text{(4)}
$$

### **极限分析：当 $\Delta x \to 0$ 时：**

$$
\frac{dF_Q(x)}{dx} = -q(x) \quad \text{（剪力的导数 = 负的分布载荷函数）}
$$

$$
\frac{dM_b(x)}{dx} = F_Q(x) \quad \text{（弯矩的导数 = 剪力函数）}
$$

通过积分反向求解（需加入积分常数）。

---

## 6. 重心

每个在地球上的物体都受到地球引力的作用，这种引力通过作用在地球中心方向的重力表现出来。

一个物体的重心 $S$ 是一个点，可以认为该物体的所有质量及其引起的总重力都集中在此点。重力作用于重心。

当物体的支撑点位于重心时，物体处于平衡状态。

**当物体在任意点自由悬挂时，它会调整位置，使得重心位于悬挂点正下方。悬挂点和重心在同一条垂直线上（重心线，SL）。所有的重心线都相交于重心（SP）。**

![6.0](./subjects/Statik/modul-018/imgs/6.0.png)

---

**重心分类：**

- **质量重心**：密度可变的情况下。
- **体积重心**：密度恒定的情况下。
- **面积重心**：密度恒定且厚度恒定的情况下。
- **线重心**：密度恒定且截面积恒定的情况下。

**对于密度恒定的物体，体积重心与质量重心相同。**

---

## 6.1 平行力组

一个平行的单个力组 $F_i$ 可以通过相对于任意极点的力矩平衡，用作用于重心（力矩中心）的一个合力 $F_R$ 代替。单个力和合力的作用效果完全相同。

![6.1](./subjects/Statik/modul-018/imgs/6.1.png)

### 力平衡

$$
F_R = \sum F_i \quad \text{（合力 $F_R$ 作用于力矩中心）}
$$

### 力矩平衡

$$
M_R[\text{Pol}] = F_R \cdot x_s = \sum F_i \cdot x_i
$$

因此：

$$
x_s = \frac{\sum F_i \cdot x_i}{F_R} = \frac{\sum F_i \cdot x_i}{\sum F_i}
$$

---

## 6.2 物体的重心

物体的重心是一个点，通过此点的重力 $F_G$ 的作用线在空间中的位置与物体姿态无关。

物体被分割为 $n$ 个体积单元 $\Delta V_i$。

每个体积单元 $\Delta V_i$ 上作用一个重量力 $\Delta F_{Gi}$。

物体的所有 $\Delta F_{Gi}$ 都垂直作用（近似平行）。

![6.2-1](./subjects/Statik/modul-018/imgs/6.2-1.png)

**关于 y 轴的力矩平衡：**

$$
F_G \cdot x_s = \sum \Delta F_{Gi} \cdot x_i
$$

$$
\Rightarrow x_s = \frac{\sum \Delta F_{Gi} \cdot x_i}{F_G} = \frac{\sum \Delta F_{Gi} \cdot x_i}{\sum \Delta F_{Gi}} \quad \text{（类似地，适用于 $y_s$ 和 $z_s$）}
$$

---

**当体积单元数 $n \to \infty$ 时的极限分析：**

$$
\Delta F_{Gi} \to dF_G
$$

$$
\Rightarrow x_s = \frac{\int x \cdot dF_G}{\int dF_G} = \frac{\int x \cdot dF_G}{F_G} \quad \text{（类似地，适用于 $y_s$ 和 $z_s$）}
$$

---

**对于整个物体在恒定重力加速度 $g$ 下的质量重心计算：**

$$
dF_G = dm \cdot g
$$

$$
\Rightarrow x_s = \frac{\int x \cdot g \cdot dm}{g \cdot \int dm} = \frac{\int x \cdot dm}{\int dm} \quad \text{其中 } m = \int dm
$$

$$
\text{（类似地，适用于 $y_s$ 和 $z_s$）}
$$

重心的位置仅取决于质量的分布。

---

### **质量重心与体积重心的关系：**

$$
\text{质量重心 } \neq \text{体积重心}
$$

对于均匀物体（恒定密度 $\rho = \text{const.}$），质量重心等于体积重心。

---

**对于均匀物体的体积重心计算：**

$$
dm = \rho \cdot dV
$$

$$
\Rightarrow x_s = \frac{\int x \cdot \rho \cdot dV}{\rho \cdot \int dV} = \frac{\int x \cdot dV}{\int dV} \quad \text{其中 } V = \int dV
$$

$$
\text{（类似地，适用于 $y_s$ 和 $z_s$）}
$$

### 在 z 方向的力平衡

$$
F_G = \sum \Delta F_{Gi}
$$

**红色部分：**
一个均匀物体的重心位置仅取决于其形状。
质量重心 = 体积重心
对于对称的均匀物体，重心始终位于对称面上。

![6.2-2](./subjects/Statik/modul-018/imgs/6.2-2.png)

---

## 6.3 面重心

对于具有恒定厚度 $t$ 的均匀物体，其重心可简化为中平面的面重心。在面重心处，整个面积处于平衡状态。

![6.3](./subjects/Statik/modul-018/imgs/6.3.png)

---

**公式：**

$$
t = \text{常数} \quad \Rightarrow \quad dV = t \cdot dA
$$

面重心的坐标：

$$
x_s = \frac{\int x \cdot t \cdot dA}{\int t \cdot dA} = \frac{\int x \cdot dA}{\int dA}
$$

$$
y_s = \frac{\int y \cdot dA}{\int dA}, \quad \text{其中 } A = \int dA
$$

$$
z_s = 0 \quad \text{（因为厚度 $t$ 是恒定的）}
$$

---

**示例 1：抛物面薄板截面**
右侧图示显示了一个具有恒定厚度的薄板，其外部轮廓由二次抛物线描述。

已知：$a, h$
要求：计算薄板截面的面重心位置。

![b1-0](./subjects/Statik/modul-018/imgs/b1-0.png)

![b1-1](./subjects/Statik/modul-018/imgs/b1-1.png)

![b1-2](./subjects/Statik/modul-018/imgs/b1-2.png)
