import MOCK_DATA from '../data/MOCK_DATA.json'

export const pedirDatos = (item) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
                resolve(MOCK_DATA)
                parseInt(item.price)
        }, 1)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const item = MOCK_DATA.find((el) => el.id === id)

            if (item) {
                resolve(item)
            } else {
                reject({
                    error: 'No se encontrĂ³ ese producto'
                })
            }
        }, 1)
    })
}
