// Uses the same styles as Product
<<<<<<< HEAD
import PageNav from "../components/PageNav";
=======
>>>>>>> 04b9134b05de2fbf126ba17a93fb22e1afedd3ff
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
<<<<<<< HEAD
      <PageNav />

=======
>>>>>>> 04b9134b05de2fbf126ba17a93fb22e1afedd3ff
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
