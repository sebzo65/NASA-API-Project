import styles from "./NaturalEvents.module.scss";
import { Table } from "react-bootstrap";

const NaturalEvents = ({ natEvent }) => {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>{natEvent.title}</th>
            <th>{natEvent.geometry[0].date}</th>
            <th>{natEvent.geometry[1].date}</th>
            <th>{natEvent.geometry[2].date}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Coordinates:</td>
            <td>
              Lat: {natEvent.geometry[0].coordinates[0]}, Long:
              {natEvent.geometry[0].coordinates[1]}
            </td>
            <td>
              Lat: {natEvent.geometry[1].coordinates[0]}, Long:
              {natEvent.geometry[1].coordinates[1]}
            </td>
          </tr>
          <tr>
            <td>Magnitude Value:</td>
            <td>
              {natEvent.geometry[0].magnitudeValue}
              {natEvent.geometry[0].magnitudeUnit}
            </td>
            <td>
              {natEvent.geometry[1].magnitudeValue}
              {natEvent.geometry[1].magnitudeUnit}
            </td>
          </tr>
          <tr>
            <td>Source</td>
            <td>{natEvent.sources[0]}</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default NaturalEvents;
