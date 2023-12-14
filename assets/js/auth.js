if (!localStorage.getItem("lindo-token")) {
    const currentPath = window.location.pathname + window.location.search + window.location.hash;
    if (currentPath !== '/') {
        const encodedPath = encodeURIComponent(currentPath);
        window.location.href = `/sign-in?redirect_url=${encodedPath}`;
    } else {
        window.location.href = '/sign-in';
    }
} else {
    function getClaims(token) {
        if (!token || token === "demo") return;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        const payload = JSON.parse(jsonPayload);
        return payload;
    }

    var metaElement = document.querySelector('meta[name="lindo-page-app-setting"]');
    var attributeValue = metaElement && metaElement.getAttribute('nowebsite');
    if (!getClaims(localStorage.getItem("lindo-token")).properties.business_id && !attributeValue) {
        window.location.href = "/";
    }

}
