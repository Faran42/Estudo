{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

//JS percebe a variável fora dos blocos (escopo)
//temos apenas dois escopos para var, global, e local, ou seja, local implica estar dentro do escopo de uma função

console.log(sera)

function teste(){
    var local = 123
}

teste()