let wiz_controller = async ($sce, $scope, $timeout) => {
    $scope.login = async (user) => {
        user = angular.copy(user);
        let res = await wiz.API.async('login', user);

        if (res.code == 200) {
            location.href = "/";
            return;
        }

        await wiz.connect("modal.message")
            .data({
                title: "Warning",
                message: res.data,
                btn_close: "Cancel",
                btn_action: "Confirm",
                btn_class: "btn-warning"
            })
            .event("modal-show");
    }
}