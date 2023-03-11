// Defining objects, classes, functions, etc. 

const testData = [
    {option: "Cheese", total: 777, shade: "#FFFF00"},
    {option: "Pepperoni", total: 700, shade: "#FF0000"},
    {option: "Neither", total: 300, shade: "#FF8800"}
];

class PieChart {
    chartData;
    totalPeople;

    constructor(data) {
        // take in data and calculate total users in data
        this.chartData = data;
        this.totalPeople = this.chartData.reduce((sum, {total}) => sum + total, 0);
        // draw chart
        this.draw();
    }

    draw() {
        // query canvas and choose 2d style context
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
        // clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        // draw or redraw chart
        let currentAngle = 0;
        for (let row of this.chartData) {
            // calculating the angle the slice (portion) will take in the chart
            let portionAngle = (row.total / this.totalPeople) * 2 * Math.PI;
            // drawing an arc and line
            context.beginPath();
            context.arc(200, 200, 200, currentAngle, currentAngle + portionAngle);
            currentAngle += portionAngle;
            context.lineTo(200, 200);
            // filling the slice
            context.fillStyle = row.shade;
            context.fill();
        }
    }

    
}





// Code to execute when page is opened

const playerNameEl = document.querySelector('.player-name');
playerNameEl.textContent = localStorage.getItem('pizzaName') ?? 'Guest';

const pieChart = new PieChart(testData);