const Popup = (props) => {
  const { children, title, onClick } = props;

  return (
    <div className="popup">
      <div className="popup__content">
        <button className="popup__close" type="button"></button>
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
};
