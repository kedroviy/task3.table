var bennett = [
    {_id: "5afea64553cc33b6b254ebb5",
    index: 1,
    guid: "19f3c372-6351-4622-9ffe-cfeb7529d704",
    isActive: false,
    balance: "$1,491.82",
    picture: "http://placehold.it/32x32",
    age: 40,
    eyeColor: "blue",
    name: "Bennett Fry",
    gender: "male",
    company: "DYNO",
    email: "bennettfry@dyno.com",
    phone: "+1 (874) 598-2214",
    address: "Vetka, Fabrichnay, come on drink beer",},
    {
    _id: "5afea6459812c507b9c68606",
    index: 0,
    guid: "bf1f589c-1ea0-4211-8c5f-8ecff01266cd",
    isActive: false,
    balance: "$2,398.22",
    picture: "http://placehold.it/32x32",
    age: 20,
    eyeColor: "blue",
    name: "Pittman Hendricks",
    gender: "male",
    company: "ENERSAVE",
    email: "pittmanhendricks@enersave.com",
    phone: "+1 (822) 597-3562",
    address: "686 Brighton Avenue, Takilma, Arkansas, 8323",}]

var tb = document.getElementById('table');
var th = document.createElement('tr');
bennett.forEach(function (value) {
    var obj = Object.keys(value);
    th.innerHTML += '<th>' + obj[0] + '</th>';
    th.innerHTML += '<th>' + obj[1] + '</th>';
    th.innerHTML += '<th>' + obj[2] + '</th>';
    th.innerHTML += '<th>' + obj[3] + '</th>';
    th.innerHTML += '<th>' + obj[4] + '</th>';
    th.innerHTML += '<th>' + obj[5] + '</th>';
    th.innerHTML += '<th>' + obj[6] + '</th>';
    th.innerHTML += '<th>' + obj[7] + '</th>';
    th.innerHTML += '<th>' + obj[8] + '</th>';
    th.innerHTML += '<th>' + obj[9] + '</th>';
    th.innerHTML += '<th>' + obj[10] + '</th>';
    th.innerHTML += '<th>' + obj[11] + '</th>';
    th.innerHTML += '<th>' + obj[12] + '</th>';
    // th.innerHTML += '<th>' + obj[13] + '</th>';
        tb.appendChild(th);
    console.log(Object.keys(value));
})

    
    bennett.forEach(function (value) {
        var row = document.createElement('tr');
            row.innerHTML += '<td>' + value._id + '</td>'
            row.innerHTML += '<td>' + value.index + '</td>'
            row.innerHTML += '<td>' + value.guid + '</td>'
            row.innerHTML += '<td>' + value.isActive + '</td>'
            row.innerHTML += '<td>' + value.balance + '</td>'
            row.innerHTML += '<td>' + value.picture + '</td>'
            row.innerHTML += '<td>' + value.name + '</td>'
            row.innerHTML += '<td>' + value.gender + '</td>'
            row.innerHTML += '<td>' + value.company + '</td>'
            row.innerHTML += '<td>' + value.email + '</td>'
            row.innerHTML += '<td>' + value.phone + '</td>'
            row.innerHTML += '<td>' + value.address + '</td>'

        tb.appendChild(row);


    })




console.log(tb)
console.log(bennett)



   //
   //  document.createElement(table.address);




