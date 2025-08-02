notas50 = []
notas20 = []
autoevaluacion = 0.0
heteroevaluacion = 0.0
semestral = 0.0


aux2 = 0


function organizar(lista) {

    devuelta = []

    for (i = 0; i < lista.length; i++) {
        devuelta.push("(" + lista[i].toString() + ")")
    }
    return devuelta
}

function enviar(nota,id) {

    nota = nota * 1.0

    if (aux2 == 1) {
        reset()
    }

    if (1>nota || nota>5) {
        errores(1)
        return
    }
    

    switch (id) {
        case 0:
            notas50.push(nota)
            aux1 = organizar(notas50)
            document.getElementById('mostrar50').innerText = "\ntu 50%: " + aux1;
            break;
        case 1:
            notas20.push(nota)
            aux1 = organizar(notas20)
            document.getElementById('mostrar20').innerText = "\ntu 20%: " + aux1;
            break;
        case 2:
            autoevaluacion = nota
            document.getElementById('mostrarauto').innerText = "\nTu AutoEvaluacion: " + autoevaluacion;
            break;
        case 3:
            heteroevaluacion = nota
            document.getElementById('mostrarhetero').innerText = "\nTu HeteroEvaluacion: " + heteroevaluacion ;
            break;
        case 5:
            semestral = nota
            document.getElementById('mostrarsemestral').innerText = "\nTu semestral: " + semestral;
            break;
        }
}

function reset() {
    aux2 = 0
    notas50 = []
    notas20 = []
    autoevaluacion = 0.0
    heteroevaluacion = 0.0
    semestral = 0.0
    document.getElementById('mostrar50').innerText = "\ntu 50%: *Vacio*";
    document.getElementById('mostrar20').innerText = "\ntu 20%: *vacio*";
    document.getElementById('mostrarauto').innerText = "\nTu AutoEvaluacion: *vacio*";
    document.getElementById('mostrarhetero').innerText = "\nTu HeteroEvaluacion: *vacio*";
    document.getElementById('mostrarsemestral').innerText = "\nTu semestral: *vacio*";
}



function calcular() {
    sumado = 0

    if ((notas50.length == 0) || (notas20.length == 0) || (autoevaluacion == 0.0) || (heteroevaluacion == 0.0)) {
        errores(0)
        return 0
    }

    aux2 = 1
    
    for (i = 0; i < notas50.length; i++) {
        sumado += notas50[i]
    }
    def50 = (sumado / notas50.length) * 0.4

    sumado = 0

    for (i = 0; i < notas20.length; i++) {
        sumado += notas20[i]
    }
    def20 = (sumado / notas20.length) * 0.3

    defauto = autoevaluacion * 0.05
    defhetero = heteroevaluacion * 0.05
    
    defsin = def50 + def20 + defauto + defhetero

    if (semestral == 0) {
        document.getElementById('mostrar50').innerText = "\nTu definitiva sin contar la trimestral es de: " + defsin.toFixed(2);
        
        necesario = 3.5 - defsin

        if (necesario > 1) {
            document.getElementById('mostrar20').innerText = "\n*PIERDES* LA MATERIA CON UN: " + (defsin + 1.2).toFixed(2) + " (eso si SACAS un 5.0 en tu SEMESTRAL)";
        } else if (necesario < 0.3) {
            document.getElementById('mostrar20').innerText = "\nAunque usted saque 1.0 igual pasa.";
        }else {
            nesemestral = (necesario*100) / 20
            document.getElementById('mostrar20').innerText = "\nPara llegar a 3.5 necesitas sacar en la semestral: " + nesemestral.toFixed(2);
        }
        
        document.getElementById('mostrarauto').innerText = "";
        document.getElementById('mostrarco').innerText = "";
        document.getElementById('mostrarhetero').innerText = "";
        document.getElementById('mostrarsemestral').innerText = "";

        return 0
    }

    document.getElementById('mostrar50').innerText = "\nSu definitiva seria de: " + (defsin + ((semestral*20)/100));
    document.getElementById('mostrar20').innerText = "";
    document.getElementById('mostrarauto').innerText = "";
    document.getElementById('mostrarco').innerText = "";
    document.getElementById('mostrarhetero').innerText = "";
    document.getElementById('mostrarsemestral').innerText = "";


}

function errores(id) {
    if (id == 0) {
        alert("No se ha rellenado campos en el 40% o 30% o auto o hetero")
    }
    if (id == 1) {
        alert("El numero debe de estar en un rango de 1 a 5.")
    }
}
