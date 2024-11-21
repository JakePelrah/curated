import "./sidebar.css";
import automotive from "../automotive.json";

const renderAccordionItems = Object.keys(automotive).map((category, i) => (
  <li key={i} className="list-group-item">{category}</li>
));

export default function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column p-3 gap-2">
      <div className="accordion accordion-flush">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAutomotive"
            >
              <div className="category d-flex align-items-center mt-2">
                <img className="me-2" src="./ev-front-fill.svg" />
                Automotive
              </div>
            </button>
          </h2>
          <div
            id="collapseAutomotive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="px-2">{renderAccordionItems}</ul>
            </div>
          </div>
        </div>

        <div className="accordion-item mt-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="category d-flex align-items-center">
                <img className="me-2" src="./egg-fried.svg" />
                Cooking
              </div>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"></div>
          </div>
        </div>

        <div className="accordion-item mt-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="category d-flex align-items-center">
                <img className="me-2" src="./flower1.svg" />
                Gardening
              </div>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"></div>
          </div>
        </div>

        <div className="accordion-item mt-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="category d-flex align-items-center">
                <img className="me-2" src="./music-note-beamed.svg" />
                Music
              </div>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
