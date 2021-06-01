import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/About.module.css"
const about = () => {
  return (
    <Layout title="About Exponent">
      <div className={styles.aboutContainer} style={{textAlign:"center"}}>
        <h1>OUR VISION</h1>
        <p>
          From time immemorial, human beings have wanted the freedom to go
          anywhere, at record speed and do it in by spending as little as
          possible.{" "}
        </p>
        <br/>
        <h2>Faster, farther, free-er. </h2>
        <p>
          This innate human need is beautiful and it drives us. From the time we
          as a race invented the wheel to pushing the limits to set record
          speeds, humans have craved speed and flexibility from the beginning of
          time. Billions of dollars and countless engineering hours have been
          spent to give us that same power, precision and efficiency in everyday
          life on the road, just to satiate that craving for greater freedom.
          And yet, it is never enough. We want to go faster, farther and be
          free-er. At Exponent, we fuel this desire.{" "}
        </p>
        <br/>
        <h3>We fuel freedom.</h3>
        <p>v1.0.0</p>
      </div>
    </Layout>
  );
};

export default about;
