import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faShop, faAddressBook, faCircleInfo, faLocationDot, faClock }from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Maps from "./Maps"

function Contatti() {
  return (
    <>
    <div className="contatti-page text-center mt-5">
  <h1><FontAwesomeIcon icon={faCircleInfo} />Informazioni</h1>
</div>

<div className="d-flex flex-column flex-md-row justify-content-center gap-4 mt-4">
  {/* Sezione Negozio */}
  <div className="negozio p-3 bg-light rounded shadow text-start w-100 w-md-auto">
    <h2><FontAwesomeIcon icon={faShop} />{" "}Negozio</h2>
    <br />
    <h5> <FontAwesomeIcon icon={faLocationDot} />{" "}Via Leone XIII, 9, 74015 Martina Franca TA</h5>    
    <br />
    <h4><FontAwesomeIcon icon={faClock} />{" "}Orari Apertura:</h4>
    <br />
     <h5>Lunedì – Venerdì 9:00- 13:00 / 17:00 – 20:30</h5>
    
    <h5><h5>Sabato 9:00 – 13:00 / Pomeriggio Chiuso</h5></h5>
  </div>

  {/* Sezione Contatti */}
  <div className="info p-3 bg-light rounded shadow text-start w-100 w-md-auto ">

    <h2><FontAwesomeIcon icon={faAddressBook} />{" "}Contatti</h2>
    <br />
    <div className="mb-3">
      <h4><FontAwesomeIcon icon={faPhone} /> Telefono</h4>
      <h5>080 2378818</h5>
    </div>
    <div className="mb-3">
      <h4><FontAwesomeIcon icon={faWhatsapp} />{" "}WhatsApp</h4>
      <h5>3287892261</h5>
    </div>
    <div>
      <h4> <FontAwesomeIcon icon={faEnvelope} />{" "}Email</h4>
      <h5>info@simphonia.com</h5>
    </div>
  </div>
</div>

<div className="mt-5">
  <Maps />
</div>
   
    </>
  );
}

export default Contatti;