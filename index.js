var txtBusca;
var receitasFavoritas = ["OMELETE CREMOSO DE QUEIJO", "RISOTO DE CAMARÃO"];

function favoritar(isFavorito) {
	if(!isFavorito) {
		document.getElementById('c1').style.display = 'none';
	}
}

function aplicarConteudo() {
	this.txtBusca = document.getElementById('txtbusca').value
	console.log("A receita será sobre " + this.txtBusca);
	redirecionar();
}

function getCabeçalho() {
	var header = "<div style='margin-left: 30%;'>"
            		+ "<input style='margin-top: 8px;' id='txtbusca' name='txtbusca' type='text' value='" + this.txtBusca + "' />"
            		+ "<input style='margin-top: 8px;' id='btnBusca' type='submit' value='Ok' onclick='aplicarConteudo()' />"
          		+ "</div>"
          		+ "<img src='receitou-logo-nome.png' width='10%' height='100%' style='float: right; margin-right: 8%; margin-top: -58px;' />";
	return header;
}

function redirecionar() {
	document.getElementById('header').innerHTML = getCabeçalho();
  	getReceita(this.txtBusca);
}

function getReceita(txtBusca) {
	var min = Math.ceil(1);
  	var max = Math.floor(4);
  	var indiceReceita = Math.floor(Math.random() * (max - min + 1)) + min;
	if(indiceReceita == 1) {
		getReceitaEnsopado(txtBusca);
	} else if(indiceReceita == 2) {
		getReceitaTorta(txtBusca);
	} else if(indiceReceita == 3) {
		getReceitaOmelete(txtBusca);
	} else {
		getReceitaRisoto(txtBusca);
	}

}

function getReceitaEnsopado(txtBusca) {
	var titulo = "ENSOPADO DE " + txtBusca.toUpperCase();
	var txtReceita = "<h3 class='borda_texto' style='color: #ff8a4a; font-weight: bold; font-size: 50px; text-align: center;'>" + titulo + "</h3>"
					+ "<a><i class='fa fa-heart' style='margin-right: 5%; font-size: 25px;''></i></a>"
					+ "<div style='margin-left: 20%; margin-top: 2%;'>"
						+ "<h5>Ingredientes:</h5>" 
						+ "<ul>"
	              			+"<li>1 cebola picada</li>"
							+ "<li>2 dentes de alho</li>"
							+ "<li/>2 tomates picados</li>"
							+ "<li>1 colher (sopa) de azeite</li>"
							+ "<li>1 colher (sopa) de colorau</li>"
							+ "<li>2 colheres (sopa) de tempero baiano</li>"
							+ "<li>1/2 pimentão vermelho picado</li>"
							+ "<li>1/2 pimentão amarelo picado</li>"
							+ "<li>1 kg e 500 g de retalho de " + txtBusca + "</li>"
							+ "<li>sal e pimenta a gosto</li>"
							+ "<li>suco de 1 limão</li>"
							+ "<li>cheiro-verde e coentro a gosto</li>"
	            		+ "</ul>"
	            		+ "<h5>Modo de Preparo:</h5>"
	            		+ "<ol type='1'>"
	            			+ "<li>Em uma bacia, tempere o(a) " + txtBusca + " com sal, limão e pimenta, reserve.</li>"
							+ "<li>Numa panela grande, refogue a cebola no azeite.</li>"
							+ "<li>Acrescente o alho e deixe dourar.</li>"
							+ "<li>Coloque o tomate, o colorau e o tempero baiano misturando bem.</li>"
							+ "<li>Acrescente os pimentões e deixe eles murcharem um pouco.</li>"
							+ "<li>Coloque o(a) " + txtBusca + " e cubra com água, deixando ferver por 35 minutos.</li>"
							+ "<li>Acerte o sal.</li>"
							+ "<li>Antes de desligar o fogo, coloque o cheiro-verde e o coentro.</li>"
							+ "<li>Sirva com arroz branco e pirão.</li>"
					+ "</div>";

	console.log(txtReceita);
	document.getElementById('container-imagem').innerHTML = txtReceita;
}

function getReceitaTorta(txtBusca) {
	var titulo = "TORTA DE " + txtBusca.toUpperCase();
	var txtReceita = "<h3 class='borda_texto' style='color: #ff8a4a; font-weight: bold; font-size: 50px; text-align: center;'>" + titulo + "</h3>"
					+ "<div style='margin-left: 20%; margin-right: 20%; margin-top: 2%;'>"
						+ "<h5>Ingredientes:</h5>" 
						+ "<ul>"
	              			+"<li>2 kg de batatas</li>"
							+ "<li>2 tomates</li>"
							+ "<li/>1 pimentão</li>"
							+ "<li>1 cebola</li>"
							+ "<li>Azeite a gosto</li>"
							+ "<li>1 lata de creme de leite</li>"
							+ "<li>50 g de queijo ralado</li>"
							+ "<li>500 g de filé de " + txtBusca + "</li>"
	            		+ "</ul>"
	            		+ "<h5>Modo de Preparo:</h5>"
	            		+ "<ol type='1'>"
	            			+ "<li>Cozinhe as batatas com sal.</li>"
							+ "<li>Enquanto isso pique os tomates, o pimentão e a cebola e misture os três com azeite (deixe separado).</li>"
							+ "<li>Tempere o(a) " + txtBusca + " a seu gosto (deixe separado).</li>"
							+ "<li>Após as batatas estarem cozidas, amasse-as e acrescente o creme de leite.</li>"
							+ "<li>Em uma forma untada com manteiga, coloque uma camada fina de batatas, cubra com alguns filés de " + txtBusca + " e por cima coloque a mistura dos tomates, pimentão e cebola.</li>"
							+ "<li>Proceda novamente na mesma ordem.</li>"
							+ "<li>Após terminadas as camadas, jogar o queijo por cima até cobrir a torta.</li>"
							+ "<li>Assar por 45 minutos.</li>"
					+ "</div>";

	console.log(txtReceita);
	document.getElementById('container-imagem').innerHTML = txtReceita;
}

