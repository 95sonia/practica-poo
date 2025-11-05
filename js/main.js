//=========================CREAR CLASE LIBRO==================================

class Libro {
    constructor(titulo, autor, isbn, _prestado) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this._prestado = _prestado;
    }
    prestar = function () {
      return this._prestado = "prestado";
    }

    devolver = function () {
       return this._prestado = "disponible";
    }

    getEstado = function () {
        if (this._prestado === "prestado") {
            return "prestado";
        } else {
            return "disponible";
        }
    }
}

const libro = new Libro("Cien años de soledad", "Gabriel García Márquez", "11111");
console.log(libro.getEstado()); // "disponible"

libro.prestar();
console.log(libro.getEstado()); // "prestado"

libro.devolver();
console.log(libro.getEstado()); // "disponible"

//=========================CREAR CLASE BIBLIOTECA==============================

class Biblioteca {
    constructor(nombre) { 
        this.nombre = nombre;
        this.libros = [];
    }
    agregarLibro = function (libro) {
      return this.libros.push(libro);
    }
    buscarPorISBN = function (isbn) {
      return this.libros.filter((libro) => libro.isbn === isbn);
    }
    prestarLibro = function (isbn) {
      return  ;
    }
    devolverLibro = function (isbn) {
      return ;
    }
    mostrarLibros = function () {
      return ;
    }
}

const biblio = new Biblioteca("Biblioteca Central");
const libro1 = new Libro("1984", "George Orwell", "12345");

biblio.agregarLibro(libro1);
biblio.prestarLibro("12345");
biblio.mostrarLibros(); // muestra el libro como "Prestado"