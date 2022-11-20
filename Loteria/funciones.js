function cargar(){
    document.getElementById('btn1').value="Obtener";
    document.getElementById('prrf4').textContent='El asesinato de Sartre.';
    document.getElementById('prrf5').textContent='Pecados capitales.';

}

//En vez de la función 'cargar'
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM cargado");
    document.getElementById("prrf8").contentEditable = true;
    document.getElementById("prrf10").contentEditable = true;
    document.getElementById("prrf13").contentEditable = true;
    document.getElementById("prrf14").contentEditable = true;
    document.getElementById("prrf15").contentEditable = true;
    document.getElementById("prrf18").contentEditable = true;
    document.getElementById("prrf19").contentEditable = true;
    document.getElementById("prrf20").contentEditable = true;

    /*Ejemplo para copiar*/
    document.addEventListener('copy', function (ev) {
        ev.clipboardData.setData('text/plain', 'algún texto, ' + new Date);
        ev.preventDefault();
        console.log('Texto copiado clipboard >>'+ev.clipboardData.getData('algún texto, ')); 
    });

    document.getElementById('prrf12').addEventListener('click',function(){
        this.innerHTML='';
    });

    document.getElementById('prrf13').textContent='Usuario';
    document.getElementById('prrf13').style.color='#7401DF';
    document.getElementById('prrf14').textContent='Password';
    document.getElementById('prrf14').style.color='#7401DF';
    document.getElementById('prrf15').textContent='Área';
    document.getElementById('prrf15').style.color='#7401DF';



    document.getElementById('prrf18').textContent='Remitente';
    document.getElementById('prrf18').style.color='#7401DF';
    document.getElementById('prrf19').textContent='Asunto';
    document.getElementById('prrf19').style.color='#7401DF';
    document.getElementById('prrf20').textContent='Comentario';
    document.getElementById('prrf20').style.color='#7401DF';


    document.getElementById('prrf13').addEventListener('click',function(){
        this.textContent='';
    });

    document.getElementById('prrf14').addEventListener('click',function(){
        this.textContent='';
    });

    document.getElementById('prrf15').addEventListener('click',function(){
        this.textContent='';
    });

    document.getElementById('prrf16').addEventListener('click',function(){
        this.innerHTML='';
        document.getElementById('prrf13').textContent='Usuario';
        document.getElementById('prrf14').textContent='Password';
        document.getElementById('prrf15').textContent='Área';
    });

    document.getElementById('prrf17').addEventListener('click',function(){
        this.innerHTML='';
        document.getElementById('prrf13').textContent='Usuario';
        document.getElementById('prrf14').textContent='Password';
        document.getElementById('prrf15').textContent='Área';
    });


    document.getElementById('prrf18').addEventListener('click',function(){
        this.textContent='';
    });

    document.getElementById('prrf19').addEventListener('click',function(){
        this.textContent='';
    });

    document.getElementById('prrf20').addEventListener('click',function(){
        this.textContent='';
    });

    document.getElementById('prrf21').addEventListener('click',function(){
        this.innerHTML='';
        document.getElementById('prrf18').textContent='Remitente';
        document.getElementById('prrf19').textContent='Asunto';
        document.getElementById('prrf20').textContent='Comentario';
    });

    document.getElementById('prrf22').addEventListener('click',function(){
        this.innerHTML='';
    });



    
    function Message(remitente, asunto, comentario){
        this.remitente = remitente; 
        this.asunto = asunto; 
        this.comentario = comentario;
    }

    Message.prototype.datosMessage = function(){
        return 'Remitente: <b>'+this.remitente+'</b><br/>Asunto: <b>'+this.asunto+'</b><br/>Comentario: <b>'+this.comentario+'</b>';
    };

    Message.prototype.fecha='';

    function datosM(){
        var remitente = document.getElementById('prrf18').textContent;
        var asunto = document.getElementById('prrf19').textContent;
        var comentario = document.getElementById('prrf20').textContent;

        objMessage = new Message(remitente,asunto,comentario);
        var mfecha = new Date();
        mfecha = mfecha.toString();
        document.getElementById('prrf21').innerHTML= objMessage.datosMessage()+'<br/>Fecha: <b>'+mfecha+'</b>';
    }


    document.getElementById('btn5').onclick = function(){
        datosM();
    };

    function datosM2(){
        var hashMap = new Map();
        hashMap.set("1", new Message('Juan Perez','Compra-Venta','¿Cual es el precio del xbox one?'));
        hashMap.set("2", new Message('Nadia Roman','Saludos','¿Qué tal? ¿Cómo has estado?'));
        hashMap.set("3", new Message('Juan Perez','Compra-Venta','¿Cual es el precio del xbox one?'));
        return hashMap;
    }

    document.getElementById('btn6').onclick = function(){
        var result='';
        for (var [key, value] of datosM2().entries()) {
            result+='<br/>id:'+key + '<br/>nombre:' + value.remitente+'<br/>asunto:'+value.asunto+'<br/>comentario: '+value.comentario+'<br/>';
        }
        document.getElementById('prrf22').innerHTML = result;
    };


    var person = {
        firstName:"John",
        lastName: "Doe",
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }

    var myObject = {
        firstName:"Mary",
        lastName: "Doe",
    }

    document.getElementById('btn7').addEventListener('click',function(){
        document.getElementById('prrf23').textContent='1er'+ person.fullName() + ' ; 2do:' +person.fullName.call(myObject); 
    });

    document.getElementById('prrf23').addEventListener('click',function(){
        this.textContent=''; 
    });


    function myFunction(x) {
        alert('nada')
        if (x.style.visibility === 'hidden') {
            x.style.visibility = 'visible';
        } else {
            x.style.visibility = 'hidden';
        }
    }

    document.getElementById('btn8').addEventListener('click',function(){
        if (document.getElementById('div3').style.visibility === 'hidden') {
            document.getElementById('div3').style.visibility = 'visible';
            this.style.visibility = 'hidden';
        } else {
            document.getElementById('div3').style.visibility = 'hidden';
        }
    });



    document.getElementById('div3').addEventListener('click',function(){
        document.getElementById('btn8').style.visibility = 'visible';
        this.style.visibility = "hidden";
    });



    var numbers = [4, 9, 16, 25];
    document.getElementById('btn9').addEventListener('click',function(){
        document.getElementById("prrf25").innerHTML = numbers.map(Math.sqrt);
    });

    function checarAdulto(age) {
        return age >= 18;
    }    
    
    document.getElementById('btn11').addEventListener('click',function(){
        var ages = [32, 33, 16, 40,21,22,5,2,10,0,8];
        document.getElementById("prrf27").innerHTML = ages.filter(checarAdulto);
    });

    

    function getSum(total, num) {
        return total + num;
    }

    var numberss = [43,8,6,44,32,12];
    document.getElementById('btn10').addEventListener('click',function(){
        document.getElementById("prrf26").innerHTML = numberss.reduce(getSum);
    });


    document.getElementById('prrf25').addEventListener('click',function(){
        this.innerHTML = '';
    });

    document.getElementById('prrf26').addEventListener('click',function(){
        this.innerHTML = '';
    });

    document.getElementById('prrf27').addEventListener('click',function(){
        this.innerHTML = '';
    });


    document.querySelector(".btn12").addEventListener('click',function(){
        document.querySelector(".prrf28").style.visibility = 'visible';
        document.querySelector(".prrf28").style.backgroundColor = "red";
        document.querySelector(".prrf28").style.color = "black";
        document.querySelector(".prrf28").textContent = "Usando querySelector('target')";
    });

    document.querySelector('.prrf28').onclick = function(){
        this.style.visibility = 'hidden';
        this.textContent = '';
    };


    document.querySelector('.btn13').addEventListener('click',function(){
        var todo = document.querySelectorAll('.prrf29');
        todo[0].style.backgroundColor = "#33AACB";
        todo[1].style.backgroundColor = "#BB008F";
    });


    document.querySelector('.prrf29').addEventListener('click',function(){
        var todo2 = document.querySelectorAll('.prrf29');//El primer tag es quien tiene el evento
        todo2[0].style.backgroundColor = "white";
        todo2[1].style.backgroundColor = "white";
    });
    

    var objJSON='{ "username" : "SammyShark", "social_media" : [ { "description" : "twitter", "link" : "https://twitter.com/digitalocean" }, { "description" : "facebook", "link" : "https://www.facebook.com/DigitalOceanCloudHosting" }, { "description" : "github", "link" : "https://github.com/digitalocean" } ] }';
    //'[{"id":1,"nombre_usuario":"Sr. Negativo","password":"1234","logeado":true,"area":{"id":1,"responsable_area":"sistemas","piso":10} }, {"id":2,"nombre_usuario":"OscarRyz","password":"ryz123","logeado":false,"area":{"id":2,"responsable_area":"informatica","piso":12} }, {"id":3,"nombre_usuario":"Benek","password":"secreta","logeado":true,"area":{"id":3,"responsable_area":"manager","piso":9}} ]';
    var myObj = JSON.parse(objJSON);
    document.getElementById('btn14').addEventListener('click',function(){
        //alert(myObj);
        x = myObj.username;
        document.getElementById("prrf30").innerHTML = x;
    });
    
    document.getElementById('prrf30').addEventListener('click',function(){
        this.innerHTML = '';
    });


    function Mascota(){
        this.color;
        this.tamanyo;
        this.raza;

        this.constructorBase = function(color,tamanyo,raza){
            this.color=color;
            this.tamanyo=tamanyo;
            this.raza=raza;
        };

        this.constructor=function(color,tamanyo,raza){
            this.constructorBase(color,tamanyo,raza);
        };

        this.getColor=function(){
            return this.color;
        };

        this.setColor=function(color){
            this.color=color;
        };

        this.getTamanyo=function(tamanyo){
            return this.tamanyo;
        };

        this.setTamanyo=function(tamanyo){
            this.tamanyo=tamanyo;
        };

        this.getRaza=function(){
            return this.raza;
        };

        this.setRaza=function(raza){
            this.raza=raza;
        };
    }

    function Perro(){
        this.peso;

        this.constructor=function(color,tamanyo,raza,peso){
            this.constructorBase(color,tamanyo,raza);
            this.peso=peso;
        };

        this.getPeso=function(){
            return this.peso;
        };

        this.setPeso=function(peso){
            this.peso=peso;
        };

    }

    Perro.prototype = new Mascota();

    var crearPerro= function(){
        var perro = new Perro();
        perro.setColor('café');
        perro.setTamanyo('grande');
        perro.setRaza('chilaquil');
        perro.setPeso('67 kg');
        return perro;
    };

    function obtenerPerro(){
        var my_perro = crearPerro();
        document.getElementById('prrf31').innerHTML='Perro<br/>Raza:'
        +my_perro.getRaza()+'<br/>Tamaño:'+my_perro.getTamanyo()
        +'<br/>Color:'+my_perro.getColor()
        +'<br/>Peso:'+my_perro.getPeso()+'<br/>';
    }
    
    document.getElementById('btn15').addEventListener('click',obtenerPerro);
    document.getElementById('prrf31').addEventListener('click',function(){
        this.innerHTML='';
    });


    function Articulo(){
        this.autor;
        this.titulo;
        this.fecha;

        this.constructorBase=function(autor,titulo,fecha){
            this.autor=autor;
            this.titulo=titulo;
            this.fecha=fecha;
        };

        this.constructor=function(autor,titulo,fecha){
            this.constructorBase(autor,titulo,fecha);
        };

        this.setAutor=function(autor){
            this.autor=autor;
        };

        this.getAutor=function(){
            return this.autor;
        };


        this.setTitulo=function(titulo){
            this.titulo=titulo;
        };

        this.getTitulo=function(){
            return this.titulo;
        };


        this.setFecha=function(fecha){
            this.fecha=fecha;
        };

        this.getFecha=function(){
            return this.fecha;
        };

    }

    function crearArticulo(){
        var autor= prompt("Nombre del autor","");
        var titulo= prompt("Escribe título del artículo","");
        var articulo = new Articulo();
        articulo.setAutor(autor);
        articulo.setTitulo(titulo);
        articulo.setFecha(new Date());
        return articulo;
    }

    document.getElementById('prrf32').addEventListener('click',function(){
        this.innerHTML='';
    });


    document.getElementById('btn16').addEventListener('click',function(){
        var my_articulo = crearArticulo();
        if(my_articulo != null){
            document.getElementById('prrf32').innerHTML='Autor:'+my_articulo.getAutor()
            +'<br/>Título:'+ my_articulo.getTitulo()
            +'<br/>Fecha:'+my_articulo.getFecha();
        }
    });


    function Autor(){
        console.log('objeto autor creado');
    }

    function Autor(nombre, apellidos,libros){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.libros=libros;
    }

    Autor.prototype.setNombre=function(nombre){ 
        this.nombre=nombre;
    };

    Autor.prototype.getNombre=function(){
        return this.nombre;
    };

    Autor.prototype.setApellidos=function(apellidos){
        this.apellidos=apellidos;
    };
    
    Autor.prototype.getApellidos=function(){
        return this.apellidos;
    };

    Autor.prototype.setLibros=function(libros){
        this.libros=libros;
    };

    Autor.prototype.getLibros=function(){
        return this.libros;
    };

    function crearAutor(){
        var autor=new Autor();
        autor.setNombre("Alfredo");
        autor.setApellidos("Honerostra");
        var libros=['La piel de los corderos','El crimen del lago','Desencuentros de un día de verano'];
        autor.setLibros(libros);
        return autor;
    }


    var prrf33 = document.getElementById('prrf33');
    document.getElementById('btn17').addEventListener('click',function(){
        var my_autor=crearAutor();
        prrf33.innerHTML='Autor: '+my_autor.getNombre()+" "+my_autor.getApellidos()
        +"<br/>Libros:"+my_autor.getLibros();
    });

    prrf33.addEventListener('click',function(){
        this.innerHTML='';
    });

    document.getElementById('prrf34').addEventListener('click',function(){
        this.innerHTML='';
    });

    
    var prrf37 = document.getElementById('prrf37');
    document.getElementById('btn18').addEventListener('click',function(){
        var opts= document.form_check.checks;
        prrf37.innerHTML='Elegiste ';
        for(var i= 0 ; i < opts.length; i++){
            if(opts[i].checked){
            prrf37.innerHTML+=opts[i].value+'  ';
            }
        }
    });

    prrf37.addEventListener('click',function(){
        this.innerHTML='';
    });


    document.getElementById("btn19").addEventListener('click',function(){
        var gatos = document.getElementById("gatos");
        var perros = document.getElementById("perros");
        var prrf38 = document.getElementById("prrf38");
        if(gatos.checked){
            prrf38.textContent='Has elegido: '+gatos.value;
        }
        if(perros.checked){
            prrf38.textContent='Has elegido: '+perros.value;
        }
    });
    
    document.getElementById("gatos").onclick= function(){
        document.getElementById("perros").checked=false;
        prrf38.textContent='';
    };
    document.getElementById("perros").onclick= function(){
        document.getElementById("gatos").checked=false;
        prrf38.textContent='';
    };
    document.getElementById("prrf38").onclick= function(){
        prrf38.textContent='';
    };




});





