// Contraste
// Contraste

document.getElementById('botao-contraste').addEventListener('click', () => {
    // Alternar modo escuro
    document.body.classList.toggle('dark-mode');
    
    // Verificar se o modo escuro está ativo
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Selecionar os links do menu
    const menuLinks = document.querySelectorAll('.usabilidade, .acessibilidade, .ferramentas, .sobre');
    
    // Alterar comportamento do hover para o modo escuro (para telas grandes)
    menuLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            if (isDarkMode) {
                // Modificando o comportamento de hover no modo escuro
                if (!link.classList.contains('usabilidade-ativa') && 
                    !link.classList.contains('acessibilidade-ativa') && 
                    !link.classList.contains('ferramentas-ativa') && 
                    !link.classList.contains('sobre-ativa')) {
                    link.style.backgroundColor = 'white';
                    link.style.color = '#0D0D0D';
                }
            } else {
                // Modificando o comportamento de hover no modo claro
                if (link.classList.contains('usabilidade')) {
                    link.style.backgroundColor = '#475E18'; // Verde
                    link.style.color = 'white';
                } else if (link.classList.contains('acessibilidade')) {
                    link.style.backgroundColor = '#31579E'; // Azul
                    link.style.color = 'white';
                } else if (link.classList.contains('ferramentas')) {
                    link.style.backgroundColor = '#9F2B2F'; // Vermelho
                    link.style.color = 'white';
                } else if (link.classList.contains('sobre')) {
                    link.style.backgroundColor = '#595959'; // Cinza
                    link.style.color = 'white';
                }
            }
        });

        link.addEventListener('mouseleave', () => {
            if (isDarkMode) {
                // Remover o estilo de hover no modo escuro
                if (!link.classList.contains('usabilidade-ativa') && 
                    !link.classList.contains('acessibilidade-ativa') && 
                    !link.classList.contains('ferramentas-ativa') && 
                    !link.classList.contains('sobre-ativa')) {
                    link.style.backgroundColor = '';  // Limpa o fundo
                    link.style.color = '';  // Limpa a cor
                }
            } else {
                // No modo claro, retorna ao estilo original do link
                link.style.backgroundColor = '';
                link.style.color = '';
            }
        });
    });

    // Adicionar o mesmo comportamento de hover para os links no modo pequeno
    const menuLinksSmall = document.querySelectorAll('.usabilidade-cheia, .acessibilidade-cheia, .ferramentas-cheia, .sobre-cheia');
    menuLinksSmall.forEach(link => {
        if (isDarkMode) {
            link.style.backgroundColor = 'white';
            link.style.color = '#0D0D0D';
        } else {
            link.style.backgroundColor = '';
            link.style.color = '';
        }
    });

    // Alterar o fundo das linhas para modo escuro
    const linhas = document.querySelectorAll('.usabilidade-linha, .acessibilidade-linha, .ferramentas-linha, .sobre-linha');
    linhas.forEach(linha => {
        if (isDarkMode) {
            linha.style.backgroundColor = 'white';  // Cor de fundo branco no modo escuro
        } else {
            linha.style.backgroundColor = '';  // Cor original no modo claro
        }
    });

// Alterar o fundo dos elementos com a classe 'fundo-azul-claro'
const fundoAzulClaroElements = document.querySelectorAll('.fundo-azul-claro');
fundoAzulClaroElements.forEach(element => {
    if (isDarkMode) {
        element.style.backgroundColor = '#55595E';  // Fundo #55595E no modo escuro
    } else {
        element.style.backgroundColor = '';  // Cor original no modo claro
    }
});

// Alterar o fundo dos elementos com a classe 'fundo-vermelho-claro'
const fundoVermelhoClaroElements = document.querySelectorAll('.fundo-vermelho-claro');
fundoVermelhoClaroElements.forEach(element => {
    if (isDarkMode) {
        element.style.backgroundColor = '#55595E';  // Fundo #55595E no modo escuro
    } else {
        element.style.backgroundColor = '';  // Cor original no modo claro
    }
});

