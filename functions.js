class book{
    constructor(Title,Author,Edition,Pages,Date,Genre,Copies){
        this.Title = Title;
        this.Author = Author;
        this.Edition = Edition;
        this.Pages = Pages;
        this.Date = Date;
        this.Genre = Genre;
        this.Copies = Copies;
    }
}

let testBook = new book("hello")

let books = new Array();
books.push(testBook)



function returnBooks(){

}

function deleteBook(Title){

}

function storeBook(){

    let Title = document.getElementById(title);
    let Author = document.getElementById(author);
    let Edition = document.getElementById(edition);
    let Pages = document.getElementById(pages);
    let Date = document.getElementById(date);
    let Genre = document.getElementById(genre);
    let Copies= document.getElementById(copies);
    alert(Title)
    books.push(
        new book(Title,Author,Edition,Pages,Date,Genre,Copies)
    )
    alert(books)
    alert(books[0][Title])
}

function searchByType(type,val){
    let temp = []
    for (i=0;i=len(books),i++;)
        if (books[i].type == val){
            temp.push(books[i])
        }
    return temp
}