/*API de Geolocalización*/
/*las opciones*/
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
/*método para mostrar errores*/
function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
};


/*método que define la latitud y longitud del origen*/
function origen(position){
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    document.getElementById("prrf1").innerHTML='Latitud: '+latitud + '<br/>Longitud: '+longitud;
}
/*método para activar la geolocalización
 recibe parámetros de opción,error y la posición del origen  
*/
function activa_origen(){
    navigator.geolocation.getCurrentPosition(origen,error,options);
    //navigator.geolocation.watchPosition(origen);
}


//Eventos de teclas
document.onkeydown = fkey;
document.onkeypress = fkey
document.onkeyup = fkey;

var wasPressed = false;

function fkey(e){
        e = e || window.event;
       if( wasPressed ) return; 

        if (e.keyCode == 116) {
            wasPressed = true;
            console.log('Tecla f5 presionada ');
        }else {
            console.log('ventana cerrada');
        }
 }


function keydownFunction() {
    document.getElementById("txt1").style.backgroundColor = "red";
}

function keyupFunction() {
    document.getElementById("txt1").style.backgroundColor = "green";
}


/*Drop event*/
function allowDrop(allowdropevent) {
    allowdropevent.target.style.color = 'blue';
    allowdropevent.preventDefault();
}

function drag(dragevent) {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
    dragevent.target.style.color = 'green';
}

