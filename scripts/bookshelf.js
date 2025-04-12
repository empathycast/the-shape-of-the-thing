const bookData = [
   {
      src: "../../images/books/the_will_to_change.jpg",
      alt: "The Will to Change",
      link: "https://dn721601.ca.archive.org/0/items/the-will-to-change-men-masculinity-and-love-by-bell-hooks-z-lib.org.epub/The%20Will%20to%20Change%20Men%2C%20Masculinity%2C%20and%20Love%20by%20bell%20hooks%20%28z-lib.org%29.epub.pdf"
   },
   {
      src: "../../images/books/pedagogy_of_the_oppressed.jpg",
      alt: "Pedagogy of the Oppressed",
      link: "https://www.historyisaweapon.com/defcon2/pedagogy/"
   },
   {
      src: "../../images/books/capitalist_realism.jpg",
      alt: "Capitalist Realism",
      link: "https://files.libcom.org/files/Capitalist%20Realism_%20Is%20There%20No%20Alternat%20-%20Mark%20Fisher.pdf"
   }
];

function updateBooks(mainIndex) {
   const shelf = document.getElementById("bookshelf");
   shelf.innerHTML = "";

   const prevIndex = (mainIndex - 1 + bookData.length) % bookData.length;
   const nextIndex = (mainIndex + 1) % bookData.length;

   [prevIndex, mainIndex, nextIndex].forEach((index) => {
      const img = document.createElement("img");
      img.src = bookData[index].src;
      img.alt = bookData[index].alt;
      img.className = "book" + (index === mainIndex ? " main" : "");
      img.onclick = () => updateBooks(index);

      // If it's the main book, wrap in a link
      if (index === mainIndex) {
         const link = document.createElement("a");
         link.href = bookData[index].link || "#"; // fallback if no link
         link.target = "_blank"; // optional: open in new tab
         link.appendChild(img);
         shelf.appendChild(link);
      } else {
         shelf.appendChild(img);
      }
   });
}

updateBooks(1);