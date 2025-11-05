/*=========================CREAR CLASE LIBRO==================================

Crear/declarar una clase Libro que represente un libro dentro de la biblioteca. 
Una CLASE es una plantilla, un molde para crear objetos que tienen PROPIEDADES = datos; y MÉTODOS = acciones.
El CONSTRUCTOR inicializa las propiedades al crear un objeto, le da los datos que NECESITA para funcionar.
this. = "ESTE OBJETO" -> es una referencia del objeto actual, por ejemplo this.nombre quiere decir el nombre de este objeto
*/

class Libro {
    constructor(titulo, autor, isbn, prestado) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this._prestado = prestado; // esto no debería ser prestado...porque si acabas de crear un libro no puede estar prestado 
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

const libro = new Libro("Cien años de soledad", "Gabriel García Márquez", "11111"); // Instanciar un objeto de la clase Libro
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
    agregarLibro(libro) {
        return this.libros.push(libro);
    }
    buscarPorISBN(isbn) {
        return this.libros.find((libro) => libro.isbn === isbn);
    }
    // 1º que exista el libro segun el isbn, despues comprobar su estado -> si esta prestado no se puede prestar. si no esta prestado lo prestas
    prestarLibro(isbn) {
        const libroEncontrado = this.buscarPorISBN(isbn)
        if (libroEncontrado.getEstado() === "prestado") {
            return `El libro ${libroEncontrado.titulo} ya está prestado`;
        } else {
            return libroEncontrado.prestar();
        }
    }
    // 1º que exista el libro segun el isbn, despues comprobar su estado -> si esta prestado se devuelve. si no esta prestado no se puede devolver
    devolverLibro(isbn) {
        const libroEncontrado = this.buscarPorISBN(isbn)
        if (libroEncontrado.getEstado() === "prestado") {
            return libroEncontrado.devolver();
        } else {
            return `El libro ${libroEncontrado.titulo} no estaba prestado`;
        }
    }
    mostrarLibros() {
        this.libros.forEach(libro => {
            console.log('El libro ' + libro.titulo + ' está ' + libro.getEstado());
        });
    }
}

const biblio = new Biblioteca("Biblioteca Central");
const libro1 = new Libro("1984", "George Orwell", "12345");
const libro2 = new Libro("Piratas", "Pepe Garcia", "98000");


biblio.agregarLibro(libro1);
biblio.agregarLibro(libro2);
biblio.prestarLibro("12345");
biblio.prestarLibro("98000"); // libro 1984 está prestado
biblio.devolverLibro("12345");  // libro Piratas está disponible
console.log(biblio.mostrarLibros());


