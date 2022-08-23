// se declaran los elementos que ingresan y devuelven datos
const textoUsuario = document.querySelector(".textoA");
const textoEncriptado = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar");
copiar.style.display = "none";

//Botón para Encriptar
function btnEncriptar(){
	const sinAcentos = darFormato(textoUsuario.value);
	sinAncentos1 = sinAcentos;

	const txtEncriptado = encriptar(sinAncentos1);
	textoEncriptado.value = txtEncriptado;

	textoEncriptado.style.backgroundImage = "none";
	textoEncriptado.style.background = "transparent";
	document.getElementById('label0').style.display = 'none';
	document.getElementById('label1').style.display = 'none';
	textoUsuario.value = "";
	copiar.style.display = "block";
}
//función Encriptar
function encriptar(aEncriptar){
	
	let matriz = [["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u", "ufat"]];
	aEncriptar = aEncriptar.toLowerCase(); //vuelve el texto en minúscula

	for(let i=0; i < matriz.length; i++){
		if(aEncriptar.includes(matriz[i][0])){
			aEncriptar = aEncriptar.replaceAll(matriz[i][0],matriz[i][1]);
		}
	}
	return	aEncriptar;
}
// función para eliminar los acentos
function darFormato(cadena){
	let aMayus = cadena.replace(/[ÁÀÄÂ]/g,'A');
	let aMinus = aMayus.replace(/[áàäâ]/g,'a');
	let eMayus = aMinus.replace(/[ÉÈËÊ]/g,'E');
	let eMinus = eMayus.replace(/[éèëê]/g,'e');
	let iMayus = eMinus.replace(/[ÍÌÏÎ]/g,'I');
	let iMinus = iMayus.replace(/[íìïî]/g,'i');
	let oMayus = iMinus.replace(/[ÓÒÖÔ]/g,'O');
	let oMinus = oMayus.replace(/[óòöô]/g,'o');
	let uMayus = oMinus.replace(/[ÚÙÜÛ]/g,'U');
	let uMinus = uMayus.replace(/[úùüû]/g,'u');
	let enieMayus = uMinus.replace(/[Ñ]/g,'N');
	let enieMinus = enieMayus.replace(/[ñ]/g,'n');
	let resultado = enieMinus.replace(/['|°¬!^`~"#$%&/()Çç=?¿{}_,.´+<>¡¨*:;]/gi,'');

	return resultado;
}

//Función y Botón para DesEncriptar
//Botón DesEncriptar
function btnDesencriptar(){
	const txtEncriptado = desEncriptar(textoUsuario.value);
	textoEncriptado.value = txtEncriptado; 
	textoUsuario.value = "";
}

//Función DesEncriptar
function desEncriptar(aDesEncriptar){
	let matriz = [["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u", "ufat"]];
	aDesEncriptar = aDesEncriptar.toLowerCase();

	for(let i=0; i<matriz.length; i++){
		if(aDesEncriptar.includes(matriz[i][1])){
			aDesEncriptar = aDesEncriptar.replaceAll(matriz[i][1], matriz[i][0]);
		}
	}
	return aDesEncriptar;
}

//Función Boton Copiar
function copiarTexto(){
	textoEncriptado.select();//Seleccionar le texto que hay en el TextArea .Mensaje
	navigator.clipboard.writeText(textoEncriptado.value);
	textoEncriptado.value = "";
}
