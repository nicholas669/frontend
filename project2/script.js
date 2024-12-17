function collect() {
  
    let name = document.getElementById('name').value;
    let city = document.getElementById('city').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let referral = document.getElementById('referral').value;


    let info = document.getElementById('info');
    let details = document.getElementById('details');

    info.innerHTML = "User Information Summary";
    details.innerHTML = `
        <b>Name:</b> ${name}<br>
        <b>City:</b> ${city}<br>
        <b>Phone number:</b> ${phone}<br>
        <b>Email:</b> ${email}<br>
        <b>Referral Code:</b> ${referral}<br>
    `;
}
function popup(){
    let info = document.getElementById('info');
    let details = document.getElementById('details');
    let fal = document.getElementById('false');
    let name;
    let city;
    let email;
    let ref;
    let one = prompt("Enter your name: ");
    if (one != null && one != ''){
        name = one;
        let two = prompt("Enter your city: ");
        
        if (two != null && two != ''){
            city = two;
            let three = prompt("Enter your phone number: ");
            let phone;
            if (three != null && three != ''){
                phone = three;
                let four = prompt("Enter your email: ");
                
                if (four != null && four != ''){
                    email = four;
                    let five = prompt("Enter your referral code: ");
                    
                    if (five != null && five != ''){
                        ref =five;
                        info.innerHTML = "User Information Summary";
                        details.innerHTML = `
                            <b>Name:</b> ${name}<br>
                            <b>City:</b> ${city}<br>
                            <b>Phone number:</b> ${phone}<br>
                            <b>Email:</b> ${email}<br>
                            <b>Referral Code:</b> ${ref}<br>
                        `;
                    }
                    else{
                        alert("It is empty");
                    }
                }
                else{
                    alert("It is empty");
                }
            }
            else{
                alert("It is empty");
            }
        }
        else{
            alert("It is empty");
        }
    }
    else{
        alert("It is empty");
    }
    
    
};

function darkmode(){
    let body = document.querySelector('.snw');
    body.src = '';
    body.style.width = '0px';
    body.style.height = '0px';
    let bg = document.getElementById('body');
    bg.style.backgroundColor = 'black';

  
    let links = document.querySelectorAll('.a');
    links.forEach(link => {
        link.style.color = 'white';
    });

   
    let navbar = document.getElementById('nav');
    navbar.style.backgroundColor = 'black';
}

function lightmode(){
    let body = document.querySelector('.snw');
    body.src = '';
    body.style.width = '0px';
    body.style.height = '0px';
    let bg = document.getElementById('body');
    bg.style.backgroundColor = 'white';

  
    let links = document.querySelectorAll('.a');
    links.forEach(link => {
        link.style.color = 'black';
    });

   
    let navbar = document.getElementById('nav');
    navbar.style.backgroundColor = 'white';
}

function snow(){
    let body = document.querySelector('.snw');
    body.src = 'snow2.gif';
    body.style.width = '100%';
    body.style.height = '100%';

    let bg = document.getElementById('body');
    bg.style.backgroundColor = 'white';
    

    let links = document.querySelectorAll('.a');
    links.forEach(link => {
        link.style.color = 'black';
    });

    let navbar = document.getElementById('nav');
    navbar.style.backgroundColor = 'white';
    
}

// Christmas Theme + (.gif, posisinya didepan)
function move(){
    gsap.fromTo(".navbar", 
        {
          opacity: 0.2,
          y: '-100%'
        },
        {
          y: '0%',
          duration: 2, 
          opacity: 1, 
          ease: "power1.inOut"
        }
      );
      gsap.fromTo(".gambar", 
        {
        //   opacity: 0.2,
          x: '-100%'
        },
        {
          x: '0%',
          duration: 2, 
        //   opacity: 1, 
          ease: "power1.inOut"
        }
      );
      gsap.fromTo(".one", 
        {
        //   opacity: 0.2,
          x: '-100%'
        },
        {
          x: '0%',
          duration: 2, 
        //   opacity: 1, 
          ease: "power1.inOut"
        }
      );

}