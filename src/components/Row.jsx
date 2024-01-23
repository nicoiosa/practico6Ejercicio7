import Avatar from "./Avatar";

const Row = ({ fullName, title, department, pic }) => {
  return (
    <article className="row p-3 align-items-center border">
      <Avatar pic={pic} />
      <div className="col-lg-8 col-4">
        <h3 className="mb-4">{fullName}</h3>
        <div className="d-flex gap-3">
          <p>{title}</p>
          <p className="boxie fw-bold">{department}</p>
        </div>
      </div>
    </article>
  );
};

export default Row;
