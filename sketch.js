      let campoObj, cidadeObj;
        let arrastando = null;
        let conectado = false;

        function setup() {
            createCanvas(800, 500);
            campoObj = { x: 100, y: 350, w: 50, h: 50, tipo: 'planta' };
            cidadeObj = { x: 600, y: 250, w: 100, h: 150, tipo: 'prédio' };
        }

        function draw() {
            background("#BBEAF0");  // Céu azul

            // Desenho do campo (árvore, plantas)
            drawCampo();
            // Desenho da cidade (prédio, ruas)
            drawCidade();

            // Texto para o objetivo
            fill("#413B06");
            textSize(24);
            textAlign(CENTER, CENTER);
            text(conectado ? "Parabéns,Conexão feita! 🌱🏙️" : "Arraste a planta para a cidade!", width / 2, 50);

            // Verifica se o item foi movido para a cidade
            if (conectado) {
                drawCelebration();
            }
        }

        function drawCampo() {
            // Desenhando o campo
            fill("#316E9E"); // Cor de verde (campo)
            rect(50, 300, 150, 150); // Solo do campo

            // Desenhando uma árvore ou planta
            fill(0, 128, 0); // Cor da planta
            ellipse(campoObj.x, campoObj.y, campoObj.w, campoObj.h); // Folha

            fill("#AD6951"); // Cor do tronco
            rect(campoObj.x - 10, campoObj.y + 25, 20, 40); // Tronco
        }

        function drawCidade() {
            // Desenhando o prédio da cidade
            fill("#BD9082")// Cor do prédio
            rect(cidadeObj.x, cidadeObj.y, cidadeObj.w, cidadeObj.h);

            fill("yellow"); // Cor das janelas do prédio
            rect(cidadeObj.x + 20, cidadeObj.y + 20, 30, 30);
            rect(cidadeObj.x + 50, cidadeObj.y + 20, 30, 30);
            rect(cidadeObj.x + 20, cidadeObj.y + 60, 30, 30);
            rect(cidadeObj.x + 50, cidadeObj.y + 60, 30, 30);

            // Desenhando ruas e carros
            fill(200); // Cor das ruas
            rect(0, 400, width, 50); // Rua

            fill("#EBA949"); // Cor do carro
            rect(350, 430, 60, 30); // Carro na rua
        }

        function drawCelebration() {
            // Animação de celebração
            fill("#03A9F4");
            textSize(50);
            text("🎉", width / 2, height / 2); // Emoji de festa
            noStroke();
            ellipse(random(width), random(height), 10, 10); // Partículas de celebração
        }

        function mousePressed() {
            // Iniciar o arraste da planta
            if (dist(mouseX, mouseY, campoObj.x, campoObj.y) < campoObj.w / 2) {
                arrastando = 'campo';
            }
        }

        function mouseReleased() {
            if (arrastando === 'campo') {
                // Se a planta cair na cidade, conectar
                if (mouseX > cidadeObj.x && mouseX < cidadeObj.x + cidadeObj.w && mouseY > cidadeObj.y && mouseY < cidadeObj.y + cidadeObj.h) {
                    conectado = true;
                } else {
                    // Se não, volta ao campo
                    campoObj.x = 100;
                    campoObj.y = 350;
                }
            }
            arrastando = null;
        }

        function mouseDragged() {
            // Movendo o objeto
            if (arrastando === 'campo') {
                campoObj.x = mouseX;
                campoObj.y = mouseY;
            }
        }
    
