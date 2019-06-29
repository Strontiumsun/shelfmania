Shelfmania

Project Overview:

This app will offer visitors questions (to test, one question) that will prompt them to enter a favorite book. Users will write the title of the book and press a search button. The search button will query Google Books to see if that book is in their database. If Google Books finds a match, that response is shown to the user. The user can then pick the correct book. The user's display name, book title, author of book, link to google books and book cover image will all be saved in a Mongo database.

Users will also be able to see what other people suggested for the favorite book question. There will be a scrollable feed which will retrieve teh data stored in the Mongo database and display it on the page. The user will be able to see the book's cover and click on the book to learn more about it on google books.

Components:
- back end
I already have a working Google Books Search formula from the previous Google Books project. I will reuse that code. I also need to set up a Mongo database to save the favorite book information. 
- front end
I invision this site having two pages. One page with the question and search field, and one page that confirms your submission and shows you others' choices.

