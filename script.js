var valid;
var valCount = 0;
// use for new email id
var mailCount = 1;
var phoneCount = 1;
// document ready method
$(function () {
  // call showdata function for display data after load page
  showdata();

  // All validation check when click on saveData function
  $("#submit").on({
    click: function () {
      valCount = 0;
      fnameVal();
      lnameVal();
      emailVal();
      phoneVal();
      streetAddrVal();
      streetAddr2Val();
      cityVal();
      stateVal();
      pinVal();
      countryVal();
      shippingAddrVal();
      giftVal();
      instructionVal();
      paymentVal();
      if (valCount > 0) {
        return saveData(false);
      } else return saveData(true);
    },
  });

  // first name
  $("#fname").on({
    click: function () {
      fnameVal();
    },
    keyup: function () {
      fnameVal();
    },
  });

  // last name
  $("#lname").on({
    click: function () {
      lnameVal();
    },
    keyup: function () {
      lnameVal();
    },
  });

  //  email direct validation call
  $(".email").on({
    keyup: function () {
      emailVal();
    },
    focus: function () {
      emailVal();
    },
  });

  // email add button
  $(".addEmail").on({
    click: function () {
      addEmail();
    },
  });

  //  phone direct validation call
  $("#phone0").on({
    keyup: function () {
      phoneVal();
    },
    focus: function () {
      phoneVal();
    },
  });

  // Phone add button
  $(".addPhone").on({
    click: function () {
      addPhone();
    },
  });

  //   address direct validation call
  $("#streetAddr").on({
    keyup: function () {
      streetAddrVal();
    },
    focus: function () {
      streetAddrVal();
    },
  });

  //   address line2 direct validation call
  $("#streetAddr2").on({
    keyup: function () {
      streetAddr2Val();
    },
    focus: function () {
      streetAddr2Val();
    },
  });

  //   city validation call
  $("#city").on({
    keyup: function () {
      cityVal();
    },
    focus: function () {
      cityVal();
    },
  });

  //   state validation call
  $("#state").on({
    keyup: function () {
      stateVal();
    },
    focus: function () {
      stateVal();
    },
  });

  // pin validation call
  $("#pin").on({
    keyup: function () {
      pinVal();
    },
    click: function () {
      pinVal();
    },
  });

  //   country validation call
  $("#country").on({
    keyup: function () {
      countryVal();
    },
    focus: function () {
      countryVal();
    },
    change: function () {
      countryVal();
    },
  });

  // shipping Address validation call
  $(".shippingAddr").on({
    click: function () {
      shippingAddrVal();
    },
  });

  // gift validation call
  $(".gift").on({
    click: function () {
      giftVal();
    },
  });

  // payment validation call
  $(".payment").on({
    click: function () {
      paymentVal();
    },
  });

  //   instruction validation call
  $("#instruction").on({
    keyup: function () {
      instructionVal();
    },
    focus: function () {
      instructionVal();
    },
  });

  //   product direct validation call
  $(".product").on({
    click: function () {
      productVal();
      item();
      item2();
      item3();
      productSelect();
    },
    change: function () {
      productVal();
      item();
      item2();
      item3();
      productSelect();
    },
  });

  // total quantity of product1
  $("#quantity").on({
    change: function () {
      item();
      productSelect();
    },
  });

  // total quantity of product2
  $("#quantity2").on({
    change: function () {
      item2();
      productSelect();
    },
  });

  // total quantity of product3
  $("#quantity3").on({
    change: function () {
      item3();
      productSelect();
    },
  });

  // clear fields for new record
  $("#addItem").on({
    click: function () {
      resetData();
      $("form").trigger("reset");
      location.reload();
    },
  });
});

// first name func
function fnameVal() {
  if (!$("#fname").val().trim()) {
    $("#fnameErr")
      .text("*Please don't keep blank field*")
      .css("color", "orangered");
    $("#fname").css("border", "1px solid orangered");
    valCount++;
  } else if (!/^[A-z]{2,20}[^0-9]/.test($("#fname").val())) {
    $("#fnameErr")
      .text("*Please enter only letters field*")
      .css("color", "orangered");
    $("#fname").css("border", "1px solid orangered");
    valCount++;
  } else {
    $("#fnameErr").text("").css("color", "");
    $("#fname").css("border", "1px solid grey");
    valCount;
  }
}

