const tabs = (headerSelector, tabSelector, contentSelector, activClass, display = 'block') => {

  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

        function hiddenTabsContent() {
            content.forEach(item => {
                item.style.display = 'none';
            });

            tab.forEach(item => {
                item.classList.remove(activClass);
            });
        }
        hiddenTabsContent();

        function showTabsContent(i = 0) {
            content[i].style.display = display;
            tab[i].classList.add(activClass);

        }
        showTabsContent();

        header.addEventListener('click', (e) => {
            const target = e.target;
            if (target && 
                (target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
                    tab.forEach((item, i) => {
                        if (target === item || target.parentNode === item) {
                            hiddenTabsContent();
                            showTabsContent(i);
                        }

                    });
                }

        });

};
export default tabs;