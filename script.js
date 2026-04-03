// Define Tire Physics
// pace: Initial time difference from base lap (negative is faster)
// deg: How many seconds of time are lost per lap due to wear
const TIRE_MODELS = {
    soft: { pace: -1.2, deg: 0.15 },
    medium: { pace: 0.0, deg: 0.08 },
    hard: { pace: 1.2, deg: 0.03 }
};

let strategyChart = null; // Variable to hold our chart instance

document.addEventListener('DOMContentLoaded', () => {
    // Attach event listener to our calculate button
    document.getElementById('calculateBtn').addEventListener('click', runSimulation);
    
    // Run an initial simulation on page load
    runSimulation();
});

function runSimulation() {
    // 1. Gather User Inputs
    const totalLaps = parseInt(document.getElementById('totalLaps').value);
    const baseTime = parseFloat(document.getElementById('baseLapTime').value);
    const pitLoss = parseFloat(document.getElementById('pitLoss').value);
    
    const stint1Tire = document.getElementById('stint1').value;
    const stint2Tire = document.getElementById('stint2').value;

    // 2. Variables to track the best strategy
    let bestRaceTime = Infinity;
    let bestPitLap = 0;
    let chartLabels = [];
    let chartData = [];

    // 3. Simulate the race for EVERY possible pit lap (Brute Force Algorithm)
    // We start at lap 1 and end at totalLaps - 1
    for (let testPitLap = 1; testPitLap < totalLaps; testPitLap++) {
        
        let currentRaceTime = 0;
        
        // Simulate Stint 1
        for (let lap = 1; lap <= testPitLap; lap++) {
            let tireAge = lap;
            let lapTime = baseTime + TIRE_MODELS[stint1Tire].pace + (tireAge * TIRE_MODELS[stint1Tire].deg);
            currentRaceTime += lapTime;
        }

        // Add Pit Stop Penalty
        currentRaceTime += pitLoss;

        // Simulate Stint 2
        for (let lap = testPitLap + 1; lap <= totalLaps; lap++) {
            let tireAge = lap - testPitLap;
            let lapTime = baseTime + TIRE_MODELS[stint2Tire].pace + (tireAge * TIRE_MODELS[stint2Tire].deg);
            currentRaceTime += lapTime;
        }

        // Check if this strategy is the fastest one we've seen
        if (currentRaceTime < bestRaceTime) {
            bestRaceTime = currentRaceTime;
            bestPitLap = testPitLap;
        }

        // Save data points for the graph
        chartLabels.push(`Lap ${testPitLap}`);
        chartData.push(currentRaceTime);
    }

    // 4. Update the UI with results
    updateResultsUI(bestPitLap, bestRaceTime);
    
    // 5. Render the Chart
    renderChart(chartLabels, chartData, bestPitLap, totalLaps);
}

function updateResultsUI(bestLap, totalTime) {
    const resultsBox = document.getElementById('results');
    const optimumText = document.getElementById('optimumText');
    
    // Convert total seconds to MM:SS format for readability
    const minutes = Math.floor(totalTime / 60);
    const seconds = (totalTime % 60).toFixed(3);
    
    optimumText.innerHTML = `<strong>Pit on Lap ${bestLap}</strong> | Total Race Time: ${minutes}m ${seconds}s`;
    resultsBox.classList.remove('hidden');
}

function renderChart(labels, data, bestLap, totalLaps) {
    const ctx = document.getElementById('strategyChart').getContext('2d');

    // Destroy existing chart if it exists so we can redraw
    if (strategyChart) {
        strategyChart.destroy();
    }

    // Find the minimum value in the data to set a good Y-axis scale
    const minTime = Math.min(...data);

    // Create the new Chart.js instance
    strategyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Total Race Time (Seconds) based on Pit Lap',
                data: data,
                borderColor: '#3b82f6', // Accent blue
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                pointRadius: 3,
                pointHoverRadius: 6,
                fill: true,
                tension: 0.3 // Smooth curves
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Time: ${context.parsed.y.toFixed(2)}s`;
                        }
                    }
                },
                legend: {
                    labels: { color: '#f8fafc' } // White text for dark mode
                }
            },
            scales: {
                y: {
                    min: minTime - 5, // Give some padding at the bottom of the graph
                    title: { display: true, text: 'Total Race Time (Lower is Better)', color: '#94a3b8' },
                    ticks: { color: '#94a3b8' },
                    grid: { color: '#334155' }
                },
                x: {
                    title: { display: true, text: 'Lap Chosen for Pit Stop', color: '#94a3b8' },
                    ticks: { color: '#94a3b8', maxTicksLimit: 15 },
                    grid: { color: '#334155' }
                }
            }
        }
    });
}