import { useState } from "react";
import "./styles/app.sass";
import menu from "../src/Components/menu";
import Title from "./Components/title";
import TextImg from "./Components/textimg";
import Menu from "../src/Components/menu";
import Modal from "./Components/closemodal";

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import ModalButton from "./Components/modal-button";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="content">
        <TextImg imgSrc={"imgs/advlusobrasileira.jpg"}>
          <Menu />
          <Title />
        </TextImg>

        <TextImg imgSrc={"imgs/passaporteportugues.jpg"} leftImg>
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

        <TextImg imgSrc={"imgs/simbolodireito.jpg"}>
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

        <TextImg imgSrc={"imgs/PT1.jpg"} leftImg>
          <h1 className="label" id="vantagens">
            Vantagens de Ser Cidadão Português
          </h1>

          <p className="text3">
            Como cidadão da União Europeia, você pode desfrutar de uma série de
            benefícios e oportunidades que não estão disponíveis para cidadãos
            de outros países. Portanto, se você tiver a oportunidade de se
            tornar um cidadão europeu, através da sua cidadania portuguesa,
            certamente será uma escolha vantajosa para sua vida pessoal e
            profissional.
          </p>
          <p className="text3">
            Adquirindo a sua nacionalidade portuguesa, você se torna um cidadão
            europeu, e com isto você passa a ter inúmeras vantagens, além da
            vantagem pura e simples de passar a nacionalidade aos seus
            descendentes.{" "}
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
          <div className="depoimentos">
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
          <p className="text4">
            Se você está em busca de uma advogada portuguesa comprometida em
            obter a sua cidadania portuguesa, estou à disposição para ajudá-lo
            (a) nessa jornada!
          </p>
          <p className="text4">
            <strong>Ser cidadão europeu é possível!</strong> Conte com a minha
            experiência e conhecimento para garantir que todo o processo seja
            realizado de forma segura e tranquila.
          </p>
          <p className="text4">
            <strong>Entre em contato:</strong>
          </p>
          <a
            href="https://www.instagram.com/cidadanialusitana/"
            className="social-network"
          >
            <FaInstagram />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5553999652013 "
            className="social-network"
          >
            <FaWhatsapp />
          </a>
          <a href="mailto:andreia-66927p@adv.oa.pt" className="social-network">
            <FaEnvelope />
          </a>
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
