
(function($) {
  'use strict';
  $(function() {

  //  import scrapePrices() from './off-canvas.js'

    // Sidebar toggle (original boilerplate)
    $('[data-toggle="offcanvas"]').on("click", function() {
      $('.sidebar-offcanvas').toggleClass('active');
    });

    // Chart.js pie chart initialization
    new Chart(document.getElementById('pi-chart'), {
      type: 'pie',
      data: {
        labels: ['HTML', 'Javascript', 'PHP', 'MySQL'],
        datasets: [{
          backgroundColor: ['#498', '#398', '#9867', '#234'],
          data: [342, 234, 233, 984]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Pie Chart for me panel'
          }
        }
      }
    });
  });
})(jQuery);
