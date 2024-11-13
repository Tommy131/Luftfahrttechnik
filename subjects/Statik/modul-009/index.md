# 第九章

## 3.3 一般空间力系统

在空间中的力系分析方法类似于平面力系，只是增加了第三个维度。

### 3.3.1 合力的计算

所有作用在一个物体上的力和力矩可以用一个合力 $\( F_R \)$ 和相对于任意参考点 $\( O \)$ 的力矩 $\( M_{R[0]} \)$ 来表示。

![3.3.1-1](./subjects/Statik/modul-009/imgs/3.3.1-1.png)

- **力向量 $\( \vec{F_i} \)$**：
  $\[
  \vec{F_i} = \begin{pmatrix} F_{ix} \\ F_{iy} \\ F_{iz} \end{pmatrix}
  \]$

- **位置向量 $\( \vec{r_i} \)$**（从参考点 $\( O \)$ 到力 $\( \vec{F_i} \)$ 的作用点）：
  $\[
  \vec{r_i} = \begin{pmatrix} x_i \\ y_i \\ z_i \end{pmatrix}
  \]$

- **合力 $\( \vec{F_R} \)$** 的分量计算：
  $\[
  F_{Rx} = \sum F_{ix}, \quad F_{Ry} = \sum F_{iy}, \quad F_{Rz} = \sum F_{iz}
  \]$

- **合力的大小**：
  $\[
  F_R = \sqrt{F_{Rx}^2 + F_{Ry}^2 + F_{Rz}^2}
  \]$

- **力矩分量 $\( M_{R[0]} \)$ 的计算**：
  $\[
  M_{Rx[0]} = \sum (y_i F_{iz} - z_i F_{iy})
  \]$
  $\[
  M_{Ry[0]} = \sum (z_i F_{ix} - x_i F_{iz})
  \]$
  $\[
  M_{Rz[0]} = \sum (x_i F_{iy} - y_i F_{ix})
  \]$

- **总力矩 $\( \vec{M_{R[0]}} \)$** 通过向量积求和：
  $\[
  \vec{M_{R[0]}} = \sum \vec{r_i} \times \vec{F_i} = \sum \begin{pmatrix} x_i \\ y_i \\ z_i \end{pmatrix} \times \begin{pmatrix} F_{ix} \\ F_{iy} \\ F_{iz} \end{pmatrix} = \sum \begin{pmatrix} y_i F_{iz} - z_i F_{iy} \\ z_i F_{ix} - x_i F_{iz} \\ x_i F_{iy} - y_i F_{ix} \end{pmatrix}
  \]$

### 3.3.2 一般空间力系统的平衡

物体处于平衡状态，当作用在其上的所有力和力矩之和为零时。

- **矢量表达**：
  $\[
  \sum \vec{F_i} = \vec{0} \quad \text{和} \quad \sum \vec{M_{i[0]}} = \vec{0}
  \]$

- **分量表达**：
  $\[
  \sum F_{ix} = 0, \quad \sum F_{iy} = 0, \quad \sum F_{iz} = 0
  \]$
  $\[
  \sum M_{ix[0]} = 0, \quad \sum M_{iy[0]} = 0, \quad \sum M_{iz[0]} = 0
  \]$

这些平衡方程对应于物体在空间中的 6 种运动可能性：

- **3 个平移方向**（x、y 和 z 方向）
- **3 个旋转方向**（绕 x、y 和 z 轴的旋转）

---

### 示例 1 (A1.3.1)：角形杠杆

一个直角杠杆承受线分布载荷 $\( q_0 \)$、两个力 $\( F_1 \)$ 和 $\( F_2 \)$，以及一个力矩 $\( M_0 \)$ 的作用。

![beispiel-1](./subjects/Statik/modul-009/imgs/beispiel-1.png)

**已知条件**：

- $\( F_1 = 2.0 \, \text{kN} \)$
- $\( F_2 = 1.5 \, \text{kN} \)$
- $\( q_0 = 500 \, \frac{\text{N}}{\text{m}} \)$
- $\( M_0 = 2.0 \, \text{kNm} \)$
- $\( a = 2.0 \, \text{m} \)$
- $\( b = 1.0 \, \text{m} \)$

**要求**：
求解杠杆支座处的反作用力。

**解答**：

1. **角形杠杆的受力分析**：
   - 将角形杠杆的受力分解，将分布载荷 $\( q_0 \)$ 转化为等效力 $\( F_{q_0} = q_0 \cdot b \)$，其作用点位于载荷中心，即 $\( \frac{b}{2} \)$ 处。

2. **建立平衡方程并求解方程组**：
   - 为分离后的杠杆系统建立平衡方程，并通过解方程组求解支座反作用力。

![beispiel-1-1.0](./subjects/Statik/modul-009/imgs/beispiel-1-1.0.png)

#### 1. Berechnung der Lagerkräfte

![beispiel-1-1.1](./subjects/Statik/modul-009/imgs/beispiel-1-1.1.png)

#### 2. Berechnung der Lagermomente

![beispiel-1-2](./subjects/Statik/modul-009/imgs/beispiel-1-2.png)

---

### 示例 2：带斜齿轮的传动轴

图中显示了一个带有斜齿轮的传动轴。未显示的对侧齿轮在点 $\( C \)$ 施加齿力 $\( F \)$。该力沿着与图纸平面成斜角的方向施加，其中斜角为 $\( \beta \)$，而齿力方向偏离图纸平面角度为 $\( \alpha \)$（见 D-D 剖面图）。点 $\( C \)$ 位于齿轮的滚动圆上，半径为 $\( r \)$。施加的驱动扭矩 $\( M \)$ 维持了齿力的平衡。

![beispiel-2](./subjects/Statik/modul-009/imgs/beispiel-2.png)

**已知条件**：

- 扭矩 $\( M = 2010 \, \text{Nm} \)$
- 距离：
  - $\( a = 280 \, \text{mm} \)$
  - $\( b = 380 \, \text{mm} \)$
  - 半径 $\( r = 191 \, \text{mm} \)$
- 角度：
  - $\( \alpha = 21.7^\circ \)$
  - $\( \beta = 24^\circ \)$

**要求**：

1. 计算齿力 $\( F \)$。
2. 计算固定支座 A 和滑动支座 B 处的支座反作用力。

#### 解答步骤

1. **布置图的绘制**：
   - 绘制系统的布置图和自由体图以便清晰展示各个力和反作用力的方向。

    ![beispiel-2-1](./subjects/Statik/modul-009/imgs/beispiel-2-1.png)

2. **传动轴的自由体图**：
   - 绘制带齿轮的传动轴的3D和2D自由体图，标明齿力 $\( F \)$ 及其分力方向。

    ![beispiel-2-2](./subjects/Statik/modul-009/imgs/beispiel-2-2.png)

3. **计算齿力 $\( F \)$**：
   - 根据力矩和几何关系计算齿力 $\( F \)$。

    ![beispiel-2-3.1](./subjects/Statik/modul-009/imgs/beispiel-2-3.1.png)
    ![beispiel-2-3.2](./subjects/Statik/modul-009/imgs/beispiel-2-3.2.png)

4. **计算固定支座 A 和滑动支座 B 的反作用力**：
   - 建立平衡方程，通过分解力和求解方程计算 A 和 B 的反作用力。

    ![beispiel-2-4](./subjects/Statik/modul-009/imgs/beispiel-2-4.png)
    ![beispiel-2-e](./subjects/Statik/modul-009/imgs/beispiel-2-e.png)
