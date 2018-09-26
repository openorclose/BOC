const d = {
    id: document.getElementById.bind(document),
    q: document.querySelector.bind(document),
    qa: document.querySelectorAll.bind(document)
};
d.id("newPayeeBox").addEventListener("change", e => {
    const enabled = e.target.checked;
    d.id("newPayeeForm").style.display = enabled ? "block" : "none";
    d.id("searchInput").style.display = d.id("payeesTable").style.display = enabled ? "none" : "block";

});
d.qa("#payeesTable tr").forEach(e => e.addEventListener("click", function() {
    if (this.nodeName.toLowerCase() === "tr") {
        d.qa("#payeesTable tr").forEach(e => (e.style.backgroundColor = "#ececec"));
        this.style.backgroundColor = "#969696";
    }
}));
d.id("moreButton").addEventListener("click", () => {
    d.qa("#payeesTable > tbody > tr:not(.top)").forEach(e => e.style.display = e.style.display === "table-row" ? "none" : "table-row");
});
d.id("newType").addEventListener("change", e => showNeededNewPayeeDetails(e.target.value));
function showNeededNewPayeeDetails(type = "all") {
    d.qa("#newPayeeForm label").forEach(e => e.style = "display:none");
    d.qa(`#newPayeeForm label.all, #newPayeeForm label.${type}`).forEach(e => e.style = "display:default");
}
showNeededNewPayeeDetails("local");