const os = require('os');

setInterval(()=>{
    const {arch, platform, totalmem, freemem, uptime} = os;
    const tRam = totalmem()/1024/1024;
    const fRam = freemem()/1024/1024;
    const Uptime = (uptime()/60)/60
    const usage = (tRam-fRam)/tRam*100;

    const stats = {
        Os: platform(),
        Arch: arch(),
        TotalRAM: parseInt(tRam) + " MB",
        FreeRam: parseInt(fRam) + " MB",
        Usage: usage.toFixed(3) + " %",
        UptimeOs: parseFloat(Uptime).toFixed(2) + " HR",      
        
    }; 
    console.clear();
    console.table(stats);
    exports.stats = stats;
},1000)


