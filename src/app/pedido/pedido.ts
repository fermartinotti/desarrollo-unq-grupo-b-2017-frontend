import { Cliente } from '../cliente/cliente';
import { Menu } from '../menu/menu';
import { Proveedor } from '../proveedor/proveedor'

export class Pedido {
  fechaDeEntrega : Date;
  fechaCompra : Date;
  puntuacion : number;
  cliente : Cliente;
  menu : Menu;
  descripcion : String;
  cantidad : number;
  proveedor : Proveedor;
  //estadoPuntuacion : EstadoPuntuacion
}

// private LocalDate fechaDeEntrega;
// private LocalDate fechaCompra = LocalDate.now();
//
//
// // como almacenamos la hora
// // Tipo de entrega definir
// Integer puntuacion=0;
// Proveedor proveedor;
// Cliente cliente;
// Menu menu;
// String	descripcion;
// EstadoPuntuacion estadoPuntuacion = EstadoPuntuacion.PENDIENTE;
