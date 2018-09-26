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
d.id("moreButton").addEventListener("click", () => {
    d.qa("#payeesTable > tbody > tr:not(.top)").forEach(e => e.style.display = e.style.display === "table-row" ? "none" : "table-row");
});
d.id("newType").addEventListener("change", e => showNeededNewPayeeDetails(e.target.value));
function showNeededNewPayeeDetails(type = "all") {
    d.qa("#newPayeeForm label").forEach(e => e.style = "display:none");
    d.qa(`#newPayeeForm label.all, #newPayeeForm label.${type}`).forEach(e => e.style = "display:default");
}
showNeededNewPayeeDetails("local");