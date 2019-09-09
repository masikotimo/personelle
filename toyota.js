const validate=()=>{
    
       var total,costed,shippingfee,salestax;
      
       var Shipped=document.getElementsByName('first'); 

       costed=parseFloat(price.value) *parseFloat(qty.value);
       costvalue.value=costed.toFixed(2);


       let temp=0;
       //********customer id************
       if (custId.value == "" ||custId.value==null) {
              custId.style.border = "1px solid green";
              custId.value = "Field required";
              custId.style.color='red'

              temp++;
              
              
            
            }
          
            //if field was entered then..
            else{
          
             
              
              
              }

              

       

       //***********name************
       if (named.value == "" ||named.value==null) {
              named.style.border = "1px solid green";
              named.value = "Field required";
              named.style.color='red';

              temp++;
              
            
            }
          
            //if field was entered then..
            else{
          
             
                
              
              }


       //***********state******

        if (State.value == "" ||State.value==null) {
              State.style.border = "2px solid red";
             
              temp++;
              
            
            }
          
            //if field was entered then..
            else{
                    
              
       //calculating salestax

       //kla and checked
       if(State.value=='KLA' && retail.checked==true){
              salestax=(10/100)*costed;
              salesvalue.value=salestax.toFixed(2);
       }
       else if(State.value=='EBB'  && retail.checked==true){
              salestax=(5/100)*costed;
              salesvalue.value=salestax.toFixed(2);
       }
       else if(State.value=='MBR'  && retail.checked==true){
              salestax=(5/100)*costed;
              salesvalue.value=salestax.toFixed(2);
       }
       
       else{
              salestax=0;
              salesvalue.value=salestax;
       }
          
             
                
              
              }

       //*********Part Number*************
       if (Partno.value == "" ||Partno.value==null) {
              Partno.style.border = "1px solid green";
              Partno.type="text";
              Partno.value = "Field required";
              Partno.style.color='red'
              temp++;
            
            }
          
            //if field was entered then..
            else{
          
             
                
              
              }

       //**********Description**********
       if (desc.value == "" ||desc.value==null) {
              desc.style.border = "1px solid green";
              desc.value = "Field required";
              desc.style.color='red'
            
              temp++;
            }
          
            //if field was entered then..
            else{
          
             
                
              
              }
              
              
       //*********Price per part************
       if (price.value == "" ||price.value==null) {
              price.style.border = "1px solid green";
              price.type="text";
              price.value = "Needed";
              price.style.color='red'
              temp++;
            
            }
          
            //if field was entered then..
            else{
          
             
                
              
              }

       
       //**************quantity*********

       if (qty.value == "" ||qty.value==null) {
              qty.style.border = "1px solid green";
              qty.type="text";
              qty.value = "Needed";
              qty.style.color='red'
              temp++;
            
            }
          
            //if field was entered then..
            else{
          
             
                
              
              }


       //***********shipping************

       //calculating shipping fee
       

       //checking oversize first
       if (oversize.checked) 
       {
              for(let i=0;i<Shipped.length;i++){
                     if(Shipped.item(i).checked){
       
                            if(Shipped.item(i).value =='FEDA'){
                                   shippingfee=parseFloat(qty.value) *(12.00+5.00);
                                   Shippingvalue.value=shippingfee.toFixed(2);
                            break;

       
                                  
                            }
                            else if(Shipped.item(i).value =='FEDG'){
                                   shippingfee=parseFloat(qty.value) *(9.25+5.00);
                                   Shippingvalue.value=shippingfee.toFixed(2);
                            break;

       
                            }
                            else if(Shipped.item(i).value =='US'){
                                   shippingfee=parseFloat(qty.value) *(8.50+5.00);
                                   Shippingvalue.value=shippingfee.toFixed(2);
                            break;

       
                            }
                            else{
       
                                   shippingfee=parseFloat(qty.value) *(7.00+5.00);
                                   Shippingvalue.value=shippingfee.toFixed(2);
                            break;

       
                            }
       
       
                      
                     }
       
                    }
       
              
       } 
       else {
       for(let i=0;i<Shipped.length;i++){
              if(Shipped.item(i).checked){

                     if(Shipped.item(i).value =='FEDA'){
                            shippingfee=parseFloat(qty.value) *12.00;
                            Shippingvalue.value=shippingfee.toFixed(2);
                            break;

                            
                     }
                     else if(Shipped.item(i).value =='FEDG'){
                            shippingfee=parseFloat(qty.value) *9.25;
                            Shippingvalue.value=shippingfee.toFixed(2);
                            break;


                     }
                     else if(Shipped.item(i).value =='US'){
                            shippingfee=parseFloat(qty.value) *8.50;
                            Shippingvalue.value=shippingfee.toFixed(2);
                            break;


                     }
                     else{

                            shippingfee=parseFloat(qty.value) *7.00;
                            Shippingvalue.value=shippingfee.toFixed(2);
                            break;


                     }


                     
              }

              }
       
       }

       //**********computing totals*********

       
       total=costed+shippingfee+salestax;
       Totalvalue.value=total.toFixed(2);


       console.log(temp);

       if(temp>0){
              return false;
       }
       else
       {
       return true;
       }

}

//***function for closing the window*******
function closewindow() {
       document.write('');

       }