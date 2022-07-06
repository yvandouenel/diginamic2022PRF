import { useState } from "react";
const Card = (props) => {

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
    </article>
  );
}

export default Card;