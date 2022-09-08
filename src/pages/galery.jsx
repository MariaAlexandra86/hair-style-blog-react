import { useState } from "react";
import Modal from "../components/modal/modal";

const Galery = () => {
  const [showZoom, setShowZoom] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const poze = [
    "pozaA.jpg",
    "poze4.jpg",
    "poze7.jpg",
    "poze8.jpg",
    "poze11.jpg",
    "poze12.jpg",
    "poze13.jpg",
    "poze14.jpg",
    "poze15.jpg",
    "poze16.jpg",
    "b2.jpg",
    "b3.jpg",
    "b5.jpg",
    "b6.jpg",
    "b7.jpg",
    "b8.jpg",
    "f1.jpg",
    "f2.jpg",
    "f3.jpg",
    "f4.jpg",
    "freza2.jpg",
    "freza3.jpg",
    "freza4.jpg",
    "freza5.jpg",
    "freza6.jpg",
    "freza7.jpg",
    "freza10.jpg",
    "freza11.jpg",
    "t33.jpg",
    "t34.jpg",
    "t35.jpg",
    "t36.jpg",
    "t37.jpg",
    "t38.jpg",
    "tunsoare2.jpg",
    "tunsoare3.jpg",
    "tunsoare4.jpg",
    "tunsoare9.jpg",
    "tunsoare10.jpg",
    "tunsoare11.jpg",
    "tunsoare12.jpg",
    "tunsoare13.jpg",
    "tunsoare16.jpg",
    "tunsoare17.jpg",
    "tunsoare18.jpg",
    "tunsoare19.jpg",
    "tunsoare21.jpg",
    "tunsoare24.jpg",
    "tunsoare25.jpg",
    "tunsoare26.jpg",
    "tunsoare27.jpg",
    "tunsoare28.jpg",
    "tunsoare29.jpg",
    "mireasa.jpg",
    "mireasa2.jpg",
    "mireasa3.jpg",
    "mireasa4.jpg",
    "mireasa5.jpg",
    "mireasa6.jpg",
    "mireasa7.jpg",
    "mireasa8.jpg",
    "mireasa9.jpg",
    "mireasa10.jpg",
    "mireasa11.jpg",
    "mireasa12.jpg",
    "mireasa13.jpg",
    "mireasa14.jpg",
    "mireasa15.jpg",
    "mireasa16.jpg",
    "mireasa17.jpg",
    "mireasa18.jpg",
    "miri.jpg",
    "par1.jpg",
    "par2.jpg",
    "par3.jpg",
    "par4.jpg",
    "par5.jpg",
    "par6.jpg",
    "par7.jpg",
    "par8.jpg",
    "par9.jpg",

    "par11.jpg",
    "par12.jpg",
  ];

  const handleZoom = (selectedImg) => {
    setSelectedImage(selectedImg);
    setShowZoom(true);
  };

  const handleCloseZoom = () => {
    setShowZoom(false);
  };

  const onClickNavBtnLeft = () => {
    if (selectedImage === 0) return;
    setSelectedImage((state) => state - 1);
  };

  const onClickNavBtnRight = () => {
    if (selectedImage === poze.length) return;
    setSelectedImage((state) => state + 1);
  };

  return (
    <div className="galery-container">
      <h1>Galery</h1>
      <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
        {poze.map((image, index) => (
          <img
            src={`images/${image}`}
            alt="..."
            className="galery-image"
            onClick={() => handleZoom(index)}
          />
        ))}
      </div>
      <Modal
        showModal={showZoom}
        onClose={handleCloseZoom}
        onClickNavBtnLeft={onClickNavBtnLeft}
        onClickNavBtnRight={onClickNavBtnRight}
        navigationTotal={poze.length}
        navigationCurrent={selectedImage+1}
      >
        <img
          src={`images/${poze[selectedImage]}`}
          alt="..."
          style={{ maxHeight: 500 }}
        />
      </Modal>
    </div>
  );
};

export default Galery;
