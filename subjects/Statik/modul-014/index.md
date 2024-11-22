#

## 5.4.2 多区域问题与梁的受力分析

- 由于梁的载荷和几何形状的不连续性，通常需要分区域进行分析。
- 目标：通过力的分离与平衡条件计算支座反力和内力分布。

![b0-1](./subjects/Statik/modul-014/imgs/b0-1.png)

![b0-2](./subjects/Statik/modul-014/imgs/b0-2.png)

---

### 示例1

一根长度为 $l = 1\text{m}$ 的梁在两支座 $A$ 和 $B$ 上支撑，受单一力 $F = 100\text{N}$ 的作用，作用点距支座 $A$ $a = 0.3\text{m}$，该力以 $\alpha = 30^\circ$ 的角度作用于梁轴。整理条件成：

- 梁的长度：$l = 1\text{m}$
- 单一力 $F = 100\text{N}$，角度：$\alpha = 30^\circ$
- 作用点距支座 $A$：$a = 0.3\text{m}$

![5.4.2-1](./subjects/Statik/modul-014/imgs/5.4.2-1.png)

![b1-1](./subjects/Statik/modul-014/imgs/b1-1.png)

### 示例1分析步骤

1. **确定坐标系与区域划分：**
   - $x$-轴平行于梁，$z$-轴垂直于梁。
   - 支座 $A$ 和 $B$ 作为参考点。

2. 在支座处进行力的分离，并通过平衡条件确定支座反力。**受力平衡条件：**
   - **水平**方向：
     $
     \sum F_x = 0 \implies F_{Ax} = F \cdot \cos \alpha
     $
     解得：$F_{Ax} = 86.6\text{N}$

   - **垂直**方向：
     $
     \sum F_z = 0 \implies F \cdot \sin \alpha - F_{Az} - F_{Bz} = 0
     $

   - 关于点 $A$ 的力矩平衡：
     $
     \sum M_{[A]} = 0 \implies -F \cdot \sin \alpha \cdot a + F_{Bz} \cdot l = 0
     $
     解得：$F_{Bz} = 15\text{N}$

   - 带入 $F_{Bz}$：
     $
     F_{Az} = F \cdot \sin \alpha - F_{Bz} = 35\text{N}
     $

   ![5.4.2-2](./subjects/Statik/modul-014/imgs/5.4.2-2.png)

3. 在每个区域中沿位置 $x$ 进行切割，确定剪切力和弯矩，列出平衡条件。**总结支座反力：**
   - $F_{Ax} = 86.6\text{N}$（水平方向）
   - $F_{Az} = 35\text{N}$，$F_{Bz} = 15\text{N}$（垂直方向）

   **区域 1: $0 \leq x < a$**

   **水平方向平衡：**
   $
   \sum F_x = 0 \implies F_N = F_{Ax} = 86.6 \text{N}
   $

   **垂直方向平衡：**
   $
   \sum F_z = 0 \implies F_Q = F_{Az} = 35 \text{N}
   $

   **截面力矩平衡：**
   $
   M_b(x) = F_{Az} \cdot x = 35 \cdot x \text{Nm}
   $

   - $M_b(0) = 0 \text{Nm}$
   - $M_b(a) = 10.5 \text{Nm}$

   ![5.4.2-3](./subjects/Statik/modul-014/imgs/5.4.2-3.png)

   ![b1-2](./subjects/Statik/modul-014/imgs/b1-2.png)

   ![b1-3](./subjects/Statik/modul-014/imgs/b1-3.png)

   **区域 2: $a \leq x < l$**

   **水平方向平衡：**
   $
   \sum F_x = 0 \implies F_N = F_{Ax} - F \cdot \cos\alpha = 0
   $

   **垂直方向平衡：**
   $
   \sum F_z = 0 \implies F_Q = F_{Az} - F \cdot \sin\alpha = -15 \text{N}
   $

   **截面力矩平衡：**
   $
   M_b(x) = F_{Az} \cdot x - F \cdot \sin\alpha \cdot (x - a)
   $

   化简后：
   $
   M_b(x) = -15 \cdot x + 15
   $

   - $M_b(x = a) = 10.5 \text{Nm}$
   - $M_b(x = l) = 0 \text{Nm}$

   ![b1-4](./subjects/Statik/modul-014/imgs/b1-4.png)

   ---

   替代解法：**采用新的坐标系** 2 ($_2, z_2\)$

   **对于$F_N$ 和 $F_Q$ 的方程保持不变**，因为它们与坐标 $x$ 或 $x_2$ 无关。

   新坐标系的弯矩计算：
   平衡方程：
   $
   M_b(x_2) = 35 \cdot x_2 + 35 \cdot a - 50 \cdot x_2
   $

   化简为：
   $
   M_b(x_2) = 10.5 - 15 \cdot x_2
   $

   特殊位置：
   - $M_b(x_2 = 0) = 10.5 \text{Nm}$
   - $M_b(x_2 = l-a) = 0 \text{Nm}$

   ![5.4.2-4](./subjects/Statik/modul-014/imgs/5.4.2-4.png)

   ![5.4.2-5](./subjects/Statik/modul-014/imgs/5.4.2-5.png)

