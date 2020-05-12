using System.Collections.Generic;
using Summaries.Data;

namespace Summaries.Data
{
    public interface IBookService {
        List<Book> GetAllBooks();
        Book GetBookById(int id);
        void AddBook(Book book);

        bool UpdateBook(int id, Book book);
        bool DeleteBook(int id);

    }
}