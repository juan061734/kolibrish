export const pageCategory = [
  '<section class="grid">',
  '<article>',
  '<form id="form">',
  '<fieldset>',
  '<legend>Crear categoria</legend>',
  '<label>Nombre:<input type="text" id="nombre" placeholder="Nombre" /></label>',
  '</fieldset>',
  '<div class="buttons">',
  '<button type="submit" class="btn-save btn-sm">💾 Guardar</button>',
  '<button class="btn-blue btn-sm">📃 Nuevo</button>',
  '<button class="btn-search btn-sm">🔍 Consultar</button>',
  '</div>',
  '</form>',
  '</article>',
  '<article>',
  '<fieldset>',
  '<legend>Categorias</legend>',
  '<table>',
  '<thead>',
  '<tr>',
  '<th>Nombres</th>',
  '<th>Acciones</th>',
  '</tr>',
  '</thead>',
  '<tbody id="table-content"></tbody>',
  '</table>',
  '</fieldset>',
  '</article>',
  '</section>',
  '<script src="./js/services/admin/categorias/services.js" type="module"></script>'
].join('')
