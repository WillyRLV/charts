  // setup 

  const labels = [
    "What's the most difficult thing about being you?",
    "What's something that you know that few other people know?",
    "Are you currently where you want to be in life?",
    "Is there a part of your culture that you don't like?",
    "What's the best trick someone has ever played on you?",
    "What food combination do you eat that makes others cringe?",
    "What's the strangest thing you've ever found?",
    "What the best thing that can happen in the first 5 minutes after waking up?",
    "What's something that you know you should start, but haven't?",
    "What is something you thought would be a great idea but was terrible when you actually did it?",
    'Has someone ever done a random act of kindness to you?',
    "Is there anything that most people find cute that creeps you out?",
    "What's your knowing just enough to be dangerous story?",
    "What is the most selfish thing you do that you're okay with?",
    "If you had to describe your current life as a movie, which movie would you choose?",
    "Do you name inanimate objects?",
    "How well do you trust your gut feelings?",
    "Do you have any apps on your phone that you've never used?",
    "What's something about you today that the old you would find surprising?",
    "What bad decision did you make that actually turned out to be a good decision?"
  ];

// exceñ


document.getElementById('excelInput').addEventListener('change', handleFile);

function handleFile(event) {

    const fileInput = event.target;
  const file = event.target.files[0];


  const dniEspecifico = prompt('Ingrese DNI');

  if (!dniEspecifico) {
    console.log('No se proporcionó un DNI. Cancelando el proceso.');
    return;
  }

  document.getElementById("aea").innerHTML = dniEspecifico
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      // Supongamos que tienes solo una hoja y una columna
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const columnData = XLSX.utils.sheet_to_json(sheet,{header:1,range:1});

      // Guardar en el almacenamiento local
    //   localStorage.setItem('excelData', JSON.stringify(columnData));

     // Obtener el DNI específico que deseas buscar (supongamos que está en la primera columna)
   

     // Filtrar los datos por el DNI específico
     const filteredData = columnData.filter(row => row[0] === dniEspecifico);

    const questions = filteredData.map(row => {
        return {
            pregunta: row[2],
            dimension: row[3],
            valor: row[5]
        }
    })
    console.log(questions);
    main(questions)
    filteredData =[]
    questions = []

    
    };

    fileInput.value = '';  // Esto limpia el campo de entrada

    reader.readAsArrayBuffer(file);
  }
}






//   const datos = [
//   { pregunta: 'Pregunta 1', dimension: 'amor', valor: 20 },
//   { pregunta: 'Pregunta 2', dimension: 'lealtad', valor: 70 },
//   { pregunta: 'Pregunta 3', dimension: 'lealtad', valor: 99 },
//   { pregunta: 'Pregunta 4', dimension: 'respeto', valor: 91 },
//   { pregunta: 'Pregunta 5', dimension: 'respeto', valor: 23 },
//   { pregunta: 'Pregunta 6', dimension: 'lealtad', valor: 96 },
//   { pregunta: 'Pregunta 7', dimension: 'respeto', valor: 74 },
//   { pregunta: 'Pregunta 8', dimension: 'amor', valor: 88 },
//   { pregunta: 'Pregunta 9', dimension: 'amor', valor: 54 },
//   { pregunta: 'Pregunta 10', dimension: 'amor', valor: 10 },
//   { pregunta: 'Pregunta 11', dimension: 'respeto', valor: 62 },
// ];

function main(params) {
  var data = {
    labels:  params.map(item => item.pregunta),
    datasets: [
    {
        label: 'Credibilidad',
        data: params.map(item => (item.dimension === 'Credibilidad' ? item.valor : null)),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)', // Color del borde
        borderWidth: 1,
    },
    {
        label: 'Respeto',
        data: params.map(item => (item.dimension === 'Respeto' ? item.valor : null)),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
    },
    {
        label: 'Imparcialidad',
        data: params.map(item => (item.dimension === 'Imparcialidad' ? item.valor : null)),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
    },
],
  };
  const config = {
    type: 'bar',
    data,
    options: {

      layout: {
        padding: {
            // Espacio a la izquierda
            right: 20, // Espacio a la derecha
          
        }
    },
      plugins: {
        datalabels: {
        
          formatter: function(value, context) {
              if (value !== null) {
                  return value + '%'; // Agrega el símbolo de porcentaje
              } else {
                  return ''; // Si el valor es null, no muestres nada
              }
          },
          color: 'black', // Color del texto
          font: {
            size:11,
              weight: 'bold' // Fuente en negrita
          }
        },
        tooltip: {

          callbacks: {
            title: function (context) {
              return ''
            },
        },
        }
      },
      responsive: true,
      maintainAspectRatio: false,
  
      indexAxis: 'y',
      scales: {
        x: {
          stacked: true,
          beginAtZero: true,
          ticks: {
            callback: function(value) {
                return 'Total: '+value + '%';
            }
            ,

        }
        },
        y: {
          stacked: true,
          ticks: {
            position: 'center',
            autoSkip: false,
            padding: 10,

          },
        },
      },
    },

    plugins:[ChartDataLabels]
    //plugins: [{
    // beforeInit: function (chart) {
    //   chart.data.labels.forEach(function (value, index, array) {
    //     var a = [];
    //   a.push(value.slice(0, 20));
    // var i = 1;
    //while(value.length > (i * 20)){
    //  a.push(value.slice(i * 17, (i + 1) * 20));
    //i++;
    //}
    //array[index] = a;
    //console.log(a)
    //})
    //}
    // }]


  };
  //Chart.defaults.datasets.bar.barThickness = 15;
//   console.log(Chart.Scale)
//   Chart.defaults.font.size = 13;
  // render init block
   // Destruir el gráfico existente

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
}

