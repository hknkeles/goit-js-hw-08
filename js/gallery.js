const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".gallery");

createImage(images);

gallery.addEventListener("click", function (event) {
  event.preventDefault();

  //üzerine basılan yeri alma
  const clickedImage = event.target;

  //eğer üzerine basılan yer bir img değilse sonlandır
  if (clickedImage.nodeName !== "IMG") return;

  // üzerine basılan resmin data-source attribute'nde yer alan URL seçimi
  const originalImageURL = clickedImage.getAttribute("data-source");
  console.log("Büyük resim URL: " + originalImageURL);



    // Resme tıklayınca lightbox açılsın
  const instance = basicLightbox.create(`
        <img src="${originalImageURL}" width="800" height="600">
    `);

  instance.show();

  // Escape tuşuna basıldığında lightbox'ı kapatma
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") instance.close();
  });
});

function createImage(images) {
  for (const image of images) {
    const img = newImageElement(image);
    gallery.appendChild(img);
  }
}

function newImageElement(image) {
  //a etiketi
  const newlink = document.createElement("a");
  newlink.className = "gallery-link";
  newlink.href = image.original;

  // new img
  const newImage = document.createElement("img");
  newImage.className = "gallery-image";
  newImage.src = image.preview;
  newImage.setAttribute("data-source", image.original);
  newImage.alt = image.description;

  // new Li
  const newLi = document.createElement("li");
  newLi.className = "gallery-item";

  newlink.appendChild(newImage);
  newLi.appendChild(newlink)

  return newLi;
}
