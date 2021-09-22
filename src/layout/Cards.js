import Card from "components/Card";

const Cards = ({ data }) => {

    return (
      <section className="cards">
        {data.map((e) => {
          return <Card
            key={`card-${e.title}`}
            color={e.color}
            title={e.title}
            description={e.description}
            image={e.imageUrl}
          />
        })}
      </section>
    );
}

export default Cards;