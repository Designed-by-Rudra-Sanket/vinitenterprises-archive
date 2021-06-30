function timer(){
    let i= 0;

    setInterval(function(){
        if (i==5000000)clearInterval(this);
        else document.getElementById('oxy').innerText= 'You are floating around space for ' + (i++)+ ' seconds'}, 1000);
       

}