// last name func
function lnameVal() {
  if (!$("#lname").val().trim()) {
    $("#lnameErr")
      .text("*Please don't keep blank field*")
      .css("color", "orangered");
    $("#lname").css("border", "1px solid orangered");
    valCount++;
  } else if (!/^[A-z]{2,20}[^0-9]/.test($("#lname").val())) {
    $("#lnameErr")
      .text("*Please enter only letters field*")
      .css("color", "orangered");
    $("#lname").css("border", "1px solid orangered");
    valCount++;
  } else {
    $("#lnameErr").text("").css("color", "");
    $("#lname").css("border", "1px solid grey");
    valCount;
  }
}

// email validation
function emailVal() {
  let emailReg = /^[\w_]+@([A-z]{1}[\w-]+\.)[\w-]{2,3}$/;
  for (let i of $(".email")) {
    if (!i.value) {
      $(`#emailErr0`)
        .text("*Please don't submit blank field*")
        .css("color", "orangered");
      $(i).css("border", "1px solid red");
      valCount++;
      valid = false;
    } else if (!emailReg.test(i.value)) {
      $(`#emailErr0`)
        .text("*Please enter vaild email address*")
        .css("color", "orangered");
      $(i).css("border", "1px solid red");
      valCount++;
      valid = false;
    } else {
      $(`#emailErr0`).text("").css("color", "");
      $(i).css("border", "1px solid grey");
      valCount;
      valid = true;
    }
  }
  return valid;
}

// delete email field
function removeEmail(i) {
  $(".group").click(function (e) {
    $(this).remove();
    return;
  });
}

// update data
function update(fdata) {
  resetData();
  let arr1 = [];
  if (localStorage.getItem("fdata") != null) {
    arr1 = JSON.parse(localStorage.getItem("fdata"));
    let index = arr1.findIndex((x) => x.id == fdata.id);
    arr1.splice(index, 1, fdata);
  }
  localStorage.setItem("fdata", JSON.stringify(arr1));
  resetData();
  showdata();
  // return false;
}

// dynamic email add button
function emailBtn1(i) {
  var newDiv = `<div class="group">
              <input type="text" class="email" id=mail${i} placeholder="Email Address">
              <button type="button" class="addEmail" onclick="addEmail()">+</button>
              <button type="button" class="removeEmail" onclick="removeEmail()">-</button>
              <span id="emailErr${i}"></span><br /><br />
              </div>`;
  $("#emailSet").append(newDiv);
  return false;
}

//   phone validation
function phoneVal() {
  var regPhone = /^\d{10}$/;
  for (let i of $(".phone")) {
    if (!i.value) {
      $("#phoneErr0")
        .text("*Please don't submit blank field*")
        .css("color", "orangered");
      valCount++;
      valid = false;
      $(i).css("border", "1px solid red");
    } else if (i.value.charAt(0) >= 6) {
      if (!regPhone.test(i.value)) {
        $("#phoneErr0")
          .text("*Please enter valid number*")
          .css("color", "orangered");
        $(i).css("border", "1px solid red");
        valCount++;
        valid = false;
      } else {
        $("#phoneErr0").text("").css("color", "");
        $(i).css("border", "1px solid grey");
        valCount;
        valid = true;
      }
    } else {
      $("#phoneErr0")
        .text("*Please don't submit blank field*")
        .css("color", "orangered");
      $("#phone0").css("border", "1px solid red");
      valCount;
      valid = false;
    }
  }

  return valid;
}

// delete phone field
function removePhone(elm) {
  $(".group1").click(function (e) {
    $(this).remove();
    return;
  });
}

// dynamic phone add button
function phoneBtn1(i) {
  var newDiv = `<div class="group1">
              <input type="text" class="phone" id=phone${i} placeholder="(000) 000-0000">
              <button type="button" class="addPhone" onclick="addPhone()">+</button>
              <button type="button" class="removePhone" onclick="removePhone()">-</button>
              <span id="phoneErr${i}"></span><br /><br />
              </div>`;
  $("#phoneSet").append(newDiv);
  // return false;
}

// address validation
function streetAddrVal() {
  if (!$("#streetAddr").val().trim()) {
    $("#streetAddrErr")
      .text("*Please don't submit blank field*")
      .css("color", "orangered");
    $("#streetAddr").css("border", "1px solid red");
    valCount++;
  } else {
    $("#streetAddrErr").text("").css("color", "orangered");
    $("#streetAddr").css("border", "1px solid grey");
    valCount;
  }
}

// address line2 validation
function streetAddr2Val() {
  if (!$("#streetAddr2").val().trim()) {
    $("#streetAddrErr2")
      .text("*Please don't submit blank field*")
      .css("color", "orangered");
    $("#streetAddr2").css("border", "1px solid red");
    valCount++;
  } else {
    $("#streetAddrErr2").text("").css("color", "orangered");
    $("#streetAddr2").css("border", "1px solid grey");
    valCount;
  }
}

