document.addEventListener('DOMContentLoaded', () => {
    const datasetSelector = document.getElementById('datasetSelector');
    const chartContainer = document.getElementById('chartContainer');

    const datasets = {
        dataset1: [5, 10, 15, 20, 25, 30],
        dataset2: [10, 20, 30, 40, 50, 60],
        dataset3: [2, 4, 6, 8, 10, 12]
    };

    function renderChart(data) {
        chartContainer.innerHTML = '';

        data.forEach(value => {
            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.height = `${value * 5}px`;
            bar.textContent = value;
            bar.title = `Value: ${value}`;

            bar.addEventListener('click', () => {
                alert(`You clicked on a bar with value: ${value}`);
            });

            chartContainer.appendChild(bar);
        });
    }

    renderChart(datasets.dataset1);

    datasetSelector.addEventListener('change', (e) => {
        const selectedDataset = e.target.value;
        renderChart(datasets[selectedDataset]);
    });
});
