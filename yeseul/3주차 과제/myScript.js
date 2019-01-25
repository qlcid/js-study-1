function myClick() {
    var id = document.getElementById('id').value;
    var pwd = document.getElementById('pwd').value;

    if (id.length == 0) {
        alert("아이디를 입력하세요!");
    } else if (pwd.length == 0) {
        alert("비밀번호를 입력하세요!")
    } else {
        alert("아이디 : " + id + "\n비밀번호 : " + pwd);
    }
}