// ------------------------ chart js bar---------------------

let ctx = document.getElementById("myChart").getContext("2d");

let myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [20,25,30,35,40,60,65],
    datasets: [
        {
        barThickness:25,  
        data: [0,20,40,60,80,100],
        label: "Employer: k 73,500 ",
        backgroundColor:["#0000b2","#0000b2","#0000b2","#0000b2", "#0000b2","#0000b2"],
        
      },
      {
        barThickness:25,  
        data: [0,20,40,60,80,100],
        label: "Employee: k 52,500 ",
        backgroundColor:["#0000e5","#0000e5","#0000e5","#0000e5", "#0000e5","#0000e5"],
        
      },
      {
        barThickness:25,  
        data: [0,20,40,60,80,100],
        label: "Total Interest: k 244,313 ",
        backgroundColor:["#4c4cff","#4c4cff","#4c4cff","#4c4cff", "#4c4cff","#4c4cff"],
        
      },
    ],
   
  },
  options:{
      responsive:true,
    layout:{
        padding:{
            right:70,
        },  
    },
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          },
          stacked: true
      }],
      xAxes: [{$
        stacked: true
      }]
  }
   
},
});



// ----------------------------- slider column-4 ----------------------------

let slider = document.getElementById('slider');
let output = document.getElementById('value');

output.innerHtml = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value + "%";
}


let slider1 = document.getElementById('slider1');
let output1 = document.getElementById('value1');

output1.innerHTML = slider1.value;

slider1.oninput = function(){
    output1.innerHTML = this.value;
}

//----------------------------- <!-- Progress bar circle ------------------------------------->
  function Circlle(el) {
    $(el).circleProgress({ fill: { color: '#32CD99' } }).on('circle-animation-progress', function (event, progress, stepValue) {
        $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2) + '%');
    })
}

Circlle('.round');