var contador=1;

          function addRow(tableID) {

               var table = document.getElementById(tableID);
 

               var rowCount = table.rows.length;

               var row = table.insertRow(rowCount);

 

               var cell1 = row.insertCell(0);

               var element1 = document.createElement("input");

               element1.type = "checkbox";

               cell1.appendChild(element1);

 

               var cell2 = row.insertCell(1);

               var element2 = document.createElement("label");

               element2.type = "text";

               cell2.appendChild(element2);

 
              
               var cell3 = row.insertCell(2);

               var element3 = document.createElement("textarea");

               element3.type = "text";

               cell3.appendChild(element3);
                      
               element3.classList.add('form-control');
               
               
               var cell4 = row.insertCell(3);

               var element4 = document.createElement("input");

               element4.type = "radio";
               
               element4.name = contador;

               cell4.appendChild(element4);
               
               element4.classList.add('new_radio');
             
               
               
               var cell5 = row.insertCell(4);

               var element5 = document.createElement("input");

               element5.type = "radio";
               
               element5.name = contador;

               cell5.appendChild(element5);
               
               element5.classList.add('new_radio');
 
               
               var cell6 = row.insertCell(5);

               var element6 = document.createElement("input");

               element6.type = "radio";
               
               element6.name = contador;

               cell6.appendChild(element6);
               
               element6.classList.add('new_radio');

               
               var cell7 = row.insertCell(6);

               var element7 = document.createElement("input");

               element7.type = "radio";
               
               element7.name = contador;

               cell7.appendChild(element7);
               
               element7.classList.add('new_radio');

               
               var cell8 = row.insertCell(7);

               var element8 = document.createElement("input");

               element8.type = "radio";
               
               element8.name = contador;

               cell8.appendChild(element8);
               
               element8.classList.add('new_radio');

               
               
         
                if(contador==300)
                alert('Maximo permitido alcanzado: 3');
                else {
                contador++;
                document.getElementById('lbResultado').innerHTML = contador;
                 }  
 }
          
            function deleteRow(tableID) {

               try {

               var table = document.getElementById(tableID);

               var rowCount = table.rows.length;

 

               for(var i=0; i<rowCount; i++) {

                    var row = table.rows[i];

                    var chkbox = row.cells[0].childNodes[0];

                    if(null != chkbox && true == chkbox.checked) {

                         table.deleteRow(i);

                         rowCount--;

                         i--;
                        if(contador==0)
                        alert('Minimo permitido alcanzado: 0');
                        contador--;
                        document.getElementById('lbResultado').innerHTML = contador;
                    } 

               }

               }catch(e) {

                    alert(e);

               }

$(function() {
       $('.table table-hover').thead();
});
          }
