import { Livro } from "./Livro"
export class Biblioteca{
    private livros: Livro[] = [];



    public consultarLivro(isbn: String): boolean{
        for (let i = 0; i < this.livros.length; i++){
           if (this.livros[i].getIsbn() === isbn){
               return true;
             }    
        }
        return false;
       
    }//--------------------------------------------consultarLivro()

    public adicionarLivro(livro: Livro): boolean{
        for (let i = 0; i < this.livros.length; i++){
            if (this.livros[i].getIsbn() === livro.getIsbn()){
                return false;
            }

        }
        this.livros.push(livro);
        return true;
   
    }//------------------------------------------------adicionarLivro()

    public mostrarLivro(isbn: string): void{
        for (let i = 0; i < this.livros.length; i++){
            if (this.livros[i].getIsbn() === isbn){
                console.log("ISBN: " + this.livros[i].getIsbn());
                console.log("Título: " + this.livros[i].getTitulo());
                console.log("Ano de publicação: " + this.livros[i].getAnoPublicacao());
                console.log("Autor: " + this.livros[i].getAutor());
                console.log("Editora: " + this.livros[i].getEditora());
                break;
            }

        }
    }//--------------------------------------------------mostrarLivro()

    public removerLivro(isbn: string): boolean{
        for (let i = 0; i < this.livros.length; i++){
            if (this.livros[i].getIsbn() === isbn){
                this.livros.splice(i, 1);
                return true;
            }
        }
        return false;
    }//-------------------------------------------removerLivro()

    /*
    public retornaLista(): void{
        for (let i = 0; i < this.livros.length; i++){
            console.log(this.livros[i].getIsbn());
            console.log(this.livros[i].getTitulo());
            console.log(this.livros[i].getAnoPublicacao());
            console.log(this.livros[i].getAutor());
            console.log(this.livros[i].getEditora());
            console.log("");
        }
    }
    
*/
    public tamanho(): number{
        return this.livros.length
    }//---------------------------------------tamanho()
   



}