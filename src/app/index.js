/**============= Require all the scss and js files =================== */
import '../../style.scss';
import { Config } from '../app/core/services/config.service';
import { Header, cartInit } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { Home } from '../app/home/home';
import { Product, ProductById } from '../app/products/products';
import { Login } from '../app/login/login';
import { Signup } from '../app/signup/signup';

/**============= Handling page change on navigation click keeping header/footer fixed =================== */
const routes = {
  '/signup': Signup,
  '/login': Login,
  '/': Home,
  '/products': Product,
  '/category/:id': ProductById
}

const router = async () => {

  const header = null || document.getElementById('header_container');
  const footer = null || document.getElementById('footer_container');
  const content = null || document.getElementById('page_container');

  // Render the Header and footer of the page
  header.innerHTML = await Header.render();
  await Header.after_render();

  footer.innerHTML = await Footer.render();
  await Footer.after_render();

  // Get the parsed URl from the addressbar
  let request = Config.parseRequestUrl();

  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL = (request.route ? '/' + request.route : '/') + (request.id ? '/:id' : '');
  let page = routes[parsedURL];

  content.innerHTML = request.id ? await page.render(request.id) : await page.render();
  await page.after_render();

  cartInit();
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);