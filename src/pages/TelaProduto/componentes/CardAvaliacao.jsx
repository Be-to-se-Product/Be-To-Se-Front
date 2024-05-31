import star from "@assets/star.svg";

function CardAvaliacao(props) {
  const { estrela, comentario } = props;

  const estrelas = [];

  for (let i = 0; i < estrela; i++) {
    estrelas.push(<img key={i} src={star} alt="" className="h-2.5 mb-2" />);
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-x-1">{estrelas}</div>
      <p>{comentario}</p>
    </div>
  );
}

export default CardAvaliacao;
