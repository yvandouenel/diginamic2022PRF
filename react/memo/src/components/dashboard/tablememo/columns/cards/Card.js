import { useState, useContext } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { DeleteCardContext } from "../../../Dashboard";
const Card = (props) => {
  const onClicDeleteCard = useContext(DeleteCardContext);
  // Etat local à la carte
  const [is_answer_shown, setAnswerShown] = useState(false);
  return (
    <article className="text-white mb-4 rounded bg-secondary p-3">
      <h4
        onClick={() => { setAnswerShown(!is_answer_shown) }}>
        {props.card.question}
      </h4>
      {is_answer_shown && (
        <p>{props.card.reponse}</p>
      )}
      <button
        onClick={() => { onClicDeleteCard(props.index_column, props.index_card) }}
        className="btn btn-danger"
      >Suppresion</button>
    </article>
  );
}

export default Card;