// Novo comportamento para o modo escuro
const novoElemento = document.querySelectorAll('.novo-elemento');

novoElemento.forEach(element => {
    if (isDarkMode) {
        // Altere o fundo e a cor para o modo escuro
        element.style.backgroundColor = '#333';  // Cor de fundo no modo escuro
        element.style.color = '#ECECEC';  // Cor do texto no modo escuro
    } else {
        // Altere o fundo e a cor para o modo claro
        element.style.backgroundColor = '';  // Cor original de fundo
        element.style.color = '';  // Cor original do texto
    }
});




    // Alterar as classes ativas para fundo branco e texto #0D0D0D no modo escuro
    const elementosAtivos = document.querySelectorAll('.usabilidade-ativa, .acessibilidade-ativa, .ferramentas-ativa, .sobre-ativa');
    elementosAtivos.forEach(element => {
        if (isDarkMode) {
            element.style.backgroundColor = 'white';  // Fundo branco no modo escuro
            element.style.color = '#0D0D0D';  // Texto #0D0D0D no modo escuro
        } else {
            element.style.backgroundColor = '';  // Cor original no modo claro
            element.style.color = '';  // Cor original no modo claro
        }
    });

    // Alterar o fundo da classe '.inicio-index' para modo escuro
    const inicioIndex = document.querySelectorAll('.inicio-index');
    inicioIndex.forEach(element => {
        if (isDarkMode) {
            element.style.backgroundColor = '#0D0D0D';  // Cor escura no modo escuro
        } else {
            element.style.backgroundColor = '#475E18';  // Cor original no modo claro
        }
    });

    // Alterar a cor de fundo para elementos com a classe 'fundo-branco'
    const fundoBrancoElements = document.querySelectorAll('.fundo-branco');
    fundoBrancoElements.forEach(element => {
        if (isDarkMode) {
            element.style.backgroundColor = '#1F1F1F';  // Cor escura no modo escuro
        } else {
            element.style.backgroundColor = '';  // Cor original no modo claro
        }
    });

    // Alterar a cor de fundo para elementos com as classes 'fundo-vermelho', 'fundo-azul', 'fundo-verde'
    const fundoVermelho = document.querySelectorAll('.fundo-vermelho');
    const fundoAzul = document.querySelectorAll('.fundo-azul');
    const fundoVerde = document.querySelectorAll('.fundo-verde');
    
    fundoVermelho.forEach(element => {
        if (isDarkMode) {
            element.style.backgroundColor = '#0D0D0D';  // Fundo escuro no modo escuro
        } else {
            element.style.backgroundColor = '#9F2B2F';  // Cor vermelha original
        }
    });

    fundoAzul.forEach(element => {
        if (isDarkMode) {
            element.style.backgroundColor = '#0D0D0D';  // Fundo escuro no modo escuro
        } else {
            element.style.backgroundColor = '#2F5499';  // Cor azul original
        }
    });

    fundoVerde.forEach(element => {
        if (isDarkMode) {
            element.style.backgroundColor = '#0D0D0D';  // Fundo escuro no modo escuro
        } else {
            element.style.backgroundColor = '#475E18';  // Cor verde original
        }
    });

    // Alterar o fundo dos botões "Mostrar Mais"
    const botaoVejaMaisAAC = document.querySelector('#button-veja-mais-aac');
    const botaoVejaMaisUsabilidade = document.querySelector('#button-veja-mais-usabilidade');
    
    if (botaoVejaMaisAAC) {
        if (isDarkMode) {
            botaoVejaMaisAAC.style.backgroundColor = 'white';  // Cor de fundo branca no modo escuro
            botaoVejaMaisAAC.style.color = '#0D0D0D';  // Cor do texto #0D0D0D no modo escuro
        } else {
            botaoVejaMaisAAC.style.backgroundColor = '';  // Cor original no modo claro
            botaoVejaMaisAAC.style.color = '';  // Cor original no modo claro
        }
    }

    if (botaoVejaMaisUsabilidade) {
        if (isDarkMode) {
            botaoVejaMaisUsabilidade.style.backgroundColor = 'white';  // Cor de fundo branca no modo escuro
            botaoVejaMaisUsabilidade.style.color = '#0D0D0D';  // Cor do texto #0D0D0D no modo escuro
        } else {
            botaoVejaMaisUsabilidade.style.backgroundColor = '';  // Cor original no modo claro
            botaoVejaMaisUsabilidade.style.color = '';  // Cor original no modo claro
        }
    }

    // Manter o botão de envio com o estilo fixo em ambos os modos
    const botaoEnviar = document.querySelector('#button');
    if (botaoEnviar) {
        botaoEnviar.style.backgroundColor = '';  // Manter o fundo conforme o estilo original
        botaoEnviar.style.color = '';  // Manter a cor do texto conforme o estilo original
    }

    // Alterar a cor do texto para elementos com a classe 'texto-verde'
    const textoVerdeElements = document.querySelectorAll('.texto-verde');
    textoVerdeElements.forEach(element => {
        if (isDarkMode) {
            element.style.color = '#ECECEC';  // Texto branco no modo escuro
        } else {
            element.style.color = '#475E18';  // Texto verde no modo claro
        }
    });

    // **Aqui você insere o código para alterar a cor do texto para #0D0D0D para botao-acesse2**
    const botoesAcesse2 = document.querySelectorAll('.botao-acesse2');
    botoesAcesse2.forEach(button => {
        if (isDarkMode) {
            button.style.color = '#0D0D0D';  // Cor do texto #0D0D0D no modo escuro
        } else {
            button.style.color = '';  // Cor original no modo claro
        }
    });

 // Novo comportamento para o botão com a classe 'botao-acesse'
