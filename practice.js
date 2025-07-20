
function changeText(){
    const aboutMeText=['Tech Enthusiast', 'Data Scientist','Full Stack Developer','Software Engineer']
    const typingSpeed=100;
    const eraseSpeed=50;
    const pauseTime=1500;
    const aboutMe=document.querySelector('.about-me');
    
    let textIndex=0;
    let charIndex=0;
    let isDeleting=false;

    function type(){
        const currentText=aboutMeText[textIndex];
        // typing

        if(!isDeleting && charIndex < currentText.length){
            aboutMe.textContent+=currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        }

        //  Erasing
        else if(isDeleting && charIndex>0){
            aboutMe.textContent=currentText.substring(0,charIndex-1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        }

        // switching the deleting or typing process
        else{
            isDeleting=!isDeleting;
            if(!isDeleting){
                textIndex=(textIndex+1)%aboutMeText.length;
            }
            setTimeout(type, pauseTime);
        }
    }
   type();
}
document.addEventListener('DOMContentLoaded',function(){
    const observer= new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const progressBar=entry.target.querySelector('.progress-bar');
                const progress=progressBar.dataset.progress;
    
                progressBar.getElementsByClassName.setProperty('--progress','${progress}%');   //set custom property for progress
                progressBar.classList.add('animated');                            //add a class to trigger animation
                observer.unobserve(entry.target);                      //stop observing once animation is triggered
            }
        });
    });                                                           
    
    const programmingLanguages=document.querySelectorAll('#programming-language .skill');
    programmingLanguages.forEach(skill=>{
        observer.observe(skill);
    })
    
    });

changeText();

// javascript code dark mode
document.addEventListener('DOMContentLoaded',function(){
    const darkModeToggle=document.getElementById('dark-mode-toggle');
    const body=document.body;

    darkModeToggle.addEventListener('click',()=>{
        body.classList.toggle('dark-mode')
        const currentMode=body.classList.contains('dark-mode')?'Dark':'Light';
        darkModeToggle.querySelector('i').classList.toggle("fa-solid fa-sun");
        darkModeToggle.querySelector('i').classList.toggle("fa-solid fa-moon");
        darkModeToggle.querySelector('i').classList.toggle('light-mode');
    });
});

// // animated programming language
// document.addEventListener('DOMContentLoaded',function(){
// const observer= new IntersectionObserver(entries=>{
//     entries.forEach(entry=>{
//         if(entry.isIntersecting){
//             const progressBar=entry.target.querySelector('.progress-bar');
//             const progress=progressBar.dataset.progress;

//             progressBar.getElementsByClassName.setProperty('--progress','${progress}%');   //set custom property for progress
//             progressBar.classList.add('animated');                            //add a class to trigger animation
//             observer.unobserve(entry.target);                      //stop observing once animation is triggered
//         }
//     });
// });                                                           

// const programmingLanguages=document.querySelectorAll('#programming-language .skill');
// programmingLanguages.forEach(skill=>{
//     observer.observe(skill);
// })

// });