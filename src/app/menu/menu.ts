
export class Menu  {

	nombre : String;
  descripcion : String;
  categoria : String;
	valorDelivery : number;
	hEntregas : Array<String> ;
	hEnvios : Array<String> ;
  fechaVigenciaDesde : Date;
  fechaVigenciaHasta : Date;
	precio : number;
	cantidadMinima : number;
	cantidadMinima2 : number;
	precioCantidadMinima : number;
	precioCantidadMinima2 : number;
	cantidadMaxVtasPorDia : number;
}
//
// private String nombre;
// 	private String descripcion;
// 	private Categoria categoria;
// 	private double valorDelivery;
// 	private LocalDate fechaVigenciaDesde;
// 	private LocalDate fechaVigenciaHasta;
// 	private ArrayList<String> turnos; // ESTO QUEDA ?
// 	private ArrayList<LocalTime> horariosDeEntrega;
// 	private ArrayList<LocalTime> horariosDeEnvio;
// 	// Turnos entrega envio
// 	private double precio;
// 	private Integer cantidadMinima;
// 	private Integer cantidadMinima2;
// 	private double precioCantidadMinima;
// 	private double precioCantidadMinima2;
// 	private Integer cantidadMaxVtasPorDia;
// 	private Integer cantidadVendidos = 0;// ESO SE VA Y SE CALCULA ON THE FLY.
// 	private Habilitacion estaParaLaVenta = Habilitacion.HABILITADO;