const botaoAcesse = document.querySelectorAll('.botao-acesse');
botaoAcesse.forEach(button => {
    console.log(button); // Verifica se os botões estão sendo selecionados
    if (isDarkMode) {
        button.style.setProperty('color', '#0D0D0D', 'important');  // Força a cor escura no modo escuro
    } else {
        button.style.setProperty('color', '', 'important');  // Remove a cor no modo claro
    }
});

// Alterar a cor do texto para os elementos com a classe 'p-inicio-sobre' no modo escuro
const pInicioSobreElements = document.querySelectorAll('.p-inicio-sobre');
pInicioSobreElements.forEach(element => {
    if (isDarkMode) {
        element.style.color = '#ECECEC';  // Cor branca no modo escuro
    } else {
        element.style.color = '';  // Cor original no modo claro
    }
});

// Ignorar alterações para o elemento com o id 'button1' no modo escuro
const button1 = document.getElementById('button1');
if (button1) {
    // Não alterar o estilo do botão 'button1' quando o modo escuro estiver ativado
    if (isDarkMode) {
        button1.style.backgroundColor = '';  // Não altera o fundo
        button1.style.color = '';  // Não altera a cor do texto
    } else {
        // Se precisar de algum estilo no modo claro, adicione aqui (por exemplo):
        button1.style.backgroundColor = '';  // Fundo original
        button1.style.color = '';  // Cor do texto original
    }
}

    // Alterar a sombra de elementos com a classe 'shadow-left'
    const shadowLeftElements = document.querySelectorAll('.shadow-left');
    shadowLeftElements.forEach(element => {
        if (isDarkMode) {
            element.style.boxShadow = '-15px 20px 0px #55595E';  // Sombra escura no modo escuro
        } else {
            element.style.boxShadow = '-15px 20px 0px #384916';  // Sombra original
        }
    });


    // Alterar o fundo dos elementos com a classe 'resumo-linha'
const resumoLinhaElements = document.querySelectorAll('.resumo-linha');

