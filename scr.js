var pos = 0, grila, status_grila, intrebare, raspuns, raspunsuri, ra, rb, rc, rd, corect = 0, rasp, procent = 0, intr = 0, index, rst = true, i = 0;
var index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300];
function _(x){
	return document.getElementById(x);
}
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}
function renderQuestion(){
	grila = _("grila");
	if(pos >= intrebari.length || i >= intrebari.length){
		grila.innerHTML = "<strong style='font-size:28px'>Sie haben "+corect+" von "+intrebari.length+" Fragen richtig beantwortet</strong>";
		grila.innerHTML += "<br><br><center><button class='button' onclick='window.location.reload();'>Refresh</button></center>";
		_("status_grila").innerHTML = "<strong style='font-size:28px;color:white'>Sie haben den Test abgeschlossen</strong>";
		pos = 0;
		corect = 0;
		procent = 0;
		rst = true;
		return false;
		
	}
	if(rst == true){
		shuffle(index);
		rst = false;
	}

	pos = index[i];
	
	_("status_grila").innerHTML = "<strong style='font-size:38px;color:white'>Test Politik</strong>";

	
	intrebare = intrebari[pos][0];
	ra = intrebari[pos][1];
	rb = intrebari[pos][2];
	rc = intrebari[pos][3];
	rd = intrebari[pos][4];
	rasp = intrebari[pos][5];
	grila.innerHTML = "<center> <div class='percentageFill"+procent+"'><strong style='font-size:20px'>Frage "+(intr+1)+"</strong></div></center>";
	grila.innerHTML += "<br><strong style='font-size:26px'>"+intrebare+"</strong><br><br>"
	grila.innerHTML += "<input type='radio' name='raspunsuri' value='A'>&nbsp;A)"+ra+"<br>";
	grila.innerHTML += "<input type='radio' name='raspunsuri' value='B'>&nbsp;B)"+rb+"<br>";
	grila.innerHTML += "<input type='radio' name='raspunsuri' value='C'>&nbsp;C)"+rc+"<br>";
	grila.innerHTML += "<input type='radio' name='raspunsuri' value='D'>&nbsp;D)"+rd+"<br>";
	grila.innerHTML += "<br><center><button class='button' onclick='verifica()'>Antworten</button></center>";
}


