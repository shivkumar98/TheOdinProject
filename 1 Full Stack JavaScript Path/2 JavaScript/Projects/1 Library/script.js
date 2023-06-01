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

function renderTableBody() {
    let html = "<tr><th>Title</th><th>Author</th><th>Pages</th><th>Read?</th><th>Change Read status</th><th>Delete</th></tr>"
    for (let i=0;i<myLibrary.length;i++){
        let book = myLibrary[i]
        console.log("book: "+book.info())
        const toggleReadStatus = "<button onClick='toggleReadStatus("+i+")'>Change read status</button>"
        const deleteBookButton = "<button onClick='deleteBook("+i+")'>Delete</button>"



        let tableRow = "<tr>"
        tableRow = tableRow.concat("<td>"+book.title+"</td>")
        tableRow = tableRow.concat("<td>"+book.author+"</td>")
        tableRow = tableRow.concat("<td>"+book.pages+"</td>")
        tableRow = tableRow.concat("<td>"+book.read+"</td>")
        tableRow = tableRow.concat("<td>"+toggleReadStatus+"</td>") 
        tableRow = tableRow.concat("<td>"+deleteBookButton+"</td>") 
        tableRow = tableRow.concat("</tr>")
        html = html.concat(tableRow)
    }
    document.getElementById('table').innerHTML = html
}

renderTableBody()


function toggleReadStatus (i) {
    //alert("button clicked: "+i)
    isBookRead = myLibrary[i].read 
    myLibrary[i].read = !isBookRead
    console.log(myLibrary[i])
    renderTableBody()
    //window.location.reload(); // does not work
    // Tom's suggestion:
    // - traverse the DOM from the button to the row
    // - go down from the row to the read value
    // - update the innerHTML 
}

function deleteBook(i){
    myLibrary.splice(i,1)
    renderTableBody()
}

function openForm() {
    document.getElementById("bookForm").style.display = "block";

}

function closeForm() {
    document.getElementById("form").reset();
    document.getElementById("bookForm").style.display = "none";

}

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
    let title = document.getElementById('title')?document.getElementById('title').value:""
    let author = document.getElementById('author')?document.getElementById('author').value:""
    let pages = document.getElementById('pages')!=null?document.getElementById('pages').value:""
    let read = document.getElementById('read').checked;
    console.log("read: "+read)
    if (title!="" && author!="" && pages!=""){
        const book = new Book(title, author, pages, read);
        myLibrary.push(book)
        renderTableBody()
        closeForm()
    } else {
        alert("fill in the form!")
    }


    
  }, false);
