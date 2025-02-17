import { getImages } from "./js/pixabay-api";
import { templateImages } from "./js/render-functions";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const searchform = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchform.elements.searchQuery.value.trim();
    if (query === "") {
        iziToast.warning({
            message: "Please, fill the form!",
            position: "topRight"
        })
        return
    }
    getImages(query)
        .then(
            data =>
        {
        console.log(data);
        const markup = templateImages(data.hits);
        gallery.innerHTML = markup;
      })

      .catch(error => {
        iziToast.error({
          title: 'Error',
          message: 'Something went wrong, try again later!',
        });
        console.error(error);
      });
      new SimpleLightbox('.gallery a').refresh();

    e.target.reset();
})