// Defina a lógica de alternância entre modo escuro e modo claro
resumoLinhaElements.forEach(element => {
    if (isDarkMode) {
        // No modo escuro, aplique o fundo #55595E
        element.style.backgroundColor = '#55595E';  // Cor de fundo #55595E
    } else {
        // No modo claro, restaure o estilo original (remova a alteração feita no modo escuro)
        element.style.backgroundColor = '';  // Cor original
    }
});

// Alterar o estilo dos elementos com a classe 'neste-artigo-titulo'
const nesteArtigoTituloElements = document.querySelectorAll('.neste-artigo-titulo');

nesteArtigoTituloElements.forEach(element => {
    if (isDarkMode) {
        // No modo escuro, aplique o fundo #55595E e cor do texto #ECECEC
        element.style.backgroundColor = '#55595E';  // Cor de fundo #55595E
        element.style.color = '#ECECEC';  // Cor do texto #ECECEC
    } else {
        // No modo claro, restaure o estilo original (remova as alterações feitas no modo escuro)
        element.style.backgroundColor = '';  // Cor original
        element.style.color = '';  // Cor original
    }
});


// Alterar o estilo dos botões com os ids 'button2' e 'button3'
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

// Defina a lógica de alternância entre modo escuro e modo claro
if (isDarkMode) {
    // No modo escuro, aplique o fundo branco e cor de texto #0D0D0D
    if (button2) {
        button2.style.backgroundColor = 'white';
        button2.style.color = '#0D0D0D';
    }

    if (button3) {
        button3.style.backgroundColor = 'white';
        button3.style.color = '#0D0D0D';
    }
} else {
    // No modo claro, restaure o estilo original (remova as alterações feitas no modo escuro)
    if (button2) {
        button2.style.backgroundColor = '';  // Cor original
        button2.style.color = '';  // Cor original
    }

    if (button3) {
        button3.style.backgroundColor = '';  // Cor original
        button3.style.color = '';  // Cor original
    }
}



    // Alterar a cor do texto para elementos com a classe 'texto-preto', excluindo o botão "Enviar"
    const textoPretoElements = document.querySelectorAll('.texto-preto');
    textoPretoElements.forEach(element => {
        if (!element.classList.contains('botao-enviar')) {  // Excluir o botão "Enviar"
            if (isDarkMode) {
                element.style.setProperty('color', 'white', 'important');  // Cor branca no modo escuro
            } else {
                element.style.color = '';  // Cor original no modo claro
            }
        }
    });

    // Selecionar os elementos com a classe 'fundo-verde-claro'
const elementosFundoVerdeClaro = document.querySelectorAll('.fundo-verde-claro');

elementosFundoVerdeClaro.forEach(element => {
    if (isDarkMode) {
        // Modo escuro: fundo #55595E   
        element.style.setProperty('background-color', '#55595E', 'important');
    } else {
        // Modo claro: remove os estilos personalizados
        element.style.removeProperty('background-color');
    }
});


    // Selecionar os elementos com a classe 'grifado-verde'
const elementosGrifadoVerde = document.querySelectorAll('.grifado-verde');

