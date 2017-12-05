"use strict";
var Menu = (function () {
    function Menu(input) {
        this.deserialize(input);
    }
    Menu.prototype.deserialize = function (input) {
        this.id = (input.id) ? input.nombre : '';
        this.nombre = (input.nombre) ? input.nombre : '';
        this.descripcion = (input.descripcion) ? input.descripcion : '';
        this.categoria = (input.categoria) ? input.categoria : '';
        // this.hEntregas = (input.hEntregas) ?  input.hEntregas : []
        // this.hEnvios = (input.hEnvios) ?  input.hEnvios : []
        this.valorDelivery = (input.valorDelivery) ? input.valorDelivery : 10;
        this.fechaVigenciaDesde = (input.fechaVigenciaDesde) ? input.fechaVigenciaDesde.toISOString() : new Date().toISOString();
        this.fechaVigenciaHasta = (input.fechaVigenciaHasta) ? input.fechaVigenciaHasta.toISOString() : new Date().toISOString();
        this.precio = (input.precio) ? input.precio : 0;
        this.cantidadMinima = (input.cantidadMinima) ? input.cantidadMinima : 10;
        this.cantidadMinima2 = (input.cantidadMinima2) ? input.cantidadMinima2 : 40;
        this.precioCantidadMinima = (input.precioCantidadMinima) ? input.precioCantidadMinima : 0;
        this.precioCantidadMinima2 = (input.precioCantidadMinima2) ? input.precioCantidadMinima2 : 0;
        this.cantidadMaxVtasPorDia = (input.cantidadMaxVtasPorDia) ? input.cantidadMaxVtasPorDia : 0;
        return this;
    };
    return Menu;
}());
exports.Menu = Menu;
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
//# sourceMappingURL=menu.js.map