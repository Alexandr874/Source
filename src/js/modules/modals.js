const modals = (state) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');

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
                         

                    });
              });

              function openModal() {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
              }

             function closeModal() {
              modal.style.display = 'none';
              document.body.style.overflow = '';
             }

              close.addEventListener('click', () => {
                windows.forEach(item => {
                    item.style.display = 'none';
                  });

                modal.style.display = 'none';
                document.body.style.overflow = '';
              });

              modal.addEventListener('click', (e) => {
                if(e.target === modal && closeClickOverlay) {
                    windows.forEach(item => {
                        item.style.display = 'none';
                      });

                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }
              });

              

    }

    function showModalBiTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display ='block';
            document.body.style.overflow = 'hidden';
        }, time);
           

    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    showModalBiTime('.popup', 60000);
    

};
export default modals;