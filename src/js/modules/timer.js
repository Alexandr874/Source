const timer = (id, deadline) => {

    const getTimeRemaining  = (endtaim) => {
        const t = Date.parse(endtaim) - Date.parse(new Date()),
              days = Math.floor((t / (1000 * 60 * 60 * 24))),
              hours = Math.floor((t / (1000 * 60 * 60))  % 24),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

              return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
              };

    };

   function timZero(num) {
        if (num < 10) {
            return '0${num}';
        } else {
            return num;
        }
    }

    const setClock = (selector, endtaim) => {
        const timer = document.querySelector(selector),
             days = timer.querySelector('#days'),
             hours = timer.querySelector('#hours'),
             minutes = timer.querySelector('#minutes'),
             seconds = timer.querySelector('#seconds'),
              taimInterval = setInterval(updateClock, 1000);

              updateClock(); 

             function updateClock() {
                const t = getTimeRemaining(endtaim);

                days.textContent = timZero(t.days);
                hours.textContent = timZero(t.hours);
                minutes.textContent = timZero(t.minutes);
                seconds.textContent = timZero(t.seconds);

                if (t.total <= 0) {
                    days.textContent = "00";
                    hours.textContent = "00";
                    minutes.textContent = "00";
                    seconds.textContent = "00";

                    clearInterval(taimInterval);
                }
             }
    };

    setClock(id, deadline);

};
export default timer;