function drop(dropevent) {
    dropevent.preventDefault();
    var data = dropevent.dataTransfer.getData("text");
    dropevent.target.appendChild(document.getElementById(data));
    document.getElementById("drag").style.color = 'black';
}



function Usuario(login, passw, fecha){
    this.login=login;
    this.passw=passw;
    this.fecha=fecha;
    this.datosUsuario=datosUsuario;
}

Usuario.area='';

Usuario.prototype.verDatosUsuario= function(){
    return 'Usuario:'+this.login+'<br/>Password: '+this.passw +'<br/>Área: '+this.area+'<br/>Fecha:'+this.fecha;
};


function ver(string){
  document.getElementById('prrf12').innerHTML='<h3>' + string +'</h3>';
}

function datosUsuario(){
  var result='Usuario:'+this.login+'<br/>Password: '+this.passw+'<br/>Fecha:'+this.fecha;
  ver(result);
}

function datos(){
  var login=prompt("Nombre de usuario:","");
  var passw=prompt("Password:","");
  var fecha = new Date();
  fecha=fecha.toString();
  obj1=new Usuario(login,passw,fecha);
  obj1.datosUsuario();
}


function toggle(x) {
    if (document.getElementById(x).style.display == 'none') {
        document.getElementById(x).style.display = '';
    } else {
        document.getElementById(x).style.display = 'none';
    }
}