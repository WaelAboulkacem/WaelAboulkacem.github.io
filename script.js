// Cargar gráficos usando Chart.js
document.addEventListener("DOMContentLoaded", function() {
    
    // Gráfico de proyectos (index.html)
    const ctxProyectos = document.getElementById('chartProyectos').getContext('2d');
    const chartProyectos = new Chart(ctxProyectos, {
        type: 'pie', // Tipo de gráfico
        data: {
            labels: ['Análisis de Datos', 'Machine Learning', 'Visualización', 'Otros'],
            datasets: [{
                label: 'Proyectos por tipo',
                data: [25, 50, 15, 10],
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0'],
                borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
                borderWidth: 1
            }]
        }
    });

    // Gráfico de competencias (competences.html)
    const ctxCompetencias = document.getElementById('competenciasChart').getContext('2d');
    const competenciasChart = new Chart(ctxCompetencias, {
        type: 'radar',  // Gráfico tipo radar
        data: {
            labels: ['Python', 'R', 'SQL', 'Machine Learning', 'Visualización'],
            datasets: [{
                label: 'Nivel de Competencia',
                data: [90, 75, 85, 80, 70],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { display: false },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });

    // Validación del formulario de contacto (contact.html)
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío real del formulario

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Validar los campos
        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Mostrar una confirmación (puedes conectar con un backend aquí)
        alert(`¡Gracias por tu mensaje, ${nombre}! Nos pondremos en contacto contigo pronto.`);
        
        // Limpiar el formulario después de enviar (solo para demostración)
        form.reset();
    });

    // Mostrar mensaje de bienvenida (si tienes esta funcionalidad)
    const mensajeBienvenida = document.getElementById('bienvenida');
    if (mensajeBienvenida) {
        mensajeBienvenida.innerHTML = "¡Bienvenido a mi portfolio de Data Science!";
    }

});
