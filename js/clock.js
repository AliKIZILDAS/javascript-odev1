let isim=prompt("Adınız nedir?")
document.getElementById('myName').innerHTML=isim

document.onload(Clock())
function Clock() {
    var time=new Date()
    document.getElementById('myClock').innerHTML=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()+" "+time.toLocaleString('tr-TR', {weekday: 'long'})
    setInterval('Clock()',1000)
}