// city validation
function cityVal() {
  if (!$("#city").val().trim()) {
    $("#cityErr")
      .text("*Please don't submit blank field*")
      .css("color", "orangered");
    $("#city").css("border", "1px solid red");
    valCount++;
  } else {
    $("#cityErr").text("").css("color", "orangered");
    $("#city").css("border", "1px solid grey");
    valCount;
  }
}

// state validation
function stateVal() {
  if (!$("#state").val().trim()) {
    $("#stateErr")
      .text("*Please don't submit blank field*")
      .css("color", "orangered");
    $("#state").css("border", "1px solid red");
    valCount++;
  } else {
    $("#stateErr").text("").css("color", "orangered");
    $("#state").css("border", "1px solid grey");
    valCount;
  }
}

// pin validation
function pinVal() {
  let pin = $("#pin").val();
  let pinReg = /^\d{6}$/gi;
  if (!pin) {
    $("#pinErr")
      .text("*Please don't keep blank field*")
      .css("color", "orangered");
    $("#pin").css("border", "1px solid red");
    valCount++;
  } else if (!(pin.charAt(0) >= 1 && pin.charAt(0) <= 9)) {
    $("#pinErr").text("*Please enter valid pin*").css("color", "orangered");
    $("#pin").css("border", "1px solid red");
    valCount++;
  } else if (!pinReg.test(pin)) {
    $("#pinErr").text("*Please enter valid pin*").css("color", "orangered");
    $("#pin").css("border", "1px solid red");
    valCount++;
  } else {
    $("#pinErr").text("").css("color", "");
    $("#pin").css("border", "1px solid grey");
    valCount;
  }
}

// country validation
function countryVal() {
  if (!$("#country").val().trim()) {
    $("#countryErr")
      .text("*Please don't submit blank field*")
      .css("color", "orangered");
    $("#country").css("border", "1px solid red");
    valCount++;
  } else {
    $("#countryErr").text("").css("color", "orangered");
    $("#country").css("border", "1px solid grey");
    valCount;
  }
}

// shipping Address validation
function shippingAddrVal() {
  let checkedValue = $("input[name='shippingAddr']:checked").val();
  if (!checkedValue) {
    $("#shippingAddrErr")
      .text("*Please don't keep blank field*")
      .css("color", "orangered");
    valCount++;
  } else {
    $("#shippingAddrErr").text("").css("color", "");
    valCount;
  }
}

// gift validation
function giftVal() {
  let checkedValue = $("input[name='gift']:checked").val();
  if (!checkedValue) {
    $("#giftErr")
      .text("*Please don't keep blank field*")
      .css("color", "orangered");
    valCount++;
  } else {
    $("#giftErr").text("").css("color", "");
    valCount;
  }
}

// instruction validation
function instructionVal() {
  if (!$("#instruction").val().trim()) {
    $("#instructionErr")
      .text("*Please don't submit blank field*")
      .css("color", "orangered");
    $("#instruction").css("border", "1px solid red");
    valCount++;
  } else {
    $("#instructionErr").text("").css("color", "orangered");
    $("#instruction").css("border", "1px solid grey");
    valCount;
  }
}

// Payment validation
function paymentVal() {
  let checkedValue = $("input[name='payment']:checked").val();
  if (!checkedValue) {
    $("#paymentErr")
      .text("*Please don't keep blank field*")
      .css("color", "orangered");
    valCount++;
  } else {
    $("#paymentErr").text("").css("color", "");
    valCount;
  }
}

// product selection validation
function productVal() {
  let count = 0;
  let checkedValue = $(".product1");
  for (let i = 0; i < checkedValue.length; i++) {
    if (checkedValue[i].checked) {
      count++;
    }
  }
  if (count < 2) {
    $("#productErr")
      .text("*Please select minimum two field*")
      .css("color", "orangered");
    valCount++;
  } else {
    $("#productErr").text("").css("color", "");
    valCount;
  }
}
// selected product price

// product name in array for calculate
var cart = new Array("tShirt", "Sweatshirt", "shoe");

// sum of all product
function productSelect() {
  var value = 0.0;
  for (var i = 0; i < cart.length; i++) {
    var d = document.getElementById(cart[i]);
    if (d.checked) {
      value += parseFloat(d.value);
    }
  }
  $("#total").text(value.toFixed(2));
}

// calculate product1
function item() {
  let value = 1;
  value *= $("#quantity").val();
  $("#tShirt").val(value);
}

// calculate product2
function item2() {
  let value = 5;
  value *= $("#quantity2").val();

  $("#Sweatshirt").val(value);
}

