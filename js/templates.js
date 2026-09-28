export function homeTemplate() {
    return `
        <section id="inicio" class="hero">
            <img src="assets/banner.png" id="banner" alt="Associação Conviver: acolher e desenvolver pessoas com necessidades especiais">
        </section>
        <section id="carrosel" aria-label="Momentos da Associação Conviver">
            <div class="car-img">
                <img src="assets/carrosel2.webp" alt="Alunos e equipe da Associação Conviver">
                <img src="assets/Carrosel1.webp" alt="Grupo da Associação Conviver ao ar livre">
                <img src="assets/carrosel3.webp" alt="Atividade realizada pela Associação Conviver">
                <img src="assets/carrosel4.webp" alt="Convivência entre alunos e equipe">
            </div>
        </section>
        <section id="doar">
            <div class="doar">
                <p class="eyebrow">DOAR, UM ATO DE AMOR</p>
                <h1>Ajude o Conviver a transformar vidas</h1>
                <p>Com a sua ajuda, continuamos acolhendo e desenvolvendo pessoas com necessidades especiais.</p>
                <a class="button" href="#contato">Quero ajudar</a>
            </div>
            <div class="doar-bloco">
                <div class="doar-bloco-item">
                    <img src="assets/bazar.png" alt="Ilustração de doações para o bazar">
                    <h2>Ajude o nosso bazar</h2>
                    <p>Roupas, brinquedos, livros e objetos em bom estado podem ajudar muitas pessoas.</p>
                </div>
                <div class="doar-bloco-item">
                    <img src="assets/patrocinador.png" alt="Ilustração de um patrocinador">
                    <h2>Seja um Patrocinador</h2>
                    <p>Você pode fazer também uma doação financeira e ser um patrocinador do projeto. Entre em contato conosco.</p>
                </div>
                <div class="doar-bloco-item">
                    <img src="assets/voluntario.png" alt="Ilustração de uma pessoa voluntária">
                    <h2>Seja um voluntário</h2>
                    <p>Doe o seu tempo e suas habilidades para cuidar de pessoas. Nossa missão é acolher e desenvolver pessoas com necessidades especiais. Faça parte do nosso time de voluntários e ajude a transformar vidas.</p>
                </div>
            </div>
        </section>
    `;
}

function feedback(id) {
    return `<small class="field-feedback" id="${id}-feedback" aria-live="polite"></small>`;
}

export function volunteerTemplate() {
    return `
        <div class="pagina-voluntariado">
            <section class="formulario-main">
                <div class="formulario-intro">
                    <p class="eyebrow">FAÇA PARTE DO CONVIVER</p>
                    <h1>Voluntarie-se</h1>
                    <p>Seu tempo e suas habilidades podem transformar vidas. Preencha o formulário e conte como você gostaria de ajudar a nossa associação.</p>
                </div>
                <form class="formulario-voluntario" novalidate>
                    <div class="campo-duplo">
                        <div class="campo">
                            <label for="nome">Nome completo</label>
                            <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" minlength="3" required aria-describedby="nome-feedback">
                            ${feedback('nome')}
                        </div>
                        <div class="campo">
                            <label for="email">E-mail</label>
                            <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" required aria-describedby="email-feedback">
                            ${feedback('email')}
                        </div>
                    </div>
                    <div class="campo-duplo">
                        <div class="campo">
                            <label for="telefone">Telefone</label>
                            <input type="tel" id="telefone" name="telefone" placeholder="(12) 99999-9999" pattern="\\([0-9]{2}\\) ?[0-9]{4,5}-?[0-9]{4}|[0-9]{2} ?[0-9]{4,5}-?[0-9]{4}" required aria-describedby="telefone-feedback">
                            ${feedback('telefone')}
                        </div>
                        <div class="campo">
                            <label for="disponibilidade">Disponibilidade</label>
                            <select id="disponibilidade" name="disponibilidade" required aria-describedby="disponibilidade-feedback">
                                <option value="">Selecione uma opção</option>
                                <option value="semana">Durante a semana</option>
                                <option value="sabado">Aos sábados</option>
                                <option value="eventual">Disponibilidade eventual</option>
                            </select>
                            ${feedback('disponibilidade')}
                        </div>
                    </div>
                    <div class="campo">
                        <label for="interesse">Como você gostaria de ajudar?</label>
                        <select id="interesse" name="interesse" required aria-describedby="interesse-feedback">
                            <option value="">Selecione uma área</option>
                            <option value="alunos">Atividades com os alunos</option>
                            <option value="eventos">Eventos e campanhas</option>
                            <option value="bazar">Bazar e arrecadações</option>
                            <option value="outros">Outra área</option>
                        </select>
                        ${feedback('interesse')}
                    </div>
                    <div class="campo">
                        <label for="mensagem">Conte um pouco sobre você</label>
                        <textarea id="mensagem" name="mensagem" rows="6" placeholder="Fale sobre suas habilidades, interesses e experiências"></textarea>
                    </div>
                    <p class="form-feedback" role="status" aria-live="polite"></p>
                    <button class="button" type="submit">Enviar inscrição</button>
                </form>
            </section>
        </div>
    `;
}