elementosGrifadoVerde.forEach(element => {
    if (isDarkMode) {
        // Modo escuro: fundo branco e texto #0D0D0D
        element.style.setProperty('background-color', '#55595E', 'important');
        element.style.setProperty('color', '#ECECEC', 'important');
    } else {
        // Modo claro: remove os estilos personalizados
        element.style.removeProperty('background-color');
        element.style.removeProperty('color');
    }
});

  // Selecionar os elementos com a classe 'grifado-vermelho'
  const elementosGrifadoVermelho = document.querySelectorAll('.grifado-vermelho');

  elementosGrifadoVermelho.forEach(element => {
      if (isDarkMode) {
          // Modo escuro: fundo branco e texto #0D0D0D
          element.style.setProperty('background-color', '#55595E', 'important');
          element.style.setProperty('color', '#ECECEC', 'important');
      } else {
          // Modo claro: remove os estilos personalizados
          element.style.removeProperty('background-color');
          element.style.removeProperty('color');
      }
  });


    // Selecionar os elementos com a classe 'grifado-azul'
    const elementosGrifadoAzul = document.querySelectorAll('.grifado-azul');

    elementosGrifadoAzul.forEach(element => {
        if (isDarkMode) {
            // Modo escuro: fundo branco e texto #0D0D0D
            element.style.setProperty('background-color', '#55595E', 'important');
            element.style.setProperty('color', '#ECECEC', 'important');
        } else {
            // Modo claro: remove os estilos personalizados
            element.style.removeProperty('background-color');
            element.style.removeProperty('color');
        }
    });


  // Alterar a cor de texto para elementos com a classe 'marcador-verde'
const marcadorVerdeElements = document.querySelectorAll('.marcador-verde');
marcadorVerdeElements.forEach(element => {
    if (isDarkMode) {
        // Forçar a aplicação do estilo com 'important'
        element.style.setProperty('color', '#ECECEC', 'important');
    } else {
        // Remover o estilo aplicado no modo escuro
        element.style.setProperty('color', '#475E18', 'important'); // Cor original
    }
});

// Alterar a cor de texto para elementos com a classe 'marcador-azul'
const marcadorAzulElements = document.querySelectorAll('.marcador-azul');
marcadorAzulElements.forEach(element => {
    if (isDarkMode) {
        // Forçar a aplicação do estilo com 'important'
        element.style.setProperty('color', '#ECECEC', 'important');
    } else {
        // Remover o estilo aplicado no modo escuro
        element.style.setProperty('color', '', 'important'); // Cor original
    }
});


    // Alterar a cor do texto para elementos com a classe 'texto-azul'
    const textoAzulElements = document.querySelectorAll('.texto-azul');
    textoAzulElements.forEach(element => {
        if (isDarkMode) {
            element.style.color = '#ECECEC';  // Texto branco no modo escuro
        } else {
            element.style.color = '#2F5499';  // Cor azul no modo claro
        }
    });

    // Alterar a cor do texto para elementos com a classe 'texto-vermelho'
    const textoVermelhoElements = document.querySelectorAll('.texto-vermelho');
    textoVermelhoElements.forEach(element => {
        if (isDarkMode) {
            element.style.color = '#ECECEC';  // Texto branco no modo escuro
        } else {
            element.style.color = '#9F2B2F';  // Cor vermelha no modo claro
        }
    });

    // Alterar a cor do texto para elementos com a classe 'card-text'
    const cardTextElements = document.querySelectorAll('.card-text');
    cardTextElements.forEach(element => {
        if (isDarkMode) {
            element.style.color = '#ECECEC';  // Texto branco no modo escuro
        } else {
            element.style.color = '';  // Cor original no modo claro
        }
    });

    // Alterar a cor de fundo para elementos com a classe 'card-body'
    const cardBodyElements = document.querySelectorAll('.card-body');
    cardBodyElements.forEach(element => {
        if (isDarkMode) {
            element.style.backgroundColor = '#0D0D0D';  // Fundo escuro no modo escuro
        } else {
            element.style.backgroundColor = '';  // Cor original no modo claro
        }
    });

    // Alterar a cor de fundo para elementos com a classe 'card'
    const cardElements = document.querySelectorAll('.card');
    cardElements.forEach(element => {
        if (isDarkMode) {
            element.style.backgroundColor = '#0D0D0D';  // Fundo escuro no modo escuro
        } else {
            element.style.backgroundColor = '';  // Cor original no modo claro
        }
    });
});

