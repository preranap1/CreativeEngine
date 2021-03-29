var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1vspxIPd2EXzsihiIfj2MmNzNDC6c25FKuYjb7xfpZZc/edit?usp=sharing';
//https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE&output=html';

function init() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo,
                   simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)

function showInfo(data) {
  // data comes through as a simple array since simpleSheet is turned on

  //alert("Successfully processed " + data.length + " rows!")
  //document.getElementById("food").innerHTML = "<strong>Foods:</strong> " + [ data[0].Name, data[1].Name, data[2].Name ].join(", ");
  DFO_img1.src = data[0].image_url;
  DFO_img1_name.innerHTML = data[0].image;
  DFO_img1_text.innerHTML = "date: " + data[0].date + "</br> campaign: " + data[0].campaign_name;

  DFO_img2.src = data[1].image_url;
  DFO_img2_name.innerHTML = data[1].image;
  DFO_img2_text.innerHTML = "date: " + data[1].date + "</br> campaign: " + data[1].campaign_name;

  DFO_img3.src = data[2].image_url;
  DFO_img3_name.innerHTML = data[2].image;
  DFO_img3_text.innerHTML = "date: " + data[2].date + "</br> campaign: " + data[2].campaign_name;

  DFO_img4.src = data[3].image_url;
  DFO_img4_name.innerHTML = data[3].image;
  DFO_img4_text.innerHTML = "date: " + data[3].date + "</br> campaign: " + data[3].campaign_name;

  CMHC_img1.src = data[4].image_url;
  CMHC_img1_name.innerHTML = data[4].image;
  CMHC_img1_text.innerHTML = "date: " + data[4].date + "</br> campaign: " + data[4].campaign_name;

  CMHC_img2.src = data[5].image_url;
  CMHC_img2_name.innerHTML = data[5].image;
  CMHC_img2_text.innerHTML = "date: " + data[5].date + "</br> campaign: " + data[5].campaign_name;

  CMHC_img3.src = data[6].image_url;
  CMHC_img3_name.innerHTML = data[6].image;
  CMHC_img3_text.innerHTML = "date: " + data[6].date + "</br> campaign: " + data[6].campaign_name;

  CMHC_img4.src = data[7].image_url;
  CMHC_img4_name.innerHTML = data[7].image;
  CMHC_img4_text.innerHTML = "date: " + data[7].date + "</br> campaign: " + data[7].campaign_name;

  ECHEF_img1.src = data[8].image_url;
  ECHEF_img1_name.innerHTML = data[8].image;
  ECHEF_img1_text.innerHTML = "date: " + data[8].date + "</br> campaign: " + data[8].campaign_name;

  ECHEF_img2.src = data[9].image_url;
  ECHEF_img2_name.innerHTML = data[9].image;
  ECHEF_img2_text.innerHTML = "date: " + data[9].date + "</br> campaign: " + data[9].campaign_name;

  ECHEF_img3.src = data[10].image_url;
  ECHEF_img3_name.innerHTML = data[10].image;
  ECHEF_img3_text.innerHTML = "date: " + data[10].date + "</br> campaign: " + data[10].campaign_name;

  ECHEF_img4.src = data[11].image_url;
  ECHEF_img4_name.innerHTML = data[11].image;
  ECHEF_img4_text.innerHTML = "date: " + data[11].date + "</br> campaign: " + data[11].campaign_name;
}
    //body2.innerHTML = data.body2;
    //body3.innerHTML = data.body3;
    //body4.innerHTML = data.body4;

    //
    //DFO_img2_name.innerHTML = data[1].image;
    //body5.innerHTML = data.body5;
    //body6.innerHTML = data.body6;
    //body7.innerHTML = data.body7;
    //body8.innerHTML = data.body8;
    //body9.innerHTML = data.body9;
    //body10.innerHTML = data.body10;
    //body11.innerHTML = data.body11;
    //body12.innerHTML = data.body12;
    //body13.innerHTML = data.body13;
    //body14.innerHTML = data.body14;
    //body15.innerHTML = data.body15;
    //body16.innerHTML = data.body16;
    //body17.innerHTML = data.body17;
