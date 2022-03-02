import styles from "./NaturalEvents.module.scss";
import { Table } from "react-bootstrap";

const NaturalEvents = ({ natEvent }) => {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          {natEvent.geometry[0].date && natEvent.geometry[1].date && (
            <tr>
              <th>{natEvent.title}</th>
              <th>{natEvent.geometry[0].date}</th>
              <th>{natEvent.geometry[1].date}</th>
            </tr>
          )}
        </thead>
        <tbody>
          {natEvent.geometry[0].coordinates[0] &&
            natEvent.geometry[0].coordinates[1] &&
            natEvent.geometry[1].coordinates[0] &&
            natEvent.geometry[1].coordinates[1] && (
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
            )}
          {natEvent.geometry[0].magnitudeValue &&
            natEvent.geometry[1].magnitudeValue &&
            natEvent.geometry[0].magnitudeUnit &&
            natEvent.geometry[1].magnitudeUnit && (
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
            )}
          {natEvent.sources[0].url && (
            <tr>
              <td>Source</td>
              <td>
                <a href={natEvent.sources[0].url}>Source Link: Click here</a>
              </td>
              <td>@Twitter</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default NaturalEvents;
