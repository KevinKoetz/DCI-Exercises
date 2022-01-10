function initPage() {
  const favoriteCities =
    document.querySelector<HTMLUListElement>("#favoriteCities");
  const toggleButton =
    document.querySelector<HTMLButtonElement>("#toggleButton");
  if (!toggleButton) return;
  if (!favoriteCities) return;

  const list = document.createElement("ul");
  list.classList.add("list-group");

  const selectMessage = document.createElement("p")
  selectMessage.classList.add("alert", "alert-success")
  let currentlyActive: null | HTMLLIElement = null;
  favoriteCities.onclick = (event) => {
    if (!(event.target instanceof HTMLLIElement)) return;
    if (currentlyActive) currentlyActive.classList.remove("active");
    if(currentlyActive === event.target) {
        currentlyActive = null
        selectMessage.remove()
        return;
    }
    currentlyActive = event.target;
    currentlyActive.classList.add("active");
    selectMessage.innerText = `You selected ${event.target.innerText}`
    document.body.append(selectMessage)
  };

  const cities = ["Rome", "Athens", "Bangkok", "Amsterdam", "Cala Gonone"];
  cities.forEach((city) => {
    const li = document.createElement("li");
    li.innerText = city;
    li.classList.add("list-group-item");
    list.append(li);
  });

  let displayingList = false;
  toggleButton.onclick = (e) => {
    if (e.target instanceof HTMLButtonElement)
      e.target.innerText = displayingList
        ? "Show Destinations"
        : "Hide Destinations";
    if (displayingList) {
      list.remove();
      displayingList = false;
      currentlyActive?.classList.toggle("active")
      currentlyActive = null
      selectMessage.remove()
    } else {
      favoriteCities.append(list);
      displayingList = true;
    }
  };
}

initPage();
