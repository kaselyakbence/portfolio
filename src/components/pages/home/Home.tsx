import "./home.scss";

const Home = () => {
  // const downloadCv = () => {
  //   fetch("cv.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       const fileURL = window.URL.createObjectURL(blob);

  //       const alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "cv.pdf";
  //       alink.click();
  //     });
  //   });
  // };

  return (
    <div className="welcome-page">
      <div className="text">
        <div className="top-line" />
        <div className="text-body">
          <div className="left-line" />
          <div>
            <h1>Welcome</h1>
            <p>My name is Bence Kaselyák</p>
            <p>Web Developer & Software Tester</p>
            <div className="resume">
              <button /*onClick={downloadCv}*/>
                <a href="cv.pdf" download="cv.pdf">
                  Check out my resume
                </a>
              </button>
            </div>
          </div>
          <div className="right-line" />
        </div>
        <div className="bottom-line" />
      </div>
    </div>
  );
};
export default Home;
