import SocialNetwork from "./social-network";

function Title() {
  return (
    <>
      <div className="title-content">
        <h1 className="title">CIDADANIA LUSITANA</h1>
        <h2 className="subtitle">ANDRÉIA SANT'ANNA</h2>
        <p className="undertitle">Advogada Lusitana</p>
        <p className="undertitle">
          Especialista em cidadania portuguesa e assuntos jurídicos portugueses
        </p>

        <SocialNetwork />

        <p className="slogan">
          Eu posso te ajudar a realizar o sonho português 🇵🇹✨
        </p>
      </div>
    </>
  );
}

export default Title;
