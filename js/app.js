//let i = 0;


$(document).ready(()=>{
    $("#enter").click(()=>{
        $("#form").slideToggle("slow");
    });
});

function getData(){
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const stream = document.getElementById("stream").value;
    const year = document.getElementById("year").value; 
    if( roll == null || /[^0-9]/.test(roll)){
        alert("Enter correct roll number");
        document.getElementById("rollno").value = "";
        return;
    }
    else if(checkRoll(roll) == false){
        alert("Roll Number already present");
        return;
    }
    else if(name == null || /[^a-zA-Z]/.test(name)){
                alert("Enter correct Name");
                document.getElementById("name").value = "";
                return;
        }
    else if(year == null || /[^0-9]/.test(year)|| (year.length < 4)||(year.length > 4)){
                alert("Enter correct Year");
                document.getElementById("year").value = "";
                return;
    }
    else if(stream == null || /[^a-zA-Z]/.test(stream)){
                alert("Enter correct Stream");
                document.getElementById("stream").value = "";
                return;
    }
    let rows ="";
    if(name != null && name.trim() !== "" && roll != null && roll.trim() !== "" && stream != null && stream.trim() !== "" && year != null && year.trim() !== "")
    {
        rows += `<tr><td><input class ="check" type="checkbox"/><td>${name}</td><td>${roll}</td><td>${stream}</td><td>${year}</td>`;
        $(rows).appendTo("#list tbody");
    }
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("stream").value = "";
    document.getElementById("year").value = "";  
}
var checkRoll = function(roll){
    const rows = document.getElementsByTagName('tr');
    for (let i of rows) {
        if (i.children[1].innerHTML == roll) {
            return false;
        }
    }
    return true;
}
var edit = () => {
    const roll = prompt("Enter the roll number you want to edit");
    const rows = document.getElementsByTagName('tr');
    let j = 0;
    for (let i of rows) {
        if (i.children[2].innerHTML == roll) {
            const n = prompt("Enter new name");
            const r = prompt("Enter new passout year");
            const s = prompt("Enter new stream");

            if(n == null && n.trim( )== '' && r == null && r.trim() == '')
            {
                return;
            }
            i.children[1].innerHTML = n;
            i.children[4].innerHTML = r;
            i.children[3].innerHTML = s;
            return;
        }
        j++;
    }
    if (j == rows.length) {
        alert("No such rollno");
        return;
    }
}
var deleteRow =() => {
    let t=document.getElementById("rows");
    let n=t.getElementsByClassName("check");
    for(let i=0;i<=n.length;i++)
        {
            if(n[i].checked)
            {
                t.deleteRow(i);
                i--;
                n.length--;
            }
        }
}