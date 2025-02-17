
export function templateImage(image) {
    const {
      largeImageURL,
      webformatURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = image;
    return `
    <li class="galery-item">
     <a href="${largeImageURL}" class="gallery-link" >
    <img src="${webformatURL}"
      class="gallery-image"
      alt="${tags}"
    />
  </a>
  <div class="details">
  <p>${likes}</p>
  <p>${views}</p>
  <p>${comments}</p>
  <p>${downloads}</p>

  </div>
    </li>
    `;
};
export function templateImages(images) {
    return images.map(templateImage).join("")
    }
