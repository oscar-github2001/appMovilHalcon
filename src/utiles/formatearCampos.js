function formaterNumero(numero) {
    const formattedNumber = numero.toLocaleString("es-NI", {
        style: "currency",
        currency: "NIO",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return formattedNumber.replace("NIO", "C$");
}

function formatearFecha(fecha) {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(fecha).toLocaleDateString("es-ES", options);
}

export {formaterNumero, formatearFecha};