// Defining objects, classes, functions, etc. 

const testData = [
    {option: "Cheese", total: 777, shade: "#FFFF00"},
    {option: "Pepperoni", total: 700, shade: "#FF0000"},
    {option: "Neither", total: 300, shade: "#FF8800"}
];

class PieChart {
    constructor(data) {
        // query canvas and choose 2d style context
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');

        // test arc
        // context.beginPath();
        // context.arc(200,200, 200, Math.PI/2,  Math.PI);
        // context.stroke();

        // calculate total users in data
        let totalNumberOfPeople = data.reduce((sum, {total}) => sum + total, 0);

        // draw chart
        let currentAngle = 0;
        for (let row of data) {
            //calculating the angle the slice (portion) will take in the chart
            let portionAngle = (row.total / totalNumberOfPeople) * 2 * Math.PI;
            //drawing an arc and a line to the center to differentiate the slice from the rest
            context.beginPath();
            context.arc(200, 200, 200, currentAngle, currentAngle + portionAngle);
            currentAngle += portionAngle;
            context.lineTo(200, 200);
            //filling the slices with the corresponding mood's color
            context.fillStyle = row.shade;
            context.fill();
        }
    }
}



// Code to execute when page is opened

const playerNameEl = document.querySelector('.player-name');
playerNameEl.textContent = localStorage.getItem('pizzaName') ?? 'Guest';

const pieChart = new PieChart(testData);