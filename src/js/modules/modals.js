const modals = (state) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

              trigger.forEach(item => {
                    item.addEventListener('click', (e) => {
                        if (e.target) {
                            e.preventDefault();
                        }

                        
                        // валидация формы
                        if (e.target.classList.contains('popup_calc_button')) {  
                           if (!state.form && !state.width && !state.height) {
                              document.querySelector('.popup_calc_button').setAttribute('disabled', true);
                              document.querySelector('.popup_calc_button').removeAttribute('disabled');
                              return;
                            }                           

                        } 
                        // валидация формы второго окна 
                         if (e.target.classList.contains('popup_calc_profile_button')) {  
                          if (!state.type || !state.profile) {
                             document.querySelector('.popup_calc_profile_button').setAttribute('disabled', true);
                             document.querySelector('.popup_calc_profile_button').removeAttribute('disabled');
                             return;
                           }                           

                       }  
                          
                        

                        windows.forEach(item => {
                            item.style.display = 'none';
                          });
                          
                        modal.style.display = 'block';
                        document.body.style.overflow = 'hidden';
                        document.body.style.marginRight = `${scroll}px`;
                         

                    });
              });

              

              close.addEventListener('click', () => {
                windows.forEach(item => {
                    item.style.display = 'none';
                  });

                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
              });

              modal.addEventListener('click', (e) => {
                if(e.target === modal && closeClickOverlay) {
                    windows.forEach(item => {
                        item.style.display = 'none';
                      });

                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`;
                }
              });

              

    }
    // таймер которой отвечает за появления всплывающекго модального окна
    function showModalByTime(selector, time) { 
      setTimeout(function() {
          document.querySelectorAll(selector)[1].style.display = 'block';
          document.body.style.overflow = "hidden";
      }, time);
  }

  // функция которая отвечает за вычисление размера прокрутки
  function calcScroll() {  
      let div = document.createElement('div');

      div.style.width = '50px';
      div.style.height = '50px';
      div.style.overflowY = 'scroll';  // скрывает скролл
      div.style.visibility = 'hidden'; // скрывает элемент

      document.body.appendChild(div);

      // вычисляем размер прокрутки
      // от полной ширины, вычитаем (div.clientWidth)- сюда включаются педенги и самый главный контент(и сюда, 
      // не включается прокрутка), и получаем саму прокрутку 
      let scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();

      return scrollWidth;
  }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    showModalByTime('.popup', 60000);
    

};
export default modals;