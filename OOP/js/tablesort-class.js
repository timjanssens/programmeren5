class TableSort {
    constructor(id) {
        // When calling an object constructor or any of its methods,
        // this’ refers to the instance of the object
        // much like any class-based language
        this.tableElement = document.getElementById(id);
        if (this.tableElement && this.tableElement.nodeName == "TABLE") {
            this.prepare();
        }
    }
    prepare() {
        // add arrow up
        // default is ascending order
        var headings = this.tableElement.tHead.rows[0].cells;
        // headings is een htmlcollection
        for (let i = 0; i < headings.length; i++) {
            headings[i].innerHTML = headings[i].innerHTML + '<span>&nbsp;&nbsp;&uarr;</span>';
            headings[i].className = 'asc';
        }
        this.tableElement.addEventListener("click", function(that) {
            return function(event) {
                that.eventHandler(event);
                return false;
            }
        }(this), false);
    }
    sortColumn(headerCell) {
        // Get cell data for column that is to be sorted from HTML table
        let rows = this.tableElement.rows;
        let alpha = [],
            numeric = [];
        let alphaIndex = 0,
            numericIndex = 0;
        let cellIndex = headerCell.cellIndex;
        for (var i = 1; rows[i]; i++) {
            let cell = rows[i].cells[cellIndex];
            let content = cell.textContent ? cell.textContent : cell.innerText;
            let numericValue = content.replace(/(\$|\,|\s)/g, "");
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
        // Sort according to direction (ascending or descending)
        let orderdedColumns = [];
        numeric.sort(function(a, b) {
            return a.value - b.value;
        });
        alpha.sort(function(a, b) {
            let aName = a.value.toLowerCase();
            let bName = b.value.toLowerCase();
            if (aName < bName) {
                return -1
            }
            else if (aName > bName) {
                return 1;
            }
            else {
                return 0;
            }
        });
        // Reorder HTML table based on new order of data found in the col array
        orderdedColumns = numeric.concat(alpha);
        let tBody = this.tableElement.tBodies[0];
        for (let i = 0; orderdedColumns[i]; i++) {
            tBody.appendChild(orderdedColumns[i].row);
        }
    }
    eventHandler(event) {
        if (event.target.tagName === 'TH') {
            // alert('kolomkop');

            this.sortColumn(event.target);
        }
        else if (event.target.tagName === 'SPAN') {
            if (event.target.parentNode.tagName === 'TH') {
                if (event.target.parentNode.className == "asc") {
                    event.target.parentNode.className = 'desc';
                    event.target.innerHTML = "&nbsp;&nbsp;&darr;"
                }
                else {
                    event.target.parentNode.className = 'asc';
                    event.target.innerHTML = "&nbsp;&nbsp;&uarr;"
                };
            }
        }
    }
}