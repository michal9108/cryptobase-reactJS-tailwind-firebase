import "./Pricing.css";
import PrepinacTemy from "./PrepinacTemy";
import { BiCheckboxSquare } from "react-icons/bi";

function Pricing() {
  return (
    <div className="App flex items-center justify-betweem h-screen" >;
      <header className="App-header"></header>
      <div className="table">
        <div className="row">
          <div className="column">
            <ul className="price headrow">
              <li className="header headerfeat">
                <br />
                <br />
                Funkcionality
              </li>
              <div className= 'headerrows'> 
              <li>Centralized Teams</li>
              <li>Version History</li>
              <li>Plugin Administrator</li>
              <li>Facebook & Instagram Ads</li>
              <li>Design System Analytics</li>
              <li>Unlimited cloud storage</li>
              </div>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Light
                <br />
                <span>0€</span>
                <p>za každého uživateľa za mesiac</p>
                <div className="button_cont" align="center">
                  <a className="btn" target="_blank" rel="nofollow noopener">
                    Do košíka
                  </a>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Professional
                <br />
                <span>25€</span>
                <p>za každého uživateľa za mesiac</p>
                <div className="button_cont" align="center">
                  <a className="btn" target="_blank" rel="nofollow noopener">
                  Do košíka
                  </a>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
              <li>
                <BiCheckboxSquare color="red" />
              </li>
            </ul>
          </div>

          <div className="column">
            <ul className="price">
              <li className="header">
                Organizácia
                <br />
                <span>50€</span>
                <p>za každého uživateľa za mesiac</p>
                <div className="button_cont" align="center">
                  <a className="btn" target="_blank" rel="nofollow noopener">
                    Do košíka
                  </a>
                </div>
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
              <li>
                <BiCheckboxSquare color="green" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;