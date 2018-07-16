var Run=(function(){
    var str;
    var n;
    var last_n;
    var last_str;
    var symb;
   //Button_controller
      function new_system(){
          this.str='';
          /*this.n=0;
          this.last_n=0;
          this.last_str='';
          this.symb='';
          */
      }
   
      var Buttons=function(str){
   
         //  B_control:function(str){
            $('#ON').on('click',function(){     
               str='';
               Show_Display("");
               return str;
           });
            $('#A').on('click',function(){     
               str='';
               Show_Display("");
               return str;
           });
            $('#C').on('click',function(){ 
               console.log(str,' estoy en C');
               if(str.length>1){
                   str=str.slice(0,str.length-1);
               }    
               else{
                  str='';
               }
               Show_Display(str);
               return str
              
           });
   
       //  Number:function(str){
       
           $('#1').on('click',function(){     
               str=str+'1';
               Show_Display(str);
               return str;
           });
           $('#2').on('click',function(){     
               str=str+'2';
               Show_Display(str);
               return str;
         
           });
           $('#3').on('click',function(){     
               str=str+'3';
               Show_Display(str);
               return str;
           });
           $('#4').on('click',function(){     
               str=str+'4';
               Show_Display(str);
               return str;
              
           });
           $('#5').on('click',function(){     
               str=str+'5';
               Show_Display(str);
               return str;
              
           });
           $('#6').on('click',function(){     
               str=str+'6';
               Show_Display(str);
               return str;
           });
           $('#7').on('click',function(){     
               str=str+'7';
               Show_Display(str);
               return str;
         
           });
           $('#8').on('click',function(){     
               str=str+'8';
               Show_Display(str);
               return str;
           });
           $('#9').on('click',function(){     
               str=str+'9';
               Show_Display(str);
               return str;
              
           });
           $('#0').on('click',function(){     
               str=str+'0';
               Show_Display(str);
               return str;   
           });
           $('#00').on('click',function(){     
               str=str+'00';
               Show_Display(str);
               return str;   
           });
           $('#p').on('click',function(){     
               str=str+'.';
               Show_Display(str);
               return str;   
           });
      
      
         // Symbol:function(str)
           $('#mas').on('click',function(){     
               str=str+'+';
               Show_Display(str);
               return str;
           });
           $('#menos').on('click',function(){     
               str=str+'-';
               Show_Display(str);
               return str;
           });
           $('#product').on('click',function(){     
               str=str+'x';
               Show_Display(str);
               return str;
           });
           $('#cocient').on('click',function(){     
               str=str+'÷';
               Show_Display(str);
               return str;
           });
           $('#rad').on('click',function(){     
               str=str+'√';
               Show_Display(str);
               return str;
           });
           $('#percentage').on('click',function(){     
               str=str+'%';
               Show_Display(str);
               return str;
           });
           $('#iqual').on('click',function(){     
               //funcion de calcular aqui
               str=Calcular(str);
               console.log(str, "Im in iqual button");
               if(str===''){
                   $('#display').html('expression error');
               }
               else{
                   Show_Display(str);
               }
               
               return str;
           });
          }
      
     var Show_Display=function(str){
         console.log(str,"IM in display");
         $('#display').html(str);  
     } 
      
      var Calcular=function(str){
          //separando numeros;
   
                 
                  //radication
                    var Radication=function(str){
                       var rad=str.match(/[√]\d+[.]\d+/i);
                       if(rad===null){
                           rad=str.match(/[√]\d+/i);
                       }
                       if(rad===null)
                       {
                           return str;
                       }
                       else{
                                   var num=rad[0].slice(1,rad[0].length);
                                   num=parseFloat(Math.pow(num,0.5)+'').toFixed(2);
                                   var long=rad[0].length;
                                   var ind=rad.index;
                                   str=str.slice(0,ind)+num+str.slice(ind+long,str.length);
                                   return Radication(str);
                         
                       }
                  }
   
                  //Percentage
                  var Percentage=function(str){
                       var perc=str.match(/\d+[.]\d+[%]\d+[.]\d+/i);
                       
                       if(perc===null){
                           perc=str.match(/\d+[%]\d+[.]\d+/i);
                       }
                       if(perc===null){
                           perc=str.match(/\d+[.]\d+[%]\d+/i);
                       }
                       if(perc===null){
                           perc=str.match(/\d+[%]\d+/i);
                       }
                       
   
                       if(perc===null)
                       {
                           return str;
                       }
                       else{
                                   var arr=perc[0].split('%');
                                   var num=parseFloat((arr[0]-0)*(arr[1]-0)/100+'').toFixed(2);
                                   console.log(num);
                                   var long=perc[0].length;
                                   var ind=perc.index;
                                   str=str.slice(0,ind)+num+str.slice(ind+long,str.length);
                                  
                                   return  Percentage(str);
                         
                       }
                  }
   
                  var Multiple=function(str){
                       var mp=str.match(/\d+[.]\d+[x]\d+[.]\d+/i);
                       
                       if(mp===null){
                           mp=str.match(/\d+[x]\d+[.]\d+/i);
                       }
                       if(mp===null){
                           mp=str.match(/\d+[.]\d+[x]\d+/i);
                       }
                       if(mp===null){
                           mp=str.match(/\d+[x]\d+/i);
                       }
                       
   
                       if(mp===null)
                       {
                           return str;
                       }
                       else{
                                   var arr=mp[0].split('x');
                                   var num=parseFloat((arr[0]-0)*(arr[1]-0)+'').toFixed(2);
                                   console.log(num);
                                   console.log(arr);
                                   var long=mp[0].length;
                                   var ind=mp.index;
                                   str=str.slice(0,ind)+num+str.slice(ind+long,str.length);
                                  
                                   return  Multiple(str);
                         
                       }
                  }
                  
                  var Divide=function(str){
                       var dv=str.match(/\d+[.]\d+[÷]\d+[.]\d+/i);
                       
                       if(dv===null){
                           dv=str.match(/\d+[÷]\d+[.]\d+/i);
                       }
                       if(dv===null){
                           dv=str.match(/\d+[.]\d+[÷]\d+/i);
                       }
                       if(dv===null){
                           dv=str.match(/\d+[÷]\d+/i);
                       }
                       console.log(dv,'this is ');
   
                       if(dv===null)
                       {
                           return str;
                       }
                       else{
                                   var arr=dv[0].split('÷');
                                   var num=parseFloat((arr[0]-0)/(arr[1]-0)+'').toFixed(2);
                                   console.log(num);
                                   console.log(arr);
                                   var long=dv[0].length;
                                   var ind=dv.index;
                                   str=str.slice(0,ind)+num+str.slice(ind+long,str.length);
                                  
                                   return  Divide(str);
                         
                       }
                  }
   
                  var Plus_Rest=function(str){
                     var symb=str.match(/[ +-]+/g);
                     var numbers=str.split(/[ +-]+/g);
                     var current=0;
                     
                     for(i=0;i<numbers.length;i++){
                         var n;
                         if(numbers[i]===''){
                             n=0;
                         }
                         else{
                             n=parseFloat(numbers[i]);
                         }
                         if(i===0){
                             current=n;
                         }
                         else{
                             if(symb[i-1]==='+'){
                                 current+=n;
                             }
                             else{
                                 current=current-n;
                             }
                         }
                     } 
                     console.log(current);
                     console.log(symb);
                     console.log(numbers);
                     str=current+'';
                     return str
                  }
                 
                 
                 
                 
   
                  var Rest=function(str){
                       var rest=str.match(/\d+[.]\d+[-]\d+[.]\d+/i);
                       
                       if(rest===null){
                           rest=str.match(/\d+[-]\d+[.]\d+/i);
                       }
                       if(rest===null){
                           rest=str.match(/\d+[.]\d+[-]\d+/i);
                       }
                       if(rest===null){
                           rest=str.match(/\d+[-]\d+/i);
                       }
                     
                       if(rest===null)
                       {
                           return str;
                       }
                       else{
                                   var arr=rest[0].split('-');
                                   var num=parseFloat((arr[0]-0)-(arr[1]-0)+'').toFixed(2);
                                   console.log(num);
                                   console.log(arr);
                                   var long=rest[0].length;
                                   var ind=rest.index;
                                   str=str.slice(0,ind)+num+str.slice(ind+long,str.length);
                                   return  Rest(str);
                         
                       }
                  }
                   if(symb!==null){
                        //radication
                        str=Radication(str);
                        //Percentage
                        str=Percentage(str);
                        //multiple
                        str=Multiple(str);
                        str=Divide(str);
                        //str=Rest(str);
                        str=Plus_Rest(str);
                       
                        return str
                       
                   }
                   else{
                       return str;
                   }
          
          
      }
    
   
   
   return {
     get_Buttons_control:function(str){
       return Buttons(str);
     }
            
   
    }
   })();
   
   
   $(document).ready(function() {
   var str='';
   
    str=Run.get_Buttons_control(str);
   
   }); 
