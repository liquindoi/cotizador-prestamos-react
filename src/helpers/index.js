// En este fichero vamos a colocar todas aquellas funciones que van a
// ser llamadas desde los componentes y que podríamos definir como las utils

const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(valor)
}

export {
    formatearDinero
}