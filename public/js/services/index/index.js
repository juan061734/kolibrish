// #region atributos
import { searchById } from '../../services/general/search.js'
import { data } from '../../services/general/local/data.js'
import { pageIndex } from './page.js'

const listProductos = []
let categoriasList
let productosList
let dataCategory
// #endregion
// #region events
window.addEventListener('load', () => {
  const content = document.getElementById('content')
  content.innerHTML = pageIndex
  if (content) {
    categoriasList = document.getElementById('categorias')
    productosList = document.getElementById('productos')
    addButtons(data)
    categoriasList.addEventListener('click', (e) => {
      setupProducts(parseInt(e.target.value))
    })
  }
})
// #endregion

// #region functions
const addButtons = (data) => {
  if (data.length) {
    data.forEach((data) => {
      categoriasList.innerHTML += `
      <button value="${data.id}" class="btn-sm btn-fucsia">${data.nombre}</button>
      `
      listProductos.push({ id: data.id, productos: data.productos })
    })
  }
}

const setupProducts = (id) => {
  dataCategory = searchById(id, listProductos)
  if (dataCategory) {
    productosList.innerHTML = dataCategory.productos.map((producto) => {
      return `
      <div class="cards">
        <img
        src="https://images.wallpaperscraft.com/image/single/astronaut_spacesuit_helmet_1185318_480x854.jpg"
        alt=""
        />
        <h3 class="title">${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <button class="btn-white btn-xs">COMPRAR</button>
      </div>
      `
    })
  }
}
// #endregion