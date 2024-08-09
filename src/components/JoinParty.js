import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import image4 from '../components/image4.jpeg'; // Import the image

const JoinParty = () => {
  return (
    <div className="container-fluid p-0">
      <div
        className="d-flex align-items-center justify-content-center position-relative shadow shadow-lg border border-1 rounded rounded-4"
        style={{
          height: '100%',
          backgroundImage: `url(${image4})`, // Correctly use backticks for template literals
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          className="p-4 rounded position-relative"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(5px)', // Blur effect on the background
          }}
        >
          <h1 className="display-4  animate__animated animate__slideInDown text-center  ">JOIN THE JOURNEY</h1>
          <p className="lead mb-4 animate__animated animate__slideInDown animate__delay-1s text-center">Be the change you want to see.</p>
          <h1 className="display-5 text-danger mb-4 animate__animated animate__slideInDown animate__delay-2s text-center "
          style={{fontWeight:'500'}}>Telangana Dravidian People's Party
          </h1>
          <p className="mb-4 animate__animated animate__slideInDown animate__delay-3s p-2">

            <b>1. Black Color :-</b>

            The land of Telangana contains "black coal, black sand lands and black sandstones. Telangana is known as "black gold" due to its abundance of "black coal" resources. This black gold (coal) is supplied to the 11 states of the Union of India for the survival of the people and for the development of industries. 25% of the total area of ​​agricultural land in Telangana state is black. This plateau is covered with volcanic rocks and lava flow   <br></br>
            <b>2. Red colour:-</b>

            Red soils constitute 50% of the available land in Telangana. The color red symbolizes the blood shed by Telangana martyrs, the sacrifices made, the fighting spirit, the unfulfilled aspirations of the movement, the armed struggle as well as the eternal effort and tireless journey to seek a change from the current state to the path of progress.<br></br>
            <b>3. Kesari  colour:-</b> Kesari is the battle symbol of the Kakatiyas. An epitome of heroic struggles. The shape of the yellow sun indicates that this soil, which has been bloodied by the revolutionary struggles of the people of Telangana, and this nation that has suffered wounds, should get freedom and start a new chapter.<br></br>

            <b>4. Green colour:-</b>

            "Represents the regime of the royals who distributed 1,70,000/- acres of land to the innocent tribals living in the green forest lands of Telangana, which constitute about 25%. Gira against the landlords.
          </p>
          <div className="d-flex flex-column flex-md-col gap-3 animate__animated animate__fadeIn animate__delay-4s  d-flex align-items-center justify-content-center">
            <button className="btn btn-primary ">JOIN AS VOLUNTEER</button>
            <button className="btn btn-danger"  >BECOME A MEMBER</button>
            <button className="btn btn-warning ">MAKE A DONATION</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinParty;
