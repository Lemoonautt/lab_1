import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userProfile = {
    company: 'Tech Solutions Bolivia',
    username: 'limberg.montes',
    email: 'limberg.montes@email.com',
    firstName: 'Limberg',
    lastName: 'Montes',
    address: 'Av. 6 de Agosto #2170',
    city: 'La Paz',
    country: 'Bolivia',
    postalCode: '00000',
    about: 'Desarrollador Full Stack apasionado por la tecnología. Especializado en Angular, Node.js y bases de datos. Siempre aprendiendo nuevas tecnologías y mejorando mis habilidades.',
    bio: 'Código limpio, soluciones eficientes',
    avatar: 'https://avatars.githubusercontent.com/u/227678693?s=400&u=48b50824662758918fc949b33b83514e5fb44f10&v=4'
  };

  constructor() { }

  ngOnInit() {
    console.log('Perfil de usuario cargado:', this.userProfile);
  }

  updateProfile() {
    console.log('Actualizando perfil:', this.userProfile);
    // Aquí iría la lógica para actualizar el perfil
    alert('Perfil actualizado correctamente!');
  }

  onInputChange(field: string, value: string) {
    console.log(`Campo ${field} modificado:`, value);
  }

}