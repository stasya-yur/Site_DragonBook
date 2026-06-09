document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header");
  const footerContainer = document.getElementById("footer");

  // Получаем имя текущего HTML-файла
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  if (headerContainer) {
      // Пункты меню
      const menuItems = [
          { title: "Каталог", url: "/index.html" },
          { title: "Про сайт", url: "/html/about_us.html" },
          { title: "Найбагатші дракони", url: "/html/richest.html" }
      ];

      const adminItems = [
          { title: "Додати товар", url: "../html/add-product.html" },
          { title: "Призначити адміністратора", url: "../html/add-new-admin.html" },
          { title: "Обробка замовлень", url: "../html/order-control.html" }
      ];

      // Базовая часть хедера (логотип и навигация)
      let headerHTML = `
      <header class="header" id="header-inner">
          <div id="header-container">
              <div class="container header__container">
                  <div class="header__nav">            
                      <img class="header__logo" src="../../img/logo.png" alt="logo" width="150" height="150">
                      <ul class="header__list">
      `;

      // Рендерим пункты меню
      menuItems.forEach(item => {
          const isActive = currentPath === item.url.split("/").pop() ? "active" : "";
          headerHTML += `<li><a href="${item.url}" class="${isActive}">${item.title}</a></li>`;
      });

      // Добавляем админку
      headerHTML += `
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle">Адміністрування</a>
                      <ul class="dropdown-menu">
      `;
      
      adminItems.forEach(item => {
          headerHTML += `<li><a href="${item.url}">${item.title}</a></li>`;
      });

      headerHTML += `
                      </ul>
                  </li>
              </ul>
         

          <ul class="btn__list-nav">
              <li><a href="login.html" class="btn-login">Вхід</a></li> 
          </ul> </div>

      </div> `;

      // 🌟 ПРОВЕРКА: Если это главная страница, добавляем баннер с цитатой
      // Проверяем на "index.html" или на пустой путь (если сайт открыт просто по корню папки)
      if (currentPath === "index.html" || currentPath === "") {
          headerHTML += `
          <div class="header__title-container">
              <h1 class="header__title">Sapiens dominabitur astris</h1>
              <p class="header__appeal">Мудрість панує над зірками</p>
          </div>
          `;
      }

      // Закрываем общие теги хедера
      headerHTML += `
          </div>
      </header>
      `;

      headerContainer.innerHTML = headerHTML;
  }

  // Футер
  if (footerContainer) {
      footerContainer.innerHTML = `
          <footer class="footer">
              <div class="container">
            <div class="footer__content">
                <div class="footer__company">
                    <img class="footer__logo" src="img/logo.png" alt="logo" width="150" height="150">
                    <div class="footer__development">
                        <p>© Book Dragon, 2026</p>
                        <p>Design: Anastasia Yuriichuk</p>
                    </div>
                </div>
                <div class="footer__nav">
                    <div class="footer__column">
                        <div class="footer__nav-catalog">  <!--Навигация. Повставлять ссылки (можно не заморачиваться и забить, давай признаем, всем абсолютно на все похуй)-->
                            <h2><a href="html/index.html">Каталог</a></h2> <!--Кстати, сайт адаптивный (уже не оч), но кому на это не насрать-->
                            <ul>
                            <li><a href="#">Художня література</a></li>
                            <li><a href="#">Дитяча література</a></li>
                            <li><a href="#">Пізнавальна література</a></li>
                            <li><a href="#">Дім та вдпочинок</a></li>
                            <li><a href="#">Подарункові видання</a></li>
                            <li><a href="#">Ігри</a></li>
                            </ul>
                        </div>
                        <h2><a href="#">Новинки</a></h2>
                    
                        <h2><a href="#">Про сайт</a></h2>
                    </div>
                </div>
            </div>
        </div>
          </footer>
      `;
  }
});