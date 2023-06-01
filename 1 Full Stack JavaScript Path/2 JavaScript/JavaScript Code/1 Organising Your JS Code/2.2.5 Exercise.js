function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return title+" by "+author+", "+pages+" pages"+ ", "+(read?"has been read":"not read yet")
    }
}

const theHobbit = new Book("The Hobbit",
"J.R.R. Tolkien", 295, false) 

console.log(theHobbit.info()) // The Hobbit by J.R.R. Tolkien, 295 pages, not read yet

const aSongOfIceAndFire = new Book("A Game of Thrones", "G.R.R Martin", 1014, true)

console.log(aSongOfIceAndFire.info()) // A Game of Thrones by G.R.R Martin, 1014 pages, has been read