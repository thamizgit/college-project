import './Contact.css';
import axios from '../../api/axios';
import { useState } from 'react';
import { toast,ToastContainer } from 'react-toastify';
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const [formLoading, setFormLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setFormLoading(true);
      const response = await axios.post('/sendquery', JSON.stringify({
        name, email, query
      }), {
        headers: {
          Accept: "application/json,text/plain",
          "Content-Type": "application/json"
        }
      });
      if (response?.data?.name) {
        toast.success(`Hi ${response.data.name} ! We have recieved your query. We will get back to you soon.`)
      }
      else {
        toast.success(
          `We have recieved your query. We will get back to you soon.`
        );
      }
    }
    catch (err) {
      if (!err?.response) {
        toast.error("Something went wrong. Check your network");
      }
      else if (err.response.status === 409) {
        toast.info("You have already sent us an query. Wait for that query to be resolved");
      }
      else {
        toast.error("Something went wrong. Try again");
      }
    }
    finally {
      setFormLoading(false);
    }

  }
return (
  <>
    <article className="s1">
      <article className="s1-img">
        <img
          src={require("../../images/Contact/img1.jpg")}
          alt="chairman"
          width={320}
          height={320}
        />
        <h1>K.CHINNADURAI</h1>
      </article>

      <article className="s1-img">
        <img
          src={require("../../images/Contact/img2.jpg")}
          alt="secretary"
          width={320}
          height={320}
        />
        <h1>K.SARAVANAN</h1>
      </article>
      <article className="s1-img">
        <img
          src={require("../../images/Contact/img3.jpg")}
          alt="principal"
          width={320}
          height={320}
        />
        <h1>K.BOOPALAN</h1>
      </article>
    </article>
    <section className="grid-2">
      <div className="contact-content">
        <h1 className="contact-headder">Administration/Reception</h1>
        <p className="cardtext">Phone:93441 65084</p>
        <p className="cardtext">
          Email:
          <a href="spcoffice07@yahoo.com">spcoffice07@yahoo.com</a>
        </p>
      </div>
      <div className="contact-content even">
        <h1 className="contact-headder">Hostel</h1>
        <p className="cardtext">Phone:93448 22689</p>
        <p className="cardtext">
          Email:<a href="spcoffice07@yahoo.com">spcoffice07@yahoo.com</a>
        </p>
      </div>
      <div className="contact-content">
        <h1 className="contact-headder">Addmission Enquiry</h1>
        <p className="cardtext">Phone:93448 22689</p>
        <p className="cardtext">
          Email:<a href="spcoffice07@yahoo.com">spcoffice07@yahoo.com</a>
        </p>
      </div>
      {/*  <label>Placement & Training Cell</label>
       */}{" "}
      <div className="contact-content even">
        <h1 className="contact-headder">Placement & Training Cell</h1>
        <p className="cardtext">Phone:93448 22689</p>
        <p className="cardtext">
          Email:<a href="spcoffice07@yahoo.com">spcoffice07@yahoo.com</a>
        </p>
      </div>
    </section>
    <form className="forms" onSubmit={(e) => handleSubmit(e)}>
      <fieldset
        style={{
          border: "2px solid black",
          fontWeight: "bold",
        }}
      >
        <legend>Send an Query</legend>
        <label className="offscreen">NAME:</label>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label className="offscreen">Email:</label>
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label className="offscreen">Comments:</label>
        <textarea
          placeholder="Your queries here"
          cols={2}
          rows={10}
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></textarea>
        <button className={`btn ${formLoading && "loader"}`} type="submit">
          {" "}
          Submit
        </button>
        <ToastContainer />
      </fieldset>
    </form>
  </>
);}
export default Contact;