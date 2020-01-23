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

    }
}