import { FaLocationArrow } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
    return (
      <article className="footer-top">
        <footer className="footer">
          <article>
            <iframe title="map"
              style={{ borderRadius: "13px" }}
              width="100%"
              height="200"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Sudharshana%20polytechnic%20college+(My%20Business%20Name)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/distance-area-calculator.html">
                measure area map
              </a>
            </iframe>
          </article>
          <article>
            <h1>
              Location
              <FaLocationArrow
                style={{
                  color: "whitesmoke",
                  fontSize: "1rem",
                  margin: "0.1rem",
                }}
              />
            </h1>
            <address>Kallipatti, Ammapatti Post</address>
            <p>Taluk : Thuraiyur</p>
            <p>District : Tiruchirappalli</p>
            <p>Pincode : 621 014</p>
          </article>
          <article>
            <h1>
              Contact
              <MdContactPhone
                style={{ paddingTop: "0.3rem", paddingLeft: "0.3rem" }}
              />
            </h1>
            <p>Cell : 93441 65084</p>
            <p>Alternate : 93448 22689</p>
            <p>E-mail : spcoffice07@yahoo.com</p>
          </article>
          <article
            style={{
              borderRight: "none",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              columnGap: "1rem",
            }}
          >
            <SocialIcon
              className="social-icon"
              network="twitter"
              fgColor="whitesmoke"
              style={{ border: "2px solid whitesmoke", borderRadius: "25px", }}
            />
            <SocialIcon
              network="facebook"
              fgColor="whitesmoke"
              style={{ border: "2px solid whitesmoke", borderRadius: "25px" }}
            />
            <SocialIcon
              network="instagram"
              fgColor="whitesmoke"
              style={{ border: "2px solid whitesmoke", borderRadius: "25px" }}
            />
            <SocialIcon
              network="google"
              fgColor="whitesmoke"
              style={{ border: "2px solid whitesmoke", borderRadius: "25px" }}
            />
          </article>
        </footer>
        <hr></hr>
        <p style={{ textAlign: "center" }}>
          Copyright &copy; Sudharshana {new Date().getFullYear()}
        </p>
      </article>
    );
}
export default Footer