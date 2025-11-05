function calcularNivelTerraMedia(vitorias, derrotas, nomeDoGuerreiro){  
    let pontosPorVitoria = vitorias - derrotas + 10;
    let nivel;
    if (vitorias <10) {
       nivel= "Hobbit Iniciante";}
       else if(vitorias>=11 && vitorias<=20){
        nivel= "Guerreiro de Gondor";} 
        else if(vitorias>=21 && vitorias<=30){
        nivel= "Cavaleiro de Rohan";}
        else if(vitorias>=31&& vitorias<=60){
        nivel= "Elfo Sindarin";}
        else if(vitorias>=61 && vitorias<=75){
        nivel= "Anão de Erebor";}
        else if(vitorias>=76 && vitorias<=90){
        nivel= "Mago Branco";}
        else if(vitorias>=91 && vitorias<=100){         
        nivel= "Senhor dos Anéis";}  
        return "o guerreiro " + nomeDoGuerreiro + " possui o nivel de " + nivel + " com " + pontosPorVitoria + " pontos de vitoria";}
        let resultado = calcularNivelTerraMedia (15, 28, "Aragorn");
        let resultado2 = calcularNivelTerraMedia (85, 10, "Gandalf");
        console.log(resultado); 
        console.log(resultado2);    





