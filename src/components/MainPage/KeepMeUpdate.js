const KeepMeUpdate = () => {
  return (
    <article className="update">
      <article className="update-heading">
        <h1 >KEEP ME UPDATED</h1>
      </article>
      <article className="update-form">
        <form onSubmit={(e)=>e.preventDefault()}>
          <label className="offscreen" htmlFor="name" />
          <input type="text" id="name" placeholder="Your name" autoFocus />

          <label className="offscreen" htmlFor="email" />
          <input type="text" id="email" placeholder="Your mail" autoFocus />

          <label className="offscreen" htmlFor="phone" />
          <input type="number" id="phone" placeholder="Your mobile" autoFocus />

          <input className="update-submit" type="submit" />
        </form>
      </article>
    </article>
  );
};
export default KeepMeUpdate;
