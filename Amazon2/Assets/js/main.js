    // $(document).ready(function(){
    //     console.log("load");
    //     $(".card").mouseover(()=>{
    //         console.log("run");
    //         $(this) 
    //     })
    // })
    $(document).ready(()=>{
        $(".next").on('click',next);
        $(".prev").on('click',prev);
        
    })
        var position =0;

        function next(){
            let val = -30;
            console.log(position)
            if(position > val){
                console.log(position);
                console.log("true");
                position-=5;
                $(this).siblings(".slider").css({
                    "transform":`translateX(${position}%)`,
                })
            }
        };
        function prev(){
            if(position < 0){
                console.log("true");
                position+=5;
                $(this).siblings(".slider").css({
                    "transform":`translateX(${position}%)`,
                })
            }
        };
