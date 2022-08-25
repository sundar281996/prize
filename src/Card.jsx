import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function Card({ item }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {item.plan}
          </h5>
          <h6 className="card-price text-center">
            ${item.price}
            <span className="period">/month</span>
          </h6>
          <hr></hr>
          <ul className="fa-ul">
            {item.features.map((ite) => {
              return (
                <li className={!ite.isEnable ? "text-muted" : ""}>
                  <span className="fa-li">
                    {ite.isEnable ? (
                      <FontAwesomeIcon icon={faCheck} />
                    ) : (
                      <FontAwesomeIcon icon={faTimes} />
                    )}
                  </span>
                  {ite.isBold ? <strong> {ite.title}</strong> : ite.title}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <button className="btn btn-primary text-uppercase">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
