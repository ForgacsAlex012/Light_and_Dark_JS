function switchTheme() {
  document.body.classList.add('bg-dark')

  const navbar = document.getElementById('navbar')
  const cards = document.querySelectorAll('.card')

  navbar.classList.remove('navbar-light', 'bg-light')
  navbar.classList.add('navbar-dark', 'bg-dark')

  cards.forEach(card => {
    card.classList.add("text-white", "bg-dark", "border-light")
  })
}