function getReceitaOmelete(txtBusca) {
	var titulo = "OMELETE CREMOSO DE " + txtBusca.toUpperCase();
	var txtReceita = "<h3 class='borda_texto' style='color: #ff8a4a; font-weight: bold; font-size: 50px; text-align: center;'>" + titulo + "</h3>"
					+ "<div style='margin-left: 20%; margin-right: 20%; margin-top: 2%;'>"
						+ "<h5>Ingredientes:</h5>" 
						+ "<ul>"
	              			+"<li>1 cebola</li>"
							+ "<li>1 tomate</li>"
							+ "<li/>1 dente de alho</li>"
							+ "<li>Sal e pimenta-do-reino a gosto</li>"
							+ "<li>Azeite de oliva</li>"
							+ "<li>3 ovos</li>"
							+ "<li>50 g de queijo cottage</li>"
							+ "<li>Tomilho</li>"
							+ "<li>200 g de Filé de " + txtBusca + "</li>"
	            		+ "</ul>"
	            		+ "<h5>Modo de Preparo:</h5>"
	            		+ "<ol type='1'>"
	            			+ "<li>Corte o filé de " + txtBusca + " em cubinhos e tempere com sal e pimenta a gosto. Reserve</li>"
							+ "<li>Pique o alho, a cebola e o tomate. Reserve.</li>"
							+ "<li>Em uma frigideira antiaderente, aqueça um fio de azeite e doure a cebola e o alho, coloque o filé picado em cubinhos e o tomate, refogue até que o(a) " + this.txtBusca + " desmanche, retire do fogo. Reserve.</li>"
							+ "<li>Em um recipiente, coloque os ovos, o sal, e a pimenta e bata bem. Reserve.</li>"
							+ "<li>Em uma frigideira antiaderente, aqueça um fio de azeite, em seguida despeje os ovos batidos e deixe dourar por 2 minutos, vire a omelete e deixe por mais 2 minutos aproximadamente.</li>"
							+ "<li>Coloque em um lado da omelete o queijo cottage e em seguida distribua o refogado de " + txtBusca + ", feche a omelete e salpique tomilho por cima.</li>"
							+ "<li>Sirva quente.</li>"
					+ "</div>";

	console.log(txtReceita);
	document.getElementById('container-imagem').innerHTML = txtReceita;
}

function getReceitaRisoto(txtBusca) {
	var titulo = "RISOTO DE " + txtBusca.toUpperCase();
	var txtReceita = "<h3 class='borda_texto' style='color: #ff8a4a; font-weight: bold; font-size: 50px; text-align: center;'>" + titulo + "</h3>"
					+ "<div style='margin-left: 20%; margin-right: 20%; margin-top: 2%;'>"
						+ "<h5>Ingredientes:</h5>" 
						+ "<ul>"
	              			+"<li>1 " + txtBusca + " cozido e desfiado</li>"
							+ "<li>1 sache de pomarola tradicional</li>"
							+ "<li/>1 lata de milho verde</li>"
							+ "<li>1 tablete de caldo de " + txtBusca + "</li>"
							+ "<li>8 azeitonas médias sem caroço</li>"
							+ "<li>Arroz cozido</li>"
							+ "<li>Coentro</li>"
							+ "<li>Alho</li>"
							+ "<li>Cebola</li>"
							+ "<li>Sal</li>"
	            		+ "</ul>"
	            		+ "<h5>Modo de Preparo:</h5>"
	            		+ "<ol type='1'>"
	            			+ "<li>Cozinhe o(a) " + txtBusca + " com sal e o caldo de " + txtBusca + ".</li>"
							+ "<li>Reserve a água do caldo e desfie o(a) " + txtBusca + ".</li>"
							+ "<li>Em uma panela refogue o alho e a cebola.</li>"
							+ "<li>Acrescente o sachê de pomarola, 300 ml do caldo, azeitonas e o milho.</li>"
							+ "<li>Mexa até misturar bem.</li>"
							+ "<li>Acrescente o arroz cozido, mais ou menos 4 xícaras.</li>"
							+ "<li>Mexa novamente, misturando bem.</li>"
							+ "<li>Coloque em uma travessa.</li>"
					+ "</div>";

	console.log(txtReceita);
	document.getElementById('container-imagem').innerHTML = txtReceita;
}