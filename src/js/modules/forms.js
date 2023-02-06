const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');

          phoneInputs.forEach(item => {
                item.addEventListener('input', () => {
                        item.value = item.value.replace(/\D/, "");
                });
          });

          

          const messange = {
            loading: 'Загрузка',
            success: 'Спасибо! Мы с вами свяжемся',
            failure: 'Что то пошло не так'
          };

          const postData = async (url, data) => {
            document.querySelector('.status').textContent = messange.loading;
                const res = await fetch(url, {
                    method: 'POST',
                    body: data
                });
                return await res.text();
          };

          const clearInputs = () => {
                inputs.forEach(item => item.value = '');
          };


          form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessange = document.createElement('div');
                statusMessange.classList.add('status');
                item.appendChild(statusMessange);

              const formData = new FormData(item);

                postData('assets/server.php', formData)
                    .then(res => {
                        console.log(res);
                        statusMessange.textContent = messange.success;
                    })
                    .catch(() => {
                        statusMessange.textContent = messange.failure;
                    })
                    .finally(() => {
                        clearInputs();
                        setTimeout(() => {
                            statusMessange.remove();
                        }, 3000);
                    });





            });
          });

};
export default forms;