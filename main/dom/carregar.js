index = function($) {
    let valor = 0

    function incrementar() {
        $('#val').html(++valor)
    }
    
    $(function() {
        $('#click').on('click',incrementar)
    })

    return {
        incrementar
    }
}

// pelo fato do teste estar utilizando rewire
// não é necessário utilizar export
// module.exports = index;