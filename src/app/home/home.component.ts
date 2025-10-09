import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public tasks = [
    {
      id: 1,
      checked: true,
      text: 'Buscar plantilla de dashboard en internet',
      type: 'frontend'
    },
    {
      id: 2,
      checked: true,
      text: 'Descargar plantilla Bootstrap Admin desde GitHub',
      type: 'frontend'
    },
    {
      id: 3,
      checked: true,
      text: 'Modificar colores y estilos de la plantilla',
      type: 'frontend'
    },
    {
      id: 4,
      checked: true,
      text: 'Adaptar componentes de Angular a la plantilla',
      type: 'frontend'
    },
    {
      id: 5,
      checked: true,
      text: 'Personalizar el menú de navegación',
      type: 'frontend'
    },
    {
      id: 6,
      checked: true,
      text: 'Crear repositorio en GitHub',
      type: 'backend'
    },
    {
      id: 7,
      checked: true,
      text: 'Configurar .gitignore y README.md',
      type: 'backend'
    },
    {
      id: 8,
      checked: true,
      text: 'Hacer primer commit y push al repositorio',
      type: 'backend'
    },
    {
      id: 9,
      checked: true,
      text: 'Cambiar el logo y favicon de la plantilla',
      type: 'frontend'
    },
    {
      id: 10,
      checked: true,
      text: 'Subir proyecto a GitHub Pages o Netlify',
      type: 'backend'
    }
  ];

  constructor() { }

  ngOnInit() {
    // Inicialización del componente
  }

  editTask(taskId: number) {
    console.log('Editar tarea:', taskId);
    // Lógica para editar tarea
  }

  removeTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    console.log('Tarea eliminada:', taskId);
  }

  toggleTask(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.checked = !task.checked;
    }
  }
}