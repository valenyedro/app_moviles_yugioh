import { ErrorComponent, ProductErrorComponent } from "../components/errorComponent.js"

export const NoProductsFound = () => {
    document.getElementById('cards_section').innerHTML = "";
    document.getElementById('cards_section').innerHTML += ErrorComponent();
    document.getElementById('error_h4').innerHTML = "";
    document.getElementById('error_h4').innerHTML += 'Lo sentimos, no encontramos productos que coincidan con la búsqueda.<br><br>¡Puedes intentar de nuevo!';
}

export const IndexProductsError = () => {
    document.getElementById('cards_section').innerHTML = "";
    document.getElementById('cards_section').innerHTML += ErrorComponent();
    document.getElementById('error_h4').innerHTML = "";
    document.getElementById('error_h4').innerHTML += 'Cargando...';
}

export const ProductsSearchError = () => {
    document.getElementById('cards_section').innerHTML = "";
    document.getElementById('cards_section').innerHTML += ProductErrorComponent();
    document.getElementById('error_h4').innerHTML = "";
    document.getElementById('error_h4').innerHTML += 'No existen cartas para los parámetros establecidos.';
}

export const ProductoDetailError = () => {
    document.getElementById('product_detail').innerHTML = "";
    document.getElementById('product_detail').innerHTML += ErrorComponent();
    document.getElementById('error_h4').innerHTML = "";
    document.getElementById('error_h4').innerHTML += 'Cargando...';
}