var current = {
	"pele": 1,
	"olho": 1,
	"cabelo": 1,
	"sexo": "f",
}

	/*
	 * Numeros equivalentes a cada cor da pele (m e f):
	 * 1: Branco
	 * 2: Mulato Claro
	 * 3: Mulato Escuro
	 * 4: Negro

	 * Numeros equivalentes a cada cor do olho (m e f)
	 * 1: Azul
	 * 2: Castanho
	 * 3: Preto
	 * 4: Verde

	 * Numeros equivalentes a cada cabelo (m)
	 * 1: Castanho Enrolado
	 * 2: Castanho Liso
	 * 3: Castanho Ondulado
	 * 4: Castanho Pixaim
	 * 5: Loiro Enrolado
	 * 6: Loiro Liso
	 * 7: Loiro Ondulado
	 * 8: Loiro Pixaim
	 * 9: Preto Enrolado  
	 * 10: Preto Liso 
	 * 11: Preto Ondulado
	 * 12: Preto Pixaim
	 * 13: Ruivo Enrolado
	 * 14: Ruivo Liso
	 * 15: Ruivo Ondulado
	 * 16: Ruivo Pixaim 
	 */

function getPele(s, i) {

	if (s == "m") {
		var url = "img/masc/pele/";
		switch(i) {
			case 1:
				return url + "Branco.png";
				break;
			case 2:
				return url + "MulatoClaro.png";
				break;
			case 3:
				return url + "MulatoEscuro.png";
				break;
			case 4:
				return url + "Negro.png";
				break;
			default:
				return url + "MulatoClaro.png";
		}
	} else {
		var url = "img/fem/pele/"
		switch(i) {
			case 1:
				return url + "Branca.png";
				break;
			case 2: 
				return url + "MulataClara.png";
				break;
			case 3:
				return url + "MulataEscura.png";
				break;
			case 4:
				return url + "Negra.png";
				break;
			default:
				return url + "MulataClaro.png";
		}
	}
}

function getOlho(s, i) {
	if (s == "m") {
		var url = "img/masc/olho/";
		switch (i) {
			case 1: 
				return url + "Azul.png";
				break;
			case 2: 
				return url + "Castanho.png";
				break;
			case 3:
				return url + "Preto.png";
				break;
			case 4:
				return url + "Verde.png";
				break;
			default:
				return url + "Preto.png";	
		} 
	} else {
			var url = "img/fem/olho/";
			switch (i) {
				case 1:
					switch (current.pele) {
						case 1:
							return url + "AzulPeleBranca.png";
							break;
						case 2:
							return url + "AzulPeleMulataClara.png";
							break;
						case 3:
							return url + "AzulPeleMulataEscura.png";
							break;
						case 4:
							return url + "AzulPeleNegra.png";
							break;
					}
					break;
				case 2:
					switch (current.pele) {
						case 1:
							return url + "CastanhoPeleBranca.png";
							break;
						case 2:
							return url + "CastanhoPeleMulataClara.png";
							break;
						case 3:
							return url + "CastanhoPeleMulataEscura.png";
							break;
						case 4:
							return url + "CastanhoPeleNegra.png";
							break;
					}
				case 3:
					switch (current.pele) {
						case 1: 
							return url + "PretoPeleBranca.png";
							break;
						case 2: 
							return url + "PretoPeleMulataClara.png";
							break;
						case 3:
							return url + "PretoPeleMulataEscura.png";
							break;
						case 4:
							return url + "PretoPeleNegra.png";
							break;
					}
					break;
				case 4:
					switch (current.pele) {
						case 1:
							return url + "VerdePeleBranca.png";
							break;
						case 2:
							return url + "VerdePeleMulataClara.png";
							break;
						case 3:
							return url + "VerdePeleMulataEscura.png";
							break;
						case 4:
							return url + "VerdePeleNegra.png";
							break;
					}
					break;
				}
			}
		}

function getCabelo(s, i) {
	if (s == "m") {
		var url = "img/masc/cabelo/";
		switch (i) {
			case 1: 
				return url + "CastanhoEnrolado.png";
				break;
			case 2:
				return url + "CastanhoLiso.png";
				break;
			case 3:
				return url + "CastanhoOndulado.png";
				break;
			case 4: 
				return url + "CastanhoPixaim.png";
				break
			case 5: 
				return url + "LoiroEnrolado.png";
				break;
			case 6:
				return url + "LoiroLiso.png";
				break;
			case 7:
				return url + "LoiroOndulado.png";
				break;
			case 8: 
				return url + "LoiroPixaim.png";
				break;
			case 9: 
				return url + "PretoEnrolado.png";
				break;
			case 10:
				return url + "PretoLiso.png";
				break;
			case 11:
				return url + "PretoOndulado.png";
				break;
			case 12: 
				return url + "PretoPixaim.png";
				break;
			case 13: 
				return url + "RuivoEnrolado.png";
				break;
			case 14:
				return url + "RuivoLiso.png";
				break;
			case 15:
				return url + "RuivoOndulado.png";
				break;
			case 16: 
				return url + "RuivoPixaim.png";
				break;
			default:
				return url + "CastanhoEnrolado.png";
		}
	} else {
		var url = "img/fem/cabelo/";
		switch (i) {
			case 1: 
				return url + "EnroladoCastanho.png";
				break;
			case 5: 
				return url + "EnroladoLoiro.png";
				break
			case 9: 
				return url + "EnroladoPreto.png";
				break;
			case 13: 
				return url + "EnroladoRuivo.png";
				break;
			case 2:
				return url + "LisoCastanho.png";
				break;
			case 6:
				return url + "LisoLoiro.png";
				break;
			case 10:
				return url + "LisoPreto.png";
				break;
			case 14:
				return url + "LisoRuivo.png";
				break;
			case 3:
				return url + "OnduladoCastanho.png";
				break;
			case 7:
				return url + "OnduladoLoiro.png";
				break;
			case 11:
				return url + "OnduladoPreto.png";
				break;
			case 15:
				return url + "OnduladoRuivo.png";
				break;
			case 4: 
				return url + "PixaimCastanho.png";
				break
			case 8: 
				return url + "PixaimLoiro.png";
				break;
			case 12: 
				return url + "PixaimPreto.png";
				break;
			case 16: 
				return url + "PixaimRuivo.png";
				break;
			default:
				return url + "EnroladoCastanho.png";
		}
	}
}

function setRosto(s, icp, ico, icc) {
	//icp = i da cor da pele, ico = i da cor do olho, icc = i da cor do cabelo, s = sexo
	if (s != "") {
		current.sexo = s;
	} else {
		s = current.sexo;
	}
	
	if (icp != 0) {
		document.getElementById("pele").src = getPele(s,icp);
		current.pele = icp;

		document.getElementById("olho").src = getOlho(s,current.olho);
 	} else {
		icp = current.pele;
		document.getElementById("pele").src = getPele(s,icp);
	}

	if (ico != 0) {
		document.getElementById("olho").src = getOlho(s,ico);
		current.olho = ico;
	} else {
		ico = current.olho;
		document.getElementById("olho").src = getOlho(s,ico);
	}

	if (icc != 0) {
		document.getElementById("cabelo").src = getCabelo(s,icc);
		current.cabelo = icc;
	} else {
		icc = current.cabelo;
		document.getElementById("cabelo").src = getCabelo(s,icc);
	}

}