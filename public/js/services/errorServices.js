import { ErrorComponent, ProductErrorComponent } from "../components/errorComponent.js"


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

export const HistorialError = () => {
    document.getElementById('cards_section').innerHTML = "";
    document.getElementById('cards_section').innerHTML += ProductErrorComponent();
    document.getElementById('error_h4').innerHTML = "";
    document.getElementById('error_h4').innerHTML += 'Todavía no se han consultado cartas.';
}

export const ProductoDetailError = () => {
    document.getElementById('product_detail').innerHTML = "";
    document.getElementById('product_detail').innerHTML += ErrorComponent();
    document.getElementById('error_h4').innerHTML = "";
    document.getElementById('error_h4').innerHTML += 'Cargando...';
}