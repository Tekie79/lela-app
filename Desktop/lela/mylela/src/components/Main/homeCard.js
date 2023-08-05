export const HomeCard = ({ data }) => {
  const { headline, subtitle, image } = data;
  const styles = {
    // color: "rgb(255, 255, 255)",
    // backgroundColor: "rgb(32, 114, 114)",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "contain",
    // width: "100%",
    // padding: "40px 100px",
    // height: "440px",
    // display: "flex",
    // flexDirection: "column",
    background: `linear-gradient(90deg, rgb(12, 88, 88), rgba(31, 138, 138, 0.7)), url("${image}")`,
  };

  return (
    <div className="headline-container" style={styles}>
      <h1 className="headline">{headline}</h1>
      <h3 className="sub-headline">{subtitle}</h3>
    </div>
  );
};