4. 剪力图与弯矩图的图形表示

   **剪力图：**

   - $F_N$：$+86.6 \text{N}$ 在支点 $A$，保持不变至 $a$。
   - $F_Q$：$+35 \text{N}$ 在 $A$，下降到 $-15 \text{N}$ 在 $l$。

   **弯矩图：**

   - 从 $0$ 开始线性增长到 $+10.5 \text{Nm}$（在 $a$）。
   - 从 $+10.5 \text{Nm}$ 线性下降到 $0$（在 $l$）。

   ![5.4.2-6](./subjects/Statik/modul-014/imgs/5.4.2-6.png)

   ![b1-5](./subjects/Statik/modul-014/imgs/b1-5.png)

---

## 示例2：分布荷载梁

一根长度为 $l = 1 \text{m}$ 的梁支撑在两支座 $A$ 和 $B$ 上。

左半部分（$a = 0.5 \text{m}$）承受线性增长的分布荷载，从 $0 \text{N/m}$ 增加到 $q_0 = 50 \text{N/m}$。

右半部分保持恒定的分布荷载 $q_0 = 50 \text{N/m}$ 直至支座 $B$。

- 梁的长度：$l = 1 \text{m}$，位于支座 $A$ 和 $B$ 上。
- 梁受分布荷载，分布如下：
  - 在 $a = 0.5 \text{m}$ 之前，荷载从 $0 \text{N/m}$ 线性增加到 $q_0 = 50 \text{N/m}$。
  - 在 $a = 0.5 \text{m}$ 之后，荷载保持 $q_0 = 50 \text{N/m}$ 到支座 $B$。

![b2-0](./subjects/Statik/modul-014/imgs/b2-0.png)

### 1) 坐标系与区域划分

- 坐标系：$x$-轴沿梁长度，$z$-轴垂直梁。
- 区域划分：
  - **区域 1**：$0 \leq x < a$（线性荷载区）。
  - **区域 2**：$a \leq x \leq l$（恒定荷载区）。

![b2-1](./subjects/Statik/modul-014/imgs/b2-1.png)

### 2) 自由体分析与平衡

- 支座反力：
  - 总荷载 = 梁的等效力。
  - 通过力平衡（$\sum F = 0$）和力矩平衡（$\sum M = 0$）计算支座 $A$ 和 $B$ 的反力。

![b2-2](./subjects/Statik/modul-014/imgs/b2-2.png)

![b2-3](./subjects/Statik/modul-014/imgs/b2-3.png)

### 3) 剪力与弯矩计算

- 区域 1：
  - 等效力：三角形面积。
  - 剪力：随着 $x$ 变化线性增加。
  - 弯矩：积分剪力，结果为抛物线。

  ![b2-4](./subjects/Statik/modul-014/imgs/b2-4.png)

  ![b2-5](./subjects/Statik/modul-014/imgs/b2-5.png)

  ![b2-6](./subjects/Statik/modul-014/imgs/b2-6.png)

- 区域 2：
  - 等效力：矩形面积。
  - 剪力：恒定。
  - 弯矩：线性变化。

  ![b2-7](./subjects/Statik/modul-014/imgs/b2-7.png)

  ![b2-8](./subjects/Statik/modul-014/imgs/b2-8.png)

  ![b2-9](./subjects/Statik/modul-014/imgs/b2-9.png)

  ![b2-10](./subjects/Statik/modul-014/imgs/b2-10.png)

### 4) 最大弯矩计算

- 最大弯矩位置：剪力 $F_Q$ 为零处。
- 在区域 2，通过对剪力 $F_Q$ 的表达式求导并解零点，计算最大弯矩的位置及值。

![b2-11](./subjects/Statik/modul-014/imgs/b2-11.png)

### 5) 图形表示

![b2-13](./subjects/Statik/modul-014/imgs/b2-13.png)

![b2-12](./subjects/Statik/modul-014/imgs/b2-12.png)
