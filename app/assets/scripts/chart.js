import Chart from 'chart.js';

function renderChart() {
  
}
document.addEventListener('DOMContentLoaded', function() {
  var ctx = document.getElementById('myChart');
  var options = {
    elements: {
      line: {
        tension: 0
      }
    },
    animation:{ 

    }
  };
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [1, 2, 3, 4, 5, 6],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 14, 3, 5, 2, 4],
          fill: false,
          backgroundColor: '#e755ba',
          pointBackgroundColor: '#55bae7',
          borderColor: 'blue'
        }
      ]
    },
    options: options
  });
});
