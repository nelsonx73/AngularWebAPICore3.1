using System;
using Microsoft.AspNetCore.Mvc;
using Summaries.Data;

namespace Summaries.Controllers
{
    [ApiController]
    [Route("api/books")]

    public class BooksController: Controller
    {
        public IBookService _service;
        public BooksController(IBookService service)
        {
            System.Console.WriteLine("Active my service");
            _service = service;
        }

        [HttpGet]
        public IActionResult GetBooks() {
            var allBooks = _service.GetAllBooks();
            return Ok(allBooks);
        }

        
        [HttpGet("{id}")]
        public IActionResult GetBook(int id) {
            var book = _service.GetBookById(id);
            if (book == null) return NotFound();

            return Ok(book);
        }

        [HttpPost]
        public IActionResult PostBook([FromBody] Book book) {
            try
            {
                if(book.Author != null || book.Description != null || book.Title != null) {
                    _service.AddBook(book);
                    return Ok(book);
                }
                return BadRequest("Book was not added!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }    

        }

        [HttpPut("{id}")]
        public IActionResult PutBook(int id, [FromBody] Book book) {
            if (book.Id != id) return BadRequest();

            if (_service.UpdateBook(id, book))
                return Ok();
            else    
                return NotFound();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id) {
            if (_service.DeleteBook(id))
                return Ok();
            else    
                return NotFound();
        }
    }
}