// calculate product3
function item3() {
  let value = 10;
  value *= $("#quantity3").val();
  $("#shoe").val(value);
}

// save data in local storage
function saveData(valid) {
  if (valid) {
    let id = $("#id").val();
    let product = [];
    let inputElements = $(".product1");
    for (let i = 0; inputElements[i]; i++) {
      if (inputElements[i].checked) {
        product.push(inputElements[i].value);
      }
    }
    let quantity = $("#quantity").val();
    let quantity2 = $("#quantity2").val();
    let quantity3 = $("#quantity3").val();
    let color = $("#color").val();
    let color2 = $("#color2").val();
    let size = $("#size").val();
    let size2 = $("#size2").val();
    let size3 = $("#size3").val();
    let fname = $("#fname").val();
    let lname = $("#lname").val();
    let email = [];
    let email1 = $(".email");
    for (let i = 0; i < email1.length; i++) {
      email.push(email1[i].value);
    }
    let phone = [];
    let phone1 = $(".phone");
    for (let i = 0; i < phone1.length; i++) {
      phone.push(phone1[i].value);
    }
    let addr = $("#streetAddr").val();
    let addr2 = $("#streetAddr2").val();
    let city = $("#city").val();
    let state = $("#state").val();
    let pin = $("#pin").val();
    let country = $("#country").val();
    let shipping = $("input[name='shippingAddr']:checked").val();
    let gift = $("input[name='gift']:checked").val();
    let instruction = $("#instruction").val();
    let payment = $("input[name='payment']:checked").val();
    // object of data
    let fdata = {
      id: id,
      product: product,
      quantity: quantity,
      quantity2: quantity2,
      quantity3: quantity3,
      color: color,
      color2: color2,
      size: size,
      size2: size2,
      size3: size3,
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      addr: addr,
      addr2: addr2,
      city: city,
      state: state,
      pin: pin,
      country: country,
      shipping: shipping,
      gift: gift,
      instruction: instruction,
      payment: payment,
    };

    if (!id) {
      let calid = calculateId();
      fdata.id = calid;
      saveData1(fdata);
      resetData();
    } else {
      update(fdata);
      location.reload();
    }
  }
}
// check id
function calculateId() {
  let id = 1;
  if (localStorage.getItem("fdata") != null) {
    let fdata = JSON.parse(localStorage.getItem("fdata"));
    if (fdata && fdata.length > 0)
      id = parseInt(fdata[fdata.length - 1].id) + 1;
  }
  return id;
}

// save data
function saveData1(fdata) {
  let storeobject = [];
  if (localStorage.getItem("fdata") != null) {
    storeobject = JSON.parse(localStorage.getItem("fdata"));
  }
  storeobject.push(fdata);
  localStorage.setItem("fdata", JSON.stringify(storeobject));
  showdata();
  resetData();
  return false;
}
showdata();
// show data on page
function showdata() {
  let display = [];
  if (localStorage.getItem("fdata") != null) {
    display = JSON.parse(localStorage.getItem("fdata"));
  }
  let printdata = ``;
  for (let i = 0; i < display.length; i++) {
    printdata =
      printdata +
      `<tr><td>${display[i].fname} ${display[i].lname}</td>
      <td>${display[i].email}</td><td>${display[i].phone}</td>
        <td><button class="edit"  onclick="edit(${i})" ><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete" onclick="del(${i})" ><i class="fa-solid fa-trash-can"></i></button>   </tr>`;
  }
  $("#tabBody").html(printdata);
}

// reset all form data
function resetData() {
  $("#emailSet").html(`<div id="emailSet">
  <input type="email" class="email" id="mail0" placeholder="ex. example@example.com" />
  <button type="button" class="addEmail" onclick="addEmail()">+</button>
  <button type="button" id="removeEmail" onclick="removeEmail()">-</button><br /> <br>
  <span id="emailErr0"></span>
  <p>example@example.com</p>
</div>`);

  $("#phoneSet").html(`<div id="phoneSet">
  <input type="text" class="phone" id="phone0" placeholder="(000) 000-0000" />
  <button type="button" class="addPhone" onclick="addPhone()">+</button>
  <button type="button" id="removePhone" onclick="removePhone()">-</button> <br>
  <span id="phoneErr0"></span>
</div>`);
  $("form").trigger("reset");
}

