import styles from "@/styles/InfoArea.module.css";
import Image from "next/image";
function InfoArea() {
  return (
    <div className={styles.container}>
      <div className={styles.flex1}>
        <div className={styles.flex1Txt}>
          {" "}
          <h1>
            Enabling Vehicle manufacturers to build truly freeing electric
            vehicles.
          </h1>
          <div></div>
          <h2>
            Et Dolore elit exercitation eu mollit tempor quis
            laborum occaecat elit ea cupidatat tempor incididunt magna. Dolore
            anim elit Lorem officia culpa. Commodo culpa ipsum minim adipisicing
            Lorem laborum anim culpa irure tempor mollit ad ipsum ad. Dolore qui
            culpa nostrud laborum reprehenderit ut sint tempor veniam aute eu.
          </h2>
        </div>
        <div className={styles.flex1Img}>
          <Image src="/Bitmap.svg" width="720px" height="544px" />
        </div>
      </div>
      <div className={styles.flex2}>
        <div className={styles.flex2Img}>
          <Image src="/Bitmap (1).svg" width="720px" height="544px" />
        </div>
        <div className={styles.flex2Txt}>
          {" "}
          <h1>
            Enabling Vehicle manufacturers to build truly freeing electric
            vehicles.
          </h1>
          <div></div>
          <h2>
            Et Dolore elit exercitation eu mollit tempor quis
            laborum occaecat elit ea cupidatat tempor incididunt magna. Dolore
            anim elit Lorem officia culpa. Commodo culpa ipsum minim adipisicing
            Lorem laborum anim culpa irure tempor mollit ad ipsum ad. Dolore qui
            culpa nostrud laborum reprehenderit ut sint tempor veniam aute eu.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default InfoArea;
