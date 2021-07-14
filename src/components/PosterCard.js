const PosterCard = (props) => {
  return (
    <div>
      <img className="poster" src={`/images/poster/${props.image}`} />
      <h5>{props.title}</h5>
      <p>{props.detail}</p>
      <button type="button" class="btn btn-primary">
        GET TICKET
      </button>
    </div>
  );
};

export default PosterCard;
