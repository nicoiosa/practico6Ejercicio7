const Avatar = ({ pic }) => {
  const url = "../../public/img/" + pic;
  return (
    <div className="col-lg-2 col-4">
      <img src={url} alt="Avatar" className="img-fluid" />
    </div>
  );
};

export default Avatar;
