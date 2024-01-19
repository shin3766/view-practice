// script.js
(function () {
    let index = {
        init: function () {
            $("#btn-save").on("click", () => {
                this.save();
            });
        },

        save: function () {
            // alert("user의 함수 실행됨");
            let data = {
                account: $("#account").val(),
                password: $("#password").val(),
                email: $("#email").val(),
                nickname: $("#nickname").val(),
                description: $("#description").val(),
            }
            console.log(data);

            $.ajax().done().fail();
        }
    }

    index.init();
})();
