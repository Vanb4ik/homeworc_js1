    do
    {
        var yor_name = document.getElementById("name");
        var result_name = prompt("Введіть Ваше ім'я", "");
        yor_name.innerHTML = "Ваше ім'я -\t" + result_name;


        var yor_mail = document.getElementById("mail");
        var result_mail = prompt("Введіть Вашу алектрону пошту", "");
        yor_mail.innerHTML = "Ваша електронна адреса -\t" + result_mail;

        var yor_phone = document.getElementById("phone_number");
        var result_phone = prompt("Введіть Ваш номер телефону", "");
        yor_phone.innerHTML = "Ваш телефон -\t" + result_phone;

        alert("Ваше ім'я -\t"+result_name +"\n"+
              "Ваша електронна адреса -\t" + result_mail+"\n"+
              "Ваш телефон -\t" + result_phone );

        var isOk = confirm("Все вірно?");
    }
    while (!isOk)






