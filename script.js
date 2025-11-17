let theme = false;

function switchTheme() {
  const navbar = document.getElementById('navbar');
  const cards = document.querySelectorAll('.card');
  const tables = document.querySelectorAll('.table');
  const cardColumns = document.querySelectorAll(".column");
  const footerText = document.querySelector('.navbar-text');
  const h1Title = document.getElementById('h1_title');

  if (theme === false) {
    document.body.classList.add('bg-dark');
    document.body.classList.remove('bg-white');

    navbar.classList.remove('navbar-light', 'bg-light');
    navbar.classList.add('navbar-dark', 'bg-dark');

    cards.forEach(card => {
      card.classList.add("text-white", "bg-dark", "border-light");
      card.classList.remove("text-dark", "bg-white", "border-dark");
    });

    tables.forEach(table => {
      table.classList.add('table-dark');
      table.classList.remove('table-light');
    });

    cardColumns.forEach(card => {
      card.classList.remove('col');
      card.classList.add('col-12');
    });

    footerText.style.paddingLeft = "1700px";
    footerText.style.display = "block";
    footerText.classList.add('text-white');
    footerText.classList.remove('text-dark');

    h1Title.innerHTML = "This is the dark theme";
    h1Title.classList.add('text-white');
    h1Title.classList.remove('text-dark');

  } else {
    document.body.classList.add('bg-white');
    document.body.classList.remove('bg-dark');

    navbar.classList.remove('navbar-dark', 'bg-dark');
    navbar.classList.add('navbar-light', 'bg-light');

    cards.forEach(card => {
      card.classList.add("text-dark", "bg-white", "border-dark");
      card.classList.remove("text-white", "bg-dark", "border-light");
    });

    tables.forEach(table => {
      table.classList.remove('table-dark');
      table.classList.add('table-light');
    });

    cardColumns.forEach(card => {
      card.classList.remove('col-12');
      card.classList.add('col');
    });

    footerText.style.paddingLeft = "0px";
    footerText.classList.remove('text-white');
    footerText.classList.add('text-dark');

    h1Title.innerHTML = "This is the light theme";
    h1Title.classList.remove('text-white');
    h1Title.classList.add('text-dark');
  }

  theme = !theme;
}
