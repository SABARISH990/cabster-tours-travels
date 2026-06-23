import swift from "./assets/swift.png";
import innova from "./assets/innova.png";
import tempo from "./assets/tempo.png";

function Car() {
  return (
    <div className="car-showcase">

      <img
        src={swift}
        alt="Swift"
        className="car swift"
      />

      <img
        src={innova}
        alt="Innova"
        className="car innova"
      />

      <img
        src={tempo}
        alt="Tempo"
        className="car tempo"
      />

    </div>
  );
}

export default Car;