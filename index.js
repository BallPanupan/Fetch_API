fetch('https://app.dropoffer.com/v1/api/contacts/savedproperties/4483193000000435376')
  .then(function (response) {
    return response.json() // แปลงข้อมูลที่ได้เป็น json
  })
  .then(function (response) {
    console.log("status : ", response.status); // แสดงข้อมูล JSON จาก then ข้างบน
    console.log("ZIP : ", response.data['Zip']);
    console.log("Owner : ", response.data['Owner'].name);

    
    document.getElementById("status").innerHTML = response.status;
    document.getElementById("ZIP").innerHTML = response.data['Zip'];
    document.getElementById("Owner").innerHTML = response.data['Owner'].name;
  })


