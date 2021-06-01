import styles from "@/styles/ContactArea.module.css";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
function ContactArea() {
  return (
    <div className={styles.container}>
      <h4>Interested in our tech? or just cusrious?</h4>
      <h1>HIT US UP</h1>
      <div className={styles.icons}>
        <FaLinkedinIn onClick={()=>{window.open('https://www.linkedin.com/company/exponent-energy/about/', "_blank") }}/>
        <FaEnvelope onClick={()=>{window.open(`mailto:contact@exponent.energy?subject=+Hey!`, '_blank');}}/>
      </div>
    </div>
  );
}

export default ContactArea;
