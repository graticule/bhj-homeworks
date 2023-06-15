const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContents = Array.from(document.querySelectorAll('.tab__content'));

const activateTab = (index) => {
    tabs[index].classList.add('tab_active');
    tabContents[index].classList.add('tab__content_active');
}

const deactivateTabs = () => {
    tabs.forEach(tab => tab.classList.remove('tab_active'));
    tabContents.forEach(tabContent => tabContent.classList.remove('tab__content_active'));
}

tabs.forEach((element) => {
    element.onclick = () => {
        if (!element.classList.contains('tab_active')) {
            deactivateTabs();
            const i = tabs.indexOf(element);
            activateTab(i);
        }
    }
})