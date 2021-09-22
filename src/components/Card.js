import propTypes from 'prop-types'

const Card = (props) => {
    const className = [props.className];
    if(props.color === "Cyan") className.push("card--cyan")
    if(props.color === "Red") className.push("card--red")
    if(props.color === "Orange") className.push("card--orange")
    if(props.color === "Blue") className.push("card--blue")

    return (
      <div className={`card ${className.join(" ")}`}>
        <div className="card__info">
          <h2 className="card__info__title">{props.title}</h2>
          <p className="card__info__description">{props.description}</p>
        </div>
        <img src={props.image} alt="" className="card__image"/>
      </div>
    );
}

Card.propTypes = {
  isCyan: propTypes.bool,
  isRed: propTypes.bool,
  isOrange: propTypes.bool,
  isBlue: propTypes.bool,
}

export default Card;