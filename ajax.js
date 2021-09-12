var btn = document.getElementById("btn")
var pic = document.getElementById("pic")




function ajax() {
    btn.style.display = "none"
    pic.style.display = "none"

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            console.log(response);
            var grocerylist = response.mygrocery;
            console.log(grocerylist);



            var output = "";
            output += `<tr>`
            output += `<th>Serial No</th>`;
            output += `<th>Name</th>`;
            output += `<th>Quantity</th>`;
            output += `<th>Units</th>`;
            output += `<th>Department</th>`;
            output += `<th>Notes</th>`;
            output += `<tr>`


            for (i = 0; i < grocerylist.length; i++) {

                output += `
                <tr> 
                <td>${grocerylist[i].SerialNo}</td>
                <td>${grocerylist[i].Name}</td>
                <td>${grocerylist[i].Quantity}</td>
                <td>${grocerylist[i].Unit}</td>
                <td>${grocerylist[i].Department}</td>
                <td>${grocerylist[i].Notes}</td>
              </tr>`;


            }
            console.log(output);
            document.getElementById("body").innerHTML = output;

        }
    }
    xhttp.open("GET", "grocery.json", true);
    xhttp.send();
}