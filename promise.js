function asyncFunc(user) {
    return new Promise(function (resolve, reject) {
        if (user === "")
            reject(Error("Enter the valid username"));
        setTimeout(function () {
            reslove(user);
        }, 1000);
    )};
}