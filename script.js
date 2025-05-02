	function set_language() {
	
	const  a = window.navigator.language;
	 if (a=='en'|| a=='EN'){
	 document.getElementById('tg').innerText="Telegram";
	 document.getElementById('git').innerText="GitHub";
	 document.getElementById('ya').innerText= "YaGames";
	 
	 document.getElementById('L').innerText="Kerimniy Links";
	 document.getElementById('c').innerText=" ©2025 Kerimniy                          EMail mutalupkerim@gmail.com";
	 }
	else{
	document.getElementById('tg').innerText="Телеграм";
	 document.getElementById('git').innerText="ГитХаб";
	 document.getElementById('ya').innerText="Яндекс игры";
	 
	 document.getElementById('L').innerText="Kerimniy Ссылки";
	 document.getElementById('c').innerText=" ©2025 Kerimniy                          Эл. почта mutalupkerim@gmail.com";
	
	}
   
}
  function updateButtonStyles() {
            
            const buttons = document.querySelectorAll('button');
			const f1 = document.querySelector('.f1');
			
			const h1 = document.querySelector('h1');
            const ico = document.querySelector('.icon');
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const minDimension = Math.min(screenWidth, screenHeight);

            
            const borderRadius = Math.max(10, minDimension * 0.035); 

            
            const buttonWidthPercent = screenWidth * 0.3; 
            const fontSize = Math.max(10, buttonWidthPercent * 0.1); 

            h1.style.fontSize = `${fontSize*0.95}px`;
			f1.style.fontSize = `${fontSize*0.3}px`;
            buttons.forEach(button => {
                button.style.borderRadius = `${borderRadius}px`;
                button.style.fontSize = `${fontSize}px`;
				button.style.borderWidth = `${fontSize/10}px`;
				if (screenWidth < screenHeight) {
                    button.style.width = `80%`;
                    button.style.height = `10%`;
					ico.style.width = '15%';
					h1.style.fontSize = `${fontSize*2}px`;
					f1.style.fontSize = `${fontSize*0.7}px`;
					
                } else {
					ico.style.width = '5.2%';
                    button.style.width = `30%`;
                    button.style.height = `12%`;
                }
				
            });
			
			
		
		
		
		
		
		}

        
        window.addEventListener('load', () => {
            updateButtonStyles();
        });

       
        window.addEventListener('resize', () => {
            updateButtonStyles();
        });