#

## 1. Der erste Hauptsatz der Thermodynamik

### 1.1 Einführung in den 1. Hauptsatz

- **Der erste Hauptsatz der Thermodynamik** ist ein **Energieerhaltungssatz**: Die Gesamtenergie eines Systems kann sich nur durch Energieübertragungen über die Systemgrenze ändern.
- Mathematisch wird dies als **Energiebilanz** ausgedrückt:
  - **dE = dQ - dW**, wobei:
    - **dE**: Änderung der inneren Energie
    - **dQ**: zugeführte Wärme
    - **dW**: geleistete Arbeit
- Verbale Formulierungen:
  - „Energie kann nicht aus dem Nichts entstehen.“
  - „Es gibt kein Perpetuum Mobile erster Art.“

### 1.2 Energieformen eines Systems

- Die **innere Energie (U)** eines Systems setzt sich zusammen aus:
  - **Kinetischer Energie (Ekin)**: Bewegung der Teilchen.
  - **Potentieller Energie (Epot)**: Lage des Systems im Gravitationsfeld.
  - **Chemischer Energie (Echem)**: Bindungsenergien der Moleküle.
  - **Thermischer Energie (U)**: Energie, die in der thermischen Bewegung der Teilchen gespeichert ist.

#### Beispiele

1. Ein ruhendes Auto mit 1000 kg Masse und 10 l Benzin hat eine Energie von **E = 420 MJ** (Brennwert).
2. Ein Auto, das mit einer Beschleunigung von **10 m/s²** beschleunigt wird, erfährt eine Kraft von **F = 10 kN** und eine Arbeit von **W = 50 kJ**.

### 1.3 Energietransport und Leistung

- **Arbeit (W)**: Energie, die durch eine Kraft über eine Strecke übertragen wird. Formel: **W = F · s**.
- **Wärme (Q)**: Energie, die infolge von Temperaturunterschieden übertragen wird.
- **Leistung (P)**: Energie pro Zeiteinheit, Formel: **P = W/t**.

### 1.4 Anwendungen des 1. Hauptsatzes

- Der 1. Hauptsatz gilt sowohl für **geschlossene** als auch für **offene Systeme**.
  - **Geschlossenes System**: Keine Massenübertragung, nur Energie (Wärme und Arbeit) wird übertragen.
  - **Offenes System**: Sowohl Masse als auch Energie können das System durchströmen.

- **Differentialform** des 1. Hauptsatzes für ein **offenes System**:
  - **dE/dt = Σ(ẇm(ein - aus)) + ΣQ + ΣW**, wobei:
    - **ẇm**: Massenstrom
    - **Q**: Wärmestrom
    - **W**: Arbeit

- **Bilanzgleichungen**:
  - **Geschlossenes System**: **dE = dQ - dW**.
  - **Offenes System**: **dH = dQ + dW + dΦDiss**, wobei **H** die Enthalpie ist und **ΦDiss** die Dissipationsarbeit.

## 2. Der zweite Hauptsatz der Thermodynamik

### 2.1 Entropie und irreversible Prozesse

- **Entropie (S)** ist eine **kalorische Zustandsgröße**, die die **Unordnung** eines Systems beschreibt. Sie ist besonders relevant für irreversible Prozesse.
- Der 2. Hauptsatz besagt:
  - **Entropie eines Systems kann nur zunehmen oder konstant bleiben**.
  - Natürliche Prozesse verlaufen immer in die Richtung einer **Zunahme der Entropie**.

#### Mathematische Formulierung

- **dS = dSQrev + dSirrev**, wobei:
  - **dSQrev**: reversible Entropieänderung durch Wärmezufuhr.
  - **dSirrev**: irreversible Entropieproduktion im System, welche durch Dissipationsvorgänge wie Reibung entsteht.
  - **T · dSirr = dΦDiss**: Entropieproduktion ist proportional zur Dissipationsarbeit.

### 2.2 Reversible und irreversible Prozesse

