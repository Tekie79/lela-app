import "./Main.css";
import { Services } from "./features/services";
export const Main = () => {
  return (
    <div className="main-container">
      <div className="headline-container">
        <h1 className="headline">Work, meet flow</h1>
        <h3 className="sub-headline">
          Spend more time on the stuff that matters. Let us worry about the
          rest.
        </h3>
      </div>
      <Services />
    </div>
  );
};
