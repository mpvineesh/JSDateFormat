Date.prototype.formatDate = function(format)
{
    var date = this;
    var dateVars = {
        'MM':this.getMonth()>8?this.getMonth()+1:'0'+(this.getMonth() + 1),
        'YYYY':this.getFullYear(),
        'YY':this.getFullYear().toString().substr(-2),
        'DD':this.getDate()>9?this.getDate():'0'+this.getDate(),
        'HH':this.getHours(),
        'hh':this.getHours() > 12 ?this.getHours()-12:this.getHours(),
        't':this.getHours() > 12?'pm':'am',
        'T':this.getHours() > 12?'PM':'AM',
        'mm': this.getMinutes(),
        'ss' :this.getSeconds()        
    }
   
    if (!format) {
        format = "MM/DD/YYYY";
    }
    var delimiterArr = format.replace(/(?!-)[^.|/:-]/g, "");
    var delimiter = delimiterArr[0];
    var dateVarsArray = Object.keys(dateVars);
    dateVarsArray.forEach(function(datePart) {
        format = format.replace(datePart,dateVars[datePart]);
    });
    return format;
}
    
var d = new Date();
var f = d.formatDate("MM.DD.YYYY hh:mm T");
console.log(f);


/*
Exception: TypeError: d.format is not a function
@Scratchpad/9:33:9
*/
/*
Exception: ReferenceError: datePart is not defined
Date.prototype.formatDate/<@Scratchpad/9:24:9
Date.prototype.formatDate@Scratchpad/9:23:5
@Scratchpad/9:30:9
*/
