
    function updateClock() {
      const now = new Date();
      const sec = now.getSeconds();
      const min = now.getMinutes();
      const hr = now.getHours();

      document.getElementById('second').style.transform = `rotate(${sec * 6}deg)`;
      document.getElementById('minute').style.transform = `rotate(${min * 6 + sec * 0.1}deg)`;
      document.getElementById('hour').style.transform = `rotate(${(hr % 12) * 30 + min * 0.5}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock();
