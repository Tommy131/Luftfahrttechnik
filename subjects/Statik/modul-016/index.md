# Modul 16

## 示例 5

拱形框架：给出如下二维结构，其参数为：
$q_0 = 1.2 \text{kN/m},  l = 3.0 \text{m},  F = 6.0 \text{kN}$

![b5-0](./subjects/Statik/modul-016/imgs/b5-0.png)

![b5-1](./subjects/Statik/modul-016/imgs/b5-1.png)

### 第一张公式

1. 平衡方程：
   $
   \sum F_x = 0 \implies F_{Bx} = q_0 \cdot l
   $
   $
   F_{Bx} = 1.2 \text{kN/m} \cdot 3 \text{m} = 3.6 \text{kN}
   $

   **意义**: 该式表示水平方向的力平衡，用来计算右支座的水平反作用力。

2. 垂直方向平衡：
   $
   \sum F_y = 0 \implies F_A + F_{By} - F = 0
   $

   **意义**: 垂直方向的力平衡关系，包含两支座的竖直反力和集中载荷$F$。

3. 关于$A$ 点的力矩平衡：
   $
   \sum M_A = 0 \implies -F \cdot \frac{4l}{3} + q_0 \cdot l \cdot \frac{l}{2} + F_{By} \cdot 2l = 0
   $
   解出：
   $
   F_{By} = \frac{F \cdot \frac{4}{3} - q_0 \cdot l \cdot \frac{l}{2}}{2l}
   $
   计算：
   $
   F_{By} = \frac{6.0 \text{kN} \cdot \frac{4}{3} - 1.2 \text{kN/m} \cdot 3.0 \text{m} \cdot \frac{3.0 \text{m}}{2}}{2 \cdot 3.0 \text{m}}
   $
   $
   F_{By} = 3.1 \text{kN}
   $

   **意义**: 计算右支座的竖直反力$F_{By}$。

    ![b5-2](./subjects/Statik/modul-016/imgs/b5-2.png)

4. 计算$F_A$:
   $
   F_A = F - F_{By} = 6.0 \text{kN} - 3.1 \text{kN} = 2.9 \text{kN}
   $

   **意义**: 利用总竖直力平衡求左支座的竖直反力$F_A$。

### 区域 1 分析

1. $\phi$ 范围 $0^\circ \leq \phi \leq 90^\circ$ 的受力分析：

   水平方向：

   $
   \sum F_{x_1} = 0 \implies F_N = F_A \cdot \cos\phi
   $

   垂直方向：

   $
   \sum F_{z_1} = 0 \implies F_Q = -F_A \cdot \sin\phi
   $

   **意义**: 分别表示在曲线部分，沿法线 $F_N$ 和切线 $F_Q$ 的力平衡。

2. 关于截面力矩：

   $
   \sum M_{O_2} + M_b = 0 \implies M_b = F_A \cdot l \cdot (1 - \cos\phi)
   $

   计算：

   $
   M_b(0^\circ) = 0, \quad M_b(90^\circ) = F_A \cdot l = 2.9 \text{kN} \cdot 3.0 \text{m} = 8.7 \text{kN·m}
   $

   **意义**: 计算沿曲线段的弯矩变化，从$\phi = 0^\circ$ 到$\phi = 90^\circ$。

    ![b5-3](./subjects/Statik/modul-016/imgs/b5-3.png)

根据上述分析绘制：

1. $F_N$ 和 $F_Q$ 的分布：

   $
   F_N \approx -\cos\phi, \quad F_Q \approx -\sin\phi
   $

2. 弯矩 $M_b$：

   $
   M_b = F_A \cdot l \cdot (1 - \cos\phi)
   $

   最大值为 $8.7 \text{kN·m}$，对应 $\phi = 90^\circ$。

    ![b5-4](./subjects/Statik/modul-016/imgs/b5-4.png)

### 注解总结

通过平衡方程，我们依次计算了：

- 两支座的水平和竖直反力 $F_{Ax}, F_{Ay}, F_{Bx}, F_{By}$；
- 区域 1 的切向力 $F_Q$、法向力 $F_N$ 和弯矩 $M_b$；
- 绘制了剪力和弯矩图，表示各内力沿结构的变化分布。

---

## 示例 6：分支框架

已知条件：

$a = 2 \text{m}, F = 1 \text{kN}$

框架右侧的分布载荷：

$ q_0 = \frac{F}{a} $

![b6-0](./subjects/Statik/modul-016/imgs/b6-0.png)

![b6-1](./subjects/Statik/modul-016/imgs/b6-1.png)

### 1. 支座反力的计算

1. **水平力平衡方程**:
   $
   \sum F_x = 0 \implies F_{Bx} - q_0 \cdot 2a = 0
   $

   将 $q_0 = \frac{F}{a}$ 代入：

   $
   F_{Bx} = q_0 \cdot 2a = \frac{F}{a} \cdot 2a = 2F = 2 \text{kN}
   $

   **意义**: 计算右支座的水平反力 $F_{Bx}$，由分布载荷 $q_0$ 引起。

