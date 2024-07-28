document.addEventListener('DOMContentLoaded', function() {
    var ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
    var doughnutChart = new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
            labels: ['Chrome', 'IE', 'FireFox', 'Safari', 'Opera', 'Navigator'],
            datasets: [{
                data: [300, 50, 100, 40, 120, 80],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: 'right'
            }
        }
    });

    var ctxBar = document.getElementById('barChart').getContext('2d');
    var barChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Electronics',
                    backgroundColor: '#FF6384',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Fashion',
                    backgroundColor: '#36A2EB',
                    data: [28, 48, 40, 19, 86, 27, 90]
                },
                {
                    label: 'Foods',
                    backgroundColor: '#FFCE56',
                    data: [18, 48, 77, 9, 100, 27, 40]
                }
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Sales Overview'
            }
        }
    });
});
