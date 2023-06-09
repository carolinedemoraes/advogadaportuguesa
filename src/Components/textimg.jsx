import "../styles/Components/textimg.sass";
const TextImg = ({ children, imgSrc, leftImg = false }) => (
  <div className={`text-img ${leftImg ? "reverse" : ""}`}>
    <div className="text-img-text">{children}</div>
    <div className="text-img-img">
      <img src={imgSrc} />
    </div>
  </div>
);

export default TextImg;