// Edit record
function edit(i) {
  resetData();
  let arr = [];
  productVal();
  item();
  item2();
  item3();
  productSelect();
  arr = JSON.parse(localStorage.getItem("fdata"));
  $("#id").val(arr[i].id);
  let q1 = arr[i].quantity;
  let q2 = arr[i].quantity2;
  let q3 = arr[i].quantity3;
  for (let j = 0; j < arr[i].product.length; j++) {
    for (let k = 0; k < $(".product1").length; k++) {
      $(".product1")[k].value == arr[i].product[j] / q1
        ? ($(".product1")[k].checked = true)
        : "";
      $(".product1")[k].value == arr[i].product[j] / q2
        ? ($(".product1")[k].checked = true)
        : "";
      $(".product1")[k].value == arr[i].product[j] / q3
        ? ($(".product1")[k].checked = true)
        : "";
    }
  }
  $("#quantity").val(arr[i].quantity);
  $("#quantity2").val(arr[i].quantity2);
  $("#quantity3").val(arr[i].quantity3);
  $("#color").val(arr[i].color);
  $("#color2").val(arr[i].color2);
  $("#size").val(arr[i].size);
  $("#size2").val(arr[i].size2);
  $("#size3").val(arr[i].size3);
  productVal();
  item();
  item2();
  item3();
  productSelect();
  $("#fname").val(arr[i].fname);
  $("#lname").val(arr[i].lname);
  let elength = arr[i].email;
  for (let j = 0; j < elength.length; j++) {
    let mailValue = elength[j];
    if (j <= elength.length - 1 && j > 0) {
      emailBtn1(j);
    }
    $("#mail" + j).val(mailValue);
  }

  let plength = arr[i].phone;
  for (let j = 0; j < plength.length; j++) {
    let phoneValue = plength[j];
    if (j <= plength.length - 1 && j > 0) {
      phoneBtn1(j);
    }
    $("#phone" + j).val(phoneValue);
  }
  $("#streetAddr").val(arr[i].addr);
  $("#streetAddr2").val(arr[i].addr2);
  $("#city").val(arr[i].city);
  $("#state").val(arr[i].state);
  $("#pin").val(arr[i].pin);
  $("#country").val(arr[i].country);
  $("input[name='shippingAddr']").val([arr[i].shipping]);
  $("input[name='gift']").val([arr[i].gift]);
  $("input[name='payment']").val([arr[i].payment]);
  $("#instruction").val(arr[i].instruction);
  // localStorage.setItem("fdata", JSON.stringify(arr));
}

// delete any record
function del(i) {
  let arr = [];
  arr = JSON.parse(localStorage.getItem("fdata"));
  arr.splice(i, 1);
  localStorage.setItem("fdata", JSON.stringify(arr));
  showdata();
}

// add email field
function addEmail() {
  debugger;
  let elength = $(".email").length;
  for (let i = elength - 1; i > elength - 2; i--) {
    valid = emailVal();
    if (valid) {
      let a = [];
      let lastElmt = 0;
      $(".email").each(function () {
        a.push($(this));
      });
      for (let j = 0; j < a.length; j++) {
        lastElmt = a[j].attr("id").charAt(4);
      }

      var getValueofClass = $(".email")[i].value;
      var validate = getValueofClass.trim();
      if (!validate) {
        $(`#emailErr${i}`)
          .text("Please don't keep empty field")
          .css("color", "orangered");
        return;
      }
      if (i == $(".email").length - 1) {
        lastElmt++;
        $(`#emailErr${mailCount}`).text("");
        var newDiv = `<div class="group">
          <input type="text" class="email" id="mail${lastElmt}" placeholder="Email Address">
          <button type="button" class="addEmail" onclick="addEmail()">+</button>
          <button type="button" class="removeEmail" onclick="removeEmail()">-</button>
          <span id="emailErr${lastElmt}"></span><br /><br />
          </div>`;
        $("#emailSet").append(newDiv);
        // mailCount++;

        return;
      }
    }
  }
}

// add phone field
function addPhone() {
  elength = $(".phone").length;
  for (let i = elength - 1; i > elength - 2; i--) {
    valid = phoneVal();
    if (valid) {
      var getValueofClass = $(".phone")[i].value;
      var validate = getValueofClass.trim();
      if (!validate) {
        $(`#phoneErr${i}`)
          .text("Please don't keep empty field")
          .css("color", "orangered");
        return;
      }
      if (i == $(".phone").length - 1) {
        $(`#phoneErr${phoneCount}`).text("");
        var newDiv = `<div class="group1">
          <input type="text" class="phone" id="phone${phoneCount}" placeholder="(000) 000-0000">
          <button type="button" class="addPhone" onclick="addPhone()">+</button>
          <button type="button" class="removePhone" onclick="removePhone()">-</button>
          <span id="phoneErr${phoneCount}"></span><br /><br />
          </div>`;
        $("#phoneSet").append(newDiv);
        phoneCount++;
        return false;
      }
    }
  }
}
