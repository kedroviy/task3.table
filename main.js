var jsan = [{
    "_id": "5afea64553cc33b6b254ebb5",
    "index": 1,
    "guid": "19f3c372-6351-4622-9ffe-cfeb7529d704",
    "isActive": false,
    "balance": "$1,491.82",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "blue",
    "name": "Bennett Fry",
    "gender": "male",
    "company": "DYNO",
    "email": "bennettfry@dyno.com",
    "phone": "+1 (874) 598-2214",
    "address": "Vetka, Fabrichnay, come on drink beer"
},
    {
        "_id": "5afea6459812c507b9c68606",
        "index": 0,
        "guid": "bf1f589c-1ea0-4211-8c5f-8ecff01266cd",
        "isActive": false,
        "balance": "$2,398.22",
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "eyeColor": "blue",
        "name": "Pittman Hendricks",
        "gender": "male",
        "company": "ENERSAVE",
        "email": "pittmanhendricks@enersave.com",
        "phone": "+1 (822) 597-3562",
        "address": "686 Brighton Avenue, Takilma, Arkansas, 8323"
    },
    {
        "_id": "5afea645e11a634e5f6c6767",
        "index": 3,
        "guid": "95d7e5df-9398-4098-96c4-c3b40b469c3d",
        "isActive": true,
        "balance": "$3,013.95",
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "eyeColor": "blue",
        "name": "Miranda David",
        "gender": "male",
        "company": "POOCHIES",
        "email": "mirandadavid@poochies.com",
        "phone": "+1 (896) 461-3051",
        "address": "468 Clinton Street, Bentonville, New Hampshire, 9125"
    },

    {
        "_id": "5afea64578945e38305ae249",
        "index": 4,
        "guid": "43450e72-ee74-4c08-95c9-023f7119426a",
        "isActive": true,
        "balance": "$3,971.78",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "eyeColor": "blue",
        "name": "Stacy Frank",
        "gender": "female",
        "company": "SPLINX",
        "email": "stacyfrank@splinx.com",
        "phone": "+1 (910) 542-2988",
        "address": "488 Emmons Avenue, Imperial, American Samoa, 1524"
    },
    {
        "_id": "5afea645fbfcc7026f1dadeb",
        "index": 5,
        "guid": "5e1bdb32-a8e8-474e-8bb0-1ba64b247ebe",
        "isActive": true,
        "balance": "$3,699.45",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "eyeColor": "green",
        "name": "Christi Zamora",
        "gender": "female",
        "company": "VELOS",
        "email": "christizamora@velos.com",
        "phone": "+1 (935) 486-2015",
        "address": "576 Hausman Street, Wattsville, Connecticut, 6328"
    }
    ]


var table = document.getElementById('table');
var thead = document.querySelector('#table thead');
var btn = document.createElement('button');
var tbody = document.querySelector('#table tbody');
var content = document.getElementById('content');



function srt(jsan) {
            tbody.innerHTML = ""
    var sortR = jsan.sort(function (a, b) {
        if (a.balance < b.balance) return 1
        if (a.balance > b.balance) return -1
        return 0
    });
    bodyCreator(sortR);

    console.log(tbody);
                console.log(jsan);

        }
        function headCreator() {
    var headRow = document.createElement('tr');
            Object.keys(jsan[0]).forEach(function (value) {

                headRow.innerHTML += '<th xmlns="http://www.w3.org/1999/html">' + value + '<button type="button" onclick="srt(jsan)" ' + ' "><img src="image/arrup.png"> </button>' + '</th>';

               
            });
            thead.appendChild(headRow)
        }
        headCreator();
    function bodyCreator(array) {

        array.forEach(function (value) {
            var row = document.createElement('tr');
            row.innerHTML += '<td>' + value._id + '</td>';
            row.innerHTML += '<td>' + value.index + '</td>';
            row.innerHTML += '<td>' + value.guid + '</td>';
            row.innerHTML += '<td>' + value.isActive + '</td>';
            row.innerHTML += '<td>' + value.balance + '</td>';
            row.innerHTML += '<td>' + value.picture + '</td>';
            row.innerHTML += '<td>' + value.age + '</td>';
            row.innerHTML += '<td>' + value.eyeColor + '</td>';
            row.innerHTML += '<td>' + value.name + '</td>';
            row.innerHTML += '<td>' + value.gender + '</td>';
            row.innerHTML += '<td>' + value.company + '</td>';
            row.innerHTML += '<td>' + value.email + '</td>';
            row.innerHTML += '<td>' + value.phone + '</td>';
            row.innerHTML += '<td>' + value.address + '</td>';
            tbody.appendChild(row);


        });
    }
    bodyCreator(jsan);