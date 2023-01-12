import { useQuery, gql } from "@apollo/client";
import CardCars from "@components/CardCars";

const CARS = gql`
  query GetCars {
    cars {
      data {
        id
        attributes {
          title
          photo {
            data {
              attributes {
                url
              }
            }
          }
          body
          rating
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default function Homepage() {
  const { loading, error, data } = useQuery(CARS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <section className="bg-rose-800 w-full flex flex-col lg:flex-row h-fit">
      <section className="min-h-screen z-0 py-10 bg-gray-900 flex flex-wrap w-full justify-center gap-4  rounded-br-[200px] border-b-4 border-rose-500 lg:justify-start lg:pl-24">
        {data.cars.data.map((cars) => (
          <div key={cars.id} className="h-fit">
            <CardCars
              name={cars.attributes.title}
              desc={cars.attributes.body.substring(0, 200)}
              rate={cars.attributes.rating}
              carId={cars.id}
              carImage={
                import.meta.env.VITE_BACKEND_URL +
                cars.attributes.photo.data[0].attributes.url
              }
            />
          </div>
        ))}
      </section>
    </section>
  );
}
