(function () {
    console.log("ready!"); // sanity check
})();

const postElements = document.getElementsByClassName("entry");

for (var i = 0; i < postElements.length; i++) {
    postElements[i].addEventListener("click", function () {
        const postId = this.getElementsByTagName("h2")[0].getAttribute("id");
        console.log(postId);
        const node = this;
        fetch(`/delete/${postId}`)
        .then(function (resp) {
            console.log("in response");
            return resp.json();
        })
        .then(function (result) {
            if (result.status === 1) {
                console.log("in result");
                node.parentNode.removeChild(node);
                console.log(result);
            }
            location.reload();
        })
        .catch(function (err) {
            console.log(err);
        });
    });
}