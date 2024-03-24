document.addEventListener('DOMContentLoaded', function() {
  const toggleModeButton = document.getElementById('toggle-mode');
  if (toggleModeButton) {
    toggleModeButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
    });
  }


  const searchInput = document.getElementById('search-bar');
  if (searchInput) {
    searchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        const searchText = searchInput.value;
        console.log('Searching for:', searchText);
      }
    });
  }
  const imageLinks = [
    { src: 'https://c1.neweggimages.com/ProductImageCompressAll300/83-151-310-V02.jpg?ex=2', url: 'https://www.newegg.com/msi-aegis-r-13nuc7-477us/p/N82E16883151310' },
    { src: 'https://c1.neweggimages.com/ProductImageCompressAll300/83-151-298-08.png', url: 'https://www.newegg.com/msi-aegis-r-13nud-462us/p/N82E16883151298' },
    { src: 'https://c1.neweggimages.com/ProductImageCompressAll300/83-151-312-25.jpg?ex=2', url: 'https://www.newegg.com/msi-codex-r-13nuc5-075us/p/N82E16883151327' },
    { src: 'https://c1.neweggimages.com/ProductImageCompressAll300/83-221-757-02.jpg?ex=2', url: 'https://www.newegg.com/asus-rog-strix-gaming-entertainment/p/N82E16883221757' },
    { src: 'https://c1.neweggimages.com/ProductImageCompressAll300/83-221-761-04.jpg?ex=2', url: 'https://www.newegg.com/asus-g22ch-ds564-rog/p/N82E16883221761' },
    { src: 'https://c1.neweggimages.com/ProductImageCompressAll300/83-221-767-03.jpg?ex=2', url: 'https://www.newegg.com/asus-g16ch-db788-rog-g16ch/p/N82E16883221767' },
    { src: 'https://c1.neweggimages.com/ProductImageCompressAll300/AC3JD23042416EVEJ23.jpg?ex=2', url: 'https://www.newegg.com/p/3D5-000F-01KA3' },
    { src: 'https://c1.neweggimages.com/ProductImageCompressAll300/V0F3D23011204VIIV19.jpg?ex=2', url: 'https://www.newegg.com/asus-rog-strix-g10dk/p/3D5-000F-02KS1' },
    { src: 'https://c1.neweggimages.com/ProductImageCompressAll300/A8X5S22070413YQCTD3.jpg?ex=2', url: 'https://www.newegg.com/p/3D5-000F-01X07' },
    { src: 'https://c1.neweggimages.com/ProductImageCompressAll300/AR9NS23100606RR370F.jpg?ex=2', url: 'https://www.newegg.com/p/3D5-0004-001Y9' }
  ];

  setRandomImages(imageLinks, 3);

  function setRandomImages(imageLinks, count) {
    var chosenImages = getRandomElements(imageLinks, count);

    for (var i = 0; i < chosenImages.length; i++) {
      var imgElement = document.getElementById('random-image-' + (i + 1));
      var linkElement = document.getElementById('random-link-' + (i + 1));
      if (imgElement && linkElement) {
        imgElement.src = chosenImages[i].src;
        linkElement.href = chosenImages[i].url;
      }
    }
  }

  function getRandomElements(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandomElements: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }



  const cpus = ['Intel Core i9-10900K',
    'Intel Core i7-10700K',
    'Intel Core i5-10600K',
    'Intel Core i9-11900K',
    'Intel Core i7-11700K',
    'Intel Core i5-11600K',
    'Intel Core i9-12900K',
    'Intel Core i7-12700K',
    'Intel Core i5-12600K',
    'AMD Ryzen 9 5950X',
    'AMD Ryzen 9 5900X',
    'AMD Ryzen 7 5800X',
    'AMD Ryzen 5 5600X',
    'AMD Ryzen 7 5700G',
    'AMD Ryzen 5 5600G'];
  const motherboards = ['ASUS ROG Maximus XII Hero',
    'ASUS TUF Gaming Z490-Plus',
    'ASUS ROG Strix Z490-E Gaming',
    'ASUS ROG Maximus XIII Hero',
    'ASUS TUF Gaming X570-Plus',
    'ASUS ROG Strix B550-E Gaming',
    'MSI MPG Z490 Gaming Carbon WiFi',
    'MSI MAG B550 Tomahawk',
    'MSI B450 Tomahawk MAX II',
    'MSI MPG Z590 Carbon EK X',
    'MSI MEG Z590 ACE',
    'MSI MAG X570 Tomahawk WiFi',
    'Gigabyte Z490 AORUS Master',
    'Gigabyte B550 AORUS Pro V2',
    'Gigabyte B450 AORUS PRO',
    'Gigabyte Z590 AORUS Master',
    'Gigabyte X570 AORUS Master',
    'Gigabyte B550 AORUS Elite AX V2'];
  const gpus = ['NVIDIA GeForce RTX 3090 Ti',
    'NVIDIA GeForce RTX 3080 Ti',
    'NVIDIA GeForce RTX 3080',
    'NVIDIA GeForce RTX 3070 Ti',
    'NVIDIA GeForce RTX 3070',
    'NVIDIA GeForce RTX 3060 Ti',
    'NVIDIA GeForce RTX 3060',
    'NVIDIA GeForce RTX 3050',
    'AMD Radeon RX 6900 XT',
    'AMD Radeon RX 6800 XT',
    'AMD Radeon RX 6800',
    'AMD Radeon RX 6700 XT',
    'AMD Radeon RX 6600 XT',
    'AMD Radeon RX 6600',
    'AMD Radeon RX 6500 XT'];
  const rams = [
    'Corsair Vengeance LPX 16GB DDR4 3200',
    'Corsair Dominator Platinum RGB 32GB DDR4 3200',
    'Corsair Vengeance RGB Pro 32GB DDR4 3600',
    'Corsair Vengeance LPX 8GB DDR4 2400',
    'Corsair Vengeance RGB PRO SL 16GB DDR4 3600',
    'G.Skill Trident Z RGB 16GB DDR4 3600',
    'G.Skill Ripjaws V 32GB DDR4 3200',
    'G.Skill Aegis 16GB DDR4 3000',
    'G.Skill Trident Z Neo 32GB DDR4 3600',
    'G.Skill Trident Z Royal 16GB DDR4 4000',
    'Kingston HyperX Predator 16GB DDR4 3200',
    'Kingston HyperX Fury 16GB DDR4 2666',
    'Kingston HyperX Fury RGB 32GB DDR4 3200',
    'Kingston HyperX Fury 8GB DDR4 3200',
    'Kingston FURY Beast 16GB DDR4 3600'
  ];
  const harddrives = [
    'Samsung 970 EVO Plus 1TB NVMe SSD',
    'Samsung 860 EVO 1TB SATA SSD',
    'Samsung 980 PRO 1TB NVMe SSD',
    'WD Blue 1TB SATA SSD',
    'WD Black SN750 1TB NVMe SSD',
    'Crucial MX500 1TB SATA SSD',
    'Crucial P1 1TB NVMe SSD',
    'Crucial P5 1TB NVMe SSD',
    'Seagate Barracuda Q5 1TB NVMe SSD',
    'Seagate FireCuda 520 1TB NVMe SSD',
    'Kingston A2000 1TB NVMe SSD',
    'Kingston KC2500 1TB NVMe SSD',
    'Kingston UV500 960GB SATA SSD',
    'Seagate Barracuda 1TB HDD',
    'Seagate FireCuda 1TB SSHD',
    'WD Blue 1TB HDD',
    'WD Black 1TB Performance HDD',
    'Toshiba P300 1TB HDD'
  ];
  const powersupplies = [
    'Corsair RMx Series RM750x', 'EVGA SuperNOVA 750 G5',
    'Seasonic FOCUS Plus 750 Gold', 'Cooler Master MWE Gold 750',
    'Thermaltake Toughpower Grand RGB 750W', 'NZXT C750',
    'ASUS ROG Strix 750W Gold', 'Be Quiet! Straight Power 11 750W',
    'Fractal Design Ion+ 760P', 'XPG Core Reactor 750W Gold'
  ];

  fillSelect(harddrives, document.getElementById('harddrive-select'));
  fillSelect(powersupplies, document.getElementById('powersupply-select'));
  fillSelect(cpus, document.getElementById('cpu-select'));
  fillSelect(motherboards, document.getElementById('motherboard-select'));
  fillSelect(gpus, document.getElementById('gpu-select'));
  fillSelect(rams, document.getElementById('ram-select'));

  const savedBuild = localStorage.getItem('pcBuild');
  if (savedBuild) {
    const components = JSON.parse(savedBuild);
    document.getElementById('cpu-select').value = components.cpu || '';
    document.getElementById('motherboard-select').value = components.motherboard || '';
    document.getElementById('gpu-select').value = components.gpu || '';
    document.getElementById('harddrive-select').value = components.harddrive || '';
    document.getElementById('powersupply-select').value = components.powersupply || '';
    document.getElementById('ram-select').value = components.ram || '';
  }

  const buildButton = document.getElementById('build-button');
  if (buildButton) {
    buildButton.addEventListener('click', function() {
      const selectedComponents = {
        cpu: document.getElementById('cpu-select').value,
        motherboard: document.getElementById('motherboard-select').value,
        gpu: document.getElementById('gpu-select').value,
        harddrive: document.getElementById('harddrive-select').value,
        powersupply: document.getElementById('powersupply-select').value,
        ram: document.getElementById('ram-select').value
      };

      if (checkCompatibility(selectedComponents.cpu, selectedComponents.motherboard)) {
        localStorage.setItem('pcBuild', JSON.stringify(selectedComponents));
        alert('Your selected components are compatible. PC build saved!');
      } else {
        alert('There is a compatibility issue with your selection, please check again.');
      }
    });
  }


  function checkCompatibility(cpu, motherboard) {
    if (cpu.includes('Intel') && motherboard.includes('Z590')) {
      return true;
    } else if (cpu.includes('AMD') && motherboard.includes('B550')) {
      return true;
    } else {
      return false;
    }
  }

  function fillSelect(optionsArray, selectElement) {
    optionsArray.forEach(function(option) {
      let newOption = document.createElement('option');
      newOption.value = option;
      newOption.textContent = option;
      selectElement.appendChild(newOption);
    });
  }


  function displayMessage(message, type) {
    var messageElement = document.getElementById('message');
    messageElement.innerText = message;
    messageElement.className = type;
  }

  var loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var username = document.getElementById('login-username').value;
      var password = document.getElementById('login-password').value;

      if (checkCredentials(username, password)) {
        sessionStorage.setItem('loggedInUser', username);
        displayMessage('Login successful!', 'success');
        window.location.href = 'index.html';
      } else {
        displayMessage('Incorrect username or password.', 'error');
      }
    });
  }

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      sessionStorage.removeItem('loggedInUser');
      localStorage.removeItem('pcBuild');
      displayMessage('You have been logged out.', 'success');
      window.location.reload();
    });
  }
  const resetButton = document.getElementById('reset-button');
  if (resetButton) {
    resetButton.addEventListener('click', function() {
      localStorage.removeItem('pcBuild');
      resetSelections();
      alert('PC build has been reset.');
    });
  }

  function resetSelections() {
    document.getElementById('cpu-select').selectedIndex = 0;
    document.getElementById('motherboard-select').selectedIndex = 0;
    document.getElementById('gpu-select').selectedIndex = 0;
    document.getElementById('harddrive-select').selectedIndex = 0;
    document.getElementById('powersupply-select').selectedIndex = 0;
    document.getElementById('ram-select').selectedIndex = 0;
  }
  function checkCredentials(username, password) {
    const storedData = localStorage.getItem(username);
    if (storedData) {
      const userData = JSON.parse(storedData);
      return userData.password === password;
    }
    return false;
  }

});
