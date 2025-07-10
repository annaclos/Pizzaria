        const statusBox = document.getElementById("statusBox");
        const now = new Date();
        const openHour = 18;
        const closeHour = 23;
        const minOrder = 20.00;

        if (now.getHours() >= openHour && now.getHours() < closeHour) {
            //statusBox.textContent = `Aberto! Pedido mínimo R$ ${minOrder.toFixed(2)}`;
            statusBox.textContent = `Aberto`;
            statusBox.classList.remove('status-closed');
            statusBox.classList.add('status-open');
        } else {
            statusBox.textContent = "Fechado";
            statusBox.classList.remove('status-open');
            statusBox.classList.add('status-closed');
        }
        const promoData = {
            m: {
                title: "Promoção Pizza M",
                promoText: `<strong>Promo 1</strong><p>Duas pizzas de <strong>6</strong> pedaços por apenas <strong>R$ 68,90</strong>!</p>
                    <em>Válido para pizzas: <ul>
                        <li>Frango</li>
                        <li>Bacon</li>
                        <li>Muçarela</li>
                        <li>Presunto e muçarela</li>
                        <li>Milho</li>
                        <li>Calabresa</li>
                        </ul>
                        <p>Permitido a escolha meio a meio, entre esses sabores.</p>`
            },
            g: {
                title: "Promoção Pizza G",
                promoText: `<strong>Promo 2</strong><p>Duas pizzas de <strong>8</strong> pedaços por apenas <strong>R$ 87,90</strong>!</p>
                    <em>Válido para pizzas: <ul>
                        <li>Frango</li>
                        <li>Bacon</li>
                        <li>Muçarela</li>
                        <li>Presunto e muçarela</li>
                        <li>Milho</li>
                        <li>Calabresa</li>
                        </ul>
                        <p>Permitido a escolha meio a meio, entre esses sabores.</p>`
            }
        };

        const modal = document.getElementById("promoModal");
        const modalTitle = document.getElementById("modalTitle");
        const modalDescription = document.getElementById("modalDescription");
        const closeModalBtn = document.getElementById("closeModal");

        document.querySelectorAll('.promo-circle').forEach(circle => {
            circle.addEventListener('click', () => {
                const promoKey = circle.getAttribute('data-promo');
                if (promoData[promoKey]) {
                    modalTitle.textContent = promoData[promoKey].title;
                    modalDescription.innerHTML = promoData[promoKey].description || promoData[promoKey].promoText || "";
                    modal.style.display = "block";
                }
            });
        });


        closeModalBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        let currentIndex = 0;
        const track = document.querySelector('.carousel-track');
        const items = Array.from(document.querySelectorAll('.carousel-item'));
        const visibleItems = 3;
        const totalItems = items.length;


        for (let i = 0; i < visibleItems; i++) {
            const clone = items[i].cloneNode(true);
            track.appendChild(clone);
        }

        const allItems = Array.from(document.querySelectorAll('.carousel-item'));
        const totalWithClones = allItems.length;

        let isMoving = false;

        function moveCarousel(direction) {
            if (isMoving) return;
            isMoving = true;

            currentIndex += direction;

            const itemStyle = getComputedStyle(allItems[0]);
            const itemMargin = parseFloat(itemStyle.marginLeft) + parseFloat(itemStyle.marginRight);
            const itemWidth = allItems[0].offsetWidth + itemMargin;

            if (direction === 1) {

                const offset = itemWidth * currentIndex;
                track.style.transition = 'transform 0.7s ease';
                track.style.transform = `translateX(-${offset}px)`;

                if (currentIndex === totalItems) {
                    track.addEventListener('transitionend', () => {
                        resetCarouselFront();
                    }, { once: true });
                } else {
                    track.addEventListener('transitionend', () => {
                        isMoving = false;
                    }, { once: true });
                }
            } else if (direction === -1) {

                if (currentIndex < 0) {

                    track.style.transition = 'none';
                    const cloneIndex = totalItems;
                    const cloneOffset = itemWidth * cloneIndex;
                    track.style.transform = `translateX(-${cloneOffset}px)`;

                    track.offsetHeight;


                    currentIndex = totalItems - 1;


                    requestAnimationFrame(() => {
                        track.style.transition = 'transform 0.7s ease';
                        const offset = itemWidth * currentIndex;
                        track.style.transform = `translateX(-${offset}px)`;

                        track.addEventListener('transitionend', () => {
                            isMoving = false;
                        }, { once: true });
                    });
                } else {
                    const offset = itemWidth * currentIndex;

                    track.style.transition = 'transform 0.7s ease';
                    track.style.transform = `translateX(-${offset}px)`;

                    track.addEventListener('transitionend', () => {
                        isMoving = false;
                    }, { once: true });
                }
            }
        }

        function resetCarouselFront() {
            track.style.transition = 'none';
            track.style.transform = 'translateX(0)';
            currentIndex = 0;
            track.offsetHeight;

            requestAnimationFrame(() => {
                track.style.transition = 'transform 0.7s ease';
                isMoving = false;
            });
        }

        function abrirModal(id) {
            document.getElementById(id).style.display = 'block';
        }

        function fecharModal(id) {
            document.getElementById(id).style.display = 'none';
        }
        window.onclick = function (event) {
            const modais = document.querySelectorAll('.modalLt');
            modais.forEach(modal => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        }
