//CHALLENGE: uncomment the code below and see the car stats rendered
import cars from "../practice";

function App(){
  const [honda, tesla ] = cars;
  const {speedStats:{topSpeed:teslaTopSpeed}} = tesla
  const {coloursByPopularity:[teslaTopColour]} = tesla
  const {speedStats:{topSpeed:hondaTopSpeed}} = honda
  const {coloursByPopularity:[hondaTopColour]} = honda;
  return (
  <div>
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
  </div>
);

}


export default App