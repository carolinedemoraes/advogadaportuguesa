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
          <p className="text">
            Olá! Meu nome é Andréia Amaral Sant'Anna e assim como você, eu
            também busquei a minha nacionalidade portuguesa através dos meus
            antepassados. Hoje, sou uma advogada brasileira e portuguesa,
            inscrita na ordem dos Advogados Brasileiros e na Ordem dos Advogados
            de Portugal. Sou formada, há mais de 20 anos, pela Universidade
            Federal de Rio Grande (FURG) e tenho a felicidade de desfrutar de
            todos os privilégios que um cidadão português tem no mundo.
          </p>

          <p className="text">
            Compreendo a importância de ter uma segunda nacionalidade, não só
            pelo acesso a benefícios e oportunidades, mas também pela conexão
            com a história e cultura do país de origem.
          </p>
          <p className="text">
            Por isso, estou empenhada em ajudar aqueles que desejam obter a
            cidadania portuguesa, seja por vínculos sanguíneos, casamento ou
            naturalização.
          </p>
        </TextImg>

        <TextImg imgSrc={"imgs/justicesymbol1.jpg"}>
          <h1 className="label" id="meus-servicos">
            Meus Serviços
          </h1>
          <p className="text2">
            Como advogada brasileira e portuguesa meu trabalho consiste em te
            ajudar na aquisição da nacionalidade portuguesa em todos os níveis,
            acompanhando cada caso particular com a maior atenção e dedicação.
          </p>
          <p className="text2">
            Sendo advogada luso-brasileira, tenho conhecimento sobre as
            particularidades de ambos os sistemas jurídicos, o que me permite
            prestar um serviço completo e integrado para aqueles que buscam
            adquirir a nacionalidade portuguesa ou homologar sentenças
            estrangeiras em Portugal.
          </p>
          <p className="text2">
            Além da assessoria personalizada durante o processo de obtenção da
            nacionalidade portuguesa, posso te ajudar em diversos assuntos
            jurídicos relacionados a Portugal.
          </p>

          <ModalButton>
            <p className="modal-text">
              <FaCheck /> Serviços jurídicos especializados em aquisição da
              nacionalidade portuguesa em todos os níveis, ou seja, por
              atribuição (filhos, netos e bisnetos de portugueses) ou por
              aquisição, para inúmeros casos. São muitos os casos em que se pode
              adquirir a nacionalidade portuguesa ou naturalizar-se português.
            </p>

            <p className="modal-text">
              <FaCheck /> Homologações de sentença estrangeira nos tribunais
              portugueses. Com a minha experiência e conhecimento em direito
              internacional, aplicado ao caso, busco garantir que meus clientes
              tenham uma experiência tranquila e segura durante todo o processo.
            </p>

            <p className="modal-text">
              <FaCheck /> Meu trabalho consiste em oferecer uma assessoria
              personalizada, desde a análise da documentação necessária até a
              finalização do processo, com a aplicação direta, digital e
              instantânea, frente ao Instituto de Registos e do Notariado (IRN)
              de Portugal, prerrogativa concedida aos advogados portugueses.
            </p>
            <p className="modal-text">
              <FaCheck /> Trabalho com um serviço ágil e eficiente, sempre
              buscando a melhor solução para cada caso específico.
            </p>
          </ModalButton>
        </TextImg>

        <TextImg imgSrc={"imgs/lisbon.jpg"} leftImg>
          <h1 className="label" id="quem-pode">
            Quem pode ter nacionalidade Portuguesa
          </h1>
          <p className="text">Você pode ter nacionalidade portuguesa se: </p>
          <p className="text4">
            <FaCheck />
            Nascer em Portugal com pais de nacionalidade portuguesa
          </p>
          <p className="text4">
            <FaCheck />
            Nascer em Portugal com pais estrangeiros
          </p>
          <p className="text4">
            <FaCheck />
            Nascer no estrangeiro com pais de nacionalidade portuguesa
          </p>
          <p className="text4">
            <FaCheck />
            Casar com português
          </p>
          <p className="text4">
            <FaCheck />
            Residir legalmente em Portugal há pelo menos 5 anos
          </p>
          <p className="text4">
            <FaCheck />
            For cidadão timorense.
          </p>
          <p>
            Existem ainda outros casos em que é possível adquirir ou readquirir
            a nacionalidade portuguesa.
          </p>
        </TextImg>

        <TextImg imgSrc={"imgs/online4.jpg"}>
          <h1 className="label" id="servicos-online">
            Serviço online de Nacionalidade
          </h1>
          <p className="text5">
            Este serviço destina-se exclusivamente a profissionais (advogados e
            solicitadores). A partir de{" "}
            <a
              className="modal-text"
              href="https://data.dre.pt/eli/port/344/2023/11/10/p/dre/pt/html"
            >
              {" "}
              1 de dezembro de 2023
            </a>{" "}
            passa a ser obrigatória a submissão online de pedidos de
            nacionalidade por advogados e solicitadores.
          </p>
          <p className="text5">
            Podem utilizar o serviço online da nacionalidade os advogados e
            solicitadores, inscritos nas respetivas Ordens em Portugal, que
            representam cidadãos no pedido de nacionalidade portuguesa por via
            de situações pontuais.
          </p>

          <ModalButton>
            <p className="modal-text">
              <FaCheck /> Nascido/a no estrangeiro, filho/a de mãe/pai português
              à data do nascimento (por transcrição)
            </p>
            <p className="modal-text">
              <FaCheck /> Neto/a de avó/avô português originário e possuir laços
              de efetiva ligação à comunidade nacional
            </p>
            <p className="modal-text">
              <FaCheck /> Menor ou incapaz, cuja mãe/pai tenha adquirido a
              nacionalidade portuguesa, depois do seu nascimento
            </p>
            <p className="modal-text">
              <FaCheck /> Casado/a há mais de três anos com nacional português
            </p>
            <p className="modal-text">
              <FaCheck /> Unido/a de facto há mais de três anos com nacional
              português
            </p>
            <p className="modal-text">
              <FaCheck /> Perdeu a nacionalidade portuguesa por efeito de
              declaração prestada durante a sua incapacidade
            </p>
            <p className="modal-text">
              <FaCheck /> Adotado/a por nacional português, após a data da
              entrada em vigor da Lei da Nacionalidade
            </p>
            <p className="modal-text">
              <FaCheck /> Adotado/a por nacional português, antes da data da
              entrada em vigor da Lei da Nacionalidade
            </p>
            <p className="modal-text">
              <FaCheck /> Residente legal em território português há, pelo
              menos, cinco anos Menor, cuja mãe/pai tem residência em Portugal,
              independentemente de título, há pelo menos cinco anos
            </p>
            <p className="modal-text">
              <FaCheck /> Menor, cuja mãe/pai tem residência legal em Portugal
            </p>
            <p className="modal-text">
              <FaCheck /> Menor que frequenta ou frequentou em Portugal, pelo
              menos, um ano escolar
            </p>
            <p className="modal-text">
              <FaCheck /> Teve a nacionalidade portuguesa e, tendo-a perdido,
              nunca adquiriu outra nacionalidade
            </p>
            <p className="modal-text">
              <FaCheck /> Nasceu em Portugal e aqui tem residência,
              independentemente de título, há pelo menos cinco anos
            </p>
            <p className="modal-text">
              <FaCheck /> Não sendo apátrida, já teve anteriormente a
              nacionalidade portuguesa
            </p>
            <p className="modal-text">
              <FaCheck /> Descendente de português originário
            </p>
            <p className="modal-text">
              <FaCheck /> Membro de comunidade de ascendência portuguesa Presta
              ou prestou serviços relevantes ao Estado Português ou à comunidade
              nacional
            </p>
            <p className="modal-text">
              <FaCheck /> Descendente de judeu sefardita português
            </p>
            <p className="modal-text">
              <FaCheck /> Ascendente de cidadão português originário
              Estrangeiro/a, nascido/a nas ex-colónias, que permanece,
              independentemente do título, em Portugal desde 25 de abril de 1974
            </p>
            <p className="modal-text">
              <FaCheck /> Descendente de estrangeiro/a, nascido/a nas
              ex-colónias, que permaneceu, independentemente do título, em
              Portugal desde 25 de abril de 1974
            </p>
            <p className="modal-text">
              <FaCheck /> Perda da nacionalidade portuguesa
            </p>
            <p className="modal-text">
              <FaCheck /> Perdeu a nacionalidade portuguesa por efeito do
              casamento com estrangeiro{" "}
            </p>
            <p className="modal-text">
              <FaCheck /> Perdeu a nacionalidade portuguesa por efeito da
              aquisição voluntária de nacionalidade estrangeira
            </p>
            <p className="modal-text">
              <FaCheck /> Mulher que casou com nacional português, nos termos da
              Lei n.º 2098.
            </p>
          </ModalButton>
        </TextImg>

        <TextImg imgSrc={"imgs/PT2.jpg"} leftImg>
          <h1 className="label" id="vantagens">
            Vantagens de Ser Cidadão Português
          </h1>

          <p className="text7">
            Como cidadão da União Europeia, você pode desfrutar de uma série de
            benefícios e oportunidades que não estão disponíveis para cidadãos
            de outros países. Portanto, se você tiver a oportunidade de se
            tornar um cidadão europeu, através da sua cidadania portuguesa,
            certamente será uma escolha vantajosa para sua vida pessoal e
            profissional.
          </p>
          <p className="text7">
            Adquirindo a sua nacionalidade portuguesa, você se torna um cidadão
            europeu, e com isto você passa a ter inúmeras vantagens, além da
            vantagem pura e simples de passar a nacionalidade aos seus
            descendentes.
          </p>

          <ModalButton>
            <p className="modal-text1">
              Algumas das principais vantagens de ser um cidadão europeu
              incluem:
              <div className="vantagens-icones">
                <li className="modal-text">
                  <strong>
                    <FaCheck /> Mobilidade:
                  </strong>{" "}
                  Como cidadão europeu, você tem o direito de circular, residir,
                  estudar e trabalhar livremente em qualquer país da União
                  Europeia (UE) e do Espaço Econômico Europeu (EEE).
                </li>
              </div>
              <div className="vantagens-icones">
                <li className="modal-text">
                  <strong>
                    <FaCheck /> Emprego:
                  </strong>{" "}
                  Como cidadão europeu, você tem acesso a todas as oportunidades
                  de emprego e treinamento oferecidas em qualquer país da UE ou
                  do EEE, assim você pode aproveitar as melhores oportunidades
                  de emprego em qualquer país europeu sem precisar de
                  autorização de trabalho.
                </li>
              </div>
              <div className="vantagens-icones">
                <li className="modal-text">
                  <FaCheck />
                  <strong> Educação:</strong> Como cidadão europeu, você tem
                  acesso a todas as instituições de ensino superior da UE e do
                  EEE com as mesmas taxas de matrícula e acesso aos benefícios
                  de estudante oferecidos aos cidadãos locais.
                </li>
              </div>
              <div className="vantagens-icones">
                <li className="modal-text">
                  <FaCheck />
                  <strong> Qualidade de vida:</strong> Como cidadão europeu,
                  você tem acesso a alguns dos melhores serviços públicos do
                  mundo, incluindo saúde, assistência social e transporte
                  público. Além disso, você também tem direito à proteção
                  consular e assistência legal em qualquer país da UE ou do EEE.
                </li>
              </div>
              <div className="vantagens-icones">
                <li className="modal-text">
                  <FaCheck />
                  <strong> Segurança:</strong> Como cidadão europeu, você pode
                  contar com a proteção dos direitos humanos e liberdades
                  fundamentais garantidos pela Carta dos Direitos Fundamentais
                  da UE. Além disso, você também tem o direito de recorrer à
                  Justiça Europeia em caso de violação desses direitos
                </li>
              </div>
              <div className="vantagens-icones">
                <li className="modal-text">
                  <FaCheck />
                  <strong> Direitos Políticos:</strong> Como cidadão europeu,
                  você tem o direito de votar e se candidatar às eleições para o
                  Parlamento Europeu e nas eleições municipais em qualquer país
                  da UE ou do EEE em que você reside.
                </li>
              </div>
              <div className="vantagens-icones">
                <li className="modal-text">
                  <FaCheck />
                  <strong>
                    {" "}
                    Você pode entrar sem visto em mais de 170 países, incluindo
                    Estados Unidos, Canadá e Japão.
                  </strong>
                </li>
              </div>
            </p>
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
              ✨ 'Obter a cidadania luso-brasileira me permitiu realizar o sonho
              de morar fora do Brasil com conforto e segurança, me permitiu
              viver plenamente em Portugal e viver uma vida acessível em um país
              com qualidade de vida e dignidade. Já estou morando morando em
              Portugal e descobri um novo mundo, muitas novas possibilidades e
              muitas diferenças positivas no meu cotidiano.' (André Pantaleão,
              cidadão luso-brasileiro) ✨
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
          <p className="text8">
            Se você está em busca de uma advogada portuguesa comprometida em
            obter a sua cidadania portuguesa, estou à disposição para ajudá-lo
            (a) nessa jornada!
          </p>
          <p className="text8">
            <strong>Ser cidadão europeu é possível!</strong> Conte com a minha
            experiência e conhecimento para garantir que todo o processo seja
            realizado de forma segura e tranquila.
          </p>
          <p className="text8">
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
