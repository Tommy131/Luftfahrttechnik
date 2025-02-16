# 第八章：习题模块

## 示例 3 (A1.2.6)：后备箱盖

右图显示了打开状态下的后备箱盖。两个侧面的压缩气缸辅助开启。它们位于铰链点 $B$（车身）和 $C$（后备箱盖）之间。后备箱盖的总重力为 $F_G$。

![beispiel-3](./subjects/Statik/modul-008/imgs/beispiel-3.png)

**已知数据**：

- 重力 $F_G = 200 \text{N}$
- 距离：
  - $a = 400 \text{mm}$
  - $b = 500 \text{mm}$
  - $c = 150 \text{mm}$

**要求**：

1. 每个压缩气缸至少需要施加多大的压力 $F_Z$ 才能保持盖子在打开状态？
2. 铰链 $A$ 上的每个轴对盖子施加的力 $F_A$ 的大小和方向是什么？

![beispiel-3-1](./subjects/Statik/modul-008/imgs/beispiel-3-1.png)

### 1. 压力 $F_Z$ 的计算

为了保持后备箱盖在打开状态，我们可以选择不同的平衡力矩的计算方法。以下为两种适合的力矩平衡计算方法：

- **方法 2**（如左图所示）：计算点 $A$ 的力矩平衡

![beispiel-3-2](./subjects/Statik/modul-008/imgs/beispiel-3-2.png)

- **方法 3**（如右图所示）：另一种点 $A$ 的力矩平衡方式

![beispiel-3-3](./subjects/Statik/modul-008/imgs/beispiel-3-3.png)

通过使用这些方法，可以得出每个压缩气缸需要的最小压力 $F_Z$ 以保持后备箱盖在打开状态。

### 2. 铰链力 $F_A$ 的大小和方向计算

在确定每个铰链 $A$ 对盖子的作用力 $F_A$ 的大小和方向时，综合考虑了盖子的自重和气缸的辅助力。平衡分析基于力的大小和方向，将力 $F_A$ 分解为 $F_{Ax}$ 和 $F_{Ay}$ 的分量来求解。

![beispiel-3-4](./subjects/Statik/modul-008/imgs/beispiel-3-4.png)

## 示例 4：升降平台

所示为一个剪叉式升降平台，由两组剪叉支撑。一个液压缸通过水平移动点 $E$ 来调节平台的高度。平台承载的总重力为 $2 \cdot F_G = 6 \text{kN}$。

![beispiel-4](./subjects/Statik/modul-008/imgs/beispiel-4.png)

**要求**：

1. 计算点 $A$, $B$, $C$, $D$ 的铰链反作用力和支座反作用力。
2. 计算液压缸中的力 $F_Z$，以保持平台在图示位置的平衡状态。

**已知数据**：

- 总重力 $2 \cdot F_G = 6 \text{kN}$
- 几何尺寸：
  - 上平台宽度：1.0 m
  - 高度：1.8 m
  - 下平台宽度：0.8 m
  - 点 $E$ 的水平距离：1.6 m
  - 点 $C$ 和点 $D$ 的高度：0.9 m

### 解题步骤

1. **剪切升降平台的组件**：
   - 将升降平台的各个部分进行受力分析，以便分离出各个反作用力。

    ![beispiel-4-1](./subjects/Statik/modul-008/imgs/beispiel-4-1.png)

2. **建立平衡条件**：

   - 为系统建立平衡方程。将整个系统划分为若干子系统，并对每个子系统建立平衡方程。

   - **子系统 I**：分析平台的上部支撑部分。
   - **子系统 II**：分析平台的中部剪叉结构部分。
   - **子系统 III**：分析液压缸作用的力和平衡情况。

    ![beispiel-4-2](./subjects/Statik/modul-008/imgs/beispiel-4-2.png)
    ![beispiel-4-3](./subjects/Statik/modul-008/imgs/beispiel-4-3.png)

3. **解算方程系统**：
   - 将各子系统的平衡方程联立求解，以得到支点 $A$、$B$、$C$、$D$ 的反作用力和液压缸力 $F_Z$。

    ![beispiel-4-4](./subjects/Statik/modul-008/imgs/beispiel-4-4.png)
