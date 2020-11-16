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
   
var contador=1;

          function addRow2(dataTable2) {

               var table = document.getElementById(dataTable2);
 

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

               var element3 = document.createElement("label");

               element3.type = "text";

               cell3.appendChild(element3);
                      
             
               
               
               var cell4 = row.insertCell(3);

               var element4 = document.createElement("textarea");

               element4.type = "text";

               cell4.appendChild(element4);
               
               element4.classList.add('form-control');
               
             
               var cell5 = row.insertCell(4);

               var element5 = document.createElement("textarea");

               element5.type = "text";

               cell5.appendChild(element5);
               
               element5.classList.add('form-control');        
               
               
         
                if(contador==300)
                alert('Maximo permitido alcanzado: 3');
                else {
                contador++;
                document.getElementById('lbResultado').innerHTML = contador;
                 }  
 }
          
            function deleteRow(dataTable2) {

               try {

               var table = document.getElementById(dataTable2);

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
 
