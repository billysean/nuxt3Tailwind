export default (req, res) => {
    return {
        "Subsidi": {
            qty: 4520000,
            change: 3000000,
            changeType: 'increase'
        }
        , 
        "Produksi": {
            qty: 20000,
            change: 123,
            changeType: 'increase'
        },
        "Delivery": {
            qty: 200,
            change: 12,
            changeType: 'decrease'
        }
    }
}