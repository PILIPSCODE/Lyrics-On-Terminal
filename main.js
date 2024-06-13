

const lyricsAndDelay = [
    {lirics:"", delay:2000, duration:10},
    {lirics:"---music Sunset DiTanah Anarki---", delay:0, duration:10},
    {lirics:"Ku basuh luka ", delay:1500, duration:80},
    {lirics:"Dengan air mata", delay:3000, duration:180},
    {lirics:"Oh hatimu beku", delay:2000, duration:170},
    {lirics:"Serta jiwamu yang lelah", delay:0, duration:120},
    {lirics:"--------", delay:2800, duration:0},
    {lirics:"Tak henti lawan dunia", delay:2200, duration:110},
    {lirics:"Dengan mimpi besar", delay:200, duration:110},
    {lirics:"Untuk Cinta", delay:0, duration:320},
    {lirics:"--------", delay:700, duration:0},
    {lirics:"Dan jalanmu tuk pulang", delay:2200, duration:90},
    {lirics:"Di ujung waktu kan ada ", delay:1000, duration:100},
    {lirics:"Cahaya ", delay:2200, duration:120},
    {lirics:"--------", delay:2000, duration:0},
    {lirics:"Itulah aku", delay:1000, duration:200},
    {lirics:"Raihlah mimpimu", delay:2200, duration:120},
    {lirics:"--Music--", delay:2100, duration:0},
    {lirics:"Andai ku malaikat ku potong sayapku", delay:100, duration:120},
    {lirics:"Dan rasakan perih di dunia bersamamu", delay:1000, duration:120},
    {lirics:"Perang kan berakhir, cinta akan abadi", delay:300, duration:140},
    {lirics:"Di tanah anarki romansa terjadi", delay:200, duration:130},
    {lirics:"DOnt Forget To LIKE<COMMENT<FOLLOW<SHARE", delay:2200, duration:130},
    ]
    
    
     
    function lyrics() {
        let Duration = 0; 
        for (let i = 0; i < lyricsAndDelay.length; i++) {
            let lyricsDuration = 0; 
            const words = lyricsAndDelay[i].lirics.split("");
            words.forEach((char, index) => {
                setTimeout(() => {
                    process.stdout.write(char);
                    if (index === words.length - 1) { 
                        console.log(); 
                    }
                }, Duration + lyricsDuration);
                lyricsDuration += lyricsAndDelay[i].duration; 
             
            });
            Duration += lyricsAndDelay[i].delay +
            lyricsDuration; 
        }
    }
    
    lyrics();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    