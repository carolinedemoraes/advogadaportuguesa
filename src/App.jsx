import { useState } from "react";
import "./styles/app.sass";
import menu from "../src/Components/menu";
import Title from "./Components/title";
import TextImg from "./Components/textimg";
import Menu from "../src/Components/menu";
import Modal from "./Components/closemodal";

import SocialNetwork from "./Components/social-network";
import { FaGlobe } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import ModalButton from "./Components/modal-button";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="content">
        <TextImg imgSrc={"imgs/fotoprincipal.jpg"}>
          <Menu />
          <Title />
        </TextImg>

        <TextImg imgSrc={"imgs/advlusobrasileira.jpg"} leftImg>
          <h1 className="label" id="minha-historia">
            Minha História
          </h1>
          <p className="minha-historia">
            Olá! Meu nome é Andréia Amaral Sant'Anna e assim como você, eu
            também busquei a minha nacionalidade portuguesa através dos meus
            antepassados. Hoje, sou uma advogada brasileira e portuguesa,
            inscrita na ordem dos Advogados do Brasil e na Ordem dos Advogados
            de Portugal. Sou formada, há mais de 20 anos, pela Universidade
            Federal de Rio Grande (FURG) e tenho a felicidade de desfrutar de
            todos os privilégios que um cidadão português tem no mundo.
          </p>

          <p className="minha-historia">
            Compreendo a importância de ter uma segunda nacionalidade, não só
            pelo acesso a benefícios e oportunidades, mas também pela conexão
            com a história e cultura do país de origem.
          </p>
          <p className="minha-historia">
            Por isso, estou empenhada em ajudar aqueles que desejam obter a
            cidadania portuguesa, seja por vínculos sanguíneos, casamento ou
            naturalização.
          </p>
        </TextImg>

        <TextImg imgSrc={"imgs/justicesymbol1.jpg"}>
          <h1 className="label" id="meus-servicos">
            Meus Serviços
          </h1>
          <p className="meus-servicos">
            Como advogada brasileira e portuguesa meu trabalho consiste em te
            ajudar na aquisição da nacionalidade portuguesa em todos os níveis,
            acompanhando cada caso particular com a maior atenção e dedicação.
          </p>
          <p className="meus-servicos">
            Sendo advogada luso-brasileira, tenho conhecimento sobre as
            particularidades de ambos os sistemas jurídicos, o que me permite
            prestar um serviço completo e integrado para aqueles que buscam
            adquirir a nacionalidade portuguesa ou homologar sentenças
            estrangeiras,do seu divórcio brasileiro, em Portugal. O que
            possibilita a aquisição da nacionalidade portuguesa de cônjuges do
            segundo casamento em diante.
          </p>
          <p className="meus-servicos">
            Além da assessoria personalizada durante o processo de obtenção da
            nacionalidade portuguesa, posso te ajudar em diversos assuntos
            jurídicos relacionados a Portugal.
          </p>

          <ModalButton>
            <p className="modal-text">
              ✅ Serviços jurídicos especializados em aquisição da nacionalidade
              portuguesa em todos os níveis, ou seja, por atribuição (filhos,
              netos e bisnetos de portugueses) ou por aquisição, para inúmeros
              casos. São muitos os casos em que se pode adquirir a nacionalidade
              portuguesa ou naturalizar-se português.
            </p>

            <p className="modal-text">
              ✅ Homologações de sentença estrangeira de divórcio brasileiro nos
              tribunais portugueses. Com a minha experiência e conhecimento em
              direito internacional, aplicado ao caso, busco garantir que meus
              clientes tenham uma experiência tranquila e segura durante todo o
              processo.
            </p>

            <p className="modal-text">
              ✅ Meu trabalho consiste em oferecer uma assessoria personalizada,
              desde a análise da documentação necessária até a finalização do
              processo, com a aplicação direta, digital e instantânea, frente ao
              Instituto de Registos e do Notariado (IRN) de Portugal,
              prerrogativa concedida aos advogados e solicitadores filiados à
              Ordem dos Advogados de Portugal.
            </p>
            <p className="modal-text">
              ✅ Trabalho com um serviço ágil e eficiente, sempre buscando a
              melhor solução para cada caso específico.
            </p>
          </ModalButton>
        </TextImg>

        <TextImg imgSrc={"imgs/lisbon.jpg"} leftImg>
          <h1 className="label" id="quem-pode">
            Quem Pode Ter Nacionalidade Portuguesa
          </h1>
          <p>Você pode ter nacionalidade portuguesa se: </p>

          <ol className="lista-quem-pode">
            <li className="quem-pode">
              Nascer em Portugal com pais de nacionalidade portuguesa;
            </li>

            <li className="quem-pode">
              Nascer em Portugal com pais estrangeiros;
            </li>

            <li className="quem-pode">
              Nascer no estrangeiro com pais de nacionalidade portuguesa;
            </li>

            <li className="quem-pode">Neto (a) de cidadão protuguês; </li>

            <li className="quem-pode">
              Casado com cidadão com português há mais de 3 anos;
            </li>

            <li className="quem-pode">
              Residir legalmente em Portugal há mais de 5 anos;
            </li>

            <li className="quem-pode">Cidadão timorense;</li>

            <li className="quem-pode">Descendente de Judeu Sefardita</li>
          </ol>

          <p>
            Existem ainda outros casos em que é possível adquirir ou readquirir
            a nacionalidade portuguesa.
          </p>
          <ModalButton>
            <p className="modal-text">
              <p>Quanto aos Judeus Sefarditas:</p>
              <p className="modal-text">
                Hoje em dia, com a promulgação da nova legislação, a Lei
                Orgânica nº 1/2024, que altera a Lei da Nacionalidade Portuguesa
                a descendente de judeus sefardita, estão agora habilitados a
                solicitar a nacionalidade portuguesa,desde que satisfaçam um
                conjunto de requisitos cumulativos meticulosamente delineados:
              </p>

              <p>
                1. Evidência de Continuidade Cultural Requer-se a demonstração
                inequívoca de pertença contínua a uma comunidade sefardita de
                ascendência portuguesa. Tal demonstração deve ser ancorada em
                critérios objetivos e verificáveis de conexão com Portugal,
                incluindo, mas não se limitando a, sobrenomes, vernáculo
                familiar, e linhagem direta ou colateral.
              </p>

              <p>
                2. Residência Legal em Solo Português: É imperativo que o
                requerente tenha mantido residência legal em território
                português por um mínimo de três anos, quer de forma consecutiva
                ou intercalada.
              </p>
              <p className="modal-text">
                É crucial sublinhar que a residência deve ser legalmente
                reconhecida, implicando a necessidade de uma autorização de
                residência formalmente concedida pelas autoridades competentes.
              </p>

              <p className="modal-text">
                <strong>
                  É importante que se diga que os casos aplicados antes da
                  mudança da lei, que entrou em vigor no dia 01/04/2024,
                  continuam sob a égide da legislação anterior.
                </strong>
              </p>
            </p>
            <a href="https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2024-854130977">
              Acesse aqui a Lei Orgânica atualizada na integra
            </a>
          </ModalButton>
        </TextImg>

        <TextImg imgSrc={"imgs/online4.jpg"}>
          <h1 className="label" id="servicos-online">
            Serviço de Nacionalidade Online
          </h1>
          <p className="nacionalidade-online">
            <p className="nacionalidade-online">
              Atualmente, os processos de nacionalidade portuguesa, são feitos
              de forma exclusivamente online, no site do IRN. Sendo autorizados
              a fazer este serviço, exclusivamente aos profissionais (advogados
              e solicitadores) filiados a OA de Portugal.{" "}
            </p>
            <p className="nacionalidade-online">
              A partir de 1 de dezembro de 2023 passa a ser obrigatória a
              submissão online de pedidos de nacionalidade por advogados e
              solicitadores, filiados a Ordem dos Advogados de Portugal, para
              todos os casos de pedidos de nacionalidade portuguesa.
            </p>

            <p className="nacionalidade-online">
              Portanto só podem utilizar o serviço online da nacionalidade os
              advogados e solicitadores, inscritos na Ordem dos Advogados de
              Portugal.
            </p>

            <p className="nacionalidade-online">
              Os processos de nacionalidade portuguesa de forma online, permite
              que o profissional revise e modifique qualquer situação
              intercorrente, de forma instantânea. Diferente do que ocorria
              antigamente.
            </p>
          </p>
        </TextImg>

        <TextImg imgSrc={"imgs/PT2.jpg"} leftImg>
          <h1 className="label" id="vantagens">
            Vantagens de Ser Cidadão Português
          </h1>

          <p className="vantagens">
            Como cidadão da União Europeia, você pode desfrutar de uma série de
            benefícios e oportunidades que não estão disponíveis para cidadãos
            de outros países. Portanto, se você tiver a oportunidade de se
            tornar um cidadão europeu, através da sua cidadania portuguesa,
            certamente será uma escolha vantajosa para sua vida pessoal e
            profissional.
          </p>
          <p className="vantagens">
            Adquirindo a sua nacionalidade portuguesa, você se torna um cidadão
            europeu, e com isto você passa a ter inúmeras vantagens, além da
            vantagem pura e simples de passar a nacionalidade aos seus
            descendentes.
          </p>

          <ModalButton>
            <p className="modal-text1">
              Algumas das principais vantagens de ser um cidadão europeu
              incluem:
            </p>
            <div className="vantagens-icones">
              <li className="modal-text">
                <strong>Mobilidade:</strong>
                <p className="modal-text1">
                  Como cidadão europeu, você tem o direito de circular, residir,
                  estudar e trabalhar livremente em qualquer país da União
                  Europeia (UE) e do Espaço Econômico Europeu (EEE).
                </p>
              </li>
            </div>
            <div className="vantagens-icones">
              <li className="modal-text">
                <strong>Emprego:</strong>
                <p className="modal-text1">
                  Como cidadão europeu, você tem acesso a todas as oportunidades
                  de emprego e treinamento oferecidas em qualquer país da UE ou
                  do EEE, assim você pode aproveitar as melhores oportunidades
                  de emprego em qualquer país europeu sem precisar de
                  autorização de trabalho.
                </p>
              </li>
            </div>
            <div className="vantagens-icones">
              <li className="modal-text">
                <strong>Educação:</strong>
                <p className="modal-text1">
                  Como cidadão europeu, você tem acesso a todas as instituições
                  de ensino superior da UE e do EEE com as mesmas taxas de
                  matrícula e acesso aos benefícios de estudante oferecidos aos
                  cidadãos locais.
                </p>
              </li>
            </div>
            <div className="vantagens-icones">
              <li className="modal-text">
                <strong>Qualidade de vida:</strong>
                <p className="modal-text1">
                  Como cidadão europeu, você tem acesso a alguns dos melhores
                  serviços públicos do mundo, incluindo saúde, assistência
                  social e transporte público. Além disso, você também tem
                  direito à proteção consular e assistência legal em qualquer
                  país da UE ou do EEE.
                </p>
              </li>
            </div>
            <div className="vantagens-icones">
              <li className="modal-text">
                <strong>Segurança:</strong>
                <p className="modal-text1">
                  Como cidadão europeu, você pode contar com a proteção dos
                  direitos humanos e liberdades fundamentais garantidos pela
                  Carta dos Direitos Fundamentais da UE. Além disso, você também
                  tem o direito de recorrer à Justiça Europeia em caso de
                  violação desses direitos.
                </p>
              </li>
            </div>
            <div className="vantagens-icones">
              <li className="modal-text">
                <strong>Direitos Políticos:</strong>
                <p className="modal-text1">
                  Como cidadão europeu, você tem o direito de votar e se
                  candidatar às eleições para o Parlamento Europeu e nas
                  eleições municipais em qualquer país da UE ou do EEE em que
                  você reside.
                </p>
              </li>
            </div>
            <div className="vantagens-icones">
              <li className="modal-text">
                <strong>
                  Você pode entrar sem visto em mais de 170 países, incluindo
                  Estados Unidos, Canadá e Japão.
                </strong>
              </li>
            </div>
          </ModalButton>
        </TextImg>

        <TextImg imgSrc={"imgs/Porto.jpg"}>
          <div className="depoimentos" id="depoimentos">
            <p className="depoimento1">
              ✨ 'A obtenção da nacionalidade portuguesa, na qualidade de neta
              de português, mudou a minha vida e a da minha família. Depois que
              eu me tornei uma cidadã portuguesa minhas filhas e meus netos
              conseguiram a cidadania, o que proporcionou a possibilidade de
              morar, estudar, ou trabalhar tanto em Portugal como em algum pais
              da União Europeia.' (Leonor Sant'Anna, cidadã luso-brasileira)✨
            </p>
            <div className="icone-separacao">
              <FaGlobe />
            </div>
            <p className="depoimento1">
              ✨ 'Obter a cidadania portuguesa me permitiu realizar o sonho de
              morar fora do Brasil com conforto e segurança, me permitiu viver
              plenamente em Portugal e viver uma vida acessível em um país com
              qualidade de vida e dignidade. Já estou morando em Portugal e
              descobri um novo mundo, muitas novas possibilidades e muitas
              diferenças positivas no meu cotidiano.' (André Pantaleão, cidadão
              luso-brasileiro) ✨
            </p>
            <div className="icone-separacao">
              <FaGlobe />
            </div>
            <p className="depoimento1">
              ✨ 'A cidadania luso-brasileira me possibilitou ter uma chance de
              um futuro melhor, poder crescer com mais confiança e viajar para
              muitos lugares.' (Alice Menezes, 11 anos, cidadã luso-brasileira)
              ✨
            </p>
          </div>
        </TextImg>

        {/* <TextImg imgSrc={"imgs/PT2.jpg"} leftImg>
          <div className="depoimentos">
            <p className="depoimento1"></p>
            <div className="icone-separacao">
              <FaGlobe />
            </div>
          </div>
        </TextImg>  */}

        <TextImg imgSrc={"imgs/bandeiraportugal.jpg"} leftImg>
          <h1 className="label" id="contato">
            Contato
          </h1>
          <p className="contato">
            Se você está em busca de uma advogada portuguesa comprometida em
            obter a sua cidadania portuguesa, estou à disposição para ajudá-lo
            (a) nessa jornada!
          </p>
          <p className="contato">
            <strong>Ser cidadão europeu é possível!</strong> Conte com a minha
            experiência e conhecimento para garantir que todo o processo seja
            realizado de forma segura e tranquila.
          </p>
          <p className="contato">
            <strong>Entre em contato:</strong>
          </p>

          <SocialNetwork />
        </TextImg>
      </div>
      <footer className="footer">
        <a href="https://github.com/carolinedemoraes" className="footer">
          Desenvolvido por Carol Moraes
        </a>
      </footer>
    </>
  );
}

export default App;
