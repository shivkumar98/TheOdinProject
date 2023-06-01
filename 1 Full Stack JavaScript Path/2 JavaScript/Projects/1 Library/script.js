let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return title+" by "+author+", "+pages+" pages"+ ", "+(read?"has been read":"not read yet")
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


const theHobbit = new Book("The Hobbit",
"J.R.R. Tolkien", 295, false) 

addBookToLibrary(theHobbit)

let table = document.getElementById('table')

console.log(myLibrary)


let html = ""
for (let i=0;i<myLibrary.length;i++){
    let book = myLibrary[i]
    console.log("book: "+book.info())
    const toggleReadStatus = "<button id='" + i + "'>Change read status</button>"


    let tableRow = "<tr>\n"
    tableRow = tableRow.concat("<td>"+book.title+"</td>")
    tableRow = tableRow.concat("<td>"+book.author+"</td>")
    tableRow = tableRow.concat("<td>"+book.pages+"</td>")
    tableRow = tableRow.concat("<td>"+book.read+"</td>")
    tableRow = tableRow.concat("<td>"+toggleReadStatus+"</td>") 


    tableRow = tableRow.concat("</tr>")

    html = html.concat(tableRow)
}

document.getElementById('tbody').innerHTML += html
