const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

export const tabfunctionality = function () {
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach(tabContent => {
        tabContent.classList.remove("active-state");
      });
      tabs.forEach(tab => {
        tab.classList.remove("active-state");
      });
      tab.classList.add("active-state");
      target.classList.add("active-state");
    });
  });
};
