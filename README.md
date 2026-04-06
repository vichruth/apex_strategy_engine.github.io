# 🏎️ Apex Strategy Engine
**Interactive F1 Pit Window Visualizer**

A client-side web application designed to mathematically determine and visualize the fastest race strategy in motorsports. By simulating cumulative race times based on dynamic tire degradation rates, this tool helps calculate the optimal lap for a pit stop.

---

## 🎓 Academic Submission Details
* **Course:** BCSE203E - Web Programming
* **Assignment:** Digital Assignment - II
* **Name:** Vichruth M
* **University:** Vellore Institute of Technology (VIT)

## ✨ Features
* **Dynamic Simulation Engine:** A brute-force algorithmic calculator that processes total race laps, base lap times, and pit-lane time penalties.
* **Tire Physics Modeling:** Pre-defined degradation rates and pace offsets for Soft, Medium, and Hard tire compounds.
* **Real-Time Visualization:** Automatic rendering of a line chart comparing the total race time for every possible pit-stop lap.
* **Optimal Strategy Output:** Highlights the exact lap that yields the shortest total race time.

---

## 🛠️ Tech Stack
* **HTML5:** Semantic structure and accessible forms.
* **CSS3:** Custom CSS, CSS Grid, and Flexbox (No external CSS frameworks used).
* **JavaScript (ES6+):** Vanilla JS for all state management, algorithms, and DOM manipulation.
* **Chart.js:** Included via CDN for high-performance canvas data visualization.

---

## 🚀 How to Run Locally

Since this project uses entirely client-side technologies with no backend server or build steps, running it locally is incredibly simple.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/vichruth/apex-strategy-engine.git](https://github.com/vichruth/apex-strategy-engine.git)# Apex Strategy: F1 Pit Window Visualizer
**BCSE203E - Web Programming | Digital Assignment - II**

**Name:** Vichruth M  
**University:** Vellore Institute of Technology (VIT)  
**Major:** B.Tech Computer Science and Engineering  

---

## 2. Project Proposal

### Project Title
[cite_start]**Apex Strategy Engine** - An Interactive F1 Pit Window Visualizer[cite: 114].

### Objective
In motorsports, race strategy is dictated by tire degradation and the time lost navigating the pit lane. The objective of this project is to build a client-side web application that mathematically determines the fastest race strategy. [cite_start]It solves the complex problem of deciding exactly which lap a driver should pit by simulating cumulative race times based on user-selected tire compounds and base lap times[cite: 116].

### Features
* **Dynamic Simulation Engine:** A JavaScript algorithm that simulates a race lap-by-lap to calculate cumulative race times.
* **Tire Physics Modeling:** Pre-defined degradation rates and pace offsets for Soft, Medium, and Hard tire compounds.
* **Interactive Control Panel:** User inputs for Total Laps, Base Lap Time, Pit Loss, and Tire Stints.
* [cite_start]**Real-Time Data Visualization:** Automatic rendering of a line chart comparing the total race time for every possible pit-stop lap[cite: 117].
* **Optimal Strategy Output:** An algorithm that highlights the exact lap that yields the shortest total race time.

### Technologies Used
* [cite_start]**Core:** HTML5, Modern CSS (CSS Grid, Flexbox), Vanilla JavaScript (ES6+)[cite: 118].
* [cite_start]**Libraries:** Chart.js (via CDN) for high-performance canvas data visualization[cite: 118].

---

## 3. Step-by-Step Documentation & Development Process

### Development Workflow
1. **Conceptualization:** Outlined the logic required to simulate tire degradation mathematically without relying on a backend server.
2. [cite_start]**UI Architecture:** Built the HTML skeleton utilizing CSS Grid to split the screen into a 'Control Panel' and a 'Visualization Panel' for a dashboard-style look[cite: 121].
3. **Data Structures:** Created a JavaScript object (`TIRE_MODELS`) to store the specific pace and degradation variables for different tire types.
4. **Core Algorithm:** Wrote a brute-force `for-loop` algorithm in JavaScript that simulates the race time if the driver pits on Lap 1, then Lap 2, up to the final lap, storing the results in arrays.
5. **API Integration:** Integrated the `Chart.js` library, linking the JavaScript data arrays to the canvas element to generate a dynamic line chart.
6. **Refinement:** Added logic to destroy the previous chart instance before drawing a new one to prevent canvas overlap glitches. [cite_start]Styled the UI with a dark-mode theme to mimic professional racing telemetry software[cite: 121].

### Challenges Faced & Solutions
* **Canvas Glitching:** Initially, clicking 'Calculate' multiple times caused the Chart.js graph to flicker and overlap old data. [cite_start]*Solution:* I utilized the `Chart.destroy()` method in the JavaScript logic to clear the previous canvas context before rendering the new data arrays[cite: 124].
* **Complex State Management:** Keeping track of variables across nested loops (one for the overall test lap, inner loops for Stint 1 and Stint 2) was challenging. [cite_start]*Solution:* I refactored the code to use block-scoped `let` variables strictly within their respective loops to prevent data pollution[cite: 124].

### Resources Used
* [cite_start]**MDN Web Docs:** For standard JavaScript array methods and event listener syntax[cite: 124].
* [cite_start]**Chart.js Documentation:** To understand how to format the data objects and configure the tooltips and axes for the line chart[cite: 124].

---

## 4. Reflection on Learning (10 Key Points)

Building this interactive project taught me several critical aspects of JavaScript and web development:

1. **DOM Manipulation:** I learned how to reliably extract values from HTML input fields (`document.getElementById().value`) and update UI text dynamically based on calculations.
2. **Event-Driven Programming:** I understood how to trigger complex functions strictly when user actions occur (e.g., clicking the 'Calculate' button).
3. **Algorithm Design:** I successfully translated physical real-world concepts (tire wear over time) into a functional JavaScript loop algorithm.
4. **Data Structures:** I utilized Objects to store configuration parameters (tire models) and Arrays to build datasets for the visualization.
5. **Third-Party Libraries:** I learned how to read documentation and implement an external library (Chart.js) via a CDN without using Node or NPM.
6. **Canvas Element:** I gained experience interacting with the HTML5 `<canvas>` API through a charting wrapper.
7. **Type Coercion Awareness:** I learned the importance of using `parseInt()` and `parseFloat()` when pulling data from HTML inputs to prevent math errors caused by string concatenation.
8. **Memory Management:** I realized the necessity of clearing old instances of objects (like charts) to prevent memory leaks and UI bugs on the client side.
9. **UI/UX Design:** I focused on creating an intuitive layout, ensuring the control panel was clearly separated from the visual results.
10. **Debugging:** I improved my ability to use the browser's developer console to track variables through complex nested loops.

---

## 5. The Importance of this Project

This project represents a crucial step in my development as a software engineer. While static web pages display information, interactive applications *solve problems*. By building the Apex Strategy Engine, I bridged the gap between pure data science logic and user-facing frontend development. It demonstrates that I can take complex predictive concepts (similar to the machine learning models I build in Python) and translate them into accessible, lightweight JavaScript tools that run directly in a user's browser. This capability to visualize data dynamically is highly valuable in fields ranging from motorsport telemetry to business intelligence dashboards.
