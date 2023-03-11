// Defining objects, classes, functions, etc. 
// TEST DATA ARRAY
const testData = [
    {option: "Cheese", total: 777, shade: "#FFFF00"},
    {option: "Pepperoni", total: 700, shade: "#FF0000"},
    {option: "Neither", total: 300, shade: "#FF8800"}
];

// PIECHART CLASS
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

        // draw/redraw chart
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

    update(button) {
        // unused code for eventual database that pays attention to usernames:
        // const playerName = document.querySelector('.player-name').textContent;

        // get option name
        const option = button.id;

        // update data
        this.totalPeople += 1;
        for (let row of this.chartData) {
            if (row.option === option) {
                row.total += 1;
            }
        }

        // redraw chart
        this.draw();
    }
}


// Code to execute when page is opened

const playerNameEl = document.querySelector('.player-name');
playerNameEl.textContent = localStorage.getItem('pizzaName') ?? 'Guest';

const pieChart = new PieChart(testData);