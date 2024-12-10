import styles from "/Components/styles/product.module.css";

const ProductPage = () => {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <header className={styles.navBar}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <img src="/images/Group.jpg"/>
          </div>
          <input
            type="text"
            placeholder="Rechercher un produit"
            className={styles.searchBox}
          />
          <div className={styles.favs}>
            <img src="/images/Frame 72.jpg"/>
          </div>
          <a className={styles.navbarbutton1}>Inspirations</a>
          <img src="/images/Avatar.jpg"
          className={styles.avatar}/>
          <img src="/images/Group 94 (1).jpg"
            className={styles.searchicon}
          />
          <button className={styles.cartBtn}
          ><img src="/images/cart.jpg"/>Panier
            </button>
        </div>

      </header>
        <div className={styles.options}>
          <img src="/images/Group 57.jpg"/>
          {/*edit navbar here .......*/ }
        </div>
      {/* Main Content */}
      <main className={styles.mainWrapper}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumbs}>Home &gt; Art de la table</div>

        {/* Product Section */}
        <div className={styles.productDisplay}>
          {/* Image Section */}
          <div className={styles.mainImage}>
            <img
              src="/images/machine image.jpg"
              alt=" thumbnail "
            />
          </div>
          <div className={styles.imageThumbnails}>
            <div className={styles.thumbnailItem1}>
              <img
                src="/images/table.jpg"           
                objectFit="cover"
              />
            </div>
            <div className={styles.thumbnailItem2}>
              <img
                src="/images/table.jpg"
                objectFit="cover"
              />
            </div>
            <div className={styles.thumbnailItem3}>
              <img
                src="/images/table.jpg"
                objectFit="cover"
              />
            </div>
            <div className={styles.thumbnailItem4}>
              <img
                src="/images/table.jpg"
                objectFit="cover"
              />
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className={styles.productDetails}>
          <h2 className={styles.productTitle}>
            Cheese – appareil à raclette 1/2 roue
          </h2>
          <div className={styles.heart}>
            <img src="/images/Vector.jpg" 
            alt="like"
            />
          </div>

          <div className={styles.size}>
            <img src="/images/Frame 95.jpg"
            alt="size"
            />
            </div>
            <div className={styles.height}>
            <img src="/images/Frame 95 (1).jpg"
            alt="height"
            />
          </div>
          <p className={styles.productPrice}>39,50€ / piece</p>
          <ul className={styles.featureList}>
            <li>Régable en hauteur</li>
            <li>Appareil à raclette professionnel</li>
            <li>Boîtier de chauffe horizontal réglable en hauteur</li>
            <li>220V | 900W</li>
          </ul>
          <button className={styles.addToCart}>Ajouter au Panier</button>
        </div>

        {/* Description */}
        <div className={styles.productDescription}>
          <h3 className={styles.descriptionHeading}>Description produit</h3>
          <p className={styles.descriptionText}>
          Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € 
          / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet 
          d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous 
          sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une 
          réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la 
          Table". 
          </p>
        </div>

        <div className={styles.similarproducts}>
          <h2 className={styles.similarlists}>Articles similaires</h2>
          <p className={styles.similartext}>
           Hello !!!!!.........
          </p>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
