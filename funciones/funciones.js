ejecutar=function(){
    console.log("ejecutando...");
    sumar(10,20);
    restar(20,10);
    procesar(
        (x,y)=>{
            let res=x+y;
            console.log("suma:"+res);
        }
    );
    procesar(restar);
    procesar(
        (a,b)=>{
            console.log("Producto:"+a*b);
        }
    );
    procesar(
        (c,d)=>{
            console.log("Division:"+c/d);
        }
    );
}

sumar =(x,y)=>{
    let res=x+y;
    console.log("suma:"+res);
}

restar =(x,y)=>{
    let res=x-y;
    console.log("resta:"+res);
}
procesar = (fn)=>{
    fn(12,13);
}


