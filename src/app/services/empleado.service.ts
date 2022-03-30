import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listaEmpleado: Empleado[] = [
    { 
      nombreCompleto: 'Lucas Martinez', correo: 'lmartinez@gmail.com', 
      telefono: 351226697, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'
    },
    { 
      nombreCompleto: 'Maria Funes', correo: 'marifun@gmail.com', 
      telefono: 3145589564, sexo: 'Femenino', fechaIngreso: new Date('2020-04-27'), estadoCivil: 'Casado'
    },
    { 
      nombreCompleto: 'Rodrigo Rodriguez', correo: 'rrodriguez@gmail.com', 
      telefono: 487899555, sexo: 'Masculino', fechaIngreso: new Date('2019-02-20'), estadoCivil: 'Separado'
    },
    { 
      nombreCompleto: 'Norberta Supur', correo: 'norbertass@gmail.com', 
      telefono: 166599856, sexo: 'Femenino', fechaIngreso: new Date('2009-09-15'), estadoCivil: 'Soltero'
    },
    { 
      nombreCompleto: 'Florencia Ramirez', correo: 'framirez@gmail.com', 
      telefono: 69887565, sexo: 'Femenino', fechaIngreso: new Date('2012-08-06'), estadoCivil: 'Casado'
    },
    { 
      nombreCompleto: 'Julian Artigas', correo: 'jartigas@gmail.com', 
      telefono: 47778957, sexo: 'Masculino', fechaIngreso: new Date('2003-01-03'), estadoCivil: 'Separado'
    },
  ];

  constructor() { }

  getEmpleados(){
    return this.listaEmpleado.slice();
  }

  eliminarEmpleado(index: number){
    this.listaEmpleado.splice(index, 1);
  }

  agregarEmpleado(empleado: Empleado){
    this.listaEmpleado.unshift(empleado);
  }

  getEmpleado(index: number){
    return this.listaEmpleado[index];
  }

  editEmpleado(empleado: Empleado, idEmpleado: number){
    this.listaEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto;
    this.listaEmpleado[idEmpleado].correo = empleado.correo;
    this.listaEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso;
    this.listaEmpleado[idEmpleado].telefono = empleado.telefono;
    this.listaEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil;
    this.listaEmpleado[idEmpleado].sexo = empleado.sexo;
  }
}
