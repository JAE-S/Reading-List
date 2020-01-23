using Microsoft.AspNetCore.Mvc; 
using Reading_List.Data;

namespace Reading_List.Controllers 

{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        // Injecting Book Service in Controller 
        private IBookService _service; 
        public BooksController(IBookService service)
        {
            _service = service; 
        }
        //Create/Add a new Book
        [HttpPost("AddBook")]
        public IActionResult AddBook([FromBody]Book book)
        {
            _service.AddBook(book);
            return Ok("Added");
        }
        // New Api Endpoint -> ReadAllBooks
        [HttpGet("[action")]
        // Define the implimentation 
        public IActionResult GetBooks(){
            var allBooks = _service.GetAllBooks(); 
            // Return all books 
            return Ok(allBooks); 
        }
          //Update an existing book
        [HttpPut("UpdateBook/{id}")]
        public IActionResult UpdateBook(int id, [FromBody]Book book)
        {
            _service.UpdateBook(id, book);
            return Ok(book);
        }

        //Delete a book (Delete request)
        [HttpDelete("DeleteBook/{id}")]
        public IActionResult DeleteBook(int id)
        {
            _service.DeleteBook(id);
            return Ok();
        }
        //Get a single book by id 
        [HttpGet("singleBook/{id}")]
        public IActionResult GetBookById(int id)
        {
            var book = _service.GetBookById(id);
            return Ok(book);
        }

    }
}