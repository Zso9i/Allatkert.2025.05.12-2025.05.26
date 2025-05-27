function scrollLeft() {
  const container = document.getElementById('carousel');
  container.scrollBy({ left: -150, behavior: 'smooth' });
}

function scrollRight() {
  const container = document.getElementById('carousel');
  container.scrollBy({ left: 150, behavior: 'smooth' });
}
