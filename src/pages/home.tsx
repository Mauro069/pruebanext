import Layout from "@/components/Layout";
import styles from "../styles/Home.module.css";
import { IData } from "./api/rick";

const Home = ({ data }: { data: IData }) => {
  console.log(process.env)
  return (
    <Layout>
      <h1 className={styles.titulo}>Home</h1>
      <br />
      <ul>
        {data?.results?.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await fetch(`https://${process.env.VERCEL_URL}/api/rick`);
  const data = await response.json();

  console.log(process.env)

  return {
    props: data,
    revalidate: 86400,
  };
}
