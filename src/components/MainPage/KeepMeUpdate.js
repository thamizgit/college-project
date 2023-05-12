import { useState } from "react";
import axios from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const KeepMeUpdate = () => {
  const [updateName, setUpdateName] = useState('');
  const [updateMail, setUpdateMail] = useState('');
  const [updateMobile, setUpdateMobile] = useState('');

  const [updateLoading, setUpdateLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
       if (!updateMail.includes("@")) {
         toast.error("Please enter valid mail address");
         return;
       }
       if (updateMobile.length !== 10) {
         toast.error("Please enter a valid mobile number");
         return;
      }
      setUpdateLoading(true);
      const result = await axios.post("/updateme", JSON.stringify({
        name: updateName,
        mail: updateMail,
        mobile: parseInt(updateMobile)
      }), {
        headers: {
          Accept: 'application/json , text/plain',
          'Content-Type': 'application/json'
        }
      });
      toast.success('Successfully subscribed!');
      console.log(result);
    }
    catch (err) {
      if (!err?.response) {
        toast.error("No server response. Try Again :(");
        return;
      }
      if (err.response.status === 409) {
        toast.info("You have already been subscribed!");
        return;
      }
      if (err.response.status === 400) {
        toast.error("Missing details");
        return;
      }
      
      console.log(err);
    }
    finally {
      setUpdateLoading(false);
    }
  }
  return (
    <article className="update">
      <article className="update-heading">
        <h1>KEEP ME UPDATED</h1>
      </article>
      <article className="update-form">
        <form onSubmit={handleSubmit}>
          <label className="offscreen" htmlFor="name" />
          <input
            type="text"
            id="name"
            placeholder="Your name"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />

          <label className="offscreen" htmlFor="email" />
          <input
            type="text"
            id="email"
            placeholder="Your mail"
            value={updateMail}
            onChange={(e) => setUpdateMail(e.target.value)}
          />

          <label className="offscreen" htmlFor="phone" />
          <input
            type="number"
            id="phone"
            placeholder="Your mobile"
            value={updateMobile}
            onChange={(e) => setUpdateMobile(e.target.value)}
          />

          <button onClick={() => handleSubmit} className={`update-submit ${updateLoading && 'loader'}`} type="submit" > Submit</button>
          <ToastContainer />
        </form>
      </article>
    </article>
  );
};
export default KeepMeUpdate;