//Botões de Redimensionar Texto
document.addEventListener("DOMContentLoaded", () => {
    // Selecionar os botões
    const botaoAumentar = document.querySelector('button[aria-label="A+"]');
    const botaoDiminuir = document.querySelector('button[aria-label="A-"]');

    // Selecionar os elementos que terão o tamanho ajustado
    const elementos = document.querySelectorAll(`
        .botao-acesse, .botao-acesse2, .h1-inicio, .h2-inicio2, .h1-inicio3, 
        .h1-inicio2, .p-inicio-index, .usabilidade-cheia, .acessibilidade-cheia, 
        .ferramentas-cheia, .sobre-cheia, .usabilidade, .acessibilidade, 
        .ferramentas, .sobre, .p-inicio2, .titulo-menu-rodape, 
        .subtitulo-menu-rodape, #button1, .titulo-paginas-usabilidade, 
        .subtitulo-paginas-usabilidade, .topico-paginas-usabilidade, 
        .triangulo-topico-usabilidade, .titulo-paginas-acessibilidade, .subtitulo-paginas-acessibilidade, .topico-paginas-acessibilidade, .triangulo-topico-acessibilidade, .titulo-card, .texto-card, .borda-card, .titulo-paginas-ferramentas, .subtitulo-paginas-ferramentas, .referencias-artigos, .legenda-artigo, .p-artigo, .subtitulo-artigo, .triangulo-topico, .numero-topico, .neste-artigo-titulo, .resumo-texto, .titulo-artigo, .breadcrumb-item, .texto-autora-artigo,.texto-detalhe-artigo, .topico-paginas-artigos, #button2, #button3, .subtopico-paginas-sobre,.titulo-paginas-sobre, .subtitulo-paginas-sobre, .p-inicio-sobre, .p-email
    `);

    // Armazena os tamanhos originais dos elementos
    const tamanhosOriginais = new Map();

    // Configuração inicial: captura o tamanho de fonte original de cada elemento
    elementos.forEach(elemento => {
        const tamanhoAtual = parseFloat(getComputedStyle(elemento).fontSize); // Obtém o tamanho atual em px
        tamanhosOriginais.set(elemento, tamanhoAtual); // Armazena o tamanho original
    });

    // Função para ajustar o tamanho da fonte
    const ajustarTamanhoFonte = (incremento) => {
        elementos.forEach(elemento => {
            const tamanhoOriginal = tamanhosOriginais.get(elemento); // Recupera o tamanho original
            let novoTamanho = parseFloat(getComputedStyle(elemento).fontSize) + incremento; // Calcula o novo tamanho

            // Definir limites de tamanho com base em classes e breakpoints
            let limiteInferior = Math.max(12, tamanhoOriginal - 10);
            let limiteSuperior = tamanhoOriginal + 10; // Valor padrão

            // Regras para breakpoints e classes específicas
            if (window.matchMedia("(min-width: 1400px)").matches && elemento.matches(".subtitulo-menu-rodape")) {
                limiteSuperior = 28;
            } else if (window.matchMedia("(min-width: 1400px)").matches && elemento.matches(".botao-acesse2")) {
                limiteSuperior = 27;
            } else if (window.matchMedia("(min-width: 1400px)").matches && elemento.matches(".h1-inicio")) {
                limiteSuperior = 56;
            } else if (window.matchMedia("(min-width: 1400px)").matches && elemento.matches(".usabilidade, .acessibilidade, .ferramentas, .sobre")) {
                limiteSuperior = 26;
            } else if (window.matchMedia("(min-width: 1400px)").matches && elemento.matches(".neste-artigo-titulo")) {
                limiteSuperior = 28;
            } else if (window.matchMedia("(min-width: 1400px)").matches && elemento.matches(".topico-paginas-artigos,.triangulo-topico, .referencias-artigos")) {
                limiteSuperior = 32;
            } else if (window.matchMedia("(min-width: 1400px)").matches && elemento.matches(".numero-topico,.subtitulo-artigo")) {
                limiteSuperior = 42;
            } else if (window.matchMedia("(min-width: 1400px)").matches && elemento.matches("#button2, #button3")) {
                limiteSuperior = 36;
            } else if (window.matchMedia("(min-width: 1200px)").matches && elemento.matches(".subtitulo-menu-rodape")) {
                limiteSuperior = 30;
            } else if (window.matchMedia("(min-width: 1200px)").matches && elemento.matches(".h1-inicio")) {
                limiteSuperior = 46;
            } else if (window.matchMedia("(min-width: 1200px)").matches && elemento.matches(".p-inicio-index, .botao-acesse")) {
                limiteSuperior = 26;
            } else if (window.matchMedia("(min-width: 1200px)").matches && elemento.matches(".breadcrumb-item")) {
                limiteSuperior = 40;
            } else if (window.matchMedia("(min-width: 1200px)").matches && elemento.matches(".texto-autora-artigo,.texto-detalhe-artigo")) {
                limiteSuperior = 28;
            } else if (window.matchMedia("(min-width: 1200px)").matches && elemento.matches(".neste-artigo-titulo")) {
                limiteSuperior = 38;
            } else if (window.matchMedia("(min-width: 1200px)").matches && elemento.matches(".topico-paginas-artigos,.triangulo-topico, .referencias-artigos")) {
                limiteSuperior = 26;
            } else if (window.matchMedia("(min-width: 1200px)").matches && elemento.matches(".numero-topico,.subtitulo-artigo")) {
                limiteSuperior = 38;
            } else if (window.matchMedia("(min-width: 1200px)").matches && elemento.matches("#button2, #button3")) {
                limiteSuperior = 34;
            } else if (window.matchMedia("(min-width: 1200px)").matches && elemento.matches(".p-email")) {
                limiteSuperior = 50;
            } else if (window.matchMedia("(min-width: 992px)").matches && elemento.matches(".p-inicio-index")) {
                limiteSuperior = 20;
            } else if (window.matchMedia("(min-width: 992px)").matches && elemento.matches(".botao-acesse")) {
                limiteSuperior = 24;
            } else if (window.matchMedia("(min-width: 992px)").matches && elemento.matches(".botao-acesse2")) {
                limiteSuperior = 24;
            } else if (window.matchMedia("(min-width: 992px)").matches && elemento.matches(".subtitulo-menu-rodape")) {
                limiteSuperior = 20;
            } else if (window.matchMedia("(min-width: 992px)").matches && elemento.matches(".topico-paginas-usabilidade, .triangulo-topico-usabilidade, .topico-paginas-acessibilidade, .triangulo-topico-acessibilidade")) {
                limiteSuperior = 26;
            } else if (window.matchMedia("(min-width: 992px)").matches && elemento.matches(".h1-inicio")) {
                limiteSuperior = 34;
            } else if (window.matchMedia("(min-width: 992px)").matches && elemento.matches(".breadcrumb-item")) {
                limiteSuperior = 30;
            } else if (window.matchMedia("(min-width: 992px)").matches && elemento.matches(".texto-autora-artigo,.texto-detalhe-artigo")) {
                limiteSuperior = 30;
            } else if (window.matchMedia("(min-width: 992px)").matches && elemento.matches(".numero-topico,.subtitulo-artigo")) {
                limiteSuperior = 40;
            } else if (window.matchMedia("(min-width: 992px)").matches && elemento.matches("#button2, #button3")) {
                limiteSuperior = 28;
            } else if (window.matchMedia("(min-width: 992px)").matches && elemento.matches(".p-email")) {
                limiteSuperior = 40;
            } else if (window.matchMedia("(min-width: 768px)").matches && elemento.matches(".usabilidade, .acessibilidade, .ferramentas, .sobre")) {
                limiteSuperior = 26;
            } else if (window.matchMedia("(min-width: 768px)").matches && elemento.matches(".subtitulo-menu-rodape")) {
                limiteSuperior = 18;
            } else if (window.matchMedia("(min-width: 768px)").matches && elemento.matches(".topico-paginas-usabilidade, .triangulo-topico-usabilidade, .topico-paginas-acessibilidade, .triangulo-topico-acessibilidade")) {
                limiteSuperior = 29;
            } else if (window.matchMedia("(min-width: 768px)").matches && elemento.matches(".botao-acesse2")) {
                limiteSuperior = 20;
            } else if (window.matchMedia("(min-width: 768px)").matches && elemento.matches(".breadcrumb-item")) {
                limiteSuperior = 26;
            } else if (window.matchMedia("(min-width: 768px)").matches && elemento.matches(".texto-autora-artigo,.texto-detalhe-artigo")) {
                limiteSuperior = 24;
            } else if (window.matchMedia("(min-width: 768px)").matches && elemento.matches(".neste-artigo-titulo")) {
                limiteSuperior = 32;
            } else if (window.matchMedia("(min-width: 768px)").matches && elemento.matches(".topico-paginas-artigos,.triangulo-topico, .referencias-artigos")) {
                limiteSuperior = 28;
            } else if (window.matchMedia("(min-width: 768px)").matches && elemento.matches(".numero-topico,.subtitulo-artigo")) {
                limiteSuperior = 36;
            } else if (window.matchMedia("(min-width: 768px)").matches && elemento.matches("#button2, #button3")) {
                limiteSuperior = 28;
            } else if (window.matchMedia("(min-width: 768px)").matches && elemento.matches(".p-email")) {
                limiteSuperior = 35;
            } else if (window.matchMedia("(max-width: 576px)").matches && elemento.matches(".botao-acesse2")) {
                limiteSuperior = 32;
            } else if (window.matchMedia("(max-width: 576px)").matches && elemento.matches(".topico-paginas-usabilidade, .triangulo-topico-usabilidade, .topico-paginas-acessibilidade, .triangulo-topico-acessibilidade")) {
                limiteSuperior = 24;
            } else if (window.matchMedia("(min-width: 576px)").matches && elemento.matches(".usabilidade-cheia, .acessibilidade-cheia, .ferramentas-cheia, .sobre-cheia")) {
                limiteSuperior = 22;
            } else if (window.matchMedia("(min-width: 576px)").matches && elemento.matches(".breadcrumb-item")) {
                limiteSuperior = 20;
            } else if (window.matchMedia("(min-width: 576px)").matches && elemento.matches(".texto-autora-artigo,.texto-detalhe-artigo")) {
                limiteSuperior = 22;
            } else if (window.matchMedia("(min-width: 576px)").matches && elemento.matches(".neste-artigo-titulo")) {
                limiteSuperior = 28;
            } else if (window.matchMedia("(min-width: 576px)").matches && elemento.matches(".topico-paginas-artigos,.triangulo-topico, .referencias-artigos")) {
                limiteSuperior = 24;
            } else if (window.matchMedia("(min-width: 576px)").matches && elemento.matches(".numero-topico,.subtitulo-artigo")) {
                limiteSuperior = 34;
            } else if (window.matchMedia("(min-width: 576px)").matches && elemento.matches("#button2, #button3")) {
                limiteSuperior = 30;
            } else if (window.matchMedia("(min-width: 576px)").matches && elemento.matches(".referencias-artigos")) {
                limiteSuperior = 24;
            } else if (window.matchMedia("(min-width: 576px)").matches && elemento.matches(".p-email")) {
                limiteSuperior = 25;
            }
            
            

            // Garantir que o novo tamanho esteja dentro dos limites
            novoTamanho = Math.max(limiteInferior, Math.min(limiteSuperior, novoTamanho));

            elemento.style.fontSize = `${novoTamanho}px`; // Aplica o novo tamanho
        });
    };

    // Eventos dos botões
    botaoAumentar.addEventListener("click", () => ajustarTamanhoFonte(2)); // Aumenta 2px por clique
    botaoDiminuir.addEventListener("click", () => ajustarTamanhoFonte(-2)); // Diminui 2px por clique
});
