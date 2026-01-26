package e_commerce.EntreLanas.dtos;

import e_commerce.EntreLanas.model.Enums.Categoria;

public class ProductoResumenDTO {

    private Long id;
    private String titulo;
    private Double precio;
    private String imagen;
    private Categoria categoria;


    public ProductoResumenDTO() {
    }


    public ProductoResumenDTO(Long id, String titulo, Double precio, String imagen, Categoria categoria) {
        this.id = id;
        this.titulo = titulo;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
    }


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getTitulo() {
        return titulo;
    }


    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    
    public Double getPrecio() {
        return precio;
    }


    public void setPrecio(Double precio) {
        this.precio = precio;
    }


    public String getImagen() {
        return imagen;
    }


    public void setImagen(String imagen) {
        this.imagen = imagen;
    }


    public Categoria getCategoria() {
        return categoria;
    }


    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}