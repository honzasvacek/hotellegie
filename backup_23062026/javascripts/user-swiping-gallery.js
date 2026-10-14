
  const galleries = {
    'gallery-dance': {
      images: [
        "/assets/fotky_hotelu/tanecni-kurzy.webp",
        "/assets/fotky_hotelu/tanecni-kurzy2.webp",
        "/assets/fotky_hotelu/tanecni-kurzy3.webp",
        "/assets/fotky_hotelu/tanecni-kurzy4.webp",
        "/assets/fotky_hotelu/tanecni-kurzy5.webp",
        "/assets/fotky_hotelu/tanecni-kurzy6.webp",
        "/assets/fotky_hotelu/tanecni-kurzy7.webp",
        "/assets/fotky_hotelu/tanecni-kurzy8.webp"
      ],
      index: 0
    },
    'gallery-veterans': {
      images: [
        "/assets/fotky_hotelu/sraz-valecnych-veteranu.webp",
        "/assets/fotky_hotelu/sraz-valecnych-veteranu2.webp",
        "/assets/fotky_hotelu/sraz-valecnych-veteranu3.webp",
        "/assets/fotky_hotelu/sraz-valecnych-veteranu4.webp",
        "/assets/fotky_hotelu/sraz-valecnych-veteranu5.webp",
        "/assets/fotky_hotelu/sraz-valecnych-veteranu6.webp",
        "/assets/fotky_hotelu/sraz-valecnych-veteranu7.webp",
        "/assets/fotky_hotelu/sraz-valecnych-veteranu8.webp",
        "/assets/fotky_hotelu/sraz-valecnych-veteranu9.webp",
        "/assets/fotky_hotelu/sraz-valecnych-veteranu10.webp",
        "/assets/fotky_hotelu/sraz-valecnych-veteranu11.webp",
        "/assets/fotky_hotelu/sraz-valecnych-veteranu12.webp",
        "/assets/fotky_hotelu/sraz-valecnych-veteranu13.webp"
      ],
      index: 0
    }
  };

  function updateGallery(id) {
    const gallery = galleries[id];
    const img = document.querySelector(`#${id} img`);
    const counter = document.querySelector(`#${id}-counter`);
    img.src = gallery.images[gallery.index];
    counter.textContent = `${gallery.index + 1} of ${gallery.images.length}`;
  }

  function nextImage(id) {
    const gallery = galleries[id];
    gallery.index = (gallery.index + 1) % gallery.images.length;
    updateGallery(id);
  }

  function prevImage(id) {
    const gallery = galleries[id];
    gallery.index = (gallery.index - 1 + gallery.images.length) % gallery.images.length;
    updateGallery(id);
  }

  // Initialize both galleries
  updateGallery('gallery-dance');
  updateGallery('gallery-veterans');