2. **竖直力平衡方程**:
   $
   \sum F_y = 0 \implies -F + F_A + F_{By} = 0
   $

3. **关于支座 $A$ 的力矩平衡**:
   $
   \sum M_A = 0 \implies F \cdot a + F_{Bx} \cdot a + F_{By} \cdot 2a = 0
   $

   求出 $F_{By}$：

   $
   F_{By} = -\frac{F \cdot a + F_{Bx} \cdot a}{2a}
   $

   将已知 $F = 1 \text{kN}, F_{Bx} = 2 \text{kN}$ 代入：

   $
   F_{By} = -\frac{1 \cdot 2 + 2 \cdot 2}{4} = -1.5 \text{kN}
   $

4. **竖直反力 $F_A$**:
   $
   F_A = F - F_{By} = 1 - (-1.5) = 2.5 \text{kN}
   $

    ![b6-2](./subjects/Statik/modul-016/imgs/b6-2.png)

### 2. 内力分析

#### 区域 1: $0 \leq x_1 \leq a$

1. **水平力平衡**:
   $
   \sum F_x = 0 \implies F_N = 0
   $

2. **竖直力平衡**:
   $
   \sum F_z = 0 \implies F_Q + F = 0 \implies F_Q = -F = -1 \text{kN}
   $

3. **弯矩平衡**:
   $
   \sum M + M_s = 0 \implies M_s = -F \cdot x_1
   $

   $M_s$ 为线性分布：

   $
   M_s(0) = 0, M_s(a) = -F \cdot a = -1 \cdot 2 = -2 \text{kN·m}
   $

![b6-3](./subjects/Statik/modul-016/imgs/b6-3.png)

#### 区域 2: $a \leq x_2 \leq 3a$

1. **水平力平衡**:
   $
   \sum F_x = 0 \implies F_N = 0
   $

2. **竖直力平衡**:
   $
   \sum F_z = 0 \implies F_Q + F - F_A = 0
   $
   $
   F_Q = F_A - F = 2.5 - 1 = 1.5 \text{kN}
   $

3. **弯矩平衡**:
   $
   \sum M + M_s = 0 \implies M_s = -F \cdot x_2 + F_A \cdot (x_2 - a)
   $

   $M_s$ 仍为线性：

   $
   M_s(a) = -2 \text{kN·m}, \quad M_s(3a) = 4 \text{kN·m}
   $

![b6-4](./subjects/Statik/modul-016/imgs/b6-4.png)

#### 区域 3: $0 \leq x_3 \leq 2a$

1. **水平力平衡**:
   $
   \sum F_x = 0 \implies F_N = -F_{By} = -1.5 \text{kN}
   $

2. **竖直力平衡**:
   $
   \sum F_z = 0 \implies F_Q = -F_{Bx} + q_0 (2a - x_3)
   $
   $
   F_Q = -2 + \frac{1}{2}(4 - x_3)
   $

3. **弯矩平衡**:
   $
   \sum M + M_s = 0 \implies M_s = F_{Bx} \cdot (2a - x_3) - q_0 \frac{(2a - x_3)^2}{2}
   $

   $M_s$ 为二次分布：

   $
   M_s(0) = 4 \text{kN·m}, \quad M_s(2a) = 0
   $

![b6-5](./subjects/Statik/modul-016/imgs/b6-5.png)

#### 区域 4: $0 \leq x_4 \leq a$

1. **水平力平衡**:
   $
   \sum F_x = 0 \implies F_N = -F_A = -2.5 \text{kN}
   $

2. **竖直力平衡**:
   $
   \sum F_z = 0 \implies F_Q = 0
   $

3. **弯矩平衡**:
   $
   M_s = 0 \quad  \text{(常数)}
   $

![b6-6](./subjects/Statik/modul-016/imgs/b6-6.png)

## 内力图绘制与总结

1. **法向力图 ($F_N$)**:
   - 区域 1 和 2: $F_N = 0$
   - 区域 3: $F_N = -1.5 \text{kN}$
   - 区域 4: $F_N = -2.5 \text{kN}$

2. **剪力图 ($F_Q$)**:
   - 区域 1: $F_Q = -1 \text{kN}$
   - 区域 2: $F_Q = 1.5 \text{kN}$
   - 区域 3: 线性变化，从 $-2 \text{kN}$ 到 $0$
   - 区域 4: $F_Q = 0$

3. **弯矩图 ($M_s$)**:
   - 区域 1 和 2: $M_s$ 为线性变化
   - 区域 3: $M_s$ 为二次分布
   - 区域 4: $M_s = 0$

![b6-7](./subjects/Statik/modul-016/imgs/b6-7.png)
