// How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];


// sort arrayOfObjects by publishedKey which has an INT value.

// Output sorted array in ASC order

// I'll need to sort the OG array and output it. I'll need to pass a callback function that compares two different objects by a specific key-value pair. To access the correct k-v pair I need to use the correct obj[key] ===

books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
});

console.log(books);
