// script.js

document.addEventListener('DOMContentLoaded', function () {
    var tempCtx = document.getElementById('tempChart').getContext('2d');
    var humidityCtx = document.getElementById('humidityChart').getContext('2d');

    new Chart(tempCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Temperature',
                data: [22, 19, 23, 25, 27, 30],
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(humidityCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Humidity',
                data: [30, 25, 35, 40, 45, 50],
                backgroundColor: 'rgba(0, 255, 123, 0.2)',
                borderColor: 'rgba(0, 255, 123, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