function verifica(){
	raspunsuri = document.getElementsByName("raspunsuri");
		for(var i=0; i< raspunsuri.length; i++){
			if(raspunsuri[i].checked) {
				raspuns = raspunsuri[i].value;
			} 
		}

			if(raspuns == rasp){
				corect++;
				grila.innerHTML = "<br><center><strong style='font-size:32px;color:#00FF00'>Richtig</strong><br><br></center>";
				grila.innerHTML += "<strong style='font-size:26px'>"+intrebare+"</strong><br><br>";	
				switch (rasp){
					case "A":
						grila.innerHTML += "<strong style='background-color:#00FF00'>A)&nbsp;"+ra+"</strong><br>";
						grila.innerHTML += "B)&nbsp;"+rb+"<br>";
						grila.innerHTML += "C)&nbsp;"+rc+"<br>";
						grila.innerHTML += "D)&nbsp;"+rd+"<br>";
					break;
					case "B":
						grila.innerHTML += "A)&nbsp;"+ra+"<br>";
						grila.innerHTML += "<strong style='background-color:#00FF00'>B)&nbsp;"+rb+"</strong><br>";
						grila.innerHTML += "C)&nbsp;"+rc+"<br>";
						grila.innerHTML += "D)&nbsp;"+rd+"<br>";
					break;
					case "C":
						grila.innerHTML += "A)&nbsp;"+ra+"<br>";
						grila.innerHTML += "B)&nbsp;"+rb+"<br>";
						grila.innerHTML += "<strong style='background-color:#00FF00'>C)&nbsp;"+rc+"</strong><br>";
						grila.innerHTML += "D)&nbsp;"+rd+"<br>";
					break;
					case "D":
						grila.innerHTML += "A)&nbsp;"+ra+"<br>";
						grila.innerHTML += "B)&nbsp;"+rb+"<br>";
						grila.innerHTML += "C)&nbsp;"+rc+"<br>";
						grila.innerHTML += "<strong style='background-color:#00FF00'>D)&nbsp;"+rd+"</strong><br>";
					break;
					case "E":
						grila.innerHTML += "A)&nbsp;"+ra+"<br>";
						grila.innerHTML += "B)&nbsp;"+rb+"<br>";
						grila.innerHTML += "C)&nbsp;"+rc+"<br>";
						grila.innerHTML += "D)&nbsp;"+rd+"<br>";
				}
			} else {
				grila.innerHTML = "<br><center><strong style='font-size:32px;color:red'>Falsch</strong><br><br>";
				grila.innerHTML += "<strong style='font-size:26px'>"+intrebare+"</strong><br><br>";	
				switch (rasp){
					case "A":
						switch (raspuns){
							case "B":
								grila.innerHTML += "<strong style='background-color:#00FF00'>A)&nbsp;"+ra+"</strong><br>";
								grila.innerHTML += "<strong style='background-color:red'>B)&nbsp;"+rb+"</strong><br>";
								grila.innerHTML += "C)&nbsp;"+rc+"<br>";
								grila.innerHTML += "D)&nbsp;"+rd+"<br>";	
							break;
							case "C":
								grila.innerHTML += "<strong style='background-color:#00FF00'>A)&nbsp;"+ra+"</strong><br>";
								grila.innerHTML += "B)&nbsp;"+rb+"<br>";
								grila.innerHTML += "<strong style='background-color:red'>C)&nbsp;"+rc+"</strong><br>";
								grila.innerHTML += "D)&nbsp;"+rd+"<br>";
							break;
							case "D":
								grila.innerHTML += "<strong style='background-color:#00FF00'>A)&nbsp;"+ra+"</strong><br>";
								grila.innerHTML += "B)&nbsp;"+rb+"<br>";
								grila.innerHTML += "C)&nbsp;"+rc+"<br>";
								grila.innerHTML += "<strong style='background-color:red'>D)&nbsp;"+rd+"</strong><br>";
							break;
							case "E":
								grila.innerHTML += "<strong style='background-color:#00FF00'>A)&nbsp;"+ra+"</strong><br>";
								grila.innerHTML += "B)&nbsp;"+rb+"<br>";
								grila.innerHTML += "C)&nbsp;"+rc+"<br>";
								grila.innerHTML += "D)&nbsp;"+rd+"<br>";
							break;
							default: 
								grila.innerHTML += "<strong style='background-color:#00FF00'>A)&nbsp;"+ra+"</strong><br>";
								grila.innerHTML += "B)&nbsp;"+rb+"<br>";
								grila.innerHTML += "C)&nbsp;"+rc+"<br>";
								grila.innerHTML += "D)&nbsp;"+rd+"<br>";
						}
					break;
					case "B":
						switch (raspuns){
								case "A":
									grila.innerHTML += "<strong style='background-color:red'>A)&nbsp;"+ra+"</strong><br>";
									grila.innerHTML += "<strong style='background-color:#00FF00'>B)&nbsp;"+rb+"</strong><br>";
									grila.innerHTML += "C)&nbsp;"+rc+"<br>";
									grila.innerHTML += "D)&nbsp;"+rd+"<br>";
								break;
								case "C":
									grila.innerHTML += "A)&nbsp;"+ra+"<br>";
									grila.innerHTML += "<strong style='background-color:#00FF00'>B)&nbsp;"+rb+"</strong><br>";
									grila.innerHTML += "<strong style='background-color:red'>C)&nbsp;"+rc+"</strong><br>";
									grila.innerHTML += "D)&nbsp;"+rd+"<br>";	
								break;
								case "D":
									grila.innerHTML += "A)&nbsp;"+ra+"<br>";
									grila.innerHTML += "<strong style='background-color:#00FF00'>B)&nbsp;"+rb+"</strong><br>";
									grila.innerHTML += "C)&nbsp;"+rc+"<br>";
									grila.innerHTML += "<strong style='background-color:red'>D)&nbsp;"+rd+"</strong><br>";	
								break;
								case "E":
									grila.innerHTML += "A)&nbsp;"+ra+"<br>";
									grila.innerHTML += "<strong style='background-color:#00FF00'>B)&nbsp;"+rb+"</strong><br>";
									grila.innerHTML += "C)&nbsp;"+rc+"<br>";
									grila.innerHTML += "D)&nbsp;"+rd+"<br>";
								break;
								default: 
									grila.innerHTML += "A)&nbsp;"+ra+"<br>";
									grila.innerHTML += "<strong style='background-color:#00FF00'>B)&nbsp;"+rb+"</strong><br>";
									grila.innerHTML += "C)&nbsp;"+rc+"<br>";
									grila.innerHTML += "D)&nbsp;"+rd+"<br>";
						}	
					break;
					case "C":
						switch (raspuns){
								case "A":
									grila.innerHTML += "<strong style='background-color:red'>A)&nbsp;"+ra+"</strong><br>";
									grila.innerHTML += "B)&nbsp;"+rb+"<br>";
									grila.innerHTML += "<strong style='background-color:#00FF00'>C)&nbsp;"+rc+"</strong><br>";
									grila.innerHTML += "D)&nbsp;"+rd+"<br>";
								break;
								case "B":
									grila.innerHTML += "A)&nbsp;"+ra+"<br>";
									grila.innerHTML += "<strong style='background-color:red'>B)&nbsp;"+rb+"</strong><br>";
									grila.innerHTML += "<strong style='background-color:#00FF00'>C)&nbsp;"+rc+"</strong><br>";
									grila.innerHTML += "D)&nbsp;"+rd+"<br>";
								break;
								case "D":
									grila.innerHTML += "A)&nbsp;"+ra+"<br>";
									grila.innerHTML += "B)&nbsp;"+rb+"<br>";
									grila.innerHTML += "<strong style='background-color:#00FF00'>C)&nbsp;"+rc+"</strong><br>";
									grila.innerHTML += "<strong style='background-color:red'>D)&nbsp;"+rd+"</strong><br>";	
								break;
								case "E":
									grila.innerHTML += "A)&nbsp;"+ra+"<br>";
									grila.innerHTML += "B)&nbsp;"+rb+"<br>";
									grila.innerHTML += "<strong style='background-color:#00FF00'>C)&nbsp;"+rc+"</strong><br>";
									grila.innerHTML += "D)&nbsp;"+rd+"<br>";
								break;
								default: 
									grila.innerHTML += "A)&nbsp;"+ra+"<br>";
									grila.innerHTML += "B)&nbsp;"+rb+"<br>";
									grila.innerHTML += "<strong style='background-color:#00FF00'>C)&nbsp;"+rc+"</strong><br>";
									grila.innerHTML += "D)&nbsp;"+rd+"<br>";
							}
					break;
					case "D":
						switch (raspuns){
								case "A":
									grila.innerHTML += "<strong style='background-color:red'>A)&nbsp;"+ra+"</strong><br>";
									grila.innerHTML += "B)&nbsp;"+rb+"<br>";
									grila.innerHTML += "C)&nbsp;"+rc+"<br>";
									grila.innerHTML += "<strong style='background-color:#00FF00'>D)&nbsp;"+rd+"</strong><br>";
								break;
								case "B":
									grila.innerHTML += "A)&nbsp;"+ra+"<br>";
									grila.innerHTML += "<strong style='background-color:red'>B)&nbsp;"+rb+"</strong><br>";
									grila.innerHTML += "C)&nbsp;"+rc+"<br>";
									grila.innerHTML += "<strong style='background-color:#00FF00'>D)&nbsp;"+rd+"</strong><br>";
								break;
								case "C":
									grila.innerHTML += "A)&nbsp;"+ra+"<br>";
									grila.innerHTML += "B)&nbsp;"+rb+"<br>";
									grila.innerHTML += "<strong style='background-color:red'>C)&nbsp;"+rc+"</strong><br>";
									grila.innerHTML += "<strong style='background-color:#00FF00'>D)&nbsp;"+rd+"</strong><br>";
								break;
								case "E":
									grila.innerHTML += "A)&nbsp;"+ra+"<br>";
									grila.innerHTML += "B)&nbsp;"+rb+"<br>";
									grila.innerHTML += "C)&nbsp;"+rc+"<br>";
									grila.innerHTML += "<strong style='background-color:#00FF00'>D)&nbsp;"+rd+"</strong><br>";
								break;
								default: 
									grila.innerHTML += "A)&nbsp;"+ra+"<br>";
									grila.innerHTML += "B)&nbsp;"+rb+"<br>";
									grila.innerHTML += "C)&nbsp;"+rc+"<br>";
									grila.innerHTML += "<strong style='background-color:#00FF00'>D)&nbsp;"+rd+"</strong><br>";		
							}
					break;
	
				}
			}
		grila.innerHTML += "<br><center><button class='button' onclick='urm()'>Fortsetzen</button></center>";
}
function urm(){
	raspuns = "";
	i++;
	intr++;
	procent++;;
	renderQuestion();
}