const slider = () => {

    const seccionBanner = document.querySelector("[data-banner]");
    

    const banners = [
        {
            id:1,
            img: "./imagenes/banner/banner1.webp",
            tituloBanner: "Febrero Promocional",
            descripcion: "Productos seleccionados con 33% de descuento",
        },
        {
            id:2,
            img: "./imagenes/banner/banner4.jpg",
            tituloBanner: "Diciembre Promocional",
            descripcion: "Productos seleccionados con 33% de descuento",
        },
        {
            id:3,
            img: "./imagenes/banner/banner3.webp",
            tituloBanner: "Enero Promocional",
            descripcion: "Productos seleccionados con 33% de descuento",
        }
    ]

    let currentBannerIndex = 0;

    const showBanner = () => {
        const banner = banners[currentBannerIndex];
        seccionBanner.innerHTML =`
        <section class="banner" style="background-image: url(${banner.img});" id=${banner.id}>
            <div class="banner2">
            <h1 class="tituloBanner">${banner.tituloBanner}</h1>
            <h3 class="descripcion">${banner.descripcion}</h3>
            <button class="botonBanner">Ver Consolas</button>
            </div>
        </section>
        `;

        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    };

    showBanner();

    setInterval(showBanner, 3000);
    
};

slider();