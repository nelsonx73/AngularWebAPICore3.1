using System.Collections.Generic;
using System.Linq;

namespace  Summaries.Data {

    public class BookService : IBookService
    {
        public bool DeleteBook(int id)
        {
            var book = Data.Books.FirstOrDefault(c => c.Id == id);
            if (book != null) {
                Data.Books.Remove(book);
            }

            return (book == null) ? false : true;
        }

        public List<Book> GetAllBooks()
        {
            return Data.Books.ToList();
        }

        public Book GetBookById(int id)
        {
            return Data.Books.FirstOrDefault(c => c.Id == id);
             
        }

        public void AddBook(Book book)
        {
            Data.Books.Add(book);
        }

        public bool UpdateBook(int id, Book book)
        {
            var oldBook = Data.Books.FirstOrDefault(c => c.Id == id);

            if (oldBook != null) {
                oldBook.Title = book.Title;
                oldBook.Description = book.Description;
                oldBook.Author = book.Author;
                oldBook.Rate = book.Rate;
                oldBook.DateStart = book.DateStart;
                oldBook.DateRead = book.DateRead;                 
            }

            return oldBook == null ? false : true;
        }
    }



} 