export class Livro{
    private isbn: string = "null";
    private titulo: string = "null";
    private anoPublicacao: number = 0;
    private autor: string = "null"; // Poderia ser do tipo Autor
    private editora: string = "null"; // Poderia ser do tipo Editora

  
    public constructor(isbn: string, titulo: string, anoPublicacao: number, autor: string, editora: string){
       
        this.setIsbn(isbn);
        this.setTitulo(titulo);
        this.setAnoPublicacao(anoPublicacao);
        this.setAutor(autor); 
        this.setEditora(editora);

    }//------------------------------------Construtor


    // --------------------------Métodos getters e setters

    public getIsbn(): string{
        return this.isbn;
    }

    public setIsbn(isbn: string){
        if (isbn.length === 4){
            this.isbn = isbn;
        } else {
            this.isbn = "Indefinido";
        }
    }

    public getTitulo(): string{
        return this.titulo;
    }

    public setTitulo(titulo: string): void{
        this.titulo = titulo;
    }

    public getAnoPublicacao(): number{
        return this.anoPublicacao;
    }


    public setAnoPublicacao(anoPublicacao: number): void{
        let ano = new Date();
        let anoAtual = ano.getFullYear();
        if (anoPublicacao <= anoAtual){ 
            this.anoPublicacao = anoPublicacao;
        } else {
            this.anoPublicacao = 0;
        }
        
    }

    public getAutor(): string{
        return this.autor;
    }

    public setAutor(autor: string): void{
        this.autor = autor;
    }

    public getEditora(): string{
        return this.editora;
    }

    public setEditora(editora: string): void{
        this.editora = editora;
    }//--------------------------------------Fim dos getters e setters



}
