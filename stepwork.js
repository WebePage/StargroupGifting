function workaa()
{
    document.getElementById('next').classList.add('nextre')
    document.getElementById('test').classList.add('long')
    document.getElementById('test2').classList.add('long2')
    document.getElementById('two').classList.add('twodis')
    document.getElementById('lap').classList.add('lapdis')
    document.getElementById('typelap').classList.add('typelapdis')
    document.getElementById('opareting').classList.add('oparetingdis')
    document.getElementById('typeoparething').classList.add('typeoparethingdis')
    document.getElementById('saba').classList.add('sabadis')
    document.getElementById('li11').classList.add('li1')
    document.getElementById('li22').classList.add('li2')
    document.getElementById('kind').classList.add('kindful')
}

function scrool()
{
    document.getElementById('kind').classList.add('mostkind')
    document.getElementById('li22').classList.remove('li2')
}

function remo(num)
{
    document.getElementById('kind').classList.remove('mostkind')
    document.getElementById('li22').classList.add('li2')
    document.getElementById('typelap').value = num
}

function down()
{
    document.getElementById('System').classList.add('Systemful')
    document.getElementById('saba').classList.remove('sabadis')
    document.getElementById('te').classList.add('lo')
}

function re(bers)
{
    document.getElementById('typeoparething').value = bers
    document.getElementById('System').classList.remove('Systemful')
    document.getElementById('saba').classList.add('sabadis')
    document.getElementById('te').classList.remove('lo')
}