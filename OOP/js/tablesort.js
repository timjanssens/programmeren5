
function TableSort(id, continentalNotation = true) {
    // When calling an object constructor or any of its methods,
    // this’ refers to the instance of the object
    // much like any class-based language
    this.continentalNotation = continentalNotation;
    this.tableElement = document.getElementById(id);
    if (this.tableElement && this.tableElement.nodeName == "TABLE") {
        this.prepare();
    }
}


TableSort.prototype.prepare = function () {
    // add arrow up
    // default is ascending order
    let headings = this.tableElement.tHead.rows[0].cells;
    // headings is een htmlcollection
    for (let i = 0; i < headings.length; i++) {
        headings[i].className = 'asc';
    }

    this.tableElement.addEventListener("click", function (that) {
        return function (event) {
            that.eventHandler(event);
        }
    }(this), false);
}

TableSort.prototype.eventHandler = function (event) {
    // zoek het eerst bovenliggende TH element en sla het op in een variabele
    let elemTarget = event.target.closest('TH');
    if (elemTarget.tagName === 'TH') {
        // alert('kolomkop');
        // sorteer eerst in de richting van de pijl
        this.sortColumn(elemTarget);
        // draai de pijl om om de richting van de volgende
        // sort te bepalen als de gebruiker weer klikt op de kolomkop
        if (elemTarget.className === "asc") {
            elemTarget.className = 'desc';
        } else {
            elemTarget.className = 'asc';
        }
    }
}



TableSort.prototype.sortColumn = function (headerCell) {
    // onthoudt in welke volgorde de kolom nu geordend is
    const order = headerCell.className;
    // alert(order);
    // Get cell data for column that is to be sorted from HTML table
    let rows = this.tableElement.rows;
    let alpha = [],
        numeric = [];
    let alphaIndex = 0,
        numericIndex = 0;
    let cellIndex = headerCell.cellIndex;
    for (let i = 1; rows[i]; i++) {
        let cell = rows[i].cells[cellIndex];
        let content = cell.textContent ? cell.textContent : cell.innerText;

        // let numericValue = content.replace(/(\€\$|\,|\s)/g, "");
        // als er getallen instaan, verwijder alle karakters die geen getallen,
        // punt of komma zijn
        let numericValue;
        if (this.continentalNotation) {
            // vervang vervolgens komma door punt en punt door komma
            numericValue = content.replace(/[^0-9,.]*/g, "").replace(/[,.]/g, function (m) {
                // m is the match found in the string
                // If `,` is matched return `.`, if `.` matched return `,`
                return m === ',' ? '.' : ',';
            });
        } else {
            numericValue = content.replace(/[^0-9,.]*/g, "");           
        }

        // alert(numericValue);
        if (parseFloat(numericValue) == numericValue) {
            numeric[numericIndex++] = {
                value: Number(numericValue),
                row: rows[i]
            }
        }
        else {
            alpha[alphaIndex++] = {
                value: content,
                row: rows[i]
            }
        }
    }

    numeric.sort(function (a, b) {
        if (order === 'asc') {
            return a.value - b.value;
        } else {
            return b.value - a.value;
        }
    });

    alpha.sort(function (a, b) {
        let aName = a.value.toLowerCase();
        let bName = b.value.toLowerCase();
        if (aName < bName) {
            if (order === 'asc') {
                return -1;
            } else {
               return 1
            }            
        }
        else if (aName > bName) {
            if (order === 'asc') {
                return 1;
            } else {
               return -1
            }            
       }
        else {
            return 0;
        }
    });

    let orderdedColumns = [];
    orderdedColumns = numeric.concat(alpha);
    let tBody = this.tableElement.tBodies[0];
    for (let i = 0; orderdedColumns[i]; i++) {
        tBody.appendChild(orderdedColumns[i].row);
    }
}


// console.log("test");

// function TableSort(id) {
//     // When calling an object constructor or any of its methods, 
//     // this’ refers to the instance of the object
//     // much like any class-based language
//     this.tableElement = document.getElementById(id);
//     if (this.tableElement && this.tableElement.nodeName == "TABLE") {
//         this.prepare();
//     }
// }

// window.onload = function () {
//     var jommeke = new TableSort("jommeke");
//     var fruit = new TableSort("fruit");
//     var fruit = new TableSort("fruit-sugar");
// }

// TableSort.prototype.prepare = function () {
//     // add arrow up
//     // default is ascending order
//     var headings = this.tableElement.tHead.rows[0].cells;
//     // headings is een htmlcollection
//     for (let i = 0; i < headings.length; i++) {
//         headings[i].innerHTML = headings[i].innerHTML + '<span>&nbsp;&nbsp;&uarr;</span>';
//         headings[i].className = 'asc';
//     }

//     this.tableElement.addEventListener("click", function (that) {
//         return function (event) {
//             that.eventHandler(event);
//         }
//     }(this), false);
// }

// TableSort.prototype.eventHandler = function (event) {
//     if (event.target.tagName === 'TH') {
//         // alert('kolomkop');
//         this.sortColumn(event.target);
//     } else if (event.target.tagName === 'SPAN') {
//         if (event.target.parentNode.tagName === 'TH') {
//             if (event.target.parentNode.className == "asc") {
//                 event.target.parentNode.className = 'desc';
//                 event.target.innerHTML = "&nbsp;&nbsp;&darr;"
//             } else {
//                 event.target.parentNode.className = 'asc';
//                 event.target.innerHTML = "&nbsp;&nbsp;&uarr;"
//             };
//         }
//     }
// }

// TableSort.prototype.sortColumn = function (headerCell) {
//     // Get cell data for column that is to be sorted from HTML table
//     let rows = this.tableElement.rows;
//     let alpha = [],
//         numeric = [];
//     let alphaIndex = 0,
//         numericIndex = 0;
//     let cellIndex = headerCell.cellIndex;
//     for (var i = 1; rows[i]; i++) {
//         let cell = rows[i].cells[cellIndex];
//         let content = cell.textContent ? cell.textContent : cell.innerText;
//         let numericValue = content.replace(/(\$|\,|\s)/g, "");
//         if (parseFloat(numericValue) == numericValue) {
//             numeric[numericIndex++] = {
//                 value: Number(numericValue),
//                 row: rows[i]
//             }
//         } else {
//             alpha[alphaIndex++] = {
//                 value: content,
//                 row: rows[i]
//             }
//         }
//     }

//     let orderdedColumns = [];
//     numeric.sort(function (a, b) {
//         return a.value - b.value;
//     });
//     alpha.sort(function (a, b) {
//         let aName = a.value.toLowerCase();
//         let bName = b.value.toLowerCase();
//         if (aName < bName) {
//             return -1
//         } else if (aName > bName) {
//             return 1;
//         } else {
//             return 0;
//         }
//     });
//     // Reorder HTML table based on new order of data found in the col array
//     orderdedColumns = numeric.concat(alpha);
//     let tBody = this.tableElement.tBodies[0];
//     for (let i = 0; orderdedColumns[i]; i++) {
//         tBody.appendChild(orderdedColumns[i].row);
//     }


// }