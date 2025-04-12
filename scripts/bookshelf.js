const bookData = [
   {
      src: "../../images/books/the_will_to_change.jpg",
      alt: "The Will to Change",
      title: "The Will to Change",
      author: "bell hooks",
      year: "2004",
      description: "A powerful exploration of patriarchy, love, and healing for men.",
      link: "https://dn721601.ca.archive.org/0/items/the-will-to-change-men-masculinity-and-love-by-bell-hooks-z-lib.org.epub/The%20Will%20to%20Change%20Men%2C%20Masculinity%2C%20and%20Love%20by%20bell%20hooks%20%28z-lib.org%29.epub.pdf"
   },
   {
      src: "../../images/books/pedagogy_of_the_oppressed.jpg",
      alt: "Pedagogy of the Oppressed",
      title: "Pedagogy of the Oppressed",
      author: "Paulo Freire",
      year: "1970",
      description: "A foundational text on critical pedagogy and liberation education.",
      link: "https://www.historyisaweapon.com/defcon2/pedagogy/"
   },
   {
      src: "../../images/books/capitalist_realism.jpg",
      alt: "Capitalist Realism",
      title: "Capitalist Realism",
      author: "Mark Fisher",
      year: "2009",
      description: "An incisive critique of neoliberal ideology and its cultural consequences.",
      link: "https://files.libcom.org/files/Capitalist%20Realism_%20Is%20There%20No%20Alternat%20-%20Mark%20Fisher.pdf"
   },
   {
      src: "../../images/books/tao_te_ching.jpg",
      alt: "Tao Te Ching",
      title: "Tao Te Ching",
      author: "Lao Tzu",
      year: "4th c. BCE",
      description: "words words words",
      link: "https://github.com/nrrb/tao-te-ching/blob/master/Ursula%20K%20Le%20Guin.md"
   }
];

function updateBooks(mainIndex) {
	const shelf = document.getElementById("bookshelf");
	shelf.innerHTML = "";

	const prevIndex = (mainIndex - 1 + bookData.length) % bookData.length;
	const nextIndex = (mainIndex + 1) % bookData.length;

	const makeBook = (book, index) => {
		const wrapper = document.createElement("div");
		wrapper.className = "book-wrapper small";

		const img = document.createElement("img");
		img.src = book.src;
		img.alt = book.alt;
		img.className = "book";

		img.onclick = () => updateBooks(index);
		wrapper.appendChild(img);
		return wrapper;
	};

	// Left book
	shelf.appendChild(makeBook(bookData[prevIndex], prevIndex));

	// Main column
	const mainBook = bookData[mainIndex];
	const mainColumn = document.createElement("div");
	mainColumn.className = "book-main-column";

	// Title + Author
	const metaTop = document.createElement("div");
	metaTop.className = "book-meta-top";

	const titleEl = document.createElement("div");
	titleEl.className = "book-title";
	titleEl.innerText = mainBook.title;

	const authorEl = document.createElement("div");
	authorEl.className = "book-author";
	authorEl.innerText = `${mainBook.author} (${mainBook.year})`;

	metaTop.appendChild(titleEl);
	metaTop.appendChild(authorEl);

	// Main image
	const imageWrapper = document.createElement("div");
	imageWrapper.className = "book-image";

	const mainImg = document.createElement("img");
	mainImg.src = mainBook.src;
	mainImg.alt = mainBook.alt;
	mainImg.className = "book main";

	if (mainBook.link) {
		const link = document.createElement("a");
		link.href = mainBook.link;
		link.target = "_blank";
		link.appendChild(mainImg);
		imageWrapper.appendChild(link);
	} else {
		imageWrapper.appendChild(mainImg);
	}

	// Description
	const description = document.createElement("div");
	description.className = "book-description";
	description.innerText = mainBook.description;

	mainColumn.appendChild(metaTop);
	mainColumn.appendChild(imageWrapper);
	mainColumn.appendChild(description);
	shelf.appendChild(mainColumn);

	// Right book
	shelf.appendChild(makeBook(bookData[nextIndex], nextIndex));
}

updateBooks(1);

 