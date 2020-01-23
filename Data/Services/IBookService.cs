using System.Collections.Generic; 
using Reading_List.Data; 

namespace Reading_List.Data
{
    public interface IBookService 
    {
        List<Book> GetAllBooks(); 
        // Method to return a single book 
        Book GetBookById(int id); 
        void UpdateBook(int id, Book newBook); 
        void DeleteBook(int id);
        void AddBook(Book newBook); 
    }
}