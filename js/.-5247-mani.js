document.addEventListener('DOMContentLoaded', () => {
    let authController = new ScrollMagic.Controller();


    let authTimeline = new TimelineMax();
    authTimeline
        .to('.img_01', 3, {
            opacity : 0
        })
        .from('.img_02', 3, {
            opacity : 0,    
           
        },"-=3")
        .from('.img_03', 3, {
            opacity : 0
            
        })
  

        
   



    let authScene = new ScrollMagic.Scene({
        triggerElement: '.mobileContainer',
        duration: '100%',
        triggerHook: 0,
        offset: '0',
        ease:Power1.easeInOut
    })
        .setTween(authTimeline)
        .setPin('.mobileContainer')
        .addTo(authController);


      



    let signTimeline = new TimelineMax();
    signTimeline
        .to('.sign_01', 3, {
            opacity: 0
        })
        .from('.sign_02', 3, {
            opacity: 0
        }, '-=3')
        .from('.sign_03', 3, {
            opacity: 0
        })



    let signScene = new ScrollMagic.Scene({
        triggerElement: '.mobileContainer2',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
        .setTween(signTimeline)
        .setPin('.mobileContainer2')
        .addTo(authController);




        //laptop






        
    // let lapTimeline = new TimelineMax();
    // lapTimeline
    //     .to('.lap_01', 1, {
    //         x:-300
    //     })
    //     .from('.lap_02', 0, {
    //         x:500,
    //         // opacity: 0

    //     }, )
    //     .from('.lap_03', 3, {
    //         x:500,

    //     })



    // let lapScene = new ScrollMagic.Scene({
    //     triggerElement: '.laptop-main',
    //     duration: '100%',
    //     triggerHook: 0,
    //     offset: '0'
    // })
    //     .setTween(lapTimeline)
    //     .setPin('.laptop-main')
    //     .addTo(authController);



    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#project",
        duration: '100%',
        triggerHook: 0.8,
        offset: '0'

    })


    scene.setClassToggle("#project", "fade-in")
        // .setPin(".mobile") 
        .addTo(controller)

})