- **Reversibel**: Prozess, der in beide Richtungen ablaufen kann, ohne die Umgebung zu beeinflussen. Entropie bleibt unverändert: **dS = 0**.
- **Irreversibel**: Prozess, bei dem es zu Energieverlusten (z.B. durch Reibung) kommt. Die Entropie nimmt zu: **dS > 0**.

#### Beispiele der 2.2

1. **Reversible Wärmezufuhr**: Erwärmung eines Gases durch langsame Wärmezufuhr, ohne dass Energie durch Reibung verloren geht.
2. **Irreversible Prozesse**: Wenn ein System Wärme durch Reibung verliert, führt dies zu einer Erhöhung der Entropie.

### 2.3 Der zweite Hauptsatz in der Praxis

- Der zweite Hauptsatz verbietet die **spontane Übertragung von Wärme** von einem kalten auf einen warmen Körper.
- **Kältemaschinen** und **Wärmepumpen** basieren auf dem zweiten Hauptsatz und benötigen Arbeit, um Wärme entgegen der natürlichen Flussrichtung zu übertragen.

### 2.4 Entropie in offenen Systemen

- Für offene Systeme gilt:
  - Die Änderung der Entropie hängt vom Massenstrom und der Energiedissipation ab.
  - Entropieänderung in offenen Systemen: **ΔS = (dSQrev + dSirrev) / T**.

## 3. Mathematische Anwendungen und Beispiele

### 3.1 Beispiel: Isotherme Kompression eines idealen Gases

- Ein ideales Gas wird in einem Kolben isotherm expandiert:
  - Anfangszustand: **p1 = 1 bar, V1 = 0,25 l**.
  - Endzustand: **p2 = 0,166 bar, V2 = 1,5 l**.
  - **Reversible Kolbenarbeit**: **WKrev = 80,2 J**.

#### Berechnungen

- Volumenänderungsarbeit: **Wv = -44,8 J**.
- Verschiebearbeit: **WVA = 125 J**.

### 3.2 Aufgabe: Berechnung der Entropieänderung

- Berechnen Sie die Entropieänderung bei der Zustandsänderung eines idealen Gases:
  - **Isobare Wärmezufuhr** von **T1 = 293 K** auf **T2 = 373 K**.
  - Verwenden Sie die spezifische Wärmekapazität **cp = 1,007 kJ/(kgK)**.

#### Lösung

- **ΔS = cp · ln(T2 / T1) = 1,007 · ln(373 / 293) = 0,24 kJ/kgK**.

### 3.3 Beispiel: Adiabate Expansion eines realen Gases

- Bei der Expansion eines realen Gases, wie z.B. Helium, führt die Volumenzunahme zu einer Erhöhung der kinetischen Energie und somit zur Temperaturerhöhung.

### 3.4 Aufgaben zum 1. und 2. Hauptsatz

- Aufgabe 1: Berechnen Sie die Energie, die notwendig ist, um 10 l Wasser aus einem Brunnen in ein 3 m hohes Becken zu pumpen.
- Aufgabe 2: Berechnen Sie die reversible Kolbenarbeit bei einer adiabaten Kompression.

## 4. Zusammenfassung der Hauptsätze

### 4.1 Der erste Hauptsatz

- Der **1. Hauptsatz der Thermodynamik** beschreibt die **Energieerhaltung**: Die Änderung der Energie eines Systems entspricht der zugeführten Wärme minus der verrichteten Arbeit.
- Mathematisch:
  - **Geschlossenes System**: **ΔU = Q - W**.
  - **Offenes System**: **ΔH = Q + W + ΦDiss**.

### 4.2 Der zweite Hauptsatz

- Der **2. Hauptsatz der Thermodynamik** legt die **Richtung natürlicher Prozesse** fest: Prozesse verlaufen immer in die Richtung einer Erhöhung der Entropie.
- Entropieproduktion ist ein Maß für die **Irreversibilität** von Prozessen.
- **Mathematische Formulierung**:
  - **dS = dSQrev + dSirrev**.
  - **T · dSirr = dΦDiss**: Entropieproduktion ist proportional zur Dissipationsarbeit.
