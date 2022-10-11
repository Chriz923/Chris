const ctx = document.querySelector('#chart').getContext('2d');
const chart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021',],
        datasets: [{
            data: [1000, 820, 610, 360],
        }]
    }
});

const ctx2 = document.querySelector('#chart2').getContext('2d');
const chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['DK', 'SE', 'NO', 'GB',],
        datasets: [{
            data: [1000, 820, 610, 360],
        }]
    }
});

const ctx3 = document.querySelector('#chart3').getContext('2d');
const chart3 = new Chart(ctx3, {
    type: 'pie',
    data: {

        labels: ['Kayne West Listens', 'Taylor Swift Listens',],
        datasets: [{
            data: [55, 45],
        }]

    }
});

const ctx4 = document.querySelector('#chart4').getContext('2d');
const chart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    title: {
                        display: true,
                        text: 'chart4'
                    },
                labels: ['2018', '2019', '2020', '2021',],
                datasets: [{
                    label: 'Denmark',
                    data: [1000, 820, 610, 360],
                },
                    {
                        label: 'Sweden',
                        dara: [900, 400, 600, 700],
                    }],
                }
            }
        }
    }

});
