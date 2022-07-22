function mayorymenor(){
    var numero1= parseFloat(document.menorymayor.Numero1.value);  
    var numero2= parseFloat(document.menorymayor.Numero2.value); 

    if(numero1>numero2){    //En caso de ser esto 
        document.menorymayor.resulmayor.value= numero1;  
        document.menorymayor.resulmenor.value= numero2;
    }else if(numero2 > numero1){  //En caso de ser eso
        document.menorymayor.resulmayor.value= numero2;  
        document.menorymayor.resulmenor.value= numero1;   
    }else{
        alert("Ambos Numeros Son iguales")  //Ventana de SAlerta en caso de este caso
    }
    
  }

