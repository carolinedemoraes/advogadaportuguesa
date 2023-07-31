import { useState } from "react";
import "./styles/app.sass";
import menu from "../src/Components/menu";
import Title from "./Components/title";
import TextImg from "./Components/textimg";
import Menu from "../src/Components/menu";
import Modal from "./Components/modal";

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import ModalButton from "./Components/modal-button";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="content">
        <TextImg imgSrc={"images/advogadapt.jpg"}>
          <Menu />
          <Title />
        </TextImg>
        <TextImg imgSrc={"images/passaporte.jpg"} leftImg>
          <h1 className="label" id="minha-historia">
            Minha História
          </h1>
          <p className="text">Olá!</p>

          <ModalButton>
            <p className="modal-text">
              Olá! Meu nome é Andréia Amaral Sant'Anna e assim como você, eu
              também busquei a minha nacionalidade portuguesa através dos meus
              antepassados. Hoje, sou uma advogada brasileira e portuguesa,
              formada, há mais de 20 anos, pela Universidade Federal de Rio
              Grande (FURG) e tenho a felicidade de desfrutar de todos os
              privilégios que um cidadão português tem no mundo. Compreendo a
              importância de ter uma segunda nacionalidade, não só pelo acesso a
              benefícios e oportunidades, mas também pela conexão com a história
              e cultura do país de origem. Por isso, estou empenhada em ajudar
              aqueles que desejam obter a cidadania portuguesa, seja por
              vínculos sanguíneos, casamento ou naturalização. Além disso,
              também atuo na área de homologação de sentenças estrangeiras,
              auxiliando aqueles que necessitam de reconhecimento judicial de
              decisões tomadas em outros países. Ao longo da minha jornada,
              aprendi que cada caso é único e que a obtenção da cidadania
              portuguesa pode ser um processo complexo e demorado. Por isso,
              estou aqui para auxiliar e orientar meus clientes em todos os
              aspectos legais envolvidos, oferecendo um serviço personalizado e
              eficiente. Para isso, estou sempre atualizada com as leis e
              regulamentos em vigor, a fim de garantir que meus clientes tenham
              o melhor resultado possível.
            </p>
          </ModalButton>
        </TextImg>

        <TextImg imgSrc={"images/direito.jpg"}>
          <h1 className="label" id="meus-servicos">
            Meus Serviços
          </h1>
          <p className="text2">
            Como advogada brasileira e portuguesa meu trabalho consiste na
            aquisição da nacionalidade portuguesa em todos os níveis,
            acompanhando cada caso particular com a maior atenção e dedicação.
          </p>
          <p className="text2">
            Além da assessoria personalizada durante o processo de obtenção da
            nacionalidade portuguesa, posso te ajudar em diversos assuntos
            jurídicos relacionados a Portugal.
          </p>

          <ModalButton>
            <p className="modal-text">
              Ofereço serviços jurídicos especializados em aquisição da
              nacionalidade portuguesa em todos os níveis, ou seja, por
              atribuição (filhos, netos e bisnetos de portugueses) ou por
              aquisição, para inúmeros casos.
            </p>

            <p className="modal-text">
              São muitos os casos em que se pode adquirir a nacionalidade
              portuguesa ou naturalizar-se português. Bem como, o trabalho de
              homologações de sentença estrangeira nos tribunais portugueses.
              Com a minha experiência e conhecimento em direito internacional,
              aplicado ao caso, busco garantir que meus clientes tenham uma
              experiência tranquila e segura durante todo o processo.
            </p>

            <p className="modal-text">
              Meu trabalho consiste em oferecer uma assessoria personalizada,
              desde a análise da documentação necessária até a finalização do
              processo, com a aplicação direta, digital e instantânea, frente ao
              Instituto de Registos e do Notariado (IRN) de Portugal.
              Prerrogativa concedida aos advogados portugueses. Trabalho com um
              serviço ágil e eficiente, sempre buscando a melhor solução para
              cada caso específico.
            </p>

            <p className="modal-text">
              Além disso, como advogada portuguesa e brasileira, tenho
              conhecimento sobre as particularidades de ambos os sistemas
              jurídicos, o que me permite prestar um serviço completo e
              integrado para aqueles que buscam adquirir a nacionalidade
              portuguesa ou homologar sentenças estrangeiras em Portugal.
            </p>
          </ModalButton>
        </TextImg>

        <TextImg imgSrc={"images/bandeirapt.jpg"} leftImg>
          <h1 className="label" id="vantagens">
            Vantagens de Ser Cidadão Europeu
          </h1>

          <p className="text3">
            Como cidadão da União Europeia, você pode desfrutar de uma série de
            benefícios e oportunidades que não estão disponíveis para cidadãos
            de outros países. Portanto, se você tiver a oportunidade de se
            tornar um cidadão europeu, através da sua cidadania portuguesa,
            certamente será uma escolha vantajosa para sua vida pessoal e
            profissional.
          </p>

          <ModalButton>
            <p className="modal-text1">
              Adquirindo a sua nacionalidade portuguesa, você se torna um
              cidadão europeu, e com isto você passa a ter inúmeras vantagens,
              além da vantagem pura e simples de passar a nacionalidade aos seus
              descendentes. Algumas das principais vantagens de ser um cidadão
              europeu incluem:
              <li className="modal-text">
                <strong> 1. Mobilidade:</strong> Como cidadão europeu, você tem
                o direito de circular, residir,estudar e trabalhar livremente em
                qualquer país da União Europeia (UE) e do Espaço Econômico
                Europeu (EEE).
              </li>
              <li className="modal-text">
                <strong>2. Emprego:</strong> Como cidadão europeu, você tem
                acesso a todas as oportunidades de emprego e treinamento
                oferecidas em qualquer país da UE ou do EEE, assim você pode
                aproveitar as melhores oportunidades de emprego em qualquer país
                europeu sem precisar de autorização de trabalho.
              </li>
              <li className="modal-text">
                <strong>3. Educação:</strong> Como cidadão europeu, você tem
                acesso a todas as instituições de ensino superior da UE e do EEE
                com as mesmas taxas de matrícula e acesso aos benefícios de
                estudante oferecidos aos cidadãos locais.
              </li>
              <li className="modal-text">
                <strong>4. Qualidade de vida:</strong> Como cidadão europeu,
                você tem acesso a alguns dos melhores serviços públicos do
                mundo, incluindo saúde, assistência social e transporte público.
                Além disso, você também tem direito à proteção consular e
                assistência legal em qualquer país da UE ou do EEE.
              </li>
              <li className="modal-text">
                <strong>5. Segurança:</strong> Como cidadão europeu, você pode
                contar com a proteção dos direitos humanos e liberdades
                fundamentais garantidos pela Carta dos Direitos Fundamentais da
                UE. Além disso, você também tem o direito de recorrer à Justiça
                Europeia em caso de violação desses direitos.
              </li>
              <li className="modal-text">
                <strong>6. Direitos Políticos:</strong> Como cidadão europeu,
                você tem o direito de votar e se candidatar às eleições para o
                Parlamento Europeu e nas eleições municipais em qualquer país da
                UE ou do EEE em que você reside.
              </li>
              <li className="modal-text">
                <strong>
                  7. Você pode entrar sem visto em mais de 170 países, incluindo
                  Estados Unidos, Canadá e Japão.
                </strong>
              </li>
            </p>
          </ModalButton>
        </TextImg>
        <TextImg imgSrc={"images/portugal1.jpg"}>
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
