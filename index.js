function tableCreate() {
    var body = document.getElementsByClassName('myTable')[0]
    var tbl = document.createElement('table')
    var tbody = document.createElement('tbody')
    for (var i = 0; i < 61; i++) {
        var tr = document.createElement('tr')
        for (var j = 0; j < 61; j++) {
            var td = document.createElement('td')
            tr.appendChild(td)  
        }
    tbody.appendChild(tr)
    }
    tbl.appendChild(tbody)
    body.appendChild(tbl)
}
tableCreate()


var colorPicker = document.querySelector('#colorPicker')
colorPicker.addEventListener('input', function(event){
    var colorSelected = event.target.value
    console.log(colorSelected)
    var myTable = document.querySelector('table')
    myTable.addEventListener('click', function(event){
        for(var i = 0; i < myTable.rows.length; i++){
            for(var j=0; j < myTable.rows[i].cells.length; j++){
                myTable.rows[i].cells[j].onclick = function(event){
                    this.style.backgroundColor = colorSelected
                    this.style.borderColor = colorSelected
                }
            }
        }
    })
})

