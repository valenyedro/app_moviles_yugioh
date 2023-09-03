import { ErrorComponent } from "../components/errorComponent.js"

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