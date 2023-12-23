import "./styles.css";
import Accordion from "./Accordion";
import { accordionData } from "./data";
export default function App() {
  return (
    <ul>
      {accordionData.map(({ heading, content }) => (
        <Accordion heading={heading} content={content} />
      ))}
    </ul>